const hoverPic = () => {
    const sizesBlocks = document.querySelectorAll('.sizes-block img');
    const hit = document.querySelector('.sizes-hit');
    sizesBlocks.forEach((pic, i) => {
        pic.addEventListener('mouseenter', function () {
            this.src = `../../assets/img/sizes-${i+1}-1.png`;
            this.style.zIndex = '1000';
            this.style.position = 'relative';
        });
        pic.addEventListener('mouseleave', function() {
            this.src = `../../assets/img/sizes-${i+1}.png`;
            this.style.zIndex = 'unset';
            this.style.position = 'unset';
        });
        
    });

};

export default hoverPic;