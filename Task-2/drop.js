const dropdownLinks = document.querySelectorAll('.drop li a');
const setActiveLink = () => {
    const scrollPosition = window.scrollY;

    dropdownLinks.forEach(link => {
        const sectionID = link.getAttribute('href');
        if (sectionID && sectionID.startsWith('#')) {
            const section = document.querySelector(sectionID);

            if (section) {
                const sectionTop = section.offsetTop - 100; // Adjust for header height if needed
                const sectionHeight = section.offsetHeight;
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    dropdownLinks.forEach(link => link.classList.remove('active'));
                    link.classList.add('active');
                }
            }
        }
    });
};

window.addEventListener('scroll', setActiveLink);
setActiveLink();
