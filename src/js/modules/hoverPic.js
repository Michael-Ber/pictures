const hoverPic = (blockSelector, imgSelector) => {
    // const sizesBlocks = document.querySelectorAll(blockSelector),
    //       sizesImg = document.querySelectorAll(imgSelector);
    // sizesBlocks.forEach((block, i) => {
    //     block.addEventListener('mouseover', function () {
    //         sizesImg[i].src = `../../assets/img/sizes-${i+1}-1.png`;
    //         sizesImg[i].style.zIndex = '1000';
    //         sizesImg[i].style.position = 'relative';
    //     });
    //     block.addEventListener('mouseout', function() {
    //         sizesImg[i].src = `../../assets/img/sizes-${i+1}.png`;
    //         sizesImg[i].style.zIndex = 'unset';
    //         sizesImg[i].style.position = 'unset';
    //     });
    // });
    //
    const blocks = document.querySelectorAll(blockSelector);

    function showPic(block) {
        const pic = block.querySelector('img');
        pic.src = pic.src.slice(0, -4) + '-1.png';
        block.querySelectorAll('p:not(.sizes-hit)').forEach(par => {
            par.style.display = 'none';
        });
    }

    function hidePic(block) {
        const pic = block.querySelector('img');
        pic.src = pic.src.slice(0, -6) + '.png';
        block.querySelectorAll('p:not(.sizes-hit)').forEach(par => {
            par.style.display = 'block';
        });
    }

    blocks.forEach(block => {
        block.addEventListener('mouseover', showPic.bind(this, block));
        block.addEventListener('mouseout', hidePic.bind(this, block));
    });


};

export default hoverPic;