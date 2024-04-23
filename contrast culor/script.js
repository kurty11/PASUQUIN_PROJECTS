function updateColors() {
    var backgroundColor = document.getElementById("backgroundColor").value;
    var textColor = document.getElementById("textColor").value;
    var userText = document.getElementById("textInput").value;
    var textSize = document.getElementById("textSize").value;
    var isBold = document.getElementById("boldCheckbox").checked;
    var isItalic = document.getElementById("italicCheckbox").checked;
    var isUnderline = document.getElementById("underlineCheckbox").checked;
    
    document.body.style.backgroundColor = backgroundColor;
    document.getElementById("text").style.color = textColor;
    document.getElementById("text").textContent = userText;
    document.getElementById("text").style.fontSize = textSize + "px";
    

    document.getElementById("text").style.fontWeight = isBold ? "bold" : "normal";
    document.getElementById("text").style.fontStyle = isItalic ? "italic" : "normal";
    document.getElementById("text").style.textDecoration = isUnderline ? "underline" : "none";
}

function copyColors() {
    var backgroundColor = document.getElementById("backgroundColor").value;
    var textColor = document.getElementById("textColor").value;
    var userText = document.getElementById("textInput").value;
    
    var tempInput = document.createElement("input");
    tempInput.style = "position: absolute; left: -1000px; top: -1000px";
    document.body.appendChild(tempInput);
    
    tempInput.value = `Background Color: ${backgroundColor}, Text Color: ${textColor}, Text: ${userText}`;
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    
    alert("Color codes copied to clipboard!");
}

function clearText() {
    document.getElementById("textInput").value = "";
    updateColors(); 
}

document.getElementById("backgroundColor").addEventListener("change", updateColors);
document.getElementById("textColor").addEventListener("change", updateColors);
document.getElementById("textInput").addEventListener("input", updateColors);
document.getElementById("textSize").addEventListener("input", updateColors);
document.getElementById("boldCheckbox").addEventListener("change", updateColors);
document.getElementById("italicCheckbox").addEventListener("change", updateColors);
document.getElementById("underlineCheckbox").addEventListener("change", updateColors);
