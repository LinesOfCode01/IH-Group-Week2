const $ = function( ele ) {
    return document.querySelector( ele );
};

const toggleNav = () => {
    let x = $(`#nav-drop`);
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
};
