let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';


let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/pic1.png') {
      myImage.setAttribute('src', 'images/pic2.png');
    } else {
      myImage.setAttribute('src', 'images/pic1.png');
    }
}


let myButton = document.querySelector('button');
function setUserName() {
    let myName = prompt('请输入你的名字。');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla 酷毙了，' + myName;
  }
myButton.onclick = setUserName;
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}