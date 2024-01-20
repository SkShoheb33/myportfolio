
let isDay = true;
changeMode = () => {
    let backgroundColor, textColor, boxShadow;
    
    if (isDay) {
        backgroundColor = "#121212";
        textColor = "white";
        boxShadow = "12px 12px 16px 0 #181818, -8px -8px 12px 0 #181818";
    } else {
        backgroundColor = "#ecf0f3";
        textColor = "black";
        boxShadow = "12px 12px 16px 0 #b5bbc2, -8px -8px 12px 0 #f8fbff";
    }

    document.getElementById("night").style.display = isDay ? "none" : "block";
    document.getElementById("day").style.display = isDay ? "block" : "none";

    let body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = backgroundColor;
    body.style.color = textColor;

    let neuElements = document.getElementsByClassName("neu");
    let bgElements = document.getElementsByClassName("bg");

    function applyStyles(elements) {
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor = backgroundColor;
            elements[i].style.color = textColor;
            elements[i].style.boxShadow = boxShadow;
        }
    }

    applyStyles(neuElements);
    applyStyles(bgElements);

    isDay = !isDay;
};
