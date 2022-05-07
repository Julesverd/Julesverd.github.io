const toggleButton = document.getElementsByClassName('hamburger')[0]
const navbarLinks = document.getElementsByClassName('navigation-items')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})


const timeContainer = document.getElementById("time-container");
const BIRTH_DAY = "2-02-2022";
const BIRTH_DAY_DATE = new Date(BIRTH_DAY);
const intlNumberFormatter = new Intl.NumberFormat("en-US");
setInterval(() => {
  const now = new Date();
  const difference = Math.floor(
    (now.getTime() - BIRTH_DAY_DATE.getTime()) / 1000
  );
  timeContainer.innerText = intlNumberFormatter.format(difference);
}, 1000);