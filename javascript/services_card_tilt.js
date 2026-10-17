const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isTouch = window.matchMedia('(pointer: coarse)').matches;
const shouldRun = !isReducedMotion && !isTouch;

const root = window.getComputedStyle(document.documentElement);

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

if (shouldRun) {
    const cards = document.querySelectorAll('.card');

    const rotationDeg = 8;
    const shadowSize = root.getPropertyValue("--card-shadow-size");
    const shadowBlur = root.getPropertyValue("--card-shadow-blur");

    let cardCounter = 0;

    cards.forEach((card) => {

        cardCounter++;

        if (cardCounter <= 6) {
            addCardMouseEvents(card, rotationDeg, shadowSize, shadowBlur, root.getPropertyValue("--card-shadow-clr-1"));
        }
        else {
            addCardMouseEvents(card, rotationDeg, shadowSize, shadowBlur, root.getPropertyValue("--card-shadow-clr-2"));
        }
    })
}

function addCardMouseEvents(card, rotationDeg, shadowSize, shadowBlur, cardShadowClr) {
    card.addEventListener('mousemove', (e) => {
        const cardPosition = card.getBoundingClientRect();

        mousePercentX = (e.x - cardPosition.x) / cardPosition.width - 0.5;
        mousePercentY = (e.y - cardPosition.y) / cardPosition.height - 0.5;

        card.style.transform = `rotateY(${mousePercentX * rotationDeg}deg)  rotateX(${mousePercentY * rotationDeg}deg)`;
        card.style.boxShadow = `${-mousePercentX * shadowSize}px ${-mousePercentY * shadowSize}px ${shadowBlur}px ${cardShadowClr}`;
    })
    card.addEventListener('mouseleave', () => {
        card.style.transform = `rotateY(0) rotateX(0)`;
        card.style.boxShadow = `${shadowSize / 2}px ${shadowSize / 2}px ${shadowBlur}px ${cardShadowClr}`;
    })
}



