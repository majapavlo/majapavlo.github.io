let isMenuOpen = false;

const trigger = document.getElementById('menu-trigger');
trigger.addEventListener('click', function(e) {
    e.stopPropagation();
    isMenuOpen = !isMenuOpen;

    const element = document.getElementById('menu-links');

    if (isMenuOpen) {
        element.classList.remove('hide');
        // element.style.display = 'block';
    } else {
        element.classList.add('hide');
        // element.style.display = 'none';
    }
});

window.addEventListener('click', function(e) {
    if (e.target != trigger) {
        isMenuOpen = false;

        const element = document.getElementById('menu-links');
        element.classList.add('hide');
        // element.style.display = 'none';
    }
});
