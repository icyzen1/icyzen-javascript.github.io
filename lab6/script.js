// ==============================
// DOM
// ==============================
const tabsContainer = document.querySelector('#tabs');
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');
const topLeft = document.querySelector('#top-left');
const topRight = document.querySelector('#top-right');
const bottomRight = document.querySelector('#bottom-right');
const bottomLeft = document.querySelector('#bottom-left');
const topLeftValue = document.querySelector('#top-left-value');
const topRightValue = document.querySelector('#top-right-value');
const bottomRightValue = document.querySelector('#bottom-right-value');
const bottomLeftValue = document.querySelector('#bottom-left-value');
const preview = document.querySelector('#preview');
const previewButton = document.querySelector('#preview-button');
const coordinates = document.querySelector('#coordinates');
const cssCode = document.querySelector('#css-code');
const copyButton = document.querySelector('#copy-button');
const copyMessage = document.querySelector('#copy-message');
const presetForm = document.querySelector('#preset-form');
const presetName = document.querySelector('#preset-name');
const presetError = document.querySelector('#preset-error');
const scrollTopButton = document.querySelector('#scroll-top');
const textAlign = document.querySelector("#text-align")

// ==============================
// TABS
// ==============================
function hideTabs() {
    tabs.forEach(function (element) {
        element.classList.remove("active")
    });
    tabContents.forEach(function (element) {
        element.classList.remove("active")
    })
}

function showTab(tabName) {
    const targetTab = document.querySelector(`[data-tab="${tabName}"]`);
    const targetContent = document.querySelector(`[data-content="${tabName}"]`);

    if (targetTab) {
        targetTab.classList.add("active")
    }
    if (targetContent) {
        targetContent.classList.add("active")
    }
}

tabs.forEach(function (tab) {
    tab.addEventListener("click", function (event) {
        console.log(event.target)
        const tabName = event.currentTarget.dataset.tab
        hideTabs()
        showTab(tabName)

        console.log(event.type);
        console.log(event.target);
        console.log(event.currentTarget);
    })
})

// ==============================
// BORDER RADIUS
// ==============================
function generateBorderRadius() {
    const topLeftRadius = topLeft.value;
    const topRightRadius = topRight.value;
    const bottomRightRadius = bottomRight.value;
    const bottomLeftRadius = bottomLeft.value;

    const radius = `${topLeftRadius}px ${topRightRadius}px ${bottomRightRadius}px ${bottomLeftRadius}px`;
    const textAlignValue = textAlign.value

    preview.style.borderRadius = radius
    preview.style.textAlign = textAlign.value;

    topLeftValue.textContent = `${topLeftRadius} px`
    topRightValue.textContent = `${topRightRadius} px`
    bottomRightValue.textContent = `${bottomRightRadius} px`
    bottomLeftValue.textContent = `${bottomLeftRadius} px`

    cssCode.value = `border-radius: ${radius}
text-align: ${textAlignValue}`
}

topLeft.addEventListener("input", generateBorderRadius)
topRight.addEventListener("input", generateBorderRadius)
bottomRight.addEventListener("input", generateBorderRadius)
bottomLeft.addEventListener("input", generateBorderRadius)

textAlign.addEventListener("change", generateBorderRadius)

presetName.addEventListener("focus", function () {
    presetName.classList.add("focused")
})

presetName.addEventListener("blur", function () {
    presetName.classList.remove("focused")
    if (presetName.value.trim() === '') {
        presetName.classList.add("error")
        presetError.textContent = "Введіть назву пресета"
    }
    else {
        presetName.classList.remove("error")
    }
})
// ==============================
// COPY
// ==============================
function copyCSS() {
    navigator.clipboard.writeText(cssCode.value);
    copyMessage.textContent = "CSS-код скопійовано"
}

copyButton.addEventListener("click",  copyCSS)

// ==============================
// FORM
// ==============================
function handlePresetSubmit(event) {
    event.preventDefault()

    if (presetName.value.trim() === '') {
        presetName.classList.add("error")
        presetError.textContent = "Введіть назву пресета"
        return
    }
    else {
        presetName.classList.remove("error")
    }

    console.log(`Пресет: ${presetName.value}`)
    console.log(cssCode.value)
}

presetForm.addEventListener("submit", handlePresetSubmit)

// ==============================
// KEYBOARD
// ==============================
function handleKeyDown(event) {
    if (event.key === "Escape") {
        topLeftRadius = 0;
        topRightRadius = 0;
        bottomRightRadius = 0;
        bottomLeftRadius = 0;

        generateBorderRadius()
        preview.style.borderRadius = "0px"
    }
}

document.addEventListener("keydown", handleKeyDown)

preview.addEventListener("click", function () {
    console.log("Preview click")
})

previewButton.addEventListener("click", function (event) {
    event.stopPropagation()
    console.log("Button click")
})

preview.addEventListener("mouseover", function () {
    preview.classList.add("hovered")
})

preview.addEventListener("mouseout", function () {
    preview.classList.remove("hovered")
})

preview.addEventListener("mousemove", function (event) {
    const coordX = event.clientX
    const coordY = event.clientY
    coordinates.textContent = `X: ${coordX}, Y: ${coordY}`
    console.log(`PageX: ${coordX}, PageY: ${coordY}`)
})
// ==============================
// SCROLL
// ==============================
function handleScroll() {
    if (window.scrollY > 300) {
        scrollTopButton.classList.add("visible")
    } 
    else {
        scrollTopButton.classList.remove("visible")
    }
}

window.addEventListener("scroll", handleScroll)

scrollTopButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})