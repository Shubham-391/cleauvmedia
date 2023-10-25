let view = document.querySelector(".view");
// navbar
function navbar() {
    view.classList.toggle("end-0");
    document.querySelector("body").classList.toggle("overflow-hidden");
};
function navbar2() {
    view.classList.toggle("end-0");
    document.querySelector("body").classList.remove("overflow-hidden");
};