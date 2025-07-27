const colours = ["green", "blue", "red"]
let flag = true
const stopButton = document.querySelector('button')
const boxes = document.querySelectorAll(".box")
function getRandomColour() {
    return colours[Math.floor(Math.random()*colours.length)];
}
const interval = setInterval(() => {
    if (!flag) {
        return;
    }
    boxes.forEach(box => {
        box.style.backgroundColor = getRandomColour();
    })
}, 500)

stopButton.addEventListener('click', () => {
    flag = false;
    clearInterval(interval);
})