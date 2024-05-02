const images = ["1.gif", "2.gif"];

const todaysBg = images[Math.floor(Math.random() * images.length)];
const bgImg = document.createElement("img");

bgImg.src = `img/${todaysBg}`;
document.body.appendChild(bgImg);
