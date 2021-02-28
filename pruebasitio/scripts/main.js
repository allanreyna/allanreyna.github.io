const miTitulo = document.querySelector('h1');
miTitulo.textContent = '¡BIENVENIDOS A MI BLOG!';

let myImage = document.querySelector('img');
myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/conociendonicaragua.jpg') {
      myImage.setAttribute('src','images/LagoCocibolca.png');
    } else {
      myImage.setAttribute('src', 'images/conociendonicaragua.jpg');
    }
}

