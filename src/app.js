// Reveal animation

const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("active");
        }

    });

},{
    threshold:0.15
});

document
.querySelectorAll(".reveal")
.forEach(el => observer.observe(el));


// Mobile nav later

const navLinks =
document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click",()=>{

        navLinks.forEach(x=>x.classList.remove("active"));

        link.classList.add("active");

    });

});