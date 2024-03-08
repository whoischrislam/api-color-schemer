// References
const colorPicker = document.getElementById('colorPicker');
const schemeDropdown = document.getElementById('schemeDropdown');
const getColorSchemeBtn = document.getElementById('getColorSchemeBtn');

let colorScheme = [];
let seedColor = colorPicker.value.substring(1);
let scheme = schemeDropdown.value;

let renderedColors = document.getElementById('colorSection');

console.log(`STARTER Seed color: ${seedColor} and scheme: ${scheme}`);
fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${scheme}&count=5`)
    .then(response => response.json())
    .then (data => {
        colorScheme = [];
        data.colors.forEach((color) => {
            colorScheme.push(color.hex.value);
        });
        // render colors
        for(let i = 0; i < renderedColors.children.length; i++) {
            renderedColors.children[i].style.backgroundColor = colorScheme[i];
            renderedColors.children[i].children[0].innerText = colorScheme[i];
        }
});


colorPicker.addEventListener('input', (e) => {
    seedColor = e.target.value;
    seedColor = seedColor.substring(1);
});

schemeDropdown.addEventListener('change', (e) => {
    scheme = e.target.value;
});

getColorSchemeBtn.addEventListener('click', (event) => {
    event.preventDefault();
    fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${scheme}&count=5`)
        .then(response => response.json())
        .then (data => {
            colorScheme = [];
            data.colors.forEach((color) => {
                colorScheme.push(color.hex.value);
            });
            // render colors
            for(let i = 0; i < renderedColors.children.length; i++) {
                renderedColors.children[i].style.backgroundColor = colorScheme[i];
                renderedColors.children[i].children[0].innerText = colorScheme[i];
            }
    });
});

