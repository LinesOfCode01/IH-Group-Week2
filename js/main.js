const $ = (e) => {
    return document.querySelector(e);
};

const toggleNav = () => {
    let x = $('#nav-drop');
    if (x.classList.contains('nav-transition')) {
        x.classList.add('hidden');
        x.classList.remove('nav-transition');
    } else {
        x.classList.remove('hidden');
        x.classList.add('nav-transition');
    }
};