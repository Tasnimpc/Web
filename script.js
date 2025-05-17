function changeBackground() {
    const colors = ["#f0f0f0", "#ffd700", "#add8e6", "#90ee90", "#ffb6c1"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
  }
  