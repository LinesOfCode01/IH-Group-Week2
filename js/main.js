const $ = (e) => {
    return document.querySelector(e);
};

//Transition Handler for mobile nav
const toggleNav = () => {
    let x = $('#mobile-drop');
    if (x.classList.contains('nav-transition')) {
        // x.classList.add('hidden');
        x.style.display = 'none';
        x.classList.remove('nav-transition');
        
    } else {
        //x.classList.remove('hidden');
        x.style.display = 'flex';
        x.classList.add('nav-transition');
        
    }
};

//FOR DEV PURPOSES - Close mobile nav menu if switching to desktop screen size
window.addEventListener('resize', () =>
    (window.innerWidth >= 768 && $('#mobile-drop').classList.contains('nav-transition')) ? toggleNav() : false);

//Sets current page's nav bar text to bold
const checkPage = () => document.title.toLowerCase();
const setAnchorSelected = (page) => {
    let tag = `#${page}`;
    $(tag).style.borderTop = '2px #fff solid';
    $(tag).style.fontWeight = '600';
};
setAnchorSelected(checkPage());