const hero = document.querySelector("#myHero");
console.log(hero.classList);

hero.addEventListener("click", killHim);

function killHim(){
    console.log("hero was clicked");
    hero.classList.toggle("heroDies");
}
