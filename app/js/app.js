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


    function initCopyPromocode() {
        const promocodes = document.querySelectorAll('.bonuses__promocode');

        promocodes.forEach(code => {
            code.addEventListener('click', () => {
                
                const str = code.querySelector('input').value;
                const el = document.createElement('input');
                el.value = str;
                el.setAttribute('readonly', '');
                el.style.position = 'absolute';
                el.style.left = '-9999px';
                document.body.appendChild(el);
                el.select();
                document.execCommand('copy');
                document.body.removeChild(el);
            })
        })
    }

    function initArticlesSlider() {
        if (document.querySelector('.articles-slider')) {
            const swiper = new Swiper('.articles-slider__inner', {
                loop: true,
                slidesPerView: 3,
                slidesPerGroup: 1,
                spaceBetween: 40,
                navigation: {
                    nextEl: '.articles-slider__next',
                    prevEl: '.articles-slider__prev',
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    641: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                }
            });
        }
        
        }

        


    initArticlesSlider();
    initMenu();
    initCopyPromocode();
})
