document.addEventListener('DOMContentLoaded', () => {
    const menuBtn =  document.querySelector('.header__menu-btn');
    const menuClose =  document.querySelector('.header__menu-close');
    const menuContent =  document.querySelector('.header__menu-content');
    const html = document.querySelector('html');

    function initMenu() {
        menuBtn.addEventListener('click', function() {
            menuContent.classList.add('open');
            html.classList.add('overflow-hidden');
        })
    
        menuClose.addEventListener('click', function() {
            closeMenu();
        })

        function closeMenu() {
            menuContent.classList.remove('open');
            html.classList.remove('overflow-hidden');
        }
    }


    initMenu();
})
