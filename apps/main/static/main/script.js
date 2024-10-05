const getCoords = (elem) => {
    var box = elem.getBoundingClientRect();

    var body = document.body;
    var docEl = document.documentElement;

    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

    var clientTop = docEl.clientTop || body.clientTop || 0;
    var clientLeft = docEl.clientLeft || body.clientLeft || 0;

    var top  = box.top +  scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;

    return { top: Math.round(top), left: Math.round(left) };
}

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

const createCursor = () => {
    const cursor = document.createElement("div")
    cursor.classList.add("cursor")
    document.body.appendChild(cursor)

    return cursor
}

const animateText = (props) => {
    const {
        unstyledElementSelector, styledElementSelector, animationOptions,
        fontSize, delay, onTextTransform
    } = props

    const unstyledElement = document.querySelector(unstyledElementSelector)
    const unstyledElementPosition = getCoords(unstyledElement)

    const styledElement = document.querySelector(styledElementSelector)
    const styledElementPosition = getCoords(styledElement)
    const cursor = createCursor()

    const animationTimeline = anime.timeline(animationOptions)

    const textMoveOffset = randomNumber(1800, 2200)
    const textTransformOffset = randomNumber(3000, 3500)

    animationTimeline
        .add({
            targets: cursor,
            opacity: [0, 1],
            scale: [1.3, 1],
            easing: 'spring(1, 80, 10, 0)',
        })
        .add({
            targets: cursor,
            duration: 500,
            height: unstyledElement.offsetHeight,
            width: unstyledElement.offsetWidth,
            top: [randomNumber(50, 400), unstyledElementPosition.top],
            left: [randomNumber(50, 400), unstyledElementPosition.left]
        }, 1000)
        .add({
            targets: cursor,
            duration: 700,
            top: [unstyledElementPosition.top, styledElementPosition.top],
            left: [unstyledElementPosition.left, styledElementPosition.left],
        }, textMoveOffset)
        .add({
            targets: unstyledElement,
            duration: 700,
            top: styledElementPosition.top,
            left: styledElementPosition.left
        }, textMoveOffset)
        .add({
            targets: cursor,
            width: styledElement.offsetWidth,
            height: styledElement.offsetHeight,
            easing: "easeInOutExpo",
        }, textTransformOffset)
        .add({
            targets: unstyledElement,
            easing: "easeInOutExpo",
            fontSize: getComputedStyle(styledElement).fontSize,
            begin: _ => {
                setTimeout(() => {
                    onTextTransform(unstyledElement, styledElement)
                }, 300)
            },
            complete: _ => {
                anime({
                    targets: cursor,
                    width: 0,
                    duration: 500,
                    delay: 200,
                    easing: 'easeInOutExpo',
                    complete: _ => cursor.remove()
                })

                unstyledElement.remove()
                styledElement.style.opacity = 1;
            }
        }, textTransformOffset)

    animationTimeline.pause()
    setTimeout(() => animationTimeline.play(), delay)
    return cursor
}

document.addEventListener("DOMContentLoaded", () => {
    document.fonts.ready.then(() => {
        animateText({
            styledElementSelector: ".content > h1",
            unstyledElementSelector: ".unstyled > h1",
            animationOptions: {
                easing: "easeOutExpo"
            },
            delay: 1000,
            onTextTransform: (unstyledEl, _) => {
                unstyledEl.style.fontFamily = "Inter";
                unstyledEl.style.fontWeight = 500;
            },
        })

        animateText({
            styledElementSelector: ".content > p",
            unstyledElementSelector: ".unstyled > p",
            animationOptions: {
                easing: "easeOutExpo"
            },
            delay: 3000,
            onTextTransform: (unstyledEl, _) => {
                unstyledEl.style.fontFamily = "Inter";
            },
        })

        animateText({
            styledElementSelector: ".content > span",
            unstyledElementSelector: ".unstyled > span",
            animationOptions: {
                easing: "easeOutExpo"
            },
            delay: 2500,
            onTextTransform: (unstyledEl, _) => {
                unstyledEl.style.fontFamily = "Inter";
            },
        })
    })

    setTimeout(() => {
        anime({
            targets: '.logo-v',
            translateY: [20, 0],
            opacity: [0, 1]
        })

        anime({
            targets: '.logo-g',
            translateY: [20, 0],
            opacity: [0, 1],
            delay: 100
        })
    }, 6000)
})