const modals = () => {
    let btnPressed;
    function bindModal(triggerSelector, modalSelector, closeSelector, deleteOpenSelector=false) {
        const openBtn = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              closeBtn = document.querySelectorAll(closeSelector),
              windows = document.querySelectorAll('[data-modal]'),
              scrollWidth = getScrollBarWidth();
    
        openBtn.forEach(button => {
            button.addEventListener('click', () => {
                windows.forEach(window => {
                    window.style.display = 'none';
                    window.classList.add('animated', 'fadeIn');
                });
                modal.style.display = 'block';
                modal.setAttribute('data-active', true);
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = scrollWidth + 'px';
                document.querySelector('.fixed-gift').style.right = `calc(2rem + ${scrollWidth}px)`;
                btnPressed = true;
                if(deleteOpenSelector) {
                    button.remove();
                }
                
            });
        });

        closeBtn.forEach(button => {
            button.addEventListener('click', () => {
                modal.style.display = 'none';
                modal.removeAttribute('data-active');
                document.body.style.overflow = '';
                document.body.style.marginRight = 0 + 'px';
                if(document.querySelector('.fixed-gift')) {
                    document.querySelector('.fixed-gift').style.right = '2rem';
                }
                
            });
        });

        modal.addEventListener('click', (e) => {
            if(e.target && ((e.target.getAttribute('data-modal') == '')|| e.target.getAttribute('data-close') == '')) {
                modal.style.display = 'none';
                modal.removeAttribute('data-active');
                document.body.style.overflow = '';
                document.body.style.marginRight = 0 + 'px';
                if(document.querySelector('.fixed-gift')) {
                    document.querySelector('.fixed-gift').style.right = '2rem';
                }
                
            }
        });

        
    }
    function showModalByTime(selector, time) {
        
        setTimeout(() => {
            let display;
            document.querySelectorAll('[data-modal]').forEach(item => {
                if(getComputedStyle(item).display !== 'none') {
                    display = 'block';
                }
            });
            if(!display) {
                document.querySelector(selector).style.display = 'block';
                document.querySelector(selector).setAttribute('data-active', true);
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = getScrollBarWidth() + 'px';
                if(document.querySelector('.fixed-gift')) {
                    document.querySelector('.fixed-gift').style.right = '2rem';
                }
            }
        }, time);
    }
    
    function showModalOnScroll(selector, deleteOpenSelector) {
        window.addEventListener('scroll', () => {
            let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight); // Для оптимизации под старые браузеры(см. режимы браузера)
            let sum = window.pageYOffset + document.documentElement.clientHeight;
            if(sum == scrollHeight && !btnPressed) {
                document.querySelector(selector).click();
            }
        }); 
    }

    function getScrollBarWidth() {
        let div = document.createElement('div');
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';
        document.body.append(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
        return scrollWidth;
    }

    showModalOnScroll('.fixed-gift', true);
    showModalByTime('.popup-consultation', 60000);

    bindModal('.button-design', '.popup-design', '.popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-close');
    bindModal('.fixed-gift', '.popup-gift', '.popup-close', true);
};

export default modals;