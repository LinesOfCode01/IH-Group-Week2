const $ = ( ele ) => {
    return document.querySelector( ele );
};

// const toggleNav = () => {
//     let x = $(`#nav-drop`);
//     if (x.style.display === "flex") {
//         x.style.display = "none";
//     } else {
//         x.style.display = "flex";
//     }
// };

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
