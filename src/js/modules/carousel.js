const carousel = (slides, dir, prev, next) => {

    let slideIndex = 1, paused;
    const slideItems = document.querySelectorAll(slides);
          
    function showSlides(n) {
        if(n > slideItems.length) {
            slideIndex = 1;
        }
        if(n < 1) {
            slideIndex = slideItems.length;
        }
        slideItems.forEach(item => {
            item.classList.add('animated');
            item.style.display = 'none';
        });
        slideItems[slideIndex-1].style.display = 'block';
    }
    showSlides(slideIndex);

    function plusSlide(n) {
        showSlides(slideIndex += n);
    }

    
    try {
        const prevBtn = document.querySelector(prev),
              nextBtn = document.querySelector(next);

        prevBtn.addEventListener('click', () => {
            plusSlide(-1);
            slideItems[slideIndex-1].classList.remove('slideInLeft');
            slideItems[slideIndex-1].classList.add('slideInRight');
        });
        nextBtn.addEventListener('click', () => {
            plusSlide(1);
            slideItems[slideIndex-1].classList.remove('slideInRight');
            slideItems[slideIndex-1].classList.add('slideInLeft');
        });
    }catch(e) {}

    function moveSlidesAuto() {
        if(dir === 'vertical') {
            paused = setInterval(() => {
                plusSlide(1);
                slideItems[slideIndex-1].classList.add('slideInDown');
            }, 3000);
        }else {
            document.querySelector('.feedback').style.overflow = 'hidden';
            paused = setInterval(() => {
                plusSlide(1);
                
                slideItems[slideIndex-1].classList.remove('slideInLeft');
                slideItems[slideIndex-1].classList.add('slideInRight');
            }, 3000);
        }
    }
    moveSlidesAuto();

    slideItems[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });
    slideItems[0].parentNode.addEventListener('mouseleave', () => {
        moveSlidesAuto();
    });

};

export default carousel;