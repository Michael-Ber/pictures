const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector, deleteOpenSelector=false) {
        const openBtn = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              closeBtn = document.querySelectorAll(closeSelector);
        
        openBtn.forEach(button => {
            button.addEventListener('click', () => {
                modal.style.display = 'block';
                modal.setAttribute('data-active', true);
                document.body.style.overflow = 'hidden';
                if(deleteOpenSelector) {
                    document.querySelector(triggerSelector).style.display = 'none';
                }
            });
        });

        closeBtn.forEach(button => {
            button.addEventListener('click', () => {
                modal.style.display = 'none';
                modal.removeAttribute('data-active');
                document.body.style.overflow = '';
                if(deleteOpenSelector) {
                    document.querySelector(triggerSelector).style.display = 'block';
                }
            });
        });

        modal.addEventListener('click', (e) => {
            if(e.target && ((e.target.getAttribute('data-modal') == '')|| e.target.getAttribute('data-close') == '')) {
                modal.style.display = 'none';
                modal.removeAttribute('data-active');
                document.body.style.overflow = '';
                if(deleteOpenSelector) {
                    document.querySelector(triggerSelector).style.display = 'block';
                }
            }
        });
    }

    bindModal('.button-design', '.popup-design', '.popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-close');
    bindModal('.fixed-gift', '.popup-gift', '.popup-close', true);
};

export default modals;