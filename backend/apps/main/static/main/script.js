const createCursor = () => {
    const cursor = document.createElement("div")
    cursor.classList.add("cursor")
    document.body.appendChild(cursor)
    return cursor
}

const animateText = (props) => {
    const {
        notStyledElementSelector,
        styledElementSelector,
        transformDelay = 300,
        onTextTransform,
        delay,
        animationOptions = {
            easing: "easeOutExpo"
        },
    } = props

    const notStyledElement = document.querySelector(notStyledElementSelector)
    const notStyledElementPosition = getElementPosition(notStyledElement)

    const styledElement = document.querySelector(styledElementSelector)
    const styledElementPosition = getElementPosition(styledElement)
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
            height: notStyledElement.offsetHeight,
            width: notStyledElement.offsetWidth,
            top: [getRandomNumber(100, 500), notStyledElementPosition.top],
            left: [getRandomNumber(100, 500), notStyledElementPosition.left]
        }, 1000)
        .add({
            targets: cursor,
            duration: 700,
            top: [notStyledElementPosition.top, styledElementPosition.top],
            left: [notStyledElementPosition.left, styledElementPosition.left],
        }, 2000)
        .add({
            targets: notStyledElement,
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
            targets: notStyledElement,
            easing: "easeInOutExpo",
            fontSize: getComputedStyle(styledElement).fontSize,
            begin: _ => {
                setTimeout(() => {
                    onTextTransform(notStyledElement, styledElement)
                }, transformDelay)
            }
        }, 3000)
        .add({
            targets: cursor,
            width: 0,
            duration: 500,
            delay: 200,
            easing: 'easeInOutExpo',
            begin: _ => {
                notStyledElement.remove()
                styledElement.style.opacity = 1;
            }
        })
        .add({
            targets: cursor,
            height: 0,
            duration: 500,
            borderWidth: 0,
            easing: 'easeInOutExpo',
            complete: _ => cursor.remove()
        })

    if (notStyledElement.querySelector(".a")) {
        animationTimeline.add({
            targets: notStyledElement.querySelector(".a"),
            easing: "easeInOutExpo",
            fontSize: 18,
        }, 3000)
    }

    animationTimeline.pause()
    setTimeout(() => animationTimeline.play(), delay)
    return animationTimeline
}

const animateHero = () => {
    animateText({
        styledElementSelector: ".content > h1",
        notStyledElementSelector: ".unstyled > h1",
        delay: 2000,
        onTextTransform: (notStyledEl, _) => {
            notStyledEl.style.fontFamily = "Inter";
            notStyledEl.style.fontWeight = "500";
        },
    })

    animateText({
        styledElementSelector: ".content > p",
        notStyledElementSelector: ".unstyled > p",
        delay: 4000,
        transformDelay: 400,
        onTextTransform: (notStyledEl, _) => {
            notStyledEl.style.fontFamily = "Inter";
        },
    })

    animateText({
        styledElementSelector: ".content > span",
        notStyledElementSelector: ".unstyled > span",
        transformDelay: 400,
        delay: 4500,
        onTextTransform: (notStyledEl, _) => {
            notStyledEl.style.fontFamily = "Inter";
        },
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
}

document.addEventListener("DOMContentLoaded", () => {
    document.fonts.ready.then(() => {
        animateHero()
    })
})