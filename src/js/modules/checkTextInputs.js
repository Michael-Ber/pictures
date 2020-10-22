
const checkTextInputs = (selector) =>{
    const txtInputs = document.querySelectorAll(selector);
 
    txtInputs.forEach(input => {
  
        input.addEventListener('input', () => {
            input.value=input.value.replace(/[A-Za-z]/g,'');
            input.style.boxShadow = 'inset 0 0 0 50px #fff';
        });
    });
};


export default checkTextInputs;