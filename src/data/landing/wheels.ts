import type { LandingPage } from "./types";

const truthDarePreset = [
  { text: "Truth", hidden: "What is the silliest thing you have ever done at school?", color: "#118AB2" },
  { text: "Dare", hidden: "Talk like a robot until your next turn.", color: "#EF476F" },
  { text: "Truth", hidden: "If you were invisible for a day, what would you do first?", color: "#118AB2" },
  { text: "Dare", hidden: "Do your best impression of a chicken.", color: "#EF476F" },
  { text: "Truth", hidden: "What song do you sing when no one is listening?", color: "#118AB2" },
  { text: "Dare", hidden: "Speak only in rhymes for one round.", color: "#EF476F" },
  { text: "Truth", hidden: "What is one rule you would make if you were in charge?", color: "#118AB2" },
  { text: "Dare", hidden: "Walk like a crab across the room.", color: "#EF476F" },
];

export const wheelLandingPages: LandingPage[] = [
  {
    slug: "spin-the-wheel",
    kind: "wheel",
    name: "Spin the Wheel",
    seoTitle: "Spin the Wheel – Free Online Spinner for Any List",
    metaDescription: "Spin the wheel online for free. Type your options, hit spin and get a fair random result in seconds. Custom colors, sounds, weighted odds and no sign-up.",
    h1: "Spin the Wheel Online",
    lead: "Type in your options, give the wheel a spin and let chance decide. It's free, fair and runs right in your browser.",
    preset: { title: "Weekend Plans", entries: ["Movie marathon", "Board games", "Park picnic", "Bake cookies", "Bike ride", "Karaoke night", "Try a new restaurant", "Museum visit"] },
    sections: [
      {
        heading: "A spinner that works for anything",
        paragraphs: [
          "Some choices don't deserve a long debate. Where to eat, who goes first, which chore gets done today — a quick spin settles it and keeps things fun. This wheel accepts any list you give it, from two options to a thousand, and turns it into a colorful spinner you can use on a laptop, tablet or phone.",
          "Everything you change is saved automatically in your browser, so the wheel is still there when you come back tomorrow. You never need an account, and your entries are never uploaded to our servers.",
        ],
      },
      {
        heading: "How the result is decided",
        paragraphs: [
          "When you press Spin, the winner is chosen first using your browser's cryptographic random number generator (the same Web Crypto API used for security). The wheel then animates so that the chosen slice stops exactly under the pointer. Because the result is picked before the animation starts, things like how fast your device is or when you clicked can't influence the outcome.",
          "In normal mode every entry has an equal chance. Switch to weighted mode if you want some options to come up more often — the slices resize so the wheel always shows the real odds.",
        ],
      },
      {
        heading: "Popular ways people use it",
        list: [
          "Choosing a restaurant or takeout order when nobody can decide",
          "Picking a game, activity or movie for family night",
          "Assigning chores fairly between roommates or kids",
          "Running quick giveaways and prize draws on a livestream",
          "Breaking a tie in a friendly argument",
        ],
      },
    ],
    howTo: [
      { title: "Add your options", text: "Type each option and press Enter, or paste a whole list at once." },
      { title: "Make it yours", text: "Pick a color theme, pointer style, font and sounds in the Design tab." },
      { title: "Spin", text: "Click the wheel, press the Spin button or hit the Space bar." },
      { title: "Use the result", text: "Remove the winner, spin again, or copy and share the result." },
    ],
    benefits: [
      { title: "Fair by design", text: "Results come from crypto-grade randomness, decided before the wheel moves." },
      { title: "Private", text: "Your lists stay in your browser. Nothing to sign up for." },
      { title: "Flexible", text: "Weighted odds, elimination, tally and mystery modes are built in." },
      { title: "Shareable", text: "Send a link and anyone can open a copy of your wheel." },
    ],
    faqs: [
      { q: "Is this spinner really random?", a: "Yes. Each spin uses crypto.getRandomValues with rejection sampling, so every entry has exactly the probability shown. The animation is calculated afterward to land on the chosen slice." },
      { q: "How many options can I add?", a: "Up to 1,000 entries per wheel. With very large lists the labels get small, but the spin stays accurate, and the winner is always shown in a pop-up." },
      { q: "Can I save my wheel?", a: "Your wheel saves automatically in this browser. To move it to another device, use Share to create a link or download the configuration as a JSON file." },
      { q: "Does it work on phones?", a: "Yes. The wheel resizes to fit any screen, and the entry list and settings are a tap away below the wheel." },
    ],
    related: ["wheel-of-names", "decision-wheel", "random-picker", "yes-or-no-wheel", "prize-wheel", "team-generator"],
  },
  {
    slug: "wheel-of-names",
    kind: "wheel",
    name: "Wheel of Names",
    seoTitle: "Wheel of Names – Free Random Name Picker Wheel",
    metaDescription: "Pick a random name in one spin. Paste a class list or team roster, spin the wheel of names and remove winners as you go. Free, private and no sign-up.",
    h1: "Wheel of Names – Random Name Picker",
    lead: "Paste a list of names, spin, and get a fair pick every time. Perfect for classrooms, meetings and giveaways.",
    preset: { title: "Name Picker", entries: ["Olivia", "Jackson", "Amara", "Diego", "Hannah", "Mateo", "Leah", "Kenji", "Grace", "Elijah", "Nora", "Samir"], paletteId: "candy" },
    sections: [
      {
        heading: "Why a name wheel works so well",
        paragraphs: [
          "Calling on people by name can feel personal — someone always wonders why they were picked. A spinning wheel takes that pressure off. Everyone can see the list, everyone can watch the spin, and nobody can accuse the teacher, host or team lead of playing favorites.",
          "The wheel also adds a little suspense. Students sit up, meeting attendees look up from their laptops, and viewers in a livestream chat start guessing who it will land on.",
        ],
      },
      {
        heading: "Make sure everyone gets a turn",
        paragraphs: [
          "Turn on Elimination mode in the Spin tab and each name is removed after it's picked. Keep spinning until the wheel is empty and you'll have called on every person exactly once, in a random order. When you're done, hit Restore all to put everyone back.",
          "Prefer to keep names on the wheel? Tally mode counts how many times each person has been picked, which is handy for spotting anyone who hasn't had a turn yet.",
        ],
      },
      {
        heading: "Tips for teachers and hosts",
        list: [
          "Paste names straight from a Google Sheets or Excel column — one name per row.",
          "Create a separate wheel for each class period (up to eight) so lists don't get mixed up.",
          "Attach a question to each name with Hidden activities to create instant cold-call prompts.",
          "Use fullscreen mode on a projector or shared screen for a clean, ad-free view.",
          "Turn on 'Read result aloud' so the winner is announced for the whole room.",
        ],
      },
    ],
    howTo: [
      { title: "Paste your names", text: "Use Bulk paste or Import to add a whole roster from a spreadsheet." },
      { title: "Choose a mode", text: "Normal keeps names on the wheel; Elimination removes each winner." },
      { title: "Spin", text: "Click Spin or press Space. The winner is announced with confetti." },
      { title: "Repeat", text: "Remove or keep the winner and spin again. History records every pick." },
    ],
    benefits: [
      { title: "Visibly fair", text: "Everyone sees the same list and the same spin — no favoritism." },
      { title: "Fast setup", text: "Paste 30 names in two seconds. The list is saved for next time." },
      { title: "Classroom ready", text: "Elimination, tally and hidden question features are built in." },
      { title: "Private", text: "Student names never leave your device unless you choose to share." },
    ],
    faqs: [
      { q: "How do I remove a name after it's picked?", a: "Click Remove in the winner pop-up, or switch to Elimination mode so every winner is removed automatically. Removed names stay greyed out in the list so you can restore them later." },
      { q: "Can I import names from Excel or Google Sheets?", a: "Yes. Copy the column and use Bulk paste, or import a .csv or .xlsx file. The first column becomes the names; extra columns can set weights, colors or hidden questions." },
      { q: "Is the wheel of names fair?", a: "Every name has the same chance in normal mode. The winner is chosen with your browser's cryptographic random generator before the wheel starts turning." },
      { q: "Are my students' names stored anywhere?", a: "Only in your own browser's local storage. We don't have accounts or a database, and share links are only created if you click Share." },
      { q: "How many names can I add?", a: "Up to 1,000 per wheel, and you can have up to eight wheels open at once." },
    ],
    related: ["classroom-spinner", "random-picker", "team-generator", "spin-the-wheel", "prize-wheel", "random-number-wheel"],
  },
  {
    slug: "random-picker",
    kind: "wheel",
    name: "Random Picker",
    seoTitle: "Random Picker – Pick a Random Item from Any List",
    metaDescription: "Random picker for lists of any size. Paste options, spin, and get an unbiased pick. Remove picks as you go, weight the odds or pick from multiple lists at once.",
    h1: "Random Picker",
    lead: "Got a list and need one item from it? Paste it here and let the picker choose — fairly, instantly and without bias.",
    preset: { title: "Chore Picker", entries: ["Dishes", "Laundry", "Vacuuming", "Take out trash", "Dusting", "Grocery run", "Water plants", "Clean bathroom"], paletteId: "mint" },
    sections: [
      {
        heading: "One tool, endless lists",
        paragraphs: [
          "A random picker is the simplest kind of decision helper: you provide the options and it picks one. Use it for chores, draft orders, which book to read next, which bug to fix first or which friend picks the playlist. Anything you can write as a list, you can pick from.",
          "Because the picker is built on a wheel, you also get a clear visual of every option and how likely it is. That makes it easy to explain the result to anyone watching.",
        ],
      },
      {
        heading: "Picking more than one item",
        paragraphs: [
          "To draw several items without repeats, enable Elimination mode and spin as many times as you need — each pick is removed so it can't come up again. Your results are listed in the History tab, where you can copy them or export them as a CSV file.",
          "Need picks from several different lists at once, like a person, a task and a deadline? Add more wheels (up to eight) and press Spin all. Each wheel spins independently and shows its own result.",
        ],
      },
      {
        heading: "Ideas to try",
        list: [
          "Weekly chore rotation for roommates or kids",
          "Order of presentations or speakers",
          "Which unread book, podcast or game to start next",
          "Fantasy league or tournament draft order",
          "Random weekly focus for a team retrospective",
        ],
      },
    ],
    howTo: [
      { title: "Paste the list", text: "One item per line, or import a CSV or Excel file." },
      { title: "Set the rules", text: "Choose equal odds, weighted odds or elimination." },
      { title: "Pick", text: "Spin the wheel to get your random item." },
      { title: "Export", text: "Copy results or download the full history as CSV." },
    ],
    benefits: [
      { title: "Unbiased", text: "Rejection sampling removes the tiny bias simple random code can have." },
      { title: "Multiple picks", text: "Elimination mode draws items without repeats." },
      { title: "Multiple lists", text: "Spin up to eight wheels together with Spin all." },
      { title: "Exportable", text: "Download every result with timestamps for your records." },
    ],
    faqs: [
      { q: "Can I pick several items at once?", a: "Use Elimination mode and spin once per item, or use multiple wheels with Spin all. For picking groups of people, the Team Generator splits a whole list in one click." },
      { q: "Can some items be more likely than others?", a: "Yes. In Weighted mode each entry has a weight. An entry with weight 2 is twice as likely as one with weight 1, and its slice is twice as big." },
      { q: "Is there a limit to the list size?", a: "Each wheel holds up to 1,000 entries. Picking stays fast and accurate at that size." },
      { q: "Can I use it offline?", a: "Once the page has loaded, spinning works without a connection. Your list is kept in your browser's storage." },
    ],
    related: ["spin-the-wheel", "wheel-of-names", "team-generator", "random-number-generator", "decision-wheel", "coin-flip"],
  },
  {
    slug: "decision-wheel",
    kind: "wheel",
    name: "Decision Wheel",
    seoTitle: "Decision Wheel – Spin to Make a Choice Fast",
    metaDescription: "Can't decide? Spin the decision wheel. Add your choices, weight the ones you prefer and let the wheel break the tie. Free decision maker, no sign-up.",
    h1: "Decision Wheel",
    lead: "Stuck between options? Put them on the wheel and spin. Sometimes the fastest way to know what you want is to see what the wheel picks.",
    preset: { title: "Should I…", entries: ["Go for it", "Sleep on it", "Ask a friend", "Do it today", "Wait a week", "Make a pros and cons list"], paletteId: "cool" },
    sections: [
      {
        heading: "Why spinning helps you decide",
        paragraphs: [
          "Decision fatigue is real. After a long day, even small choices — what to cook, which task to start, whether to go out — can feel heavy. Handing a low-stakes decision to a wheel frees up that mental energy for things that matter.",
          "There's a second benefit people often notice: the moment the wheel lands, you'll feel a flicker of relief or disappointment. That gut reaction tells you what you were really hoping for. Spin again if you need to; nobody's keeping score.",
        ],
      },
      {
        heading: "Tilt the odds toward what you prefer",
        paragraphs: [
          "Not every option is equal. In Weighted mode you can give a favorite option a weight of 3 and a long shot a weight of 1. The wheel's slices resize to show the true chances, so you always know how the decision is being made.",
        ],
      },
      {
        heading: "Good decisions for a wheel",
        list: ["What to cook tonight", "Which task to tackle first", "Where to go for a weekend day trip", "Which workout to do today", "Which board game to bring to game night"],
      },
    ],
    howTo: [
      { title: "List your choices", text: "Add every option you're considering." },
      { title: "Weight them (optional)", text: "Switch to Weighted mode and give favorites a higher number." },
      { title: "Spin", text: "Let the wheel decide." },
      { title: "Trust your gut", text: "Happy with the result? Go. Not happy? That tells you something too." },
    ],
    benefits: [
      { title: "Ends overthinking", text: "Turns a stalled decision into a 5-second spin." },
      { title: "Transparent odds", text: "Slice sizes always match each option's real probability." },
      { title: "Reusable", text: "Your decision wheels are saved for next time." },
      { title: "Fun for groups", text: "Settle group debates without anyone feeling overruled." },
    ],
    faqs: [
      { q: "Should I really let a wheel make decisions?", a: "For low-stakes choices, absolutely — it saves time and stress. For big life decisions, use it as a tool to surface your gut feeling rather than as the final word." },
      { q: "How do weighted decisions work?", a: "Each option's chance is its weight divided by the total of all weights. An option with weight 3 on a wheel totaling 6 has a 50% chance." },
      { q: "Can I hide the options until it stops?", a: "Yes. Mystery mode hides all labels until the wheel lands, which adds suspense for groups." },
      { q: "Is there a simple yes-or-no version?", a: "Yes — try the Yes or No Wheel or the instant Yes or No Picker." },
    ],
    related: ["yes-or-no-wheel", "yes-or-no-picker", "spin-the-wheel", "food-wheel", "coin-flip", "random-picker"],
  },
  {
    slug: "yes-or-no-wheel",
    kind: "wheel",
    name: "Yes or No Wheel",
    seoTitle: "Yes or No Wheel – Spin for an Instant Answer",
    metaDescription: "Ask a question and spin the yes or no wheel for an instant, random answer. Add Maybe, change the odds or make it best of three. Free and fun.",
    h1: "Yes or No Wheel",
    lead: "Ask your question, spin the wheel, and get a straight answer. Add a Maybe if you're feeling indecisive.",
    preset: {
      title: "Yes or No?",
      entries: [
        { text: "Yes", color: "#06D6A0" },
        { text: "No", color: "#EF476F" },
        { text: "Yes", color: "#06D6A0" },
        { text: "No", color: "#EF476F" },
        { text: "Yes", color: "#06D6A0" },
        { text: "No", color: "#EF476F" },
      ],
      design: { textColor: "#FFFFFF" },
    },
    sections: [
      {
        heading: "A coin flip with more personality",
        paragraphs: [
          "A yes or no wheel does the same job as flipping a coin, but it's easier to see, more fun to watch and simple to customize. The wheel starts with three Yes slices and three No slices, so both answers have an exactly equal 50% chance.",
          "Want a third option? Add a Maybe slice — or rename the slices to 'Do it' and 'Skip it', 'Now' and 'Later', or anything else that fits your question.",
        ],
      },
      {
        heading: "Changing the odds",
        paragraphs: [
          "If you're leaning one way, add an extra Yes slice or switch to Weighted mode and set Yes to 2. The wheel will show the new odds clearly, so it's still an honest answer — just one with your preference baked in.",
        ],
      },
      {
        heading: "Fun questions to ask",
        list: ["Should we order pizza tonight?", "Should I text them first?", "Is it a movie night?", "Should we go to the beach this weekend?", "Do I get dessert?"],
      },
    ],
    howTo: [
      { title: "Think of a question", text: "Any question with a yes or no answer works." },
      { title: "Spin", text: "Press Spin or the Space bar." },
      { title: "Read the answer", text: "The winning slice is highlighted and announced." },
      { title: "Best of three?", text: "Spin again and keep score in Tally mode." },
    ],
    benefits: [
      { title: "Exactly 50/50", text: "Equal slices mean equal chances unless you change them." },
      { title: "Customizable", text: "Add Maybe, rename the answers, change colors." },
      { title: "Tally mode", text: "Count answers over several spins for best-of games." },
      { title: "Works anywhere", text: "Phone, tablet or laptop — no app needed." },
    ],
    faqs: [
      { q: "Is the yes or no wheel 50/50?", a: "Yes. The default wheel has three Yes and three No slices of equal size, so each answer has exactly a 50% chance." },
      { q: "Can I add Maybe?", a: "Type Maybe into the entry box and press Enter. With two Yes, two No and two Maybe slices, each answer has a one-in-three chance." },
      { q: "What's the difference between this and the Yes or No Picker?", a: "The wheel is visual and customizable. The Yes or No Picker gives an instant answer with no animation and includes a best-of-three option." },
    ],
    related: ["yes-or-no-picker", "decision-wheel", "coin-flip", "spin-the-wheel", "truth-or-dare-wheel", "random-picker"],
  },
  {
    slug: "prize-wheel",
    kind: "wheel",
    name: "Prize Wheel",
    seoTitle: "Prize Wheel – Free Online Prize Spinner for Events",
    metaDescription: "Create a custom prize wheel for giveaways, trade shows, stores and classrooms. Set prize odds with weights, add images and spin fullscreen. Free.",
    h1: "Prize Wheel Spinner",
    lead: "Build a prize wheel for your booth, store, stream or classroom in minutes. Set the odds, add your logo-style images and spin.",
    preset: {
      title: "Prize Wheel",
      entries: [
        { text: "Free coffee", weight: 2, emoji: "☕" },
        { text: "10% off", weight: 3, emoji: "🏷️" },
        { text: "Sticker pack", weight: 3, emoji: "✨" },
        { text: "Try again", weight: 2, emoji: "🔁" },
        { text: "Free shipping", weight: 2, emoji: "📦" },
        { text: "Mystery gift", weight: 1, emoji: "🎁" },
        { text: "$5 gift card", weight: 1, emoji: "💳" },
        { text: "Grand prize", weight: 0.5, emoji: "🏆" },
      ],
      paletteId: "gold",
      mode: "weighted",
      design: { glow: true, pointerStyle: "pin", pointerColor: "#7F1D1D" },
    },
    sections: [
      {
        heading: "Set realistic prize odds",
        paragraphs: [
          "The most common mistake with prize wheels is giving the grand prize the same slice as a sticker. This wheel starts in Weighted mode: everyday prizes get bigger weights and premium prizes get smaller ones. Each slice resizes to match its odds, so participants can see the chances are honest.",
          "Want a guaranteed number of big prizes? Use Elimination mode or remove a prize once it's been won so it can't come up again.",
        ],
      },
      {
        heading: "Running a prize wheel at an event",
        paragraphs: [
          "Open the wheel in fullscreen on a laptop connected to a TV or monitor, and use the Space bar or a wireless presenter to spin. Fullscreen hides everything but the wheel and the result — no menus, no ads. Turn on sound for the tick and win effects; they make a booth feel lively.",
          "Before the event, check your local rules. Many US states and Canadian provinces regulate contests where people pay to enter; a free-to-play prize wheel is usually simpler, but rules vary.",
        ],
      },
      {
        heading: "Where prize wheels shine",
        list: ["Trade show and conference booths", "Store openings and customer appreciation days", "Classroom reward systems", "Livestream and social media giveaways", "Office parties and team celebrations"],
      },
    ],
    howTo: [
      { title: "List your prizes", text: "Add each prize, with an emoji or image if you like." },
      { title: "Set the odds", text: "In Weighted mode, give rarer prizes a smaller weight." },
      { title: "Go fullscreen", text: "Show the wheel on a big screen for your audience." },
      { title: "Track winners", text: "History logs every prize with a timestamp." },
    ],
    benefits: [
      { title: "Honest odds", text: "Slice size always reflects the real chance of winning." },
      { title: "Event ready", text: "Fullscreen, sounds, confetti and keyboard control." },
      { title: "Inventory control", text: "Remove prizes as they run out." },
      { title: "Record keeping", text: "Export a CSV of every spin for your records." },
    ],
    faqs: [
      { q: "How do I make the grand prize rare?", a: "Keep Weighted mode on and give the grand prize a small weight, like 0.5, while common prizes get 3 or more. The chance of each prize is shown in the winner pop-up." },
      { q: "Can I add images to the prize wheel?", a: "Yes. Open an entry's options and upload a PNG, JPG or WebP image (up to 2 MB), or paste an https image link." },
      { q: "Can I use this at a trade show without internet?", a: "Load the page once while online; spinning continues to work if the connection drops. Your wheel is saved in the browser." },
      { q: "Is it legal to run a prize wheel?", a: "Free-to-enter prize wheels are generally fine, but contest and sweepstakes rules differ by state and province. If people pay or must purchase to spin, check local regulations first." },
    ],
    related: ["spin-the-wheel", "youtube-comment-picker", "wheel-of-names", "random-number-wheel", "decision-wheel", "classroom-spinner"],
  },
  {
    slug: "classroom-spinner",
    kind: "wheel",
    name: "Classroom Spinner",
    seoTitle: "Classroom Spinner – Free Spinning Wheel for Teachers",
    metaDescription: "A free classroom spinner for picking students, assigning classroom jobs, choosing activities and running review games. Projector-friendly and private.",
    h1: "Classroom Spinner for Teachers",
    lead: "Assign classroom jobs, choose activities and run review games with a spinner your students will actually want to watch.",
    preset: { title: "Classroom Jobs", entries: ["Line leader", "Door holder", "Paper passer", "Board cleaner", "Plant waterer", "Class librarian", "Messenger", "Tech helper", "Supply manager", "Calendar helper"], paletteId: "school" },
    sections: [
      {
        heading: "More than a name picker",
        paragraphs: [
          "Teachers use spinners for a lot more than calling on students. This wheel starts with common classroom jobs, but you can swap in review topics, brain-break activities, reading response prompts, partner pairings or reward options in seconds.",
          "Open up to eight wheels at once to combine them — for example, one wheel of student names and one of discussion questions. Press Spin all and both pick at the same time.",
        ],
      },
      {
        heading: "Built for the front of the room",
        paragraphs: [
          "Fullscreen mode gives you a clean wheel with no menus or ads, ideal for a projector or interactive whiteboard. Students can press the big Spin button themselves, and the Space bar works too if you're using a wireless keyboard.",
          "Turn on 'Read result aloud' to have the result spoken, and use Hidden activities to attach a question or task to each slice that's revealed only after the spin.",
        ],
      },
      {
        heading: "Classroom ideas",
        list: [
          "Weekly classroom job assignments",
          "Choosing the next review question or topic",
          "Picking a brain break when energy is low",
          "Selecting reading response or journal prompts",
          "Rewarding good behavior with a reward wheel",
          "Randomly forming partners or groups (try the Team Generator)",
        ],
      },
    ],
    howTo: [
      { title: "Choose a starting list", text: "Use the jobs here or open a classroom template." },
      { title: "Personalize", text: "Rename slices, pick your class colors and add emojis." },
      { title: "Project it", text: "Click the fullscreen button for a distraction-free view." },
      { title: "Let students spin", text: "Click, tap or press Space — results are logged in History." },
    ],
    benefits: [
      { title: "Student privacy", text: "No accounts, and names stay on your device." },
      { title: "Engaging", text: "Sound, confetti and suspense keep attention on the lesson." },
      { title: "Flexible", text: "Jobs, questions, rewards or groups — one tool does it all." },
      { title: "Fair", text: "Elimination mode guarantees every student gets a turn." },
    ],
    faqs: [
      { q: "Is the classroom spinner safe for students?", a: "Yes. There's no sign-up, no chat and no user-generated content from other people. Your lists are stored only in your browser." },
      { q: "Can I use it on a Smart Board or Promethean board?", a: "Yes. Open the site in the board's browser, go fullscreen and tap the wheel to spin." },
      { q: "Can I save a different wheel for each class?", a: "You can keep up to eight wheels on this page, and each saves automatically. Export them as JSON to back them up or move them to another computer." },
      { q: "Can I hide the answer until the spin?", a: "Add the question or task as a Hidden activity on each entry. It's revealed in the pop-up only after the wheel stops." },
    ],
    related: ["wheel-of-names", "team-generator", "random-number-wheel", "random-letter-wheel", "truth-or-dare-wheel", "dice-roller"],
  },
  {
    slug: "random-number-wheel",
    kind: "wheel",
    name: "Random Number Wheel",
    seoTitle: "Random Number Wheel – Spin to Pick a Number",
    metaDescription: "Spin a random number wheel from 1 to 10, 1 to 100 or any range you like. Great for raffles, math games and classroom activities. Free and fair.",
    h1: "Random Number Wheel",
    lead: "Spin to pick a number. Start with 1 to 10, or paste any range you need for raffles, math games and bingo-style draws.",
    preset: { title: "Numbers 1–10", entries: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"], paletteId: "arcade" },
    sections: [
      {
        heading: "Any range, any size",
        paragraphs: [
          "The wheel starts with 1 through 10. Need a different range? Open Bulk paste and enter one number per line — a quick way is to fill a column in Google Sheets or Excel and paste it in. The wheel handles up to 1,000 numbers.",
          "For very large ranges, like 1 to 1,000,000, the Random Number Generator is a better fit: it picks from any range instantly without needing a slice for every number.",
        ],
      },
      {
        heading: "Draw numbers without repeats",
        paragraphs: [
          "For raffles and bingo-style games, switch on Elimination mode. Each number is removed once it's drawn, so it can't be called twice. Your draws are logged in order in the History tab, and you can export them as a CSV file.",
        ],
      },
      {
        heading: "Ways to use a number wheel",
        list: ["Raffle ticket draws", "Math facts practice (spin two wheels and multiply)", "Choosing a page, problem or chapter number", "Picking a random seat or table number", "Party games that need a random count"],
      },
    ],
    howTo: [
      { title: "Set your numbers", text: "Keep 1–10 or paste your own range." },
      { title: "Choose repeats", text: "Normal allows repeats; Elimination draws each number once." },
      { title: "Spin", text: "The result appears in a pop-up and in History." },
      { title: "Export", text: "Download your draw history as CSV if you need a record." },
    ],
    benefits: [
      { title: "Uniform", text: "Every number has exactly the same chance." },
      { title: "No repeats option", text: "Elimination mode for raffles and bingo." },
      { title: "Visual", text: "Great for classrooms and audiences who like to watch." },
      { title: "Multi-wheel math", text: "Spin two number wheels together for math games." },
    ],
    faqs: [
      { q: "How do I make a 1 to 100 wheel?", a: "Open the 1–100 number picker template, or use Bulk paste with the numbers 1 to 100 on separate lines." },
      { q: "Can I pick multiple numbers?", a: "Spin multiple times with Elimination mode on, or use the Random Number Generator to draw many numbers at once." },
      { q: "Are the numbers truly random?", a: "They come from your browser's cryptographic random number generator, with rejection sampling to avoid bias." },
    ],
    related: ["random-number-generator", "dice-roller", "random-letter-wheel", "prize-wheel", "classroom-spinner", "coin-flip"],
  },
  {
    slug: "random-letter-wheel",
    kind: "wheel",
    name: "Random Letter Wheel",
    seoTitle: "Random Letter Wheel – Spin to Pick a Letter A–Z",
    metaDescription: "Spin the alphabet wheel to pick a random letter from A to Z. Perfect for word games, phonics practice, category games and classroom warm-ups.",
    h1: "Random Letter Wheel (A–Z)",
    lead: "Spin the alphabet to pick a random letter for word games, phonics practice and category challenges.",
    preset: { title: "Alphabet", entries: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""), paletteId: "rainbow", design: { font: "rounded" } },
    sections: [
      {
        heading: "Perfect for word and category games",
        paragraphs: [
          "Plenty of classic party and classroom games start with a random letter: name an animal, a city and a food that begin with it; write a sentence where every word starts with it; or race to list as many words as you can in a minute.",
          "Some letters (like Q, X and Z) make these games very hard. Remove them from the wheel with the eye icon to hide them without deleting them, and bring them back any time with Restore all.",
        ],
      },
      {
        heading: "Phonics and early literacy",
        paragraphs: [
          "For young learners, spin a letter and ask for its sound, a word that starts with it, or to find an object in the room that begins with it. Add an emoji to each letter for a picture cue, or try the Alphabet Picker template, which pairs every letter with a familiar word.",
        ],
      },
      {
        heading: "Quick game ideas",
        list: ["Categories: name a food, place and animal starting with the letter", "Speed spelling: longest word that starts with the letter wins", "Alliteration challenge: make a silly sentence", "Phonics warm-up: say the sound and a matching word", "Scavenger hunt: find something in the room that starts with it"],
      },
    ],
    howTo: [
      { title: "Start with A–Z", text: "All 26 letters are already on the wheel." },
      { title: "Remove tricky letters", text: "Hide Q, X or Z with the eye icon if you want." },
      { title: "Spin", text: "Click, tap or press Space." },
      { title: "Play", text: "Use the letter for your word or category game." },
    ],
    benefits: [
      { title: "Classroom friendly", text: "Large, clear letters that read well on a projector." },
      { title: "Customizable", text: "Lowercase, vowels only or any subset of letters." },
      { title: "No repeats option", text: "Elimination mode draws each letter once." },
      { title: "Instant", text: "No setup — the alphabet is ready to go." },
    ],
    faqs: [
      { q: "Can I use lowercase letters?", a: "Yes. Edit the entries, or paste a-z in lowercase with Bulk paste and choose Replace existing entries." },
      { q: "How do I spin only vowels?", a: "Hide the consonants with the eye icon, or create a new wheel with A, E, I, O and U." },
      { q: "Is there a non-wheel version?", a: "The Random Letter Generator draws one or many letters instantly, with options for vowels, consonants and skipping hard letters." },
    ],
    related: ["random-letter-generator", "random-number-wheel", "classroom-spinner", "wheel-of-names", "truth-or-dare-wheel", "dice-roller"],
  },
  {
    slug: "truth-or-dare-wheel",
    kind: "wheel",
    name: "Truth or Dare Wheel",
    seoTitle: "Truth or Dare Wheel – Spin for a Truth or a Dare",
    metaDescription: "Spin the truth or dare wheel to reveal a hidden question or challenge. Family-friendly prompts included, or write your own for parties and sleepovers.",
    h1: "Truth or Dare Wheel",
    lead: "Spin to land on Truth or Dare — then reveal the hidden question or challenge waiting under that slice.",
    preset: { title: "Truth or Dare", entries: truthDarePreset, design: { textColor: "#FFFFFF", font: "rounded" } },
    sections: [
      {
        heading: "Hidden prompts make it exciting",
        paragraphs: [
          "Each slice on this wheel hides a specific question or dare. Players only see Truth or Dare while it spins; the actual prompt is revealed in the pop-up after it stops. That means nobody can aim for an easy one.",
          "The starter prompts are family-friendly and suitable for kids. Open any entry's options to edit its hidden prompt, or add new slices with your own ideas for teens or grown-up game nights.",
        ],
      },
      {
        heading: "Keep it fun for everyone",
        list: [
          "Agree on a 'pass' rule before you start — everyone gets one free skip.",
          "Keep dares safe, kind and doable in the room you're in.",
          "Don't dare anyone to share private information or post online.",
          "Use Elimination mode so the same prompt doesn't come up twice.",
          "For a bigger mix of prompts by age group, try the Truth or Dare Generator.",
        ],
      },
      {
        heading: "Make your own version",
        paragraphs: [
          "Swap the prompts for a theme: holiday questions for a family gathering, team-building truths for the office, or silly physical dares for a birthday party. Then use Share to send the wheel to friends — the hidden prompts come along with it.",
        ],
      },
    ],
    howTo: [
      { title: "Gather players", text: "Sit in a circle or join a video call." },
      { title: "Spin", text: "Each player spins on their turn." },
      { title: "Reveal", text: "The hidden truth or dare appears after the wheel stops." },
      { title: "Customize", text: "Edit hidden prompts to suit your group." },
    ],
    benefits: [
      { title: "No peeking", text: "Prompts stay hidden until the spin ends." },
      { title: "Family-friendly start", text: "Starter prompts are suitable for kids." },
      { title: "Fully editable", text: "Write your own truths and dares." },
      { title: "Shareable", text: "Send your custom wheel to friends." },
    ],
    faqs: [
      { q: "Are the truth or dare questions kid-friendly?", a: "The starter prompts on this wheel are written for kids and families. You can edit any of them, and the Truth or Dare Generator lets you choose prompts for kids, teens or grown-ups." },
      { q: "How do I add my own dares?", a: "Add a new entry named Dare, open its options with the arrow button and type your challenge into the Hidden activity box." },
      { q: "Can we play over video chat?", a: "Yes. Share your screen and spin for each player, or send everyone the share link so they can spin on their own device." },
    ],
    related: ["truth-or-dare-generator", "yes-or-no-wheel", "spin-the-wheel", "classroom-spinner", "dice-roller", "team-generator"],
  },
  {
    slug: "food-wheel",
    kind: "wheel",
    name: "Food Wheel",
    seoTitle: "Food Wheel – Spin to Decide What to Eat",
    metaDescription: "Can't decide what to eat? Spin the food wheel for dinner, lunch or takeout ideas. Customize it with your favorite meals and restaurants. Free.",
    h1: "Food Wheel – What Should I Eat?",
    lead: "End the 'I don't know, what do you want?' loop. Spin the food wheel and dinner is decided.",
    preset: { title: "What's for Dinner?", entries: [{ text: "Pizza", emoji: "🍕" }, { text: "Tacos", emoji: "🌮" }, { text: "Sushi", emoji: "🍣" }, { text: "Burgers", emoji: "🍔" }, { text: "Pasta", emoji: "🍝" }, { text: "Stir-fry", emoji: "🥡" }, { text: "BBQ", emoji: "🍖" }, { text: "Salad bowl", emoji: "🥗" }, { text: "Curry", emoji: "🍛" }, { text: "Breakfast for dinner", emoji: "🥞" }], paletteId: "citrus" },
    sections: [
      {
        heading: "The fastest way to pick a meal",
        paragraphs: [
          "Deciding what to eat is one of the most common daily debates in any household. The food wheel starts with ten crowd-pleasing options that work whether you're cooking or ordering in. Replace them with your own go-to meals, your favorite local restaurants or whatever's in the fridge.",
          "If someone in the group really doesn't want sushi tonight, click the eye icon to take it off the wheel for now without deleting it.",
        ],
      },
      {
        heading: "Make it fair for the whole table",
        paragraphs: [
          "Let everyone add one or two options, then spin. Because the result is random and visible to all, it's hard to argue with. Want to give the birthday person's pick a better chance? Switch to Weighted mode and bump up its weight.",
        ],
      },
      {
        heading: "More food wheels to try",
        list: ["Lunch ideas for work or school", "Restaurant picker for date night", "Dessert wheel for something sweet", "Dinner ideas for weeknight cooking", "What to eat when you're on a budget"],
      },
    ],
    howTo: [
      { title: "Add meals", text: "Keep the starter list or add your own favorites." },
      { title: "Remove the vetoes", text: "Hide any options someone isn't in the mood for." },
      { title: "Spin", text: "Let the wheel pick dinner." },
      { title: "Enjoy", text: "No more debating — just eating." },
    ],
    benefits: [
      { title: "Ends the debate", text: "A fair spin everyone agrees to in advance." },
      { title: "Personal", text: "Add your own meals, restaurants and emojis." },
      { title: "Saved", text: "Your food wheel is waiting next time you're hungry." },
      { title: "Family friendly", text: "Kids love taking a turn at spinning." },
    ],
    faqs: [
      { q: "Can I add my favorite restaurants?", a: "Yes. Type each restaurant name and press Enter, or use the Restaurant Picker template as a starting point." },
      { q: "How do I stop the same food from coming up every night?", a: "Use Elimination mode across the week: each meal is removed once picked. Click Restore all when you want the full list back." },
      { q: "Can I save more than one food wheel?", a: "Yes. Add up to eight wheels here — for example, one for dinners and one for desserts." },
    ],
    related: ["decision-wheel", "spin-the-wheel", "movie-wheel", "yes-or-no-wheel", "random-picker", "coin-flip"],
  },
  {
    slug: "movie-wheel",
    kind: "wheel",
    name: "Movie Wheel",
    seoTitle: "Movie Wheel – Spin to Pick a Movie or Genre",
    metaDescription: "Spin the movie wheel to pick a genre or a title from your watchlist. Perfect for movie night with friends, family or a partner. Free and customizable.",
    h1: "Movie Wheel – Pick Tonight's Movie",
    lead: "Scrolling for 40 minutes and watching nothing? Spin the movie wheel to pick a genre — or load your own watchlist.",
    preset: { title: "Movie Night Genre", entries: [{ text: "Action", emoji: "💥" }, { text: "Comedy", emoji: "😂" }, { text: "Horror", emoji: "👻" }, { text: "Rom-com", emoji: "💕" }, { text: "Sci-fi", emoji: "🚀" }, { text: "Animated", emoji: "🎨" }, { text: "Documentary", emoji: "🎥" }, { text: "Thriller", emoji: "🔪" }, { text: "Fantasy", emoji: "🐉" }, { text: "Classic", emoji: "🎞️" }], paletteId: "neon", design: { backgroundEffect: "glow" } },
    sections: [
      {
        heading: "Beat choice paralysis on movie night",
        paragraphs: [
          "With thousands of titles across streaming services, picking a movie can take longer than watching one. Narrow it down with a spin: start with a genre, then pick a title within it. Or paste your whole watchlist onto the wheel and let it choose directly.",
          "Use two wheels together for a fun twist — one for genre and one for decade — and press Spin all to see what combination you get.",
        ],
      },
      {
        heading: "Build a shared watchlist wheel",
        paragraphs: [
          "Couples and friend groups can each add a few titles to one wheel, then share the link so everyone has the same list. Turn on Elimination mode to work through the list over several movie nights without repeats.",
        ],
      },
      {
        heading: "Movie night spin ideas",
        list: ["Genre first, then title", "Watchlist roulette for couples", "Decade wheel: 70s, 80s, 90s, 2000s, 2010s", "Kids' pick night with animated favorites", "Holiday movie marathon order"],
      },
    ],
    howTo: [
      { title: "Choose genres or titles", text: "Keep the genre list or paste your watchlist." },
      { title: "Add a second wheel", text: "Optional: add decades, snacks or who picks next." },
      { title: "Spin", text: "Let the wheel decide what's on tonight." },
      { title: "Press play", text: "No more endless scrolling." },
    ],
    benefits: [
      { title: "Saves time", text: "Decide in seconds instead of scrolling for an hour." },
      { title: "Everyone contributes", text: "Each person adds titles to a shared wheel." },
      { title: "Combine wheels", text: "Genre, decade and snack wheels spin together." },
      { title: "Remembers", text: "Your watchlist wheel stays saved in your browser." },
    ],
    faqs: [
      { q: "Can I put my streaming watchlist on the wheel?", a: "Yes. Copy the titles into Bulk paste, one per line. The wheel holds up to 1,000 titles." },
      { q: "Is there a wheel just for Netflix?", a: "Try the Netflix Genre Picker template, which uses popular browsing categories. WhirlPick isn't affiliated with Netflix." },
      { q: "How do I avoid picking a movie we've already seen?", a: "Use Elimination mode, or click the eye icon to hide titles you've watched." },
    ],
    related: ["food-wheel", "decision-wheel", "spin-the-wheel", "random-picker", "yes-or-no-wheel", "truth-or-dare-wheel"],
  },
];
