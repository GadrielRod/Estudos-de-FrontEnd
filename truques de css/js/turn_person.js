const t = document.getElementById('turn');
const tAgain = document.getElementById('turnAgain');
const p = document.getElementById('person');


function turn(){
    person.src = 'img/jaina.jpg';
};
function turnAgain(){
    person.src = 'img/valeera.png';
};
function easterEgg(){
    person.src = 'img/uther.jpg';
};


t.addEventListener('click', turn);
tAgain.addEventListener('click', turnAgain);
p.addEventListener('mouseover', turnAgain);
p.addEventListener('mouseleave', turn);
p.addEventListener('dblclick', easterEgg);