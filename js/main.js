class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 200;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 100;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Init On DOM Load
document.addEventListener("DOMContentLoaded", init);

// Init App
let mindStone = document.querySelector(".mind");
let spaceStone = document.querySelector(".space");
let timeStone = document.querySelector(".time");
let realityStone = document.querySelector(".reality");
let soulStone = document.querySelector(".soul");
let powerStone = document.querySelector(".power");

let goc = document.querySelector(".gameofcodes");
let ck = document.querySelector(".codekaksha");
let blog = document.querySelector(".blogger");
let bt = document.querySelector(".brainTeaser");
let cg = document.querySelector(".college_glance");
let comp = document.querySelector(".competitive");
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
  stones();
}
function stones() {
  mindStone.addEventListener("click", () => {
    displayItem("gameofcodes");
  });
  timeStone.addEventListener("click", () => {
    displayItem("codekaksha");
  });
  realityStone.addEventListener("click", () => {
    displayItem("blogger");
  });
  soulStone.addEventListener("click", () => {
    displayItem("brainTeaser");
  });
  powerStone.addEventListener("click", () => {
    displayItem("college_glance");
  });
  spaceStone.addEventListener("click", () => {
    displayItem("competitive");
  });
}
function displayItem(className) {
  console.log("hey");
  goc.classList.add("hidden");
  ck.classList.add("hidden");
  bt.classList.add("hidden");
  blog.classList.add("hidden");
  cg.classList.add("hidden");
  comp.classList.add("hidden");

  document.querySelector(`.${className}`).classList.remove("hidden");
}
