const carousel = (sliderSelector, itemSelector) => {
    const sliderWrapper = document.querySelector(sliderSelector),
          sliderItem = document.querySelectorAll(itemSelector),
          height = sliderItem[0].clientHeight,
          up = document.querySelector('#up'),
          down = document.querySelector('#down');

    let offset = (sliderItem.length - 1) * height;
    let timerId = setInterval(moveSlides, 5000);

    sliderWrapper.style.height = `${height}px`;
    sliderWrapper.style.overflow = 'hidden';

    initSlider();
    
    function moveSlides () {
        if(offset <= 0) {
            offset = height * (sliderItem.length - 1);
        }else {
            offset -= height;
        }
        initSlider(false);
    }

    function initSlider(init = true) {
        sliderItem.forEach(item => {
            if(!init) {
                item.style.transition = `all .5s`;
            }
            item.style.transform = `translateY(${-offset}px)`;
        });
    }

    // up.addEventListener('click', () => {
    //     if(offset >= (height * (sliderItem.length-1))) {
    //         offset = 0;
    //     }else {
    //         offset += height;
    //     }
        
    //     console.log(offset);
    //     sliderItem.forEach((item, i) => {
            
    //         item.style.transform = `translateY(${-offset}px)`;
    //     });
    // });

    // down.addEventListener('click', () => {
    //     if(offset <= 0) {
    //         offset = height * (sliderItem.length - 1);
    //     }else {
    //         offset -= height;
    //     }
    //     console.log(offset);
    //     sliderItem.forEach((item, i) => {
            
    //         item.style.transform = `translateY(${-offset}px)`;
    //     });
    // });

};

export default carousel;