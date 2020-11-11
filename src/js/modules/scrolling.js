
const scrolling = (selector) => {
    const upElem = document.querySelector(selector);

    window.addEventListener('scroll', () => {
        if(document.documentElement.scrollTop > 1650) {
            upElem.classList.add('animated', 'fadeIn');
            upElem.classList.remove('fadeOut');
        }else {
            upElem.classList.add('fadeOut');
            upElem.classList.remove('fadeIn');
        }
    });

    // const element = document.documentElement,
    //         body = document.body;
    // const calcScrolling = () => {
    //     upElem.addEventListener('click', function(e) {
    //         let scrollTop = Math.round(element.scrollTop || body.scrollTop);
    //         if(this.hash !== '') {
    //             e.preventDefault();
    //             let hashElement = document.querySelector(this.hash),
    //                 hashElementTop = 0;
    //             while(hashElement.offsetParent) {
    //                 hashElementTop += hashElement.offsetTop;
    //                 hashElement = hashElement.offsetParent;
    //             }
    //             hashElementTop = Math.round(hashElementTop);
    //             smoothScroll(scrollTop, hashElementTop, this.hash);
    //         }
           
    //     });
    // };

    // const smoothScroll = (from, to, hash) => {
    //     let timeInterval = 1,
    //         prevScrollTop,
    //         speed;
        
    //     if(to > from) {
    //         speed = 30;
    //     }else {
    //         speed = -30;
    //     }

    //     let move = setInterval(function() {
    //         let scrollTop = Math.round(element.scrollTop || body.scrollTop);
    //         if (
    //             prevScrollTop === scrollTop || 
    //             (to > from && scrollTop >= to) || 
    //             (to < from && scrollTop <= to)
    //         ) {
    //             clearInterval(move);
    //             history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
    //         }else {
    //             body.scrollTop += speed;
    //             element.scrollTop += speed;
    //             prevScrollTop = scrollTop;
    //         }
    //     },timeInterval);
    // };
    // calcScrolling();

    

    let links = document.querySelectorAll('[href^="#"]'),
        speed = 0.3;
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let hash = this.hash,
                widthTop = document.documentElement.scrollTop,
                toBlock = document.querySelector(hash).getBoundingClientRect().top,
                start = null;
            
            requestAnimationFrame(step);

            function step(time) {
                if(start === null) {
                    start = time;
                }
                let progress = time - start,
                    r = (toBlock < 0 ? Math.max(widthTop - progress/speed, widthTop + toBlock) : Math.min(widthTop + progress/speed, widthTop + toBlock));
                console.log(`time: ${time}, start: ${start}, progress: ${progress}, toBlock: ${toBlock}`);    
                document.documentElement.scrollTo(0, r);
                if(r != widthTop + toBlock) {
                    requestAnimationFrame(step);
                }else {
                    location.hash = hash;
                }
            }
        });
    });
};

export default scrolling;