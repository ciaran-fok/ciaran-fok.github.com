let background = document.getElementById('background');

window.addEventListener('scroll', () => {
    let { scrollY } = window;
    // background.style.top = 0.9 * scrollY + 'px';
    document.documentElement.style.setProperty('--scrollY', 0.5 * scrollY - 10 + 'px');
});

