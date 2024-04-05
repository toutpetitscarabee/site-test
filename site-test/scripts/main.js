let myHeading = document.querySelector("h1");
let myButton = document.querySelector("button");

function setUserName(){
  let myName = prompt("Veuillez saisir votre nom");
  localStorage.setItem("nom", myName);
  myHeading.textContent = "Cette page est cool " + myName;
}


myButton.addEventListener("click", function(){
 setUserName();
});


if (!localStorage.getItem("nom")){
  setUserName()}
else {
  storedName= localStorage.getItem("nom");
  myHeading.textContent = "Cette page est cool " + storedName;
}



/*
let myImage = document.querySelector("img");
myImage.addEventListener("click", function () {
 alert("c'est un bon début");
});
*/


let myImage = document.querySelector("img");
myImage.addEventListener("click", function(){
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/coeur.png"){
	myImage.setAttribute("src", "images/coeur2.jpg");
  } else {
        myImage.setAttribute("src", "images/coeur.png");
  }
}
);



document.querySelector("ul").addEventListener("click", function () {
  alert("Aïe, arrêtez de cliquer !!");
});

