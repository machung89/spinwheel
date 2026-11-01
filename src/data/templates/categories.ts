export interface TemplateCategory {
  slug: string;
  name: string;
  emoji: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
}

export const categories: TemplateCategory[] = [
  {
    slug: "classroom",
    name: "Classroom",
    emoji: "🍎",
    seoTitle: "Classroom Wheel Templates – Spinners for Teachers",
    metaDescription: "Free classroom spinner templates: random student picker, discussion questions, brain breaks, reading prompts and more. Ready to spin, easy to edit.",
    h1: "Classroom Wheel Templates",
    intro: [
      "Ready-made spinners for the busiest people in the building. Each template opens a working wheel you can use immediately, then edit to match your class, grade level and lesson.",
      "All classroom wheels support elimination mode (so every student gets a turn), hidden questions revealed after the spin, and a clean fullscreen view for projectors and interactive whiteboards.",
    ],
  },
  {
    slug: "games",
    name: "Games",
    emoji: "🎲",
    seoTitle: "Game Wheel Templates – Charades, Challenges & More",
    metaDescription: "Spin-the-wheel templates for game night: charades prompts, would you rather, random challenges, board game picker and truth or dare.",
    h1: "Game Wheel Templates",
    intro: [
      "Turn any get-together into game night. These wheels pick the game, the challenge or the prompt so the host can play too.",
      "Combine wheels for extra fun — one for the player, one for the challenge — and press Spin all.",
    ],
  },
  {
    slug: "food",
    name: "Food",
    emoji: "🍕",
    seoTitle: "Food Wheel Templates – What to Eat, Dinner & Lunch Ideas",
    metaDescription: "Food decision wheels for every meal: what to eat, dinner ideas, lunch ideas, restaurant picker and dessert wheel. Spin and stop arguing about food.",
    h1: "Food Wheel Templates",
    intro: [
      "The question 'what should we eat?' has ended more friendships than any board game. Let a wheel settle it. Each food template comes with sensible starting options you can swap for your own favorites.",
      "Tip: hide options someone isn't in the mood for with the eye icon instead of deleting them.",
    ],
  },
  {
    slug: "movies",
    name: "Movies & Entertainment",
    emoji: "🎬",
    seoTitle: "Movie & Entertainment Wheels – Genre, Anime & Music Pickers",
    metaDescription: "Entertainment wheel templates: movie genre picker, Netflix genre wheel, anime genre picker, music genre spinner and TV show night wheel.",
    h1: "Movie & Entertainment Wheel Templates",
    intro: [
      "Stop scrolling and start watching. These wheels narrow down endless streaming catalogs to one pick, or help you discover a genre you haven't tried.",
      "Load your own watchlist into any of these templates with Bulk paste to make it personal.",
    ],
  },
  {
    slug: "sports",
    name: "Sports & Fitness",
    emoji: "🏀",
    seoTitle: "Sports & Fitness Wheel Templates – Workouts, Draft Order",
    metaDescription: "Sports and fitness spinners: random workout wheel, sport picker for PE class and a fair draft order picker for fantasy leagues.",
    h1: "Sports & Fitness Wheel Templates",
    intro: [
      "From PE class to fantasy football, sports are full of choices that should be fair. These templates handle workouts, activity picks and draft orders.",
      "For splitting players into teams, try the Random Team Generator.",
    ],
  },
  {
    slug: "work",
    name: "Work & Meetings",
    emoji: "💼",
    seoTitle: "Work Wheel Templates – Icebreakers, Standup Order & Tasks",
    metaDescription: "Workplace spinner templates: meeting icebreaker questions, standup speaking order, office chore wheel and task picker. Fair and fast.",
    h1: "Work & Meeting Wheel Templates",
    intro: [
      "A little randomness makes meetings fairer and more fun. Use these wheels to choose who speaks first, assign shared chores or warm up a team with an icebreaker.",
      "Everything runs in the browser and nothing is stored on our servers, so it's safe to use on work devices.",
    ],
  },
  {
    slug: "party",
    name: "Party",
    emoji: "🎉",
    seoTitle: "Party Wheel Templates – Party Games, Icebreakers & Karaoke",
    metaDescription: "Party spinner templates for birthdays, holidays and get-togethers: party game picker, icebreaker questions and karaoke genre wheel.",
    h1: "Party Wheel Templates",
    intro: [
      "Keep the party moving with wheels that pick the next game, question or song. Put the wheel on a TV in fullscreen and let guests take turns spinning.",
      "All party templates are family-friendly by default — edit them to suit your crowd.",
    ],
  },
  {
    slug: "decisions",
    name: "Decisions",
    emoji: "🤔",
    seoTitle: "Decision Wheel Templates – Random Choice & Plans",
    metaDescription: "Decision-making wheel templates: random choice wheel, what should I do today, weekend plans, yes or no and decision wheel.",
    h1: "Decision Wheel Templates",
    intro: [
      "When every option seems fine and none stands out, spin. These templates are starting points for everyday decisions — from today's plan to this weekend's adventure.",
      "Use Weighted mode to nudge the odds toward options you prefer.",
    ],
  },
  {
    slug: "numbers",
    name: "Numbers & Letters",
    emoji: "🔢",
    seoTitle: "Number & Letter Wheel Templates – 1–100, Alphabet",
    metaDescription: "Number and letter spinners: 1–10 and 1–100 number wheels, A–Z letter wheel and an alphabet picker with words for early learners.",
    h1: "Number & Letter Wheel Templates",
    intro: [
      "Spinners for math games, raffles, phonics and word games. Turn on Elimination mode to draw each number or letter only once.",
      "For very large ranges, the Random Number Generator picks from any range instantly.",
    ],
  },
  {
    slug: "prizes",
    name: "Prizes & Giveaways",
    emoji: "🏆",
    seoTitle: "Prize & Giveaway Wheel Templates – Raffles and Lucky Draws",
    metaDescription: "Prize wheel templates for giveaways, raffles and lucky draws. Set prize odds, remove winners and keep a record of every spin.",
    h1: "Prize & Giveaway Wheel Templates",
    intro: [
      "Run giveaways, raffles and lucky draws that people trust. Every spin is logged with a timestamp, and weighted mode lets you set realistic odds for each prize.",
      "Picking winners from YouTube comments? Use the YouTube Comment Picker.",
    ],
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}
