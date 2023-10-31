let mybutton = document.getElementById("myBtn");
let isCurriculumPage = window.location.pathname.endsWith("curriculum_vitae.html");
if (isCurriculumPage) {
    mybutton.classList.add("back-to-top-btn-curriculum");
}

window.onscroll = function() { scrollFunction(); };

function scrollFunction() {
    let scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
    let scrolledPast = window.scrollY || document.documentElement.scrollTop; 
    let scrollThreshold = isCurriculumPage ? 0.70 : 0.50;

    if (scrolledPast > scrollTotal * scrollThreshold) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}
document.querySelector('.image-to-rotate').addEventListener('click', function() {
    this.classList.toggle('rotate360');
});

