
//DETECTA SI EL DISPOSITIVO TIENE ACTIVADO EL MODO OSCURO O CLARO
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
  if (event.matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
    dark = true;
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    dark=false;
  }
});

//Copia al portapapeles el texto que hay en la text-area convertido

function copy() {
    var copyText = document.getElementById("convertido");
    copyText.select();
    document.execCommand("copy");
  }

//Pega el texto que hay en el portapapeles a la text-area usuario

function paste() {
    navigator.clipboard.readText().then(text => {
      document.querySelector('#usuario').value = text;
    });
  }  



  function clearConvertedText() {
    let userText = document.getElementById("usuario").value;
    if (!userText) {
      document.getElementById("convertido").value = "";
    }
  }
  

  function toUppercase() {
    selectedButton = document.getElementById("capitalizeAll");
    document.getElementById("capitalizeAll").classList.add("active");
    document.getElementById("toLowercase").classList.remove("active");
    document.getElementById("capitalizeAfter").classList.remove("active");
    document.getElementById("addSpaceAfterPeriod").classList.remove("active");
  }
  
  function toLowercase() {
    selectedButton = document.getElementById("toLowercase");
    document.getElementById("capitalizeAll").classList.remove("active");
    document.getElementById("toLowercase").classList.add("active");
    document.getElementById("capitalizeAfter").classList.remove("active");
    document.getElementById("addSpaceAfterPeriod").classList.remove("active");
  }
  
  function capitalizeAfterPeriod() {
    selectedButton = document.getElementById("capitalizeAfter");
    document.getElementById("capitalizeAll").classList.remove("active");
    document.getElementById("toLowercase").classList.remove("active");
    document.getElementById("capitalizeAfter").classList.add("active");
    document.getElementById("addSpaceAfterPeriod").classList.remove("active");
  }
  
  function addSpaceAfterPeriod() {
    selectedButton = document.getElementById("addSpaceAfterPeriod");
    document.getElementById("capitalizeAll").classList.remove("active");
    document.getElementById("toLowercase").classList.remove("active");
    document.getElementById("capitalizeAfter").classList.remove("active");
    document.getElementById("addSpaceAfterPeriod").classList.add("active");
  }
  
  
  
  

function convert() {

  //Comprueba si hay texto en el text-area
    var userInput = document.getElementById("usuario").value;
    if (userInput.trim() === "") {
      alert("Debe introducir texto.");
      return;
    }
  
  //Comrprueba si hay algún botón en verde
    var buttons = document.querySelectorAll(".botones button");
    var isButtonGreen = false;
    for (var i = 0; i < buttons.length; i++) {
      if (buttons[i].style.backgroundColor === "green") {
        isButtonGreen = true;
        break;
      }
    }
    if (!isButtonGreen) {
      alert("Debe pulsar un botón antes de convertir.");
      return;
    }  
  


  let text = document.getElementById("usuario").value;
  let convertido = document.getElementById("convertido");

  if (selectedButton == null) {
    return;
  }

  switch (selectedButton.id) {
    case "capitalizeAll":
      convertido.value = text.toUpperCase();
      break;
    case "toLowercase":
      convertido.value = text.toLowerCase();
      break;
      
  
  case "capitalizeAfter":
    let result = "";
let shouldCapitalize = true;
for (let i = 0; i < text.length; i++) {
  if (shouldCapitalize && /[a-zA-ZñÑ]/.test(text[i])) {
    let j = i - 1;
    while (j >= 0 && text[j] === " ") {
      j--;
    }
    if (j < 0 || /[.?!¿¡]/.test(text[j])) {
      result += text[i].toUpperCase();
    } else {
      result += text[i].toLowerCase();
    }
    shouldCapitalize = false;
  } else if (/[.?!¿¡]/.test(text[i])) {
    result += text[i];
    shouldCapitalize = true;
  } else {
    result += text[i];
  }
}
convertido.value = result;
break;
      
case "addSpaceAfterPeriod":
  convertido.value = text.replace(/[.!?]/g, "$& ");
  break;
  }
}

    