

const hamMenu = document.querySelector('.ham-menu')

const offScreenMenu = document.querySelector('.ham-offscreen')

hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active')
  offScreenMenu.classList.toggle('active')
}
)


function filterPage() {
  let dropdown = document.getElementById("monsterDropdown");
  let selectedMonster = dropdown.value;
  let pages = document.getElementsByClassName("monster-page");

  for (let i = 0; i < pages.length; i++) {
    pages[i].style.display = "none";
  }

  if (selectedMonster) {
    document.getElementById(selectedMonster).style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let dropdown = document.getElementById("monsterDropdown");
  let audio = document.getElementById("monsterAudio");
  let source = document.getElementById("audioSource");

  dropdown.addEventListener("change", function () {
    let selectedValue = this.value;

    if (selectedValue === "monsterMash") {
      source.src = "./audio/monster-mash.mp3";
      audio.load();
      audio.play();

      // Add animation class to body and select dropdown
      document.body.classList.add("monster-mash-effect");
      dropdown.classList.add("monster-mash-effect");
      audio.classList.add("monster-mash-effect");

    } else {
      audio.pause();
      audio.currentTime = 0;

      // Remove animation class when another option is selected
      document.body.classList.remove("monster-mash-effect");
      dropdown.classList.remove("monster-mash-effect");
      audio.classList.remove("monster-mash-effect");
    }
  });
});