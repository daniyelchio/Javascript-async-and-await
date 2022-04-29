const toggleButton = document.getElementById('toggle');
const navList = document.getElementById('navList')

toggleButton.addEventListener('click', () => {
  navList.classList.toggle('active');
})