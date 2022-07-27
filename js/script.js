const menubt = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".navMenu");
const navItems = document.querySelectorAll(".Menu_item");

let showMenu = false;

hamburger.addEventListener("click", toggleMenu);

function toggleMenu() {
  console.log("yes");
  if (!showMenu) {
    hamburger.classList.add("open");
    nav.classList.add("open");
    menuNav.classList.add("open");
    navItems.forEach((item) => item.classList.add("open"));

    showMenu = true;
  } else {
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    menuNav.classList.remove("open");
    navItems.forEach((item) => item.classList.remove("open"));

    showMenu = false;
  }
}

const arr1 = [
  {
    id: 0,
    spkName: "Refik Anadol",
    skpPic: "./pictures/Refik_anadol.jpeg",
    spkjob: "Founder and CEO, Illuminarium",
    spkdesk: "Next Generation Immersive Entertainment",
  },
  {
    id: 1,
    spkName: "Alan Greenberg.",
    skpPic: "./pictures/Alan-Greenberg.jpeg",
    spkjob: "Art records",
    spkdesk: "Studio sound Engineer",
  },
  {
    id: 2,
    spkName: "Robert High",
    skpPic: "./pictures/Robert_high.jpeg",
    spkjob: "Yamaha",
    spkdesk: "Digital console audio Systems",
  },
  {
    id: 3,
    spkName: "Matt Higgins",
    skpPic: "./pictures/Matt_higgins.jpeg",
    spkjob: "LED Corporation",
    spkdesk: "Led screen development for outdoor",
  },
  {
    id: 4,
    spkName: "Mark Valenziano",
    skpPic: "./pictures/Mark_valenziano.jpeg",
    spkjob: "Senior engineer",
    spkdesk: "JBL sound developments",
  },
  {
    id: 5,
    spkName: "Peter Prescot",
    skpPic: "./pictures/Peter_prescot.jpeg",
    spkjob: "CEO, Line Array speakers",
    spkdesk: "Inventor and developer of Line Array speakers",
  },
];

document.querySelector(".Speaker-menu").innerHTML = arr1
  .map(
    (items, i) => ` <div class="spk_card ${i > 1 && " showcards hidden-cards"}">
<div class="speakerPic">
  <img src="${items.skpPic}" alt="">
</div>
<div class="jobgenerals">
  <p class="spk_name">${items.spkName}</p>
  <p class="spkjob">${items.spkjob}</p>
  <p class="spkdesk">${items.spkdesk}</p>
  </div>
</div>`
  )
  .join("");
const speakersCards = document.querySelectorAll(".showcards");
const show = document.querySelector(".more_btn");
const less = document.querySelector(".less_btn");

show.addEventListener("click", () => {
  speakersCards.forEach((ele) => ele.classList.toggle("hidden-cards"));
  show.classList.toggle("hidden-cards");
  less.classList.toggle("hidden-cards");
});

less.addEventListener("click", () => {
  speakersCards.forEach((ele) => ele.classList.toggle("hidden-cards"));
  show.classList.toggle("hidden-cards");
  less.classList.toggle("hidden-cards");
});

console.log(speakersCards);
