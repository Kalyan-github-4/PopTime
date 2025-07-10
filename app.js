const strips = [...document.querySelectorAll('.strip')];
const numberSize = "8";

function highlight(strip, d) {
    strips[strip].querySelector(`.number:nth-of-type(${d + 1})`).classList.add("pop");

    setTimeout(() => {
        strips[strip].querySelector(`.number:nth-of-type(${d + 1})`).classList.remove("pop");
    }, 950);
}

function stripSlider(strip, number) {
    let d1 = Math.floor(number / 10);
    let d2 = number % 10;

    strips[strip * 2].style.transform = `translateY(${d1 * -numberSize}vmin)`;
    highlight(strip * 2, d1);
    strips[strip * 2 + 1].style.transform = `translateY(${d2 * -numberSize}vmin)`;
    highlight(strip * 2 + 1, d2);
}

setInterval(() => {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    stripSlider(0, hours);
    stripSlider(1, minutes);
    stripSlider(2, seconds);
}, 1000);