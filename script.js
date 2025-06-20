const affirmations = [
  "Your code is cooler than a popsicle in a snowstorm 🍧❄️",
  "You just built a website? You're basically a wizard now 🧙‍♀️✨",
  "That button you made? Pure genius. Even the internet cheered 👏",
  "You're the HTML hero we didn’t know we needed 💻🦸",
  "Your CSS skills just made rainbows jealous 🌈",
  "You write JavaScript like it's your superpower ⚡️",
  "You're the kind of person who makes bugs run away 🐞💨",
  "Even your `<div>`s have big energy 💥",
  "The internet is lucky to have your brain in it 🧠🌍",
  "Your imagination + coding = pure internet magic 🪄",
  "You make websites that would make unicorns cry happy tears 🦄😭",
  "You're not just learning to code — you’re creating the future 🚀",
  "Every line of your code is like a high five to the world ✋🌟",
  "Your website is so good, it deserves its own fan club 🎉",
  "Keep coding, you're one click away from awesome 🖱️✨",
  "If bugs try to mess with your code, just tell them who's boss 😎",
  "You are the superhero of the `<body>` tag 🦸‍♂️💻",
  "You're what happens when creativity and coding become best friends 🤝",
  "Even your typos have potential 🤪⌨️",
  "You radiate the kind of confidence that makes WiFi connect faster 📶",
  "You're 90% magic, 10% logic — and 100% unstoppable 🪄",
  "You are the human version of a green checkmark ✅",
  "You dance like no one's watching—and even if they are, they're impressed 💃",
  "Your vibes are so immaculate, they got a scholarship 🏆",
  "If life were a board game, you’d be the piece everyone wants to be 🎲",
  "You're the last fry in the bag—the most sacred and powerful one 🍟",
  "Even your shadow has main character energy 🌟",
  "You’re like a perfectly ripe avocado: rare, valuable, and people get excited when you show up 🥑",
  "If charisma were coffee, you'd be a triple espresso with whipped cream ☕✨",
  "You're like a Wi-Fi signal at full strength—people just feel better around you 📶",
  "You could win a staring contest with a cat 🐱",
  "You're so original even your autocorrect doesn’t try to change you ✍️",
  "You have the power to make Mondays feel like Fridays 🎉",
  "If laughter is the best medicine, you're a prescription 🌈",
  "You’re not weird. You’re limited edition 🚀"
];

const chime = new Audio("chime.mp3");

function generateAffirmation() {
  const random = Math.floor(Math.random() * affirmations.length);
  const newAffirmation = affirmations[random];
  document.getElementById("affirmation").innerText = newAffirmation;

  chime.play();

  // sparkle effect
  const mirror = document.getElementById("mirror");
  mirror.classList.add("animate");
  setTimeout(() => mirror.classList.remove("animate"), 1000);

  // speak the affirmation
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(newAffirmation);
    utterance.lang = 'en-US';
    utterance.rate = 1;
    speechSynthesis.speak(utterance);
  }
}

