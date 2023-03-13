var selectedButton = null;

function changeColor(id){
  let button = document.getElementById(id);
  
  if (selectedButton != null) {
    selectedButton.style.backgroundColor = "red";
    selectedButton.classList.remove("active");
  }

  button.style.backgroundColor = "green";
  button.classList.add("active");
  selectedButton = button;
}
