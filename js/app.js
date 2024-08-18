const sidebarEl = document.querySelector(".sidebar");
const showModalEl = document.querySelector(".modal");

function sidebar() {
    sidebarEl.style.left = "0px"
}

function sidebarLeft() {
    sidebarEl.style.left = "-400px"
}

function showModal() {
    showModalEl.style.display = "block"
}
function showModalX() {
    showModalEl.style.display = "none"
}

