document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Verifica se o href é "#Home"
        if (this.getAttribute('href') === '#Home') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            const target = document.querySelector(this.getAttribute('href'));
            const topPos = target.getBoundingClientRect().top + window.pageYOffset;

            window.scrollTo({
                top: topPos,
                behavior: 'smooth'
            });
        }
    });
});