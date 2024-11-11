function toggleDropdown() {
    const dropdownMenu = document.querySelector('.dropdownMenu');
    const menuIcon = document.getElementById('menuIcon');
    const closeIcon = document.getElementById('closeIcon');
    
    const isDisplayed = dropdownMenu.style.display === 'block';

    dropdownMenu.style.display = isDisplayed ? 'none' : 'block';
    
    menuIcon.style.display = isDisplayed ? 'block' : 'none';
    closeIcon.style.display = isDisplayed ? 'none' : 'block';
}

const links = document.querySelectorAll('.dropdownMenu a');
links.forEach(link => {
    link.addEventListener('click', () => {
        const dropdownMenu = document.querySelector('.dropdownMenu');
        const menuIcon = document.getElementById('menuIcon');
        const closeIcon = document.getElementById('closeIcon');

        dropdownMenu.style.display = 'none';
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        let offset = 0;
        if (targetId === '#about') {
            offset = 120;
        } else if (targetId === '#contact'){
            offset = 70;
        }

        window.scrollTo({
            top: targetElement.offsetTop - offset,
            behavior: 'smooth'
        });
    });
});
