import type { WheelPreset } from "@/types/wheel";
import type { Faq } from "@/components/layout/content-blocks";

interface BaseTemplate {
  slug: string;
  name: string;
  category: string;
  emoji: string;
  /** One-line summary for cards. */
  description: string;
}

/** A template whose canonical home is a dedicated landing page (avoids duplicate pages). */
export interface LinkedTemplate extends BaseTemplate {
  href: string;
}

export interface FullTemplate extends BaseTemplate {
  seoTitle: string;
  metaDescription: string;
  intro: string;
  tips: string[];
  faqs: Faq[];
  preset: WheelPreset;
  related: string[];
}

export type WheelTemplate = LinkedTemplate | FullTemplate;
export const isFullTemplate = (t: WheelTemplate): t is FullTemplate => !("href" in t);

export const templates: WheelTemplate[] = [
  // ── Classroom ──────────────────────────────────────────────
  { slug: "wheel-of-names", name: "Wheel of Names", category: "classroom", emoji: "🧑‍🎓", description: "Paste a class list and pick a random name.", href: "/wheel-of-names/" },
  { slug: "classroom-spinner", name: "Classroom Spinner", category: "classroom", emoji: "🍎", description: "Classroom jobs, activities and rewards on one wheel.", href: "/classroom-spinner/" },
  { slug: "group-generator", name: "Group Generator", category: "classroom", emoji: "👥", description: "Split your class into random, balanced groups.", href: "/team-generator/" },
  {
    slug: "random-student-picker",
    name: "Random Student Picker",
    category: "classroom",
    emoji: "✋",
    description: "Cold-call fairly with elimination so every student gets a turn.",
    seoTitle: "Random Student Picker Wheel – Fair Cold Calling",
    metaDescription: "A random student picker wheel that removes each name after it's picked, so every student gets called on once. Free, private and projector-friendly.",
    intro: "This wheel is set up for cold calling: Elimination mode is on, so each student is removed after their turn and nobody gets picked twice before everyone has had a go. Replace the sample names with your roster — paste a column straight from your gradebook spreadsheet.",
    tips: [
      "Make one wheel per class period; you can keep up to eight on the page.",
      "Use Restore all at the start of each lesson to bring every name back.",
      "Give students a few seconds of think time before you spin to lower anxiety.",
    ],
    faqs: [
      { q: "Will the same student be picked twice?", a: "Not while Elimination mode is on. Each picked name is greyed out until you press Restore all." },
      { q: "Can students see who's left?", a: "Yes, the remaining names stay on the wheel, which helps students know their turn is coming." },
    ],
    preset: { title: "Student Picker", entries: ["Aaliyah", "Ben", "Carmen", "Dev", "Emily", "Felix", "Gia", "Hunter", "Isabella", "Jamal", "Kiara", "Logan", "Mei", "Nathan"], mode: "elimination", paletteId: "school" },
    related: ["classroom-questions", "brain-break-wheel", "reading-response-wheel", "wheel-of-names"],
  },
  {
    slug: "classroom-questions",
    name: "Classroom Questions",
    category: "classroom",
    emoji: "❓",
    description: "Discussion and check-for-understanding questions for any subject.",
    seoTitle: "Classroom Questions Wheel – Discussion Prompts for Any Subject",
    metaDescription: "Spin for a discussion or check-for-understanding question that works in any subject. Edit the questions or add your own for review games.",
    intro: "These open-ended questions work after almost any lesson, from fractions to the French Revolution. Spin at the end of class for an exit-ticket prompt, or pair this wheel with a student picker and press Spin all to choose a question and a student at the same time.",
    tips: [
      "Add a second wheel with student names and use Spin all.",
      "Swap in vocabulary words or review questions before a test.",
      "Use Mystery mode for a little suspense before the question is revealed.",
    ],
    faqs: [
      { q: "Can I add answers to the questions?", a: "Yes. Put the answer in each entry's Hidden activity box and it will appear in the result pop-up after the spin." },
      { q: "Does this work for remote classes?", a: "Share your screen during a video lesson and spin as usual, or send students the share link." },
    ],
    preset: {
      title: "Discussion Questions",
      entries: [
        "What was the most important idea today?",
        "What is one question you still have?",
        "How would you explain this to a younger student?",
        "Where could you use this outside school?",
        "What surprised you today?",
        "What was the hardest part and why?",
        "How does this connect to something we learned before?",
        "Give an example from real life",
        "What would happen if we changed one thing?",
        "Summarize today in one sentence",
      ],
      paletteId: "pastel",
    },
    related: ["random-student-picker", "reading-response-wheel", "classroom-activities", "classroom-spinner"],
  },
  {
    slug: "classroom-activities",
    name: "Classroom Activities",
    category: "classroom",
    emoji: "📚",
    description: "Pick a review or practice activity when you need something new.",
    seoTitle: "Classroom Activities Wheel – Random Review & Practice Ideas",
    metaDescription: "Spin for a classroom activity: review games, partner work, quick writes and more. A fast way to mix up practice and keep students engaged.",
    intro: "When practice time starts to feel stale, let students spin for the activity format. The content stays the same — the wheel just changes how they work with it. Each option is low-prep and works for most grade levels.",
    tips: [
      "Remove any activity that doesn't suit your room setup.",
      "Use Weighted mode to make quieter activities more likely before a test.",
      "Let a student spin as a reward for good participation.",
    ],
    faqs: [
      { q: "Can I add instructions for each activity?", a: "Yes. Write them in the Hidden activity box for each entry; they'll show in the pop-up after the spin." },
      { q: "Which grade levels is this for?", a: "The activities are generic enough for upper elementary through high school. Edit them freely for younger students." },
    ],
    preset: {
      title: "Practice Activity",
      entries: [
        { text: "Think-pair-share", hidden: "Think alone for 1 minute, discuss with a partner for 2, then share with the class." },
        { text: "Quick write", hidden: "Write for 3 minutes without stopping about today's topic." },
        { text: "Whiteboard race", hidden: "Teams race to answer on mini whiteboards." },
        { text: "Gallery walk", hidden: "Rotate around the room and add sticky-note comments to each poster." },
        { text: "Teach the class", hidden: "A volunteer explains one idea in their own words." },
        { text: "Four corners", hidden: "Students move to the corner that matches their answer and defend it." },
        { text: "Exit ticket", hidden: "Answer one question on a slip before leaving." },
        { text: "Partner quiz", hidden: "Partners take turns asking each other review questions." },
      ],
      paletteId: "school",
    },
    related: ["classroom-questions", "brain-break-wheel", "random-student-picker", "classroom-spinner"],
  },
  {
    slug: "brain-break-wheel",
    name: "Brain Break Wheel",
    category: "classroom",
    emoji: "🧠",
    description: "Two-minute movement and mindfulness breaks for restless classes.",
    seoTitle: "Brain Break Wheel – Quick Movement Breaks for Kids",
    metaDescription: "Spin for a quick brain break: stretches, movement games and calming exercises that take two minutes or less. Great for elementary classrooms.",
    intro: "Short movement breaks help students refocus, especially after long stretches of seat work. Every activity on this wheel takes about two minutes, needs no equipment and can be done next to a desk.",
    tips: [
      "Spin when you notice energy dropping, not just on a schedule.",
      "Add calming options like breathing exercises for after recess.",
      "Let the class vote on a new break to add each month.",
    ],
    faqs: [
      { q: "How long should a brain break be?", a: "Most teachers aim for one to three minutes — long enough to reset, short enough to get back on task." },
      { q: "Can I use this at home?", a: "Absolutely. It works well during homework time or remote learning." },
    ],
    preset: { title: "Brain Break", entries: [{ text: "10 jumping jacks", emoji: "🤸" }, { text: "Freeze dance", emoji: "💃" }, { text: "Deep breaths", emoji: "🌬️" }, { text: "Simon says", emoji: "🗣️" }, { text: "Stretch tall", emoji: "🙆" }, { text: "Desk drumming", emoji: "🥁" }, { text: "Shake it out", emoji: "🫨" }, { text: "Balance on one foot", emoji: "🦩" }], paletteId: "candy" },
    related: ["classroom-activities", "random-challenge", "classroom-spinner", "workout-wheel"],
  },
  {
    slug: "reading-response-wheel",
    name: "Reading Response Wheel",
    category: "classroom",
    emoji: "📖",
    description: "Prompts for journals, book clubs and independent reading.",
    seoTitle: "Reading Response Wheel – Prompts for Any Book",
    metaDescription: "Spin for a reading response prompt that works with any fiction book. Ideal for reading journals, book clubs and literacy centers.",
    intro: "These prompts work with any fiction book or short story, so the wheel can stay up all year. Students spin, respond in their reading journal and share with a partner. The variety keeps journals from becoming a summary every day.",
    tips: [
      "Add a nonfiction wheel with prompts about facts, diagrams and the author's purpose.",
      "Use Elimination mode so each prompt is used once per week.",
      "Pair with a student picker to choose who shares their response.",
    ],
    faqs: [
      { q: "Does this work for nonfiction?", a: "A few prompts do, but most target fiction. Duplicate the wheel and swap in nonfiction prompts." },
      { q: "What grade level is this for?", a: "Roughly grades 2–8. Simplify the wording for younger readers." },
    ],
    preset: { title: "Reading Response", entries: ["Describe the main character", "Predict what happens next", "Favorite quote and why", "Change the ending", "Draw the setting", "A problem in the story", "How did a character change?", "Connect it to your life", "Write a letter to a character", "Rate it out of 5 stars"], paletteId: "berry" },
    related: ["classroom-questions", "random-student-picker", "classroom-activities", "alphabet-picker"],
  },

  // ── Games ──────────────────────────────────────────────────
  { slug: "truth-or-dare", name: "Truth or Dare", category: "games", emoji: "🎭", description: "Hidden truths and dares revealed after each spin.", href: "/truth-or-dare-wheel/" },
  {
    slug: "random-game-picker",
    name: "Random Game Picker",
    category: "games",
    emoji: "🎮",
    description: "Classic group games for when nobody can pick.",
    seoTitle: "Random Game Picker Wheel – What Should We Play?",
    metaDescription: "Can't decide what to play? Spin the random game picker for classic group games that need little or no equipment. Easy to customize.",
    intro: "Every option on this wheel is a classic group game that needs little or no equipment, so you can start playing the moment it lands. Replace them with your family's board games or video games to make it your own.",
    tips: [
      "Paste your shelf of board games for a personal game-night wheel.",
      "Use Elimination mode across the night so each game gets played once.",
      "Add a second wheel to pick who goes first.",
    ],
    faqs: [
      { q: "Can I add video games?", a: "Of course. Type each game's name and press Enter, or paste your list with Bulk paste." },
      { q: "How do I pick who goes first?", a: "Add a second wheel with player names and press Spin all." },
    ],
    preset: { title: "What Should We Play?", entries: ["Charades", "Pictionary", "Twenty questions", "Heads up", "Two truths and a lie", "Would you rather", "Hot potato", "Musical chairs", "I spy", "Trivia"], paletteId: "arcade" },
    related: ["charades", "would-you-rather", "board-game-night", "party-games-wheel"],
  },
  {
    slug: "charades",
    name: "Charades",
    category: "games",
    emoji: "🤫",
    description: "Act-it-out prompts — the category shows, the word stays hidden.",
    seoTitle: "Charades Wheel – Random Charades Ideas",
    metaDescription: "Spin for a charades prompt. The category shows on the wheel while the word to act out stays hidden until the spin ends. Family-friendly.",
    intro: "Each slice shows a category — Animal, Movie, Job, Sport — while the actual thing to act out is hidden until the wheel stops. Only the actor should look at the pop-up! Edit the hidden words to create themed rounds for holidays or classroom vocabulary.",
    tips: [
      "Turn the screen toward the actor only when the result appears.",
      "Use Elimination mode so words aren't repeated.",
      "Make a vocabulary version for language classes.",
    ],
    faqs: [
      { q: "How do I keep the word secret?", a: "Only the category is shown on the wheel; the word is in the hidden activity revealed after the spin. Let the actor read it privately." },
      { q: "Is it suitable for kids?", a: "Yes, all starting prompts are family-friendly." },
    ],
    preset: {
      title: "Charades",
      entries: [
        { text: "Animal", hidden: "Kangaroo" },
        { text: "Job", hidden: "Firefighter" },
        { text: "Sport", hidden: "Bowling" },
        { text: "Action", hidden: "Brushing your teeth" },
        { text: "Animal", hidden: "Penguin" },
        { text: "Job", hidden: "Chef" },
        { text: "Sport", hidden: "Surfing" },
        { text: "Action", hidden: "Building a snowman" },
        { text: "Object", hidden: "Umbrella" },
        { text: "Object", hidden: "Vacuum cleaner" },
      ],
      paletteId: "spring",
    },
    related: ["random-game-picker", "party-games-wheel", "would-you-rather", "truth-or-dare"],
  },
  {
    slug: "would-you-rather",
    name: "Would You Rather",
    category: "games",
    emoji: "⚖️",
    description: "Silly dilemmas that spark great conversations.",
    seoTitle: "Would You Rather Wheel – Fun Questions for All Ages",
    metaDescription: "Spin for a would you rather question. Family-friendly dilemmas for road trips, dinner tables, classrooms and parties.",
    intro: "Would-you-rather questions are the easiest conversation starter there is: no wrong answers, plenty of debate. These are family-friendly and work at the dinner table, on a road trip or as a morning-meeting warm-up.",
    tips: [
      "Ask everyone to explain their choice in one sentence.",
      "Make it a game: players guess what others will pick.",
      "Add your own questions about your class or family.",
    ],
    faqs: [
      { q: "Are these questions kid-friendly?", a: "Yes. They're written to be silly, not gross or scary." },
      { q: "How many questions are included?", a: "Ten to start. Add as many as you like — up to 1,000." },
    ],
    preset: {
      title: "Would You Rather",
      entries: [
        "Fly or be invisible?",
        "Live in a treehouse or a houseboat?",
        "Talk to animals or speak every language?",
        "Always be too hot or too cold?",
        "Have a pet dragon or a pet unicorn?",
        "Only eat pizza or only eat tacos?",
        "Visit the past or the future?",
        "Be able to teleport or read minds?",
        "Never use a phone again or never watch TV again?",
        "Have super speed or super strength?",
      ],
      paletteId: "cool",
    },
    related: ["random-challenge", "icebreaker-questions", "truth-or-dare", "charades"],
  },
  {
    slug: "random-challenge",
    name: "Random Challenge",
    category: "games",
    emoji: "⚡",
    description: "Quick, safe challenges for parties, streams and boredom.",
    seoTitle: "Random Challenge Wheel – Fun Challenges to Try",
    metaDescription: "Spin for a random challenge: quick, safe and silly tasks for parties, sleepovers, livestreams or a boring afternoon.",
    intro: "Each challenge takes under a minute and can be done anywhere without special equipment. They're great for streamers who want viewers to pick a challenge, or for kids looking for something to do on a rainy day.",
    tips: [
      "Use a timer: if the challenge isn't done in 60 seconds, spin again.",
      "Keep score with Tally mode for competitive groups.",
      "Remove challenges that aren't safe in your space.",
    ],
    faqs: [
      { q: "Are the challenges safe?", a: "They're designed to be low-risk, indoor-friendly activities. Always use your judgment for your space and group." },
      { q: "Can I use this on a livestream?", a: "Yes. Use fullscreen or a window capture and spin when viewers hit a goal." },
    ],
    preset: { title: "Random Challenge", entries: ["Say a tongue twister 3 times fast", "Hum a song for others to guess", "Do your best robot dance", "Balance a spoon on your nose", "Name 10 fruits in 15 seconds", "Talk in an accent for a minute", "Draw a cat with your eyes closed", "Hold a plank for 30 seconds", "Make everyone laugh", "Spell your name backwards"], paletteId: "neon" },
    related: ["would-you-rather", "brain-break-wheel", "party-games-wheel", "truth-or-dare"],
  },
  {
    slug: "board-game-night",
    name: "Board Game Night",
    category: "games",
    emoji: "♟️",
    description: "Pick tonight's board game — then replace with your own shelf.",
    seoTitle: "Board Game Picker Wheel – Pick Tonight's Game",
    metaDescription: "Spin to pick a board game for game night. Start with classic game types or paste your own collection. Free board game picker wheel.",
    intro: "If your shelf is full of games but you keep playing the same two, let the wheel choose. The template uses common game types so you can match them to what you own; for the best results, paste your own collection.",
    tips: [
      "Paste your collection, one game per line.",
      "Weight shorter games higher on weeknights.",
      "Use Elimination mode for a game-night marathon.",
    ],
    faqs: [
      { q: "Can I weight games by play time?", a: "Yes. Switch to Weighted mode and give quick games a higher weight on busy nights." },
      { q: "Can I share the list with friends?", a: "Click Share to create a link with your game list." },
    ],
    preset: { title: "Board Game Night", entries: ["Word game", "Strategy game", "Party game", "Card game", "Cooperative game", "Trivia game", "Drawing game", "Deduction game"], paletteId: "retro" },
    related: ["random-game-picker", "party-games-wheel", "charades", "random-challenge"],
  },

  // ── Food ───────────────────────────────────────────────────
  { slug: "food-wheel", name: "Food Wheel", category: "food", emoji: "🍕", description: "Ten crowd-pleasing meals to spin from.", href: "/food-wheel/" },
  {
    slug: "what-to-eat",
    name: "What to Eat",
    category: "food",
    emoji: "🤤",
    description: "Cuisines from around the world for when you're stuck.",
    seoTitle: "What to Eat Wheel – Spin to Pick a Cuisine",
    metaDescription: "Not sure what to eat? Spin the what-to-eat wheel to pick a cuisine — Mexican, Thai, Italian, Indian and more. Works for cooking or ordering out.",
    intro: "Instead of specific dishes, this wheel picks a cuisine, which leaves room for everyone to choose what they order. It works just as well for cooking at home: land on Greek and it might be souvlaki night.",
    tips: [
      "Remove cuisines that aren't available nearby.",
      "Use Weighted mode to favor budget-friendly options.",
      "Spin a second wheel for 'cook or order'.",
    ],
    faqs: [
      { q: "Can I add specific restaurants?", a: "Yes, or start from the Restaurant Picker template." },
      { q: "How do I avoid the same cuisine twice a week?", a: "Use Elimination mode and press Restore all on Monday." },
    ],
    preset: { title: "What to Eat?", entries: [{ text: "Mexican", emoji: "🌮" }, { text: "Italian", emoji: "🍝" }, { text: "Thai", emoji: "🍜" }, { text: "Indian", emoji: "🍛" }, { text: "Japanese", emoji: "🍣" }, { text: "Greek", emoji: "🥙" }, { text: "Chinese", emoji: "🥟" }, { text: "American diner", emoji: "🍔" }, { text: "Korean", emoji: "🍲" }, { text: "Mediterranean", emoji: "🫒" }], paletteId: "citrus" },
    related: ["dinner-ideas", "restaurant-picker", "lunch-ideas", "food-wheel"],
  },
  {
    slug: "dinner-ideas",
    name: "Dinner Ideas",
    category: "food",
    emoji: "🍽️",
    description: "Easy weeknight dinners you can actually make tonight.",
    seoTitle: "Dinner Ideas Wheel – Easy Weeknight Meals",
    metaDescription: "Spin for an easy dinner idea. Weeknight-friendly meals like sheet-pan chicken, tacos and pasta bakes. Customize with your family's favorites.",
    intro: "Weeknight dinners need to be quick, flexible and use what's in the kitchen. Every idea here comes together in about 30–45 minutes with common ingredients. Add your family's go-to recipes and the wheel becomes your meal planner.",
    tips: [
      "Spin seven times with Elimination mode to plan the whole week.",
      "Add a recipe link in each entry's description.",
      "Hide meals when you're missing key ingredients.",
    ],
    faqs: [
      { q: "Can I plan a week of meals?", a: "Turn on Elimination mode and spin seven times. Export the history as CSV for a shopping list starting point." },
      { q: "Can I add recipe notes?", a: "Yes. Open an entry's options and add a description or hidden note." },
    ],
    preset: { title: "Dinner Ideas", entries: ["Sheet-pan chicken", "Taco night", "Pasta bake", "Stir-fry", "Homemade pizza", "Chili", "Grilled cheese & soup", "Rice bowls", "Breakfast for dinner", "Burgers"], paletteId: "sunset" },
    related: ["what-to-eat", "lunch-ideas", "dessert-wheel", "food-wheel"],
  },
  {
    slug: "restaurant-picker",
    name: "Restaurant Picker",
    category: "food",
    emoji: "🏪",
    description: "Add your local favorites and spin for date night.",
    seoTitle: "Restaurant Picker Wheel – Choose Where to Eat",
    metaDescription: "A restaurant picker wheel for date night and group dinners. Add your favorite local spots and spin to decide where to eat.",
    intro: "This template uses restaurant types as placeholders — swap them for your favorite local spots. Couples often keep one wheel for weeknight takeout and another for special occasions.",
    tips: [
      "Replace each slice with a real restaurant near you.",
      "Weight new places higher to try something different.",
      "Share the wheel so friends can add their favorites.",
    ],
    faqs: [
      { q: "Does this find restaurants near me?", a: "No — it doesn't use your location. Add the restaurants you like and the wheel picks between them." },
      { q: "Can my friends add options?", a: "Share the link; they can add options and share it back." },
    ],
    preset: { title: "Where Should We Eat?", entries: ["Pizza place", "Taco spot", "Sushi bar", "Burger joint", "Thai restaurant", "Diner", "Ramen shop", "BBQ smokehouse"], paletteId: "classic" },
    related: ["what-to-eat", "dinner-ideas", "lunch-ideas", "food-wheel"],
  },
  {
    slug: "lunch-ideas",
    name: "Lunch Ideas",
    category: "food",
    emoji: "🥪",
    description: "Packable lunches for work and school.",
    seoTitle: "Lunch Ideas Wheel – What to Pack or Order for Lunch",
    metaDescription: "Spin for a lunch idea for work or school. Packable, quick options like wraps, salads, bento boxes and leftovers.",
    intro: "Lunch is the meal most likely to become a sad routine. These ideas are packable, quick to prepare and easy to adapt for kids' lunchboxes or a work lunch bag.",
    tips: [
      "Make a kids' version with their favorite lunches.",
      "Spin on Sunday and prep ingredients ahead.",
      "Keep 'leftovers' in — it's the easiest lunch there is.",
    ],
    faqs: [
      { q: "Can I make a school lunch wheel for kids?", a: "Yes. Replace the options with lunches your kids like, and let them spin each morning." },
      { q: "Can I add ingredients for each lunch?", a: "Put them in the description so they show in the result pop-up." },
    ],
    preset: { title: "Lunch Ideas", entries: ["Wraps", "Salad", "Bento box", "Leftovers", "Soup & bread", "Pasta salad", "Quesadilla", "Grain bowl", "Sandwich", "Snack plate"], paletteId: "mint" },
    related: ["dinner-ideas", "what-to-eat", "dessert-wheel", "food-wheel"],
  },
  {
    slug: "dessert-wheel",
    name: "Dessert Wheel",
    category: "food",
    emoji: "🍰",
    description: "Something sweet — let the wheel choose the treat.",
    seoTitle: "Dessert Wheel – Spin for a Sweet Treat",
    metaDescription: "Spin the dessert wheel to pick a sweet treat: cookies, sundaes, brownies and more. Fun for families, parties and baking days.",
    intro: "Whether you're baking on a rainy weekend or deciding on a treat after dinner, the dessert wheel makes it a little more exciting. Kids love spinning this one.",
    tips: [
      "Add 'No dessert tonight' if you're feeling brave.",
      "Make a baking version with recipes you want to try.",
      "Use emojis — they look great on this wheel.",
    ],
    faqs: [
      { q: "Can I make a baking challenge wheel?", a: "Yes. List recipes you want to try and spin each weekend." },
      { q: "How do I add emojis?", a: "Open an entry's options with the arrow button and paste an emoji in the Emoji box." },
    ],
    preset: { title: "Dessert Wheel", entries: [{ text: "Cookies", emoji: "🍪" }, { text: "Ice cream sundae", emoji: "🍨" }, { text: "Brownies", emoji: "🍫" }, { text: "Fruit salad", emoji: "🍓" }, { text: "Pie", emoji: "🥧" }, { text: "Cupcakes", emoji: "🧁" }, { text: "Milkshake", emoji: "🥤" }, { text: "Donuts", emoji: "🍩" }], paletteId: "candy" },
    related: ["dinner-ideas", "lunch-ideas", "what-to-eat", "food-wheel"],
  },

  // ── Movies & entertainment ─────────────────────────────────
  { slug: "movie-wheel", name: "Movie Wheel", category: "movies", emoji: "🍿", description: "Pick a genre for movie night.", href: "/movie-wheel/" },
  {
    slug: "netflix-genre-picker",
    name: "Netflix Genre Picker",
    category: "movies",
    emoji: "📺",
    description: "Spin a browsing category to stop the endless scroll.",
    seoTitle: "Netflix Genre Picker Wheel – What to Watch Tonight",
    metaDescription: "Spin a genre to browse on Netflix tonight and end the endless scroll. Free genre picker wheel for movie night. Not affiliated with Netflix.",
    intro: "This wheel uses broad browsing categories you'll find on most streaming services. Spin, open that category in your app and pick one of the first five titles you see — no scrolling past row two. WhirlPick isn't affiliated with Netflix.",
    tips: [
      "Set a rule: pick from the first row only.",
      "Add a second wheel for 'movie or series'.",
      "Swap in your watchlist titles for a direct pick.",
    ],
    faqs: [
      { q: "Is this an official Netflix tool?", a: "No. It's an independent wheel that suggests genres to browse. Netflix is a trademark of Netflix, Inc." },
      { q: "Can I use it for other streaming services?", a: "Yes — the categories are generic and work with any service." },
    ],
    preset: { title: "What to Watch", entries: ["Comedies", "Thrillers", "Documentaries", "Anime", "Reality TV", "Sci-fi & fantasy", "Romance", "True crime", "Stand-up comedy", "International"], paletteId: "holiday" },
    related: ["anime-genre-picker", "tv-show-night", "movie-wheel", "music-genre-picker"],
  },
  {
    slug: "anime-genre-picker",
    name: "Anime Genre Picker",
    category: "movies",
    emoji: "🌸",
    description: "Discover your next anime by genre.",
    seoTitle: "Anime Genre Picker Wheel – Find Your Next Anime",
    metaDescription: "Spin the anime genre picker to choose what to watch next: shonen, slice of life, mecha, isekai and more. Customize with your watchlist.",
    intro: "Anime spans every genre imaginable, and it's easy to get stuck rewatching the same style. Spin for a genre you might not usually choose, or paste your plan-to-watch list for a direct pick.",
    tips: [
      "Paste your plan-to-watch list for a personal wheel.",
      "Use Elimination mode to work through a seasonal lineup.",
      "Weight genres you're in the mood for.",
    ],
    faqs: [
      { q: "Can I add specific anime titles?", a: "Yes — paste titles one per line with Bulk paste." },
      { q: "What do the genres mean?", a: "Shonen targets action-loving teen audiences, slice of life focuses on everyday moments, isekai follows characters transported to another world, and mecha features giant robots." },
    ],
    preset: { title: "Anime Genre", entries: ["Shonen", "Slice of life", "Mecha", "Isekai", "Sports", "Romance", "Mystery", "Fantasy adventure", "Comedy", "Studio film"], paletteId: "spring" },
    related: ["netflix-genre-picker", "movie-wheel", "tv-show-night", "music-genre-picker"],
  },
  {
    slug: "music-genre-picker",
    name: "Music Picker",
    category: "movies",
    emoji: "🎧",
    description: "Spin a genre for your next playlist or road trip.",
    seoTitle: "Music Genre Picker Wheel – Spin for a Playlist",
    metaDescription: "Spin the music genre picker to choose a playlist for work, a road trip or a party. Discover genres you don't usually play.",
    intro: "Break out of your algorithm's comfort zone. Spin for a genre, then search for a playlist in your music app. It's also a fun way to choose road-trip DJ themes or music for a classroom work session.",
    tips: [
      "Add decades for a second wheel and use Spin all.",
      "Put each friend's favorite genre on for a shared road trip.",
      "Use it as a 'name that genre' music class game.",
    ],
    faqs: [
      { q: "Does the wheel play music?", a: "No — it picks a genre. Open your music app to play a matching playlist." },
      { q: "Can I add artists instead?", a: "Yes. Replace genres with artists or albums." },
    ],
    preset: { title: "Music Genre", entries: ["Pop", "Hip-hop", "Country", "Rock", "Jazz", "Classical", "R&B", "Indie", "Electronic", "Latin"], paletteId: "neon" },
    related: ["karaoke-wheel", "netflix-genre-picker", "anime-genre-picker", "movie-wheel"],
  },
  {
    slug: "tv-show-night",
    name: "TV Show Night",
    category: "movies",
    emoji: "🛋️",
    description: "Decide which series to watch together.",
    seoTitle: "TV Show Picker Wheel – Pick a Series to Watch",
    metaDescription: "Can't agree on a show? Spin the TV show picker. Add the series you're watching together and let the wheel choose tonight's episode.",
    intro: "Households juggling several shows know the struggle: which one tonight? Put your in-progress series on the wheel. It's especially handy for couples and roommates who each have a favorite.",
    tips: [
      "Weight the show you're furthest behind on.",
      "Add 'Something new' as a wildcard slice.",
      "Share the wheel with roommates.",
    ],
    faqs: [
      { q: "Can I track how often we watch each show?", a: "Switch to Tally mode to count how many times each show is picked." },
      { q: "Will my list be saved?", a: "Yes, automatically, in this browser." },
    ],
    preset: { title: "Tonight's Show", entries: ["Our drama", "Our comedy", "Cooking show", "Nature documentary", "Reality competition", "Something new"], paletteId: "royal" },
    related: ["netflix-genre-picker", "movie-wheel", "anime-genre-picker", "music-genre-picker"],
  },

  // ── Sports ─────────────────────────────────────────────────
  {
    slug: "random-sport-picker",
    name: "Random Sport Picker",
    category: "sports",
    emoji: "⚽",
    description: "Choose a sport for PE class, recess or a weekend game.",
    seoTitle: "Random Sport Picker Wheel – PE and Recess Games",
    metaDescription: "Spin to pick a sport or active game for PE class, recess, summer camp or a weekend get-together. Customize for your equipment.",
    intro: "PE teachers, camp counselors and parents can let kids spin for the day's activity. Remove anything you don't have equipment for, and add your own favorites like capture the flag or four square.",
    tips: [
      "Hide sports that need equipment you don't have.",
      "Use the Team Generator after spinning to make teams.",
      "Add indoor options for rainy days.",
    ],
    faqs: [
      { q: "How do I split kids into teams after?", a: "Use the free Random Team Generator to create balanced teams from your roster." },
      { q: "Can I add playground games?", a: "Yes — tag, four square and capture the flag work great." },
    ],
    preset: { title: "Sport Picker", entries: [{ text: "Soccer", emoji: "⚽" }, { text: "Basketball", emoji: "🏀" }, { text: "Kickball", emoji: "🥎" }, { text: "Volleyball", emoji: "🏐" }, { text: "Flag football", emoji: "🏈" }, { text: "Dodgeball", emoji: "🔴" }, { text: "Ultimate frisbee", emoji: "🥏" }, { text: "Relay races", emoji: "🏃" }], paletteId: "sport" },
    related: ["workout-wheel", "draft-order-picker", "brain-break-wheel", "random-challenge"],
  },
  {
    slug: "workout-wheel",
    name: "Workout Wheel",
    category: "sports",
    emoji: "💪",
    description: "Random bodyweight exercises for a quick circuit.",
    seoTitle: "Workout Wheel – Random Exercise Generator",
    metaDescription: "Spin the workout wheel for a random bodyweight exercise. Build a quick circuit at home with no equipment. Add reps in the hidden notes.",
    intro: "Spin for an exercise, do it for 40 seconds, rest for 20 and spin again. Ten rounds makes a solid no-equipment workout. Each slice includes a suggested rep count in the result pop-up — adjust them to your fitness level.",
    tips: [
      "Use Weighted mode to favor exercises you need to work on.",
      "Turn on 'Read result aloud' so you don't need to look at the screen.",
      "Check with a doctor before starting a new exercise routine.",
    ],
    faqs: [
      { q: "Is this suitable for beginners?", a: "The exercises are basic bodyweight moves. Lower the reps, take longer rests and stop if anything hurts." },
      { q: "Can I hear the result instead of reading it?", a: "Yes. Turn on 'Read result aloud' in the Spin tab." },
    ],
    preset: {
      title: "Workout Wheel",
      entries: [
        { text: "Squats", hidden: "15 reps" },
        { text: "Push-ups", hidden: "10 reps (knees are fine!)" },
        { text: "Lunges", hidden: "10 per leg" },
        { text: "Plank", hidden: "30 seconds" },
        { text: "Jumping jacks", hidden: "30 reps" },
        { text: "Mountain climbers", hidden: "20 reps" },
        { text: "Glute bridges", hidden: "15 reps" },
        { text: "High knees", hidden: "30 seconds" },
      ],
      paletteId: "forest",
      settings: { speakResult: true },
    },
    related: ["random-sport-picker", "brain-break-wheel", "random-challenge", "draft-order-picker"],
  },
  {
    slug: "draft-order-picker",
    name: "Draft Order Picker",
    category: "sports",
    emoji: "📋",
    description: "Fair draft order for fantasy leagues and pickup games.",
    seoTitle: "Draft Order Picker – Random Fantasy Draft Order Wheel",
    metaDescription: "Randomize your fantasy football, basketball or hockey draft order with a fair, visible spin. Elimination mode builds the full order pick by pick.",
    intro: "Elimination mode is on: each spin picks the next team in the draft order and removes it from the wheel. Do it live on a video call so the whole league can watch, then export the history as proof of the order.",
    tips: [
      "Screen-share the spin on your league call.",
      "Export history as CSV to post in your league chat.",
      "The first team picked gets pick #1.",
    ],
    faqs: [
      { q: "How do I get the full draft order?", a: "Keep spinning until the wheel is empty. The History tab lists the order; number 1 is the first spin." },
      { q: "Can I prove the draft order was random?", a: "Spin live on a shared screen and export the timestamped history for your league." },
    ],
    preset: { title: "Draft Order", entries: ["Team 1", "Team 2", "Team 3", "Team 4", "Team 5", "Team 6", "Team 7", "Team 8", "Team 9", "Team 10"], mode: "elimination", paletteId: "sport" },
    related: ["random-sport-picker", "giveaway-winner-picker", "standup-order-picker", "workout-wheel"],
  },

  // ── Work ───────────────────────────────────────────────────
  {
    slug: "meeting-icebreakers",
    name: "Meeting Icebreakers",
    category: "work",
    emoji: "☕",
    description: "Light, work-appropriate warm-up questions.",
    seoTitle: "Meeting Icebreaker Wheel – Questions for Teams",
    metaDescription: "Spin for a work-appropriate icebreaker question to start meetings, onboarding sessions and team offsites. Quick, inclusive and fun.",
    intro: "Good icebreakers are quick, inclusive and don't put anyone on the spot. These questions take under a minute each to answer and work for in-person or remote teams. Spin once at the start of a meeting and go around the room.",
    tips: [
      "Keep answers to 30 seconds each for large groups.",
      "Let a different person spin each week.",
      "Add questions related to your team's work.",
    ],
    faqs: [
      { q: "Are these appropriate for work?", a: "Yes. They avoid personal topics like politics, religion and relationships." },
      { q: "How long does an icebreaker take?", a: "With about 8 people answering in 30 seconds each, roughly five minutes." },
    ],
    preset: { title: "Icebreaker", entries: ["Best thing you ate this week?", "A skill you'd love to learn?", "Your ideal day off?", "Favorite app you use daily?", "Best advice you've received?", "A book or show you'd recommend?", "Dream travel destination?", "Your go-to productivity trick?", "First job you ever had?", "Something that made you smile recently?"], paletteId: "coffee" },
    related: ["standup-order-picker", "icebreaker-questions", "task-picker", "office-chore-wheel"],
  },
  {
    slug: "standup-order-picker",
    name: "Standup Order Picker",
    category: "work",
    emoji: "🗣️",
    description: "Randomize who speaks first in daily standups.",
    seoTitle: "Standup Order Picker – Randomize Meeting Speakers",
    metaDescription: "Randomize the speaking order for daily standups and team meetings. Elimination mode builds the full order so everyone speaks once.",
    intro: "The same person always goes first, and the same person always ends up rushing at the end. Randomizing standup order keeps things fresh and fair. Elimination mode is on, so each teammate is removed after speaking.",
    tips: [
      "Replace the sample names with your team.",
      "Press Restore all before each standup.",
      "Turn sound off for quiet office spaces.",
    ],
    faqs: [
      { q: "Can I use this in Zoom, Teams or Meet?", a: "Yes. Share your browser tab and spin. Everyone sees the same result." },
      { q: "Does it remember my team between meetings?", a: "Yes. Your list is saved in your browser automatically." },
    ],
    preset: { title: "Standup Order", entries: ["Alex", "Jordan", "Priya", "Chris", "Morgan", "Sam", "Taylor"], mode: "elimination", paletteId: "cool", settings: { sound: { enabled: false, volume: 0.6, tick: "click", win: "chime", spin: false } } },
    related: ["meeting-icebreakers", "task-picker", "office-chore-wheel", "random-student-picker"],
  },
  {
    slug: "office-chore-wheel",
    name: "Office Chore Wheel",
    category: "work",
    emoji: "🧽",
    description: "Share kitchen duty and office chores fairly.",
    seoTitle: "Office Chore Wheel – Fairly Assign Shared Tasks",
    metaDescription: "Assign office chores fairly with a spin: kitchen cleanup, recycling, plant watering and more. Combine with a names wheel for weekly rotations.",
    intro: "Nobody volunteers to clean the office fridge. Put the chores on one wheel and team members on another, then press Spin all each Monday. It's quick, transparent and nobody can complain about favoritism.",
    tips: [
      "Add a second wheel with team members and use Spin all.",
      "Post the results in your team chat.",
      "Remove chores that are already handled by building staff.",
    ],
    faqs: [
      { q: "How do I assign chores to people?", a: "Add a second wheel with names. Spin all picks a chore and a person at the same time." },
      { q: "Can this work for roommates too?", a: "Definitely — swap in household chores." },
    ],
    preset: { title: "Office Chores", entries: ["Clean the fridge", "Load the dishwasher", "Take out recycling", "Water the plants", "Restock coffee", "Wipe the counters", "Tidy the meeting room", "Order snacks"], paletteId: "mint" },
    related: ["standup-order-picker", "task-picker", "meeting-icebreakers", "group-generator"],
  },
  {
    slug: "task-picker",
    name: "Task Picker",
    category: "work",
    emoji: "✅",
    description: "Pick which task to start when everything feels urgent.",
    seoTitle: "Task Picker Wheel – Beat Procrastination",
    metaDescription: "Overwhelmed by your to-do list? Spin the task picker to choose what to work on next. Weight important tasks and remove them as you finish.",
    intro: "When every item on your list feels equally important, choosing becomes its own task. Put your to-dos on the wheel, weight the urgent ones and spin. Finished? Remove it and spin again.",
    tips: [
      "Use Weighted mode: urgent tasks get a weight of 3.",
      "Elimination mode removes tasks as you complete them.",
      "Pair with a 25-minute timer for focused work sessions.",
    ],
    faqs: [
      { q: "Isn't prioritizing better than random?", a: "For truly urgent work, yes. The wheel is for when several tasks are about equally important and indecision is the real problem." },
      { q: "Can I export my task list?", a: "Use the CSV button to download your list." },
    ],
    preset: { title: "Next Task", entries: [{ text: "Reply to emails", weight: 2 }, { text: "Write the report", weight: 3 }, { text: "Plan next week", weight: 1 }, { text: "Review documents", weight: 2 }, { text: "Clean up files", weight: 1 }, { text: "Follow up with client", weight: 3 }], mode: "weighted", paletteId: "royal" },
    related: ["standup-order-picker", "office-chore-wheel", "meeting-icebreakers", "random-choice-wheel"],
  },

  // ── Party ──────────────────────────────────────────────────
  {
    slug: "party-games-wheel",
    name: "Party Games",
    category: "party",
    emoji: "🎈",
    description: "Pick the next game at a birthday or holiday party.",
    seoTitle: "Party Games Wheel – Pick the Next Party Game",
    metaDescription: "Spin to choose the next party game at birthdays, holiday parties and get-togethers. Classic, easy games that need little setup.",
    intro: "Hosts have enough to do. Put the wheel on a TV and let guests spin for the next game. Every option is a classic that works for mixed ages and needs little or no setup.",
    tips: [
      "Use fullscreen on a TV for everyone to see.",
      "Hide games that need more space than you have.",
      "Use Elimination mode so each game is played once.",
    ],
    faqs: [
      { q: "Are these games good for kids' birthdays?", a: "Yes. They're all classic, family-friendly games." },
      { q: "Can I add rules to each game?", a: "Add short rules to the Hidden activity box so they show when the game is picked." },
    ],
    preset: { title: "Party Games", entries: ["Musical chairs", "Freeze dance", "Scavenger hunt", "Pin the tail", "Limbo", "Hot potato", "Charades", "Telephone"], paletteId: "rainbow" },
    related: ["icebreaker-questions", "karaoke-wheel", "charades", "random-game-picker"],
  },
  {
    slug: "icebreaker-questions",
    name: "Icebreaker Questions",
    category: "party",
    emoji: "💬",
    description: "Get-to-know-you questions for parties and new groups.",
    seoTitle: "Icebreaker Questions Wheel – Get to Know You Games",
    metaDescription: "Spin for a fun get-to-know-you question. Great for parties, youth groups, clubs and first days of school.",
    intro: "Getting a new group talking is easier with a prompt. These questions are light, fun and easy to answer, so even shy guests can join in. Perfect for youth groups, clubs and the first day of school.",
    tips: [
      "Go around the circle so everyone answers the same question.",
      "Let whoever answered last spin next.",
      "For work groups, try Meeting Icebreakers instead.",
    ],
    faqs: [
      { q: "How is this different from Meeting Icebreakers?", a: "These questions are more playful and suited to social groups; the meeting version keeps things work-appropriate." },
      { q: "What age group is this for?", a: "Most questions work for ages 8 and up." },
    ],
    preset: { title: "Icebreakers", entries: ["If you were an animal, which one?", "Most-used emoji?", "Pineapple on pizza: yes or no?", "Your hidden talent?", "Favorite holiday tradition?", "Dream superpower?", "Best vacation ever?", "If you won the lottery, first purchase?", "Favorite childhood TV show?", "Cats or dogs?"], paletteId: "pastel" },
    related: ["meeting-icebreakers", "would-you-rather", "party-games-wheel", "truth-or-dare"],
  },
  {
    slug: "karaoke-wheel",
    name: "Karaoke Wheel",
    category: "party",
    emoji: "🎤",
    description: "Spin a genre or decade for your next karaoke song.",
    seoTitle: "Karaoke Wheel – Spin to Pick Your Next Song Style",
    metaDescription: "Spin the karaoke wheel to choose a genre or decade for your next song. Add a names wheel to pick the next singer.",
    intro: "Karaoke gets more fun when you can't play it safe. Spin for a genre or decade and pick a song that fits. Add a second wheel with guest names and press Spin all to choose the singer too.",
    tips: [
      "Add a 'Duet' slice to pull two people up.",
      "Use Spin all with a names wheel.",
      "Turn off the winning sound if music is already playing.",
    ],
    faqs: [
      { q: "Does this play karaoke tracks?", a: "No. It picks a genre or decade; use your karaoke app or video site for the track." },
      { q: "Can I pick the singer too?", a: "Yes. Add a second wheel with guest names and press Spin all." },
    ],
    preset: { title: "Karaoke Wheel", entries: ["80s hit", "90s pop", "Country classic", "Boy band", "Disney song", "Rock anthem", "2000s throwback", "Duet!", "Power ballad", "Current chart hit"], paletteId: "neon", design: { glow: true } },
    related: ["party-games-wheel", "music-genre-picker", "icebreaker-questions", "random-challenge"],
  },

  // ── Decisions ──────────────────────────────────────────────
  { slug: "yes-or-no", name: "Yes or No Wheel", category: "decisions", emoji: "👍", description: "A 50/50 answer to any yes-or-no question.", href: "/yes-or-no-wheel/" },
  { slug: "decision-wheel", name: "Decision Wheel", category: "decisions", emoji: "🧭", description: "Break a tie between any set of choices.", href: "/decision-wheel/" },
  {
    slug: "random-choice-wheel",
    name: "Random Choice Wheel",
    category: "decisions",
    emoji: "🎯",
    description: "A blank-slate wheel with options A through F.",
    seoTitle: "Random Choice Wheel – Pick Between Any Options",
    metaDescription: "A simple random choice wheel with six blank options. Rename them and spin to pick between anything — quick, fair and free.",
    intro: "Sometimes you just need a neutral starting point. This wheel has six generic options you can rename in seconds. It's also handy for multiple-choice quizzes: spin to pick the answer letter a student must defend.",
    tips: [
      "Click any option to rename it.",
      "Delete slices you don't need — two options works fine.",
      "Use Mystery mode to hide labels until the wheel stops.",
    ],
    faqs: [
      { q: "How many choices can I add?", a: "Up to 1,000 per wheel." },
      { q: "Is each option equally likely?", a: "Yes, unless you switch to Weighted mode." },
    ],
    preset: { title: "Random Choice", entries: ["Option A", "Option B", "Option C", "Option D", "Option E", "Option F"], paletteId: "whirl" },
    related: ["what-should-i-do-today", "weekend-plans", "decision-wheel", "yes-or-no"],
  },
  {
    slug: "what-should-i-do-today",
    name: "What Should I Do Today?",
    category: "decisions",
    emoji: "☀️",
    description: "Activity ideas for a free day or a bored afternoon.",
    seoTitle: "What Should I Do Today? – Activity Idea Wheel",
    metaDescription: "Bored? Spin the what-should-I-do-today wheel for activity ideas: go for a walk, learn something new, call a friend, try a recipe and more.",
    intro: "A free day is great — until you spend half of it deciding what to do. This wheel mixes active, creative, social and restful ideas, so there's something for every mood. Most cost little or nothing.",
    tips: [
      "Hide outdoor options when the weather's bad.",
      "Add things from your personal bucket list.",
      "Spin twice: one for the morning and one for the afternoon.",
    ],
    faqs: [
      { q: "Are these activities free?", a: "Most are free or very low cost." },
      { q: "Can I make a kids' version?", a: "Yes — swap in kid-friendly activities and let them spin." },
    ],
    preset: { title: "What Should I Do Today?", entries: ["Go for a walk", "Learn something new", "Call a friend", "Try a new recipe", "Read a book", "Tidy one room", "Visit a park", "Start a craft project", "Watch a documentary", "Take a nap"], paletteId: "spring" },
    related: ["weekend-plans", "random-choice-wheel", "decision-wheel", "random-challenge"],
  },
  {
    slug: "weekend-plans",
    name: "Weekend Plans",
    category: "decisions",
    emoji: "🗓️",
    description: "Plan a weekend outing with family or friends.",
    seoTitle: "Weekend Plans Wheel – Spin for a Weekend Activity",
    metaDescription: "Spin for weekend plans: hike, museum, farmers market, movie marathon and more. A fun way for families and friends to decide.",
    intro: "Weekend outings are more fun when the decision is part of the adventure. These ideas range from lazy to energetic and work in most US and Canadian towns. Add local spots to make it truly yours.",
    tips: [
      "Add your favorite local parks and attractions.",
      "Use Weighted mode to favor cheaper plans.",
      "Let a different family member spin each week.",
    ],
    faqs: [
      { q: "Can I add local places?", a: "Yes. Type their names in, or add descriptions with addresses." },
      { q: "Can I keep a rainy-day version?", a: "Add a second wheel with indoor ideas." },
    ],
    preset: { title: "Weekend Plans", entries: ["Hike a trail", "Museum visit", "Farmers market", "Movie marathon", "Bike ride", "Picnic", "Board game day", "Try a new cafe", "Beach or lake day", "Volunteer"], paletteId: "ocean" },
    related: ["what-should-i-do-today", "random-choice-wheel", "decision-wheel", "food-wheel"],
  },

  // ── Numbers & letters ──────────────────────────────────────
  { slug: "random-number-wheel", name: "Random Number Wheel", category: "numbers", emoji: "🔢", description: "Spin a number from 1 to 10.", href: "/random-number-wheel/" },
  { slug: "random-letter-wheel", name: "Random Letter Wheel", category: "numbers", emoji: "🔤", description: "Spin a letter from A to Z.", href: "/random-letter-wheel/" },
  {
    slug: "number-picker-1-100",
    name: "Number Picker 1–100",
    category: "numbers",
    emoji: "💯",
    description: "A full 1–100 wheel for raffles and math games.",
    seoTitle: "Number Picker 1–100 – Spin a Random Number",
    metaDescription: "Spin a number between 1 and 100. Use elimination mode for raffles and bingo-style draws. Free number picker wheel.",
    intro: "One hundred evenly sized slices, ready for raffles, hundreds-chart games and bingo-style draws. Labels shrink to fit, and the result pop-up shows the winning number in large type. Turn on Elimination mode to draw each number only once.",
    tips: [
      "Turn on Elimination mode for raffle draws.",
      "Hundreds-chart game: students color the number spun.",
      "For huge ranges use the Random Number Generator.",
    ],
    faqs: [
      { q: "Can I pick numbers without repeats?", a: "Yes. Turn on Elimination mode in the Spin tab." },
      { q: "Can I change the range?", a: "Delete or add numbers, or paste a new range with Bulk paste and Replace existing entries." },
    ],
    preset: { title: "Numbers 1–100", entries: Array.from({ length: 100 }, (_, i) => String(i + 1)), paletteId: "arcade" },
    related: ["random-number-wheel", "raffle-wheel", "alphabet-picker", "random-letter-wheel"],
  },
  {
    slug: "alphabet-picker",
    name: "Alphabet Picker",
    category: "numbers",
    emoji: "🅰️",
    description: "Letters with picture words for early readers.",
    seoTitle: "Alphabet Picker Wheel – Letters with Words for Kids",
    metaDescription: "Spin an alphabet wheel where every letter has a picture word, from A for apple to Z for zebra. Great for phonics and early literacy.",
    intro: "Every letter comes with an emoji and a familiar word, revealed after the spin. Kids say the letter, make its sound and guess the word before you open the result. It's a simple phonics warm-up that kids ask to repeat.",
    tips: [
      "Ask for the sound before revealing the word.",
      "Use Mystery mode to hide letters until the stop.",
      "Turn on Read result aloud for independent practice.",
    ],
    faqs: [
      { q: "What age is this for?", a: "Preschool through first grade, roughly ages 3–7." },
      { q: "Can I change the words?", a: "Yes — edit each letter's hidden activity." },
    ],
    preset: {
      title: "Alphabet Picker",
      entries: [
        ["A", "🍎", "Apple"], ["B", "🐻", "Bear"], ["C", "🐱", "Cat"], ["D", "🐶", "Dog"], ["E", "🥚", "Egg"], ["F", "🐟", "Fish"], ["G", "🍇", "Grapes"],
        ["H", "🏠", "House"], ["I", "🍦", "Ice cream"], ["J", "🧃", "Juice"], ["K", "🪁", "Kite"], ["L", "🦁", "Lion"], ["M", "🌙", "Moon"], ["N", "🪺", "Nest"],
        ["O", "🐙", "Octopus"], ["P", "🐧", "Penguin"], ["Q", "👑", "Queen"], ["R", "🌈", "Rainbow"], ["S", "☀️", "Sun"], ["T", "🐢", "Turtle"], ["U", "☂️", "Umbrella"],
        ["V", "🎻", "Violin"], ["W", "🐋", "Whale"], ["X", "🩻", "X-ray"], ["Y", "🧶", "Yarn"], ["Z", "🦓", "Zebra"],
      ].map(([text, emoji, word]) => ({ text, emoji, hidden: `${text} is for ${word}` })),
      paletteId: "rainbow",
      design: { font: "rounded" },
      settings: { speakResult: true },
    },
    related: ["random-letter-wheel", "reading-response-wheel", "number-picker-1-100", "brain-break-wheel"],
  },

  // ── Prizes ─────────────────────────────────────────────────
  { slug: "prize-wheel", name: "Prize Wheel", category: "prizes", emoji: "🎁", description: "Weighted prize wheel for events and stores.", href: "/prize-wheel/" },
  {
    slug: "giveaway-winner-picker",
    name: "Giveaway Winner Picker",
    category: "prizes",
    emoji: "🎉",
    description: "Pick a winner from your entrants list on camera.",
    seoTitle: "Giveaway Winner Picker Wheel – Pick a Random Winner",
    metaDescription: "Pick a giveaway winner fairly with a visible spin. Paste entrants from Instagram, email or a form, remove duplicates and record the result.",
    intro: "Paste your entrants — usernames from social media, names from a sign-up form or email addresses — and spin on camera. The draw is transparent, the result is logged with a timestamp, and you can remove the winner to draw runners-up.",
    tips: [
      "Remove duplicate entries before spinning (sort A–Z helps spot them).",
      "Record your screen while you spin for transparency.",
      "For YouTube giveaways use the YouTube Comment Picker.",
    ],
    faqs: [
      { q: "How do I draw runners-up?", a: "Click Remove in the winner pop-up and spin again. Each draw is recorded in History." },
      { q: "Can I prove the draw was fair?", a: "Spin on a livestream or screen recording, and export the timestamped history as CSV." },
    ],
    preset: { title: "Giveaway Winner", entries: ["@sunny_days", "@mapleleaf_mike", "@coffeeandcode", "@trailrunner22", "@bookish.beth", "@pixelpainter", "@gardengirl", "@hoopsfan"], paletteId: "gold", design: { glow: true } },
    related: ["raffle-wheel", "lucky-draw", "prize-wheel", "number-picker-1-100"],
  },
  {
    slug: "raffle-wheel",
    name: "Raffle Wheel",
    category: "prizes",
    emoji: "🎟️",
    description: "Draw raffle ticket numbers one at a time.",
    seoTitle: "Raffle Wheel – Draw Raffle Ticket Numbers",
    metaDescription: "Draw raffle ticket numbers with a spinning wheel. Elimination mode ensures each ticket wins once. Perfect for school fundraisers and events.",
    intro: "Set up for raffles with tickets 1 to 50 and Elimination mode on, so each ticket can only win once. Change the numbers to match your tickets, or paste buyer names instead. It's a crowd-pleaser at school fundraisers and community events.",
    tips: [
      "Paste your ticket numbers or buyer names with Bulk paste.",
      "Use fullscreen on a projector for the crowd.",
      "Export history as CSV to record winners.",
    ],
    faqs: [
      { q: "My tickets go up to 500. Will it work?", a: "Yes. Paste numbers 1 to 500 with Bulk paste; the wheel holds up to 1,000 entries." },
      { q: "Do I need a license to run a raffle?", a: "Rules vary by state and province — many require a license for raffles where tickets are sold. Check with your local authority." },
    ],
    preset: { title: "Raffle Draw", entries: Array.from({ length: 50 }, (_, i) => `#${String(i + 1).padStart(3, "0")}`), mode: "elimination", paletteId: "gold" },
    related: ["giveaway-winner-picker", "lucky-draw", "number-picker-1-100", "prize-wheel"],
  },
  {
    slug: "lucky-draw",
    name: "Lucky Draw",
    category: "prizes",
    emoji: "🍀",
    description: "Mystery prizes revealed after the spin.",
    seoTitle: "Lucky Draw Wheel – Mystery Prize Spinner",
    metaDescription: "A lucky draw wheel with mystery prizes hidden until the wheel stops. Great for office parties, classrooms and holiday events.",
    intro: "Mystery mode hides every label while the wheel spins, and each slice's prize is revealed in the pop-up only after it stops. It builds great suspense at holiday parties, team events and classroom celebrations.",
    tips: [
      "Edit prizes in each entry's hidden activity.",
      "Use Weighted mode to make big prizes rarer.",
      "Turn on Read result aloud for big rooms.",
    ],
    faqs: [
      { q: "How do I hide the prizes?", a: "Mystery mode is on, so labels stay hidden until the spin ends. Prize details are revealed in the pop-up." },
      { q: "Can I use real prize names?", a: "Yes, edit the entries and hidden activities to match your prizes." },
    ],
    preset: {
      title: "Lucky Draw",
      entries: [
        { text: "Gift card", hidden: "A $10 coffee gift card" },
        { text: "Extra break", hidden: "15 extra minutes on your break" },
        { text: "Snack box", hidden: "A box of favorite snacks" },
        { text: "Desk plant", hidden: "A little plant for your desk" },
        { text: "Choose the music", hidden: "Pick the playlist for the day" },
        { text: "Mystery bag", hidden: "Open the mystery bag!" },
      ],
      mode: "mystery",
      paletteId: "holiday",
    },
    related: ["giveaway-winner-picker", "raffle-wheel", "prize-wheel", "party-games-wheel"],
  },
];

export const fullTemplates = templates.filter(isFullTemplate);

export function templateHref(t: WheelTemplate): string {
  return isFullTemplate(t) ? `/templates/${t.category}/${t.slug}/` : t.href;
}

export function getTemplate(category: string, slug: string): FullTemplate | undefined {
  return fullTemplates.find((t) => t.category === category && t.slug === slug);
}

export function templateBySlug(slug: string): WheelTemplate | undefined {
  return templates.find((t) => t.slug === slug);
}
