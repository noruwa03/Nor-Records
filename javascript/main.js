
// Menu Function
const menu = document.querySelector(".menu");
const sidebar = document.querySelector(".sidebar");

menu.onclick = function() {
    menu.classList.toggle("active");
    sidebar.classList.toggle("active");
}