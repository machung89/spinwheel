import type { LandingPage } from "./types";

export const toolLandingPages: LandingPage[] = [
  {
    slug: "team-generator",
    kind: "team",
    name: "Team Generator",
    card: "Split a list of names into fair, random teams.",
    seoTitle: "Random Team Generator – Split Names into Fair Teams",
    metaDescription: "Free random team generator. Paste a list of names, choose the number of teams or people per team, and get balanced random groups in one click.",
    h1: "Random Team Generator",
    lead: "Paste your list, choose how many teams you need, and get balanced random groups in one click.",
    sections: [
      {
        heading: "Balanced teams, every time",
        paragraphs: [
          "The generator shuffles your list with a cryptographically secure shuffle, then deals names out one at a time like cards. That means team sizes never differ by more than one person — if you split 13 people into 3 teams, you get teams of 5, 4 and 4.",
          "You can split by number of teams (for example, four groups for stations) or by people per team (for example, pairs or groups of three). Give the teams names like Red, Blue and Green, and copy the results to paste into a chat, document or slide.",
        ],
      },
      {
        heading: "Where random teams help",
        list: [
          "Classroom group projects and lab partners",
          "Pickup basketball, soccer or dodgeball games",
          "Team-building activities and hackathons",
          "Trivia nights and party games",
          "Breakout rooms for online meetings",
        ],
      },
      {
        heading: "Why random beats picking captains",
        paragraphs: [
          "Letting captains choose teams is a time-honored tradition — and a reliable way to make someone feel left out. Random teams are faster, mix up social groups and remove any suggestion of favoritism. If you need skill balance, generate a few times and pick the split that looks most even, or run the generator separately for experienced and new players and combine the results.",
        ],
      },
    ],
    howTo: [
      { title: "Paste names", text: "One per line or separated by commas. Duplicates are removed." },
      { title: "Choose a split", text: "Set the number of teams or the number of people per team." },
      { title: "Name your teams", text: "Optional: add team names separated by commas." },
      { title: "Generate", text: "Copy the result, or shuffle again for a new mix." },
    ],
    benefits: [
      { title: "Even sizes", text: "Teams never differ by more than one person." },
      { title: "Truly random", text: "Uses a crypto-secure Fisher–Yates shuffle." },
      { title: "Quick to share", text: "Copy all teams as text in one click." },
      { title: "Private", text: "Names are processed only in your browser." },
    ],
    faqs: [
      { q: "How are the teams made fair?", a: "The list is shuffled with an unbiased Fisher–Yates shuffle powered by your browser's cryptographic random generator, then names are dealt round-robin so sizes stay balanced." },
      { q: "Can I make pairs?", a: "Yes. Choose People per team and enter 2. With an odd number of people, one group will have three." },
      { q: "Is there a limit on names?", a: "You can paste hundreds of names; the generator works instantly." },
      { q: "Can I keep certain people together?", a: "Not automatically. A simple workaround is to enter them as one line, like 'Sam & Alex', so they're treated as a single entry." },
    ],
    related: ["wheel-of-names", "random-picker", "classroom-spinner", "random-number-generator", "dice-roller", "coin-flip"],
  },
  {
    slug: "random-number-generator",
    kind: "number",
    name: "Random Number Generator",
    card: "Pick random numbers in any range, with or without repeats.",
    seoTitle: "Random Number Generator – Pick Numbers in Any Range",
    metaDescription: "Generate random numbers between any minimum and maximum. Pick one or up to 1,000 numbers, with or without repeats, sorted or unsorted. Free and secure.",
    h1: "Random Number Generator",
    lead: "Choose a range, choose how many numbers you need, and get unbiased random results instantly.",
    sections: [
      {
        heading: "Secure, unbiased numbers",
        paragraphs: [
          "Many simple random number tools use Math.random, which is fine for games but isn't designed to be unpredictable. This generator uses the Web Crypto API with rejection sampling, the same approach recommended for security-sensitive code. Every number in your range has exactly the same chance, even for huge ranges.",
          "Turn on No repeats to draw unique numbers — useful for raffles, lotteries among friends, or assigning random IDs. You can generate up to 1,000 numbers at a time and sort them if you like.",
        ],
      },
      {
        heading: "Common uses",
        list: [
          "Raffle and door-prize draws",
          "Picking a random winner by ticket number",
          "Statistics and probability lessons",
          "Choosing a random page, question or seat",
          "Board games that need a die you don't have",
        ],
      },
    ],
    howTo: [
      { title: "Set the range", text: "Enter a minimum and maximum. Negative numbers work too." },
      { title: "Choose a quantity", text: "Pick 1 or up to 1,000 numbers." },
      { title: "Set options", text: "Allow or prevent repeats, and choose whether to sort." },
      { title: "Generate", text: "Copy the result or generate again." },
    ],
    benefits: [
      { title: "Any range", text: "From 1–6 to plus or minus four quadrillion." },
      { title: "No repeats", text: "Unique draws for raffles and lotteries." },
      { title: "Crypto-grade", text: "Uses crypto.getRandomValues, not Math.random." },
      { title: "History", text: "See your previous results below the generator." },
    ],
    faqs: [
      { q: "Is this random number generator truly random?", a: "It uses your device's cryptographically secure random number generator, which is suitable for security uses. Rejection sampling removes the small bias that comes from naive modulo arithmetic." },
      { q: "How do I pick lottery-style numbers?", a: "Set the range (for example 1 to 49), set How many to 6, and turn on No repeats. Note that results are for fun and can't improve your odds in a real lottery." },
      { q: "Can I generate decimals?", a: "The generator produces whole numbers. For decimals, generate a larger range and divide — for example, 1 to 1000 divided by 100 gives two decimal places." },
    ],
    related: ["random-number-wheel", "dice-roller", "coin-flip", "random-letter-generator", "random-picker", "team-generator"],
  },
  {
    slug: "random-letter-generator",
    kind: "letter",
    name: "Random Letter Generator",
    card: "Draw random letters for word games and phonics.",
    seoTitle: "Random Letter Generator – Pick Random Letters A–Z",
    metaDescription: "Generate random letters from A to Z. Choose vowels or consonants, uppercase or lowercase, skip hard letters and draw several letters without repeats.",
    h1: "Random Letter Generator",
    lead: "Draw one random letter or a handful at once — with options for vowels, consonants and skipping the tricky ones.",
    sections: [
      {
        heading: "Built for word games",
        paragraphs: [
          "Category games, word scrambles and spelling challenges all start with a random letter. The Skip hard letters option leaves out Q, U, V, X, Y and Z, which tend to stall category games where you need a word for each topic.",
          "Need tiles for a word-building game? Draw seven letters without repeats, or mix vowels and consonants by drawing from each set separately.",
        ],
      },
      {
        heading: "For teachers and parents",
        paragraphs: [
          "Use uppercase and lowercase pairs (Aa, Bb) for letter recognition, vowels only for short-vowel practice, or a batch of letters for a quick spelling warm-up. The generator works great on a projector or tablet.",
        ],
        list: ["Letter-sound warm-ups", "Name three things that start with…", "Build the longest word using these letters", "Handwriting practice prompts"],
      },
    ],
    howTo: [
      { title: "Pick a letter set", text: "All letters, vowels only or consonants only." },
      { title: "Choose case", text: "Uppercase, lowercase or both." },
      { title: "Set the amount", text: "Draw 1 to 26 letters, with or without repeats." },
      { title: "Generate", text: "Your letters appear instantly." },
    ],
    benefits: [
      { title: "Game friendly", text: "Skip hard letters for smoother category games." },
      { title: "Flexible sets", text: "Vowels, consonants or the full alphabet." },
      { title: "No repeats", text: "Draw unique letters for tile games." },
      { title: "Fair", text: "Every letter has an equal chance." },
    ],
    faqs: [
      { q: "Can I exclude certain letters?", a: "Use Skip hard letters to remove Q, U, V, X, Y and Z, or use the Random Letter Wheel, where you can hide any letter you like." },
      { q: "Does it include accented letters?", a: "The generator uses the 26-letter English alphabet. You can add accented letters to a custom wheel." },
      { q: "Is Y a vowel here?", a: "Y is treated as a consonant in the vowels and consonants filters." },
    ],
    related: ["random-letter-wheel", "random-number-generator", "classroom-spinner", "dice-roller", "wheel-of-names", "truth-or-dare-generator"],
  },
  {
    slug: "dice-roller",
    kind: "dice",
    name: "Dice Roller",
    card: "Roll up to 12 dice — d4, d6, d8, d10, d12, d20 or d100.",
    seoTitle: "Dice Roller – Roll Virtual Dice Online (d4 to d100)",
    metaDescription: "Roll up to 12 virtual dice online: d4, d6, d8, d10, d12, d20 or d100. Add modifiers, see totals and keep a roll history. Fair, fast and free.",
    h1: "Online Dice Roller",
    lead: "Lost your dice? Roll up to twelve at once, from a four-sided d4 to a hundred-sided d100.",
    sections: [
      {
        heading: "Every die you need",
        paragraphs: [
          "Board games mostly need six-sided dice, but tabletop role-playing games use a whole set: d4, d6, d8, d10, d12, d20 and percentile d100. Choose the type and how many to roll, add a modifier for bonuses or penalties, and the roller shows each die and the total.",
          "Your recent rolls are listed under the dice so you can check what happened two turns ago — handy when the table can't agree.",
        ],
      },
      {
        heading: "Fair rolls",
        paragraphs: [
          "Physical dice can be slightly unbalanced from manufacturing; virtual dice don't have that problem. Each roll uses your browser's cryptographic random generator, giving every face an exactly equal chance.",
        ],
      },
      {
        heading: "Great for",
        list: ["Board games with missing dice", "Tabletop RPG sessions (2d6, 1d20+5, 4d6 and more)", "Math and probability lessons", "Party games and family game night", "Making quick random decisions"],
      },
    ],
    howTo: [
      { title: "Choose dice", text: "Pick how many dice (1–12) and how many sides." },
      { title: "Add a modifier", text: "Optional: add or subtract a number from the total." },
      { title: "Roll", text: "See each die and the total." },
      { title: "Check history", text: "Recent rolls are listed below." },
    ],
    benefits: [
      { title: "Seven die types", text: "d4, d6, d8, d10, d12, d20 and d100." },
      { title: "Totals and modifiers", text: "No mental math needed." },
      { title: "Perfectly fair", text: "No weighted or worn faces." },
      { title: "Always available", text: "Works on any phone — no app." },
    ],
    faqs: [
      { q: "Are online dice fair?", a: "These are. Each face is chosen with a cryptographically secure random number generator and rejection sampling, so all faces are equally likely." },
      { q: "How do I roll 1d20+5?", a: "Set Number of dice to 1, Sides to d20 and Modifier to 5, then press Roll." },
      { q: "Can I roll different dice types at once?", a: "Roll one type at a time. For mixed rolls, roll each type in turn — the history keeps track of both." },
    ],
    related: ["coin-flip", "random-number-generator", "random-number-wheel", "team-generator", "yes-or-no-picker", "truth-or-dare-generator"],
  },
  {
    slug: "coin-flip",
    kind: "coin",
    name: "Coin Flip",
    card: "Flip a fair virtual coin, once or a hundred times.",
    seoTitle: "Coin Flip – Flip a Coin Online (Heads or Tails)",
    metaDescription: "Flip a virtual coin online for a fair heads or tails. Flip once or 100 times, track streaks and see the running heads/tails ratio. Free and instant.",
    h1: "Flip a Coin Online",
    lead: "Heads or tails? Flip a perfectly fair virtual coin — once for a decision, or a hundred times to see probability in action.",
    sections: [
      {
        heading: "A perfectly fair coin",
        paragraphs: [
          "Researchers have found that real coin tosses land on the side they started on slightly more often than half the time. A virtual coin has no starting side and no thumb technique: each flip is a fresh 50/50 draw from your browser's cryptographic random generator.",
          "Flip 10 or Flip 100 to run a quick experiment. You'll see the heads/tails ratio drift around 50% and settle closer to it as the number of flips grows — the law of large numbers in action.",
        ],
      },
      {
        heading: "When to flip a coin",
        list: ["Deciding who goes first or kicks off", "Settling a two-way tie", "Quick yes/no decisions", "Probability lessons in the classroom", "Choosing sides in a game"],
      },
    ],
    howTo: [
      { title: "Call it", text: "Heads or tails? Say it out loud." },
      { title: "Flip", text: "Press Flip coin and watch it spin." },
      { title: "See the result", text: "Heads or tails appears with your running stats." },
      { title: "Experiment", text: "Try Flip 100 to see the ratio approach 50%." },
    ],
    benefits: [
      { title: "Exactly 50/50", text: "No bias from weight, wear or technique." },
      { title: "Batch flips", text: "Flip 10 or 100 coins instantly." },
      { title: "Stats", text: "Track totals, streaks and recent results." },
      { title: "Accessible", text: "Results are announced to screen readers." },
    ],
    faqs: [
      { q: "Is a virtual coin flip 50/50?", a: "Yes. Each flip has exactly a 50% chance of heads, chosen with your browser's cryptographic random number generator." },
      { q: "Why did I get five heads in a row?", a: "Streaks are normal! Five heads in a row has about a 1-in-32 chance, so it happens fairly often over many flips." },
      { q: "Can I flip more than one coin?", a: "Use Flip 10 or Flip 100 to flip many at once and see the totals." },
    ],
    related: ["yes-or-no-picker", "dice-roller", "yes-or-no-wheel", "decision-wheel", "random-number-generator", "team-generator"],
  },
  {
    slug: "yes-or-no-picker",
    kind: "yesno",
    name: "Yes or No Picker",
    card: "Get an instant yes, no or maybe answer.",
    seoTitle: "Yes or No Picker – Get an Instant Random Answer",
    metaDescription: "Ask a question and get an instant random yes or no answer. Add Maybe or use best of three. A quick, fair way to make small decisions.",
    h1: "Yes or No Picker",
    lead: "Type your question (or don't) and get an instant yes or no. No spinning, no waiting.",
    sections: [
      {
        heading: "When you just need an answer",
        paragraphs: [
          "The Yes or No Wheel is great when you want suspense. This picker is for when you want an answer right now. Press the button and you'll get Yes or No with a perfectly even chance — or turn on Maybe for a three-way answer.",
          "Best of three flips three times and goes with the majority, which some people find more convincing than a single result. Your recent questions and answers are listed below so you can look back.",
        ],
      },
      {
        heading: "Use it wisely",
        paragraphs: [
          "A random answer is perfect for small, reversible choices: dessert or no dessert, walk or drive, start now or after lunch. For anything important, use it to check your gut — if the answer disappoints you, you've learned what you really want.",
        ],
      },
    ],
    howTo: [
      { title: "Ask", text: "Type a yes-or-no question, or just think of one." },
      { title: "Options", text: "Add Maybe or choose best of three." },
      { title: "Get answer", text: "Press the button for an instant result." },
      { title: "Look back", text: "Recent answers are listed below." },
    ],
    benefits: [
      { title: "Instant", text: "No animation — the answer appears right away." },
      { title: "Fair", text: "Equal chances for every answer." },
      { title: "Best of three", text: "A majority vote for extra confidence." },
      { title: "Private", text: "Your questions never leave your device." },
    ],
    faqs: [
      { q: "Is the yes or no answer random?", a: "Yes. Each answer is chosen with a cryptographically secure random number generator with exactly equal odds." },
      { q: "How does best of three work?", a: "The picker draws yes or no up to three times and stops as soon as one answer has two votes. You'll see the individual votes below the answer." },
      { q: "Is my question stored?", a: "Only on this page while it's open. Questions aren't sent anywhere." },
    ],
    related: ["yes-or-no-wheel", "coin-flip", "decision-wheel", "dice-roller", "random-picker", "spin-the-wheel"],
  },
  {
    slug: "truth-or-dare-generator",
    kind: "truthdare",
    name: "Truth or Dare Generator",
    card: "Family-friendly truth questions and dares by age group.",
    seoTitle: "Truth or Dare Generator – Clean Questions & Dares",
    metaDescription: "Free truth or dare generator with clean, age-appropriate questions and dares for kids, teens and grown-ups. No repeats, player turns and instant cards.",
    h1: "Truth or Dare Generator",
    lead: "Draw a fresh truth or dare in one tap. Choose an age group, add players and let the game run itself.",
    sections: [
      {
        heading: "Clean prompts for every crowd",
        paragraphs: [
          "Every prompt here is written to keep the game fun and comfortable. Kids' prompts are silly and gentle, teen prompts suit sleepovers and youth groups, and the grown-up set is aimed at parties where people want to laugh rather than squirm.",
          "Prompts don't repeat until you've seen the whole list for that age group and type, so long games stay fresh.",
        ],
      },
      {
        heading: "House rules that keep it fun",
        list: [
          "Everyone can pass once per game, no questions asked.",
          "Dares must be safe and possible in the room you're in.",
          "No dares involving phones, posting online or contacting people outside the game without their OK.",
          "If someone looks uncomfortable, move on — it's supposed to be fun.",
        ],
      },
      {
        heading: "Prefer a wheel?",
        paragraphs: ["The Truth or Dare Wheel hides a prompt under each slice and reveals it after the spin. You can write your own prompts and share the wheel with friends."],
      },
    ],
    howTo: [
      { title: "Pick an age group", text: "Kids, Teens or Grown-ups." },
      { title: "Add players", text: "Optional: enter names to track whose turn it is." },
      { title: "Draw", text: "Choose Truth, Dare or Random." },
      { title: "Next player", text: "Pass the turn and draw again." },
    ],
    benefits: [
      { title: "Age appropriate", text: "Three curated sets of prompts." },
      { title: "No repeats", text: "Prompts cycle through the whole list first." },
      { title: "Turn tracking", text: "Shows whose turn it is." },
      { title: "Instant", text: "No setup or sign-up needed." },
    ],
    faqs: [
      { q: "Are the questions appropriate for kids?", a: "The Kids set is written for roughly ages 6–12 and keeps things silly and gentle. Always choose the set that suits the youngest player." },
      { q: "Can I add my own truths and dares?", a: "Use the Truth or Dare Wheel to write and save your own prompts, then share them with friends." },
      { q: "How many prompts are there?", a: "Each age group has 15 truths and 15 dares, and none repeat until you've drawn them all." },
    ],
    related: ["truth-or-dare-wheel", "yes-or-no-picker", "dice-roller", "team-generator", "spin-the-wheel", "coin-flip"],
  },
  {
    slug: "youtube-comment-picker",
    kind: "youtube",
    name: "YouTube Comment Picker",
    card: "Pick a random giveaway winner from YouTube comments.",
    seoTitle: "YouTube Comment Picker – Random Giveaway Winner",
    metaDescription: "Pick a random winner from YouTube comments. Filter by keyword, exclude your own channel, allow one entry per person and draw multiple winners fairly.",
    h1: "YouTube Comment Picker",
    lead: "Run a fair giveaway: pick random winners from a video's comments, with filters for keywords, duplicates and excluded accounts.",
    sections: [
      {
        heading: "How it works",
        paragraphs: [
          "Paste a link to a public YouTube video and the picker loads its top-level comments through the official YouTube Data API. Then set your rules — a keyword entrants had to include, accounts to exclude, and whether each person gets one entry or one per comment — and draw as many winners as you need.",
          "If automatic loading isn't available, you can paste comments instead (one per line, as 'Name: comment'). Copy them from YouTube Studio's comments view or any export.",
        ],
      },
      {
        heading: "Run a giveaway people trust",
        list: [
          "Announce the rules before the giveaway starts, including the end date and how winners are chosen.",
          "Turn on One entry per person so spamming comments doesn't help.",
          "Exclude your own channel, moderators and team members.",
          "Screen-record the draw or show it live so viewers can see it's fair.",
          "Follow YouTube's contest policies and any local laws that apply to your giveaway.",
        ],
      },
      {
        heading: "Fairness",
        paragraphs: [
          "Winners are drawn from the eligible comments using a crypto-secure partial shuffle, so each eligible entry has an equal chance and the same person can't win twice in one draw.",
        ],
      },
    ],
    howTo: [
      { title: "Paste the video link", text: "Any public video URL or Shorts link." },
      { title: "Load comments", text: "Top-level comments are fetched automatically." },
      { title: "Set filters", text: "Keyword, exclusions and one-entry-per-person." },
      { title: "Pick winners", text: "Draw one or several winners at once." },
    ],
    benefits: [
      { title: "Fair draws", text: "Equal chances for every eligible entry." },
      { title: "Anti-spam", text: "One entry per account option." },
      { title: "Flexible", text: "Keyword filters and exclusion lists." },
      { title: "No login", text: "We never ask for your YouTube account." },
    ],
    faqs: [
      { q: "Do I need to sign in with YouTube?", a: "No. The picker only reads public comments, so no sign-in is needed." },
      { q: "How many comments can it load?", a: "Up to 4,000 top-level comments per video. For larger giveaways, paste comments from an export." },
      { q: "Are replies included?", a: "Only top-level comments are loaded, which is the usual rule for comment giveaways." },
      { q: "Is WhirlPick affiliated with YouTube?", a: "No. WhirlPick is an independent tool that uses the public YouTube Data API. YouTube is a trademark of Google LLC." },
    ],
    related: ["prize-wheel", "wheel-of-names", "random-number-generator", "random-picker", "team-generator", "spin-the-wheel"],
  },
];
