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
        transformDelay = 300, delay, onTextTransform
    } = props

    const unstyledElement = document.querySelector(unstyledElementSelector)
    const unstyledElementPosition = getCoords(unstyledElement)

    const styledElement = document.querySelector(styledElementSelector)
    const styledElementPosition = getCoords(styledElement)
    const cursor = createCursor()

    const animationTimeline = anime.timeline(animationOptions)
    animationTimeline
        .add({
            targets: cursor,
            opacity: [0, 1, 0, 1],
            duration: 400,
            easing: 'steps(1)',
        })
        .add({
            targets: cursor,
            duration: 500,
            height: unstyledElement.offsetHeight,
            width: unstyledElement.offsetWidth,
            top: [randomNumber(100, 500), unstyledElementPosition.top],
            left: [randomNumber(100, 500), unstyledElementPosition.left]
        }, 1000)
        .add({
            targets: cursor,
            duration: 700,
            top: [unstyledElementPosition.top, styledElementPosition.top],
            left: [unstyledElementPosition.left, styledElementPosition.left],
        }, 2000)
        .add({
            targets: unstyledElement,
            duration: 700,
            top: styledElementPosition.top,
            left: styledElementPosition.left
        }, 2000)
        .add({
            targets: cursor,
            width: styledElement.offsetWidth,
            height: styledElement.offsetHeight,
            easing: "easeInOutExpo",
        }, 3000)
        .add({
            targets: unstyledElement,
            easing: "easeInOutExpo",
            fontSize: getComputedStyle(styledElement).fontSize,
            begin: _ => {
                setTimeout(() => {
                    onTextTransform(unstyledElement, styledElement)
                }, transformDelay)
            },
            complete: _ => {
                anime({
                    targets: cursor,
                    width: 0,
                    duration: 500,
                    delay: 200,
                    easing: 'easeInOutExpo',
                    complete: _ => {
                        anime({
                            targets: cursor,
                            height: 0,
                            duration: 500,
                            borderWidth: 0,
                            easing: 'easeInOutExpo',
                            complete: _ => cursor.remove()
                        })
                    }
                })

                unstyledElement.remove()
                styledElement.style.opacity = 1;
            }
        }, 3000)

    if (unstyledElement.querySelector(".a")) {
        animationTimeline.add({
            targets: unstyledElement.querySelector(".a"),
            easing: "easeInOutExpo",
            fontSize: 18,
        }, 3000)
    }

    animationTimeline.pause()
    setTimeout(() => animationTimeline.play(), delay)
    return animationTimeline
}

document.addEventListener("DOMContentLoaded", () => {
    document.fonts.ready.then(() => {
        const firstTimeline = animateText({
            styledElementSelector: ".content > h1",
            unstyledElementSelector: ".unstyled > h1",
            animationOptions: {
                easing: "easeOutExpo"
            },
            delay: 2000,
            onTextTransform: (unstyledEl, _) => {
                unstyledEl.style.fontFamily = "Inter";
                unstyledEl.style.fontWeight = 500;
            },
        })

        const secondTimeline = animateText({
            styledElementSelector: ".content > p",
            unstyledElementSelector: ".unstyled > p",
            animationOptions: {
                easing: "easeOutExpo"
            },
            delay: 4000,
            transformDelay: 400,
            onTextTransform: (unstyledEl, _) => {
                unstyledEl.style.fontFamily = "Inter";
            },
        })

        const thirdTimeline = animateText({
            styledElementSelector: ".content > span",
            unstyledElementSelector: ".unstyled > span",
            animationOptions: {
                easing: "easeOutExpo"
            },
            transformDelay: 400,
            delay: 4500,
            onTextTransform: (unstyledEl, _) => {
                unstyledEl.style.fontFamily = "Inter";
            },
        })

        let paused = false
        document.addEventListener("keydown", event => {
            if (event.key !== "p") return

            if (paused) {
                firstTimeline.play()
                secondTimeline.play()
                thirdTimeline.play()
                paused = false

            } else {
                firstTimeline.pause()
                secondTimeline.pause()
                thirdTimeline.pause()
                paused = true
            }
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
    }, 9000)
})