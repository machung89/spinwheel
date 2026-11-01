# How SpinWheelGe picks winners

All selection code lives in `src/features/random/rng.ts` and `src/features/wheel-engine/engine.ts`
and is covered by `tests/rng.test.ts` and `tests/engine.test.ts`.

## 1. Source of randomness

`crypto.getRandomValues()` (Web Crypto API) in browsers and in the Worker. It's a CSPRNG, so outcomes can't be
predicted from earlier ones, and every spin is independent. `Math.random()` is never used to decide an
outcome. The only places it appears are the confetti and noise-texture visuals.

## 2. Unbiased integers: `randomInt(n)`

Computing `random32 % n` is biased whenever `n` doesn't divide 2³². We use **rejection sampling** instead:

```
limit = 2^32 - (2^32 mod n)      // largest multiple of n that fits
repeat x = random32 until x < limit
return x mod n
```

Every value in `[0, n)` is then exactly equally likely. For `n > 2^32` the same method runs on 53-bit values
(two 32-bit draws), so ranges up to 2⁵³ are supported by the number generator.

## 3. Weighted selection: `weightedIndex(weights)`

Each weight is converted to an integer number of tickets: `round(weight × 1000)`, with a minimum of 1 for any
positive weight. Weights are clamped to `0.001–1000`. One ticket is drawn with `randomInt(totalTickets)`, and
the entry that owns that ticket wins. So `P(entry) = tickets / totalTickets`, exactly, with no floating-point
accumulation error. In weighted mode each slice's angle is proportional to its tickets, so **the wheel always
shows the true odds**.

## 4. Winner first, animation second

`planSpin()`:

1. Builds the segments from enabled entries (angles measured clockwise from the pointer).
2. Picks the winner index (`randomInt` or `weightedIndex`).
3. Picks a landing angle in the middle 70% of the winner's slice, so a result can never sit on a border.
4. Computes the final rotation `R` with `mod(-R, 360) = landingAngle` plus several full turns.

The UI then animates from the current rotation to `R` with a custom easing curve (short acceleration, long
cubic deceleration, continuous velocity). The result was fixed before the first frame, so frame rate, tab
throttling and click timing can't change it. While the wheel spins it's drawn from a frozen snapshot of the
segments, so editing entries mid-spin can't desynchronize the drawing from the result. Tests verify over 2,000
consecutive spins that the slice under the pointer at `R` is always the chosen winner.

## 5. Other tools

- **Shuffle / teams:** Fisher–Yates with `randomInt`, then round-robin dealing (team sizes differ by at most 1).
- **Unique draws:** a sparse partial Fisher–Yates (a Map of swapped positions), which stays fast for huge ranges.
- **Coin, dice, yes/no, letters, truth-or-dare:** `randomInt` over the options.
