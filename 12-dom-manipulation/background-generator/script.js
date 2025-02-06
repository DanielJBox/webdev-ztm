let css = document.querySelector("h3");
let colorPicker1 = document.querySelector(".color1");
let colorPicker2 = document.querySelector(".color2");
let color1 = colorPicker1.value;
let color2 = colorPicker2.value;
let randColBtn = document.querySelector(".random-colors");
let body = document.querySelector("body");
let root = document.querySelector(":root");

updateBgStyle(color1, color2)

colorPicker1.addEventListener("input", () => colPickChange());

colorPicker2.addEventListener("input", () => colPickChange());

randColBtn.addEventListener("click", updateBgStyleRand);

function colPickChange() {
    updateBgStyle(colorPicker1.value, colorPicker2.value);
}

function updateBgStyle(col1, col2) {
    let backgroundStyle = "linear-gradient(to bottom right, " + col1 + ", " + col2 + ")";
    body.style.backgroundImage = backgroundStyle;
    updateBtnStyle(col1, col2);
    css.textContent =  backgroundStyle;
}

function updateBgStyleRand() {
    let color1 = randHexColor();
    let color2 = randHexColor();
    updateBgStyle(color1, color2);
    updateColorPickers(color1, color2);
}

function updateBtnStyle(col1, col2) {
    root.style.setProperty('--reverse-bg-grad', 'linear-gradient(to top left, ' + col1 + ' 0%, ' + col2 + ' 100%)');
}

function randHexColor() {
    // get random red, green, blue values
    let r = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    let g = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    let b = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    return '#' + r + g + b;
}

function updateColorPickers(col1, col2) {
    colorPicker1.value = col1;
    colorPicker2.value = col2;
}