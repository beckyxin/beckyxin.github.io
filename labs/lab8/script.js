function toggleTheme(){
    let bod = document.querySelector("body");
    bod.classList.toggle("dark-mode");
}
let buttondark = document.getElementById("toggleButton");
buttondark.onclick = toggleTheme;