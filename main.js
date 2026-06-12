const speechBubble = document.getElementById('speech-bubble');
const attractionCards = document.querySelectorAll('.attraction-card');

const buddyMessages = {
  space: "Ready for lift-off? 🚀 We're going to visit the moon and see the stars! Let's go!",
  ocean: "Glub glub! 🌊 Put on your goggles, we're going to find some friendly whales!",
  nature: "Rrrrroar! 🦁 The jungle is full of life. Let's see how many animals we can find!"
};

attractionCards.forEach(card => {
  card.addEventListener('click', () => {
    const region = card.getAttribute('data-region');
    const message = buddyMessages[region];
    speak(message);
  });
});

function speak(message) {
  // Pop animation
  speechBubble.style.transition = "none";
  speechBubble.style.transform = "scale(0.8) translateY(20px)";
  speechBubble.style.opacity = "0";
  
  setTimeout(() => {
    speechBubble.textContent = message;
    speechBubble.style.transition = "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
    speechBubble.style.transform = "scale(1) translateY(0)";
    speechBubble.style.opacity = "1";
  }, 50);
}