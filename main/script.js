//code for toggle menu-icon
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-circle-xmark");
  navbar.classList.toggle("active");
};



/*for active link, first we have to grab all the section*/
const sections = document.querySelectorAll("section");

//grab all the a in the header and nav
const navLinks = document.querySelectorAll("header nav a");

//add an eventlistener to window
window.addEventListener("scroll", () => {

  //loop through the sections to get the attributes
  sections.forEach(sec => {

    const secTop = sec.offsetTop - 150;
    //offsetTop and Height are window properties.
    const secHeight = sec.offsetHeight;
    const top = window.scrollY;

    const currentPage = sec.getAttribute("id");

    if (top >= secTop && top < secTop + secHeight) {

      //loop through navLinks to get attributes
      navLinks.forEach(link => {

        //first remove all active class
        link.classList.remove("active");
        document.querySelector("header nav a[href*=" +currentPage+ "]").classList.add("active");

      }) 
    };

  });
  /* for sticky navbar*/
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  /*remove toggle and navbar when you click a link or scrol*/ 
  menuIcon.classList.remove("fa-circle-xmark");
  navbar.classList.remove("active");
});


/*scroll reveal, internet dependency*/


ScrollReveal({
  //reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });

ScrollReveal().reveal(".home-img, .services-container, .portfolio-box, .contact form", { origin: "bottom" });

ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });

ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

/*typed js*/
const typed = new Typed(".multiple-text",{
  strings: ["Web Developer", "JavaScript, React", "Python", "Git / GitHub", "UI / UX Designer", "Data Analyst", "Script Writer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
})