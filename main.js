const speechBubble = document.getElementById('speech-bubble');
const regionCards = document.querySelectorAll('.region-card');

const regionMessages = {
  space: "The universe is huge! Did you know there are billions of stars out there?",
  ocean: "The ocean is deep and full of mysterious creatures. Let's dive in!",
  nature: "Earth is our beautiful home. There are so many plants and animals to meet!"
};

regionCards.forEach(card => {
  card.addEventListener('click', () => {
    const region = card.getAttribute('data-region');
    const message = regionMessages[region];
    speak(message);
    
    // Visual feedback
    card.style.transform = "scale(0.95)";
    setTimeout(() => {
      card.style.transform = "";
    }, 150);
  });
});

function speak(message) {
  // Add a little "pop" animation to the bubble
  speechBubble.style.transform = "scale(0.8)";
  speechBubble.style.opacity = "0";
  
  setTimeout(() => {
    speechBubble.textContent = message;
    speechBubble.style.transition = "transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.3s";
    speechBubble.style.transform = "scale(1)";
    speechBubble.style.opacity = "1";
  }, 100);
}