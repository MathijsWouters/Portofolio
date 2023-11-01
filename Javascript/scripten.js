let mybutton = document.getElementById("myBtn");

function scrollFunction() {
    let footerTop = document.querySelector('footer').offsetTop;
    let footerHeight = document.querySelector('footer').offsetHeight;
    let scrolledPast = window.scrollY || document.documentElement.scrollTop; 

    if (scrolledPast + window.innerHeight > footerTop) {
        mybutton.style.display = "block";
        let overlap = (scrolledPast + window.innerHeight) - footerTop;
        mybutton.style.bottom = footerHeight - overlap + 'px';
    } else {
        mybutton.style.display = "none";
    }
}

scrollFunction();  
window.onscroll = scrollFunction;

function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}

document.querySelector('.image-to-rotate').addEventListener('click', function() {
    this.classList.toggle('rotate360');
});

