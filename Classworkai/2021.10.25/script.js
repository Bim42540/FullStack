let h2Element = document.createElement('h1');

h2Element.innerText = 'H2 elementas';

document.getElementById('main').prepend(h2Element);


let pElement = document.createElement('p');

pElement.innerText = 'As esu p elementas';

document.getElementById('main').append(pElement);

let ulElement = document.createElement('ul');
ulElement.style['list-style-type'] = 'none';

ulElement.innerHTML = `
<li><img src="https://image.shutterstock.com/image-vector/face-emoticon-icon-vector-logo-260nw-1714204030.jpg" alt="" srcset=""></li>
<li><img src="https://image.shutterstock.com/image-vector/face-emoticon-icon-vector-logo-260nw-1714204030.jpg" alt="" srcset=""></li>
<li><img src="https://image.shutterstock.com/image-vector/face-emoticon-icon-vector-logo-260nw-1714204030.jpg" alt="" srcset=""></li>
<li><img src="https://image.shutterstock.com/image-vector/face-emoticon-icon-vector-logo-260nw-1714204030.jpg" alt="" srcset=""></li>
<li><img src="https://image.shutterstock.com/image-vector/face-emoticon-icon-vector-logo-260nw-1714204030.jpg" alt="" srcset=""></li>`;

document.getElementById('main').append(ulElement);

let pElementv2 = document.createElement('p');

pElementv2.innerText = 'As esu kitas p elementas';

document.getElementById('main').append(pElementv2);
