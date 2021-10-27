// Sukurkite HTML dokumentą, kuris <body> dalyje turės tris žymas, t.y. <header>, <main>, <footer>. 

// <header> dalyje bus navigacijos meniu su 5 nuorodomis, kuris bus “Responsive” (mobilioje versjoje turi būti “toggler” mygtukas, kurį paspaudus atsiranda meniu).
	
// <main> dalyje bus trys <section>:
	



// Pirmas <section> turės pilno pločio ir aukčio “slider” foną, kuriame bus trys paveikslėliai, kurie keisis kas 2 sekundės;
let headerApp = document.createElement('header');
document.body.appendChild(headerApp);

let targetHeader = document.querySelector('header');

let navApp = document.createElement('nav');
headerApp.appendChild(navApp);

let targetNav = document.querySelector('nav');

let navHider = document.createElement('span');
targetHeader.prepend(navHider);
navHider.innerText = 'Navigation toggler ';
navHider.classList.add('navHider');

let navMenuItems = ['Home', 'Contacts', 'Info', 'FAQ', 'About'];
console.log(navMenuItems);

for (let i = 0; i <= navMenuItems.length - 1; i++) {
    let newItem = document.createElement ('a');
    newItem.href = '#';
    targetNav.appendChild(newItem);
    newItem.innerText = `${navMenuItems[i]}`;
    newItem.classList.add('navItems');
};

navHider.addEventListener('click', function myFunction() {
    targetNav.classList.toggle("navToggler");
})


let addMain = document.createElement('main');
document.body.appendChild(addMain);

let mainSection1Create = document.createElement('section');
addMain.appendChild(mainSection1Create);

mainSection1Create.id = 'section1';
let mainSection1 = document.getElementById('section1');

let img1Div = document.createElement('div')
mainSection1Create.appendChild(img1Div);
img1Div.classList.add('inactive');

let image1 = document.createElement('img');
img1Div.appendChild(image1);
image1.src = 'assets/img1.jpg';
image1.classList.add('images');

let img2Div = document.createElement('div')
mainSection1Create.appendChild(img2Div);
img2Div.classList.add('inactive');

let image2 = document.createElement('img');
img2Div.appendChild(image2);
image2.src = 'assets/img2.jpg';
image2.classList.add('images');

let img3Div = document.createElement('div')
mainSection1Create.appendChild(img3Div);
img3Div.classList.add('active');

let image3 = document.createElement('img');
img3Div.appendChild(image3);
image3.src = 'assets/img3.jpg';
image3.classList.add('images');

onload = function() {
    
    let e, i = 0;
    e = document.getElementById('section1').getElementsByTagName ('div');
    while (e[i++]) {
        e.onmouseover = function () {
            clearTimeout(t);
        }
        
        e.onmouseout = function () {
            t=setTimeout("timedCount()",timeOut);
        }
    }
}

c=0;
timeOut = 5000;
    let t;
    t=setTimeout("timedCount()",timeOut);
    
    function timedCount() {
        let getImage = document.getElementById('section1').getElementsByTagName('div');
        img = getImage.length-1;
        for (let a=0; a<getImage.length; a++) {
            if (getImage[a].className.indexOf("active") == 0) {
             getImage[a].className = 'inactive';
             c = a;
            }
        }
        c++;
        if (c>img) {c=0;}
        getImage[c].className = 'active';
        t=setTimeout("timedCount()",timeOut);
    }

    // Antras <section> turės pilno pločio ir ne mažesnę nei 300px aukščio laikrodį (laikas rodomas kaip tekstas), kuriame bus matomos dabartinės valandos, minutės ir sekundės (atsinaujins realiu laiku); 
    
    let mainSection2 = document.createElement('section');
    addMain.appendChild(mainSection2);
mainSection2.id = 'section2';

let timer = document.createElement('p')
mainSection2.appendChild(timer);
timer.id = 'time';

let timeDisplay = document.getElementById("time");


function refreshTime() {
    let dateString = new Date().toLocaleString("lt-LT", {timeZone: "Europe/Vilnius"});
  let formattedString = dateString.replace(", ", " - ");
  timeDisplay.innerHTML = formattedString;
}

setInterval(refreshTime, 1000);


// Trečias <section> turės kontaktų formą, kurią užpildžius, po ja pasirodys žinutė, kurioje nurodoma, kad forma užpildyta sėkmingai.

let mainSection3 = document.createElement('section');
addMain.appendChild(mainSection3);
mainSection3.id = 'section3';


let formHead = document.createElement('h3');
mainSection3.appendChild(formHead);
formHead.innerText = 'Contact form';

let formContainer = document.createElement('div');
mainSection3.appendChild(formContainer);
formContainer.classList.add('container');
formContainer.classList.add('section3Div');

let formInputNameLabel = document.createElement('label');
formContainer.appendChild(formInputNameLabel);
formInputNameLabel.setAttribute('for', 'fname');
formInputNameLabel.innerText = 'Vardas: ';

let formInputName = document.createElement('input');
formContainer.appendChild(formInputName);


let formInputLastNameLabel = document.createElement('label');
formContainer.appendChild(formInputLastNameLabel);
formInputLastNameLabel.setAttribute('for', 'lname');
formInputLastNameLabel.innerText = 'Pavarde: ';

let formInputLastName = document.createElement('input');
formContainer.appendChild(formInputLastName);

let formButton = document.createElement('button');
mainSection3.appendChild(formButton);
formButton.innerText = 'Send';

let sendMessage = document.createElement('span');
mainSection3.appendChild(sendMessage);
sendMessage.innerText = 'Message sent';

formButton.addEventListener('click', function btnFunction() {
    sendMessage.classList.toggle("msgSent");
})
