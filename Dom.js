

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
