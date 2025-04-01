const text = "Hello, I'm Sean Andrei Due.";
let index = 0;
function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing-text").innerHTML =
      text.substring(0, index + 1) + '<span class="cursor">|</span>';
    index++;
    setTimeout(typeEffect, 200);
  }
}
window.onload = typeEffect;