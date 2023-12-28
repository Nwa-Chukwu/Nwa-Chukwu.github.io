//Show menu
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  if(toggle && nav){
    toggle.addEventListener("click", ()=>{
      nav.classList.toggle("show-menu")
    })
  }
}
showMenu("nav-toggle","nav-menu")


//Remove menu
const navLink = document.querySelectorAll (".nav_link")

function linkAction(){
  const navMenu = document.getElementById("nav-menu")
  navMenu.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener("click", linkAction))

//Scroll section active link
const sections = document.querySelector("section[id]")

function scrollActive(){
  const scrollY = window.pageYOffset

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id")

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector(".nav_menu a[href* = " + sectionId + "]").classList.add("active-link")
    }else{
      document.querySelector(".nav_menu a[href* = " + sectionId + "]").classList.remove("active-link")
    }
  })
}

window.addEventListener("scroll", scrollActive)
//show scrolltop
function scrollTop(){
  const scrollTop = document.getElementById("scroll-top");
  //when scroll is higher than 560 viewport, add show-scroll class
  if(this.scrollY >= 200) scrollTop.classList.add("show-scroll"); else scrollTop.classList.remove("show-scroll")
}
window.addEventListener("scroll", scrollTop)

/* Dark and Light themes*/

//Selector
const themeToggleBtn = document.querySelector(".change-theme");

const darkTheme = "dark-theme"
const iconTheme = "fa-moon"

//State
const theme = localStorage.getItem("theme");
const icon = localStorage.getItem("icon");

//On mount/start
theme && document.body.classList.add(theme);
icon && themeToggleBtn.classList.add(icon);

//Handler
handleThemeToggler = () => {
  document.body.classList.toggle("dark-theme");
  themeToggleBtn.classList.toggle("fa-moon");

  if (document.body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark-theme");
  } else {
    localStorage.removeItem("theme");
  }

  if (themeToggleBtn.classList.contains("fa-moon")) {
    localStorage.setItem("icon", "fa-moon");
  } else {
    localStorage.removeItem("icon");
  }
};

//Events
themeToggleBtn.addEventListener("click", handleThemeToggler);


/*Reduce size and print on A4 paper*/
function scaleCv(){
  document.body.classList.add("scale-cv")
}

/*Remove the size after download*/
function removeScale(){
  document.body.classList.remove("scale-cv")
}

/*=========Generate PDF=========*/

let resumeButton = document.getElementById("resume-button");

//html2pdf options
let opt = {
  margin: 0,
  filename: "myResume.pdf",
  image: { type: "jpeg", quality: 0.98 },
  html2canvas: {scale: 4 },
  jsPDF: { format: "a4", orientation: "potrait"}
}



//call function for areaCv and html2pdf
function generateResume(){

  let areaCv = document.getElementById("area-cv");

  html2pdf()
  .from(areaCv)
  .save(opt);
}
//click function
resumeButton.addEventListener("click", () => {
  //add scale-cv class to reduce the body
  scaleCv()

  //generate pdf
  generateResume()

  //set timeout to remove the scale-cv
  setTimeout(removeScale, 5000)
})
