export let rgb = ( r: number, g: number, b: number ) => { 
    return `rgb(${r}, ${g}, ${b})`
}

export let rgba = ( r: number, g: number, b: number, a: number ) => { 
    return `rgba(${r}, ${g}, ${b}, ${a})`
}

export let isMobile = () => {
    let ratio = window.devicePixelRatio,
        width = window.innerWidth;

    if (ratio >= 2.5) {
        return width <   window.innerHeight;
    } else {
        return width <= 480 || ratio >= 1.25 && width <= 720;
    }
}