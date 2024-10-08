const getElementPosition = (element) => {
    const elementRect = element.getBoundingClientRect();

    const body = document.body;
    const docElement = document.documentElement;

    const scrollTop = docElement.scrollTop || body.scrollTop;
    const scrollLeft = docElement.scrollLeft || body.scrollLeft;

    const clientTop = docElement.clientTop || body.clientTop || 0;
    const clientLeft = docElement.clientLeft || body.clientLeft || 0;

    return {
        top: Math.round(elementRect.top +  scrollTop - clientTop),
        left: Math.round(elementRect.left + scrollLeft - clientLeft)
    }
}

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}
