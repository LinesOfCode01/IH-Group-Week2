const $ = (e) => {
    return document.querySelector(e);
};

//Sets current page's nav bar text to bold
const checkPage = () => document.title.toLowerCase();

const setAnchorSelected = (page) => {
    let tag = `#${page}`;
    $(tag).style.fontWeight = '600';
};
setAnchorSelected(checkPage());