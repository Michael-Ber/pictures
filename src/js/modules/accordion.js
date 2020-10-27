const accordion = (header) => {
    const headers = document.querySelectorAll(header);

    headers.forEach(header => {
        header.addEventListener('click', function() {
            headers.forEach(header => {
                if(!this.classList.contains('ui-accordion-header-active')) {
                    header.classList.remove('ui-accordion-header-active');
                    header.nextElementSibling.style.maxHeight = '0px';
                    header.nextElementSibling.classList.remove('active-content');
                }
            });
            this.classList.toggle('ui-accordion-header-active');
            this.nextElementSibling.classList.toggle('active-content');
            
            if(this.classList.contains('ui-accordion-header-active')) {
                
                this.nextElementSibling.style.maxHeight =  this.nextElementSibling.scrollHeight + 80 + 'px';
            }else {
                this.nextElementSibling.style.maxHeight = '0px';
            }
            
        });
    });
    



    
    
};

export default accordion;