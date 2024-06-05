

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const offset = 60;
        const topPos = target.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
            top: topPos,
            behavior: 'smooth'
        });
    });
});