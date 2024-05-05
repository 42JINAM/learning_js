const images = ["1", "2", "3", "4", "5", "6", "7"];

const todaysBg = images[Math.floor(Math.random() * images.length)];
document.body.style.backgroundImage = `url('img/${todaysBg}.jpeg')`;
console.log(todaysBg);
