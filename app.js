/* ----------------------------------------------------------Bouton Dark Mode---------------------------------------------*/
let pageBody = document.body;
let darkModeButton = document.getElementById('darkmode-button');
let lieu = document.getElementById('lieu');
let cuisine = document.getElementById('cuisine');
let produits = document.getElementById('produits');
let modalWrappers = document.getElementsByClassName('modal-wrapper');
let links = document.getElementsByClassName('link');
let lienIconeSoleil = "./visuels/icone-soleil.png";
let lienIconeLune = "./visuels/icone-lune.png";
let darkModeActive = false;



let sectionsDarkOn = () => {
    if((lieu || cuisine || produits) !== null) {
        lieu.style.backgroundColor = 'hsla(187, 40%, 20%, 0.808)';
        cuisine.style.backgroundColor = 'hsla(40, 40%, 20%, 0.808)';
        produits.style.backgroundColor = 'hsla(140, 40%, 20%, 0.808';
    }
}

let sectionsDarkOff = () => {
    if((lieu || cuisine || produits) !== null) {
        lieu.style.backgroundColor = '';
        cuisine.style.backgroundColor = '';
        produits.style.backgroundColor = '';
    }
}

let wrappersDarkOn = () => {
    for (let i = 0; i < modalWrappers.length; i++) {
        let wrapper = modalWrappers[i];
        wrapper.style.backgroundColor = 'hsl(180, 20%, 26%)';
    }
}
let wrappersDarkOff = () => {
    for (let i = 0; i < modalWrappers.length; i++) {
        let wrapper = modalWrappers[i];
        wrapper.style.backgroundColor = 'hsl(140, 50%, 90%)';
    }
}

let linksDarkOn = () => {
    for (let i = 0; i < links.length; i++) {
        let link = links[i];
        link.style.color = 'hsl(270, 100%, 75%)';
    }
}

let linksDarkOff = () => {
    for (let i = 0; i < links.length; i++) {
        let link = links[i];
        link.style.color = '';
    }
}

let activateDarkMode = () => {
    pageBody.style.backgroundImage = 'none';
    pageBody.style.backgroundColor = 'hsl(82, 9%, 11%)';
    pageBody.style.color = 'white';
    wrappersDarkOn();
    sectionsDarkOn();
    linksDarkOn();
    darkModeButton.src = lienIconeSoleil;
    darkModeActive = true;
    sessionStorage.setItem('storedDarkMode', 'true');
}

let disableDarkMode = () => {
    pageBody.style.backgroundImage = '';
    pageBody.style.backgroundColor = '';
    pageBody.style.color = '';
    wrappersDarkOff();
    sectionsDarkOff();
    linksDarkOff();
    darkModeButton.src = lienIconeLune;
    darkModeActive = false;
    sessionStorage.clear('storedDarkMode');
}

let switchMode = () => {
    if(darkModeActive === false){
    activateDarkMode();
    } else {
    disableDarkMode();
    };
};

darkModeButton.onclick = switchMode; 

if(sessionStorage.getItem('storedDarkMode')){
    activateDarkMode();
}else{
    disableDarkMode();
}



/* -------------------------------------------------Fenêtres modales page fournisseur--------------------------------------*/
let modal = null;

const openModal = function (e) {
    modal = document.querySelector(e.target.getAttribute('href'));
    modal.style.display = null;
    modal.removeAttribute('aria-hidden');
    modal.setAttribute('aria-modal', true);
    modal.addEventListener('click', closeModal);
    modal.querySelector('.js-modal-close').addEventListener('click', closeModal);
    modal.querySelector('.js-modal-stop').addEventListener('click', stopPropagation);
}

const closeModal = function (e) {
    if (modal === null) return;
    modal.style.display = "none";
    modal.setAttribute('aria-hidden', 'true');
    modal.removeAttribute('aria-modal');   
    modal.removeEventListener('click', closeModal);
    modal.querySelector('.js-modal-close').removeEventListener('click', closeModal);
    modal.querySelector('.js-modal-stop').removeEventListener('click', stopPropagation);
    modal = null;
}

const stopPropagation = function (e) {
    e.stopPropagation();
}

document.querySelectorAll('.js-modal').forEach (a => {
    a.addEventListener('click', openModal);
})

window.addEventListener('keydown', function (e) {
    if (e.key === "Escape" || e.key === "Esc") {
        closeModal(e)
    }
})


