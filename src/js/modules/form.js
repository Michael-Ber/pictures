import postData from "../services/postData";

const form = (formSelector) => {
    const forms = document.querySelectorAll(formSelector);
    const messageBox = {
        loading: "идет отправка",
        success: "Спасибо! Скоро мы с вами свяжемся",
        failure: "Что-то пошло не так",
        spinner: "assets/img/spinner.gif",
        ok: "assets/img/ok.png",
        fail: "assets/img/fail.png"
    };
    let statusMessage;
    let fileUploadInputs = document.querySelectorAll('[type = "file"]');
    fileUploadInputs.forEach(input => {
        input.addEventListener('input', () => {
            
            if(input.files[0].name.length > 6) {
                console.log('here');
                input.files[0].name.split(0, 6);
            }else {
                input.files[0].name.split(0, 9);
                console.log('here2');
            }
            console.log(input.files[0].name);
        });
        
    });
    forms.forEach(form => {
        let phoneInputs = document.querySelectorAll('[name = phone]');
        // phoneInputs.forEach(input => {
        //     input.addEventListener('click', () => {
        //         input.value = '7___ __ __ ___';
        //     });
  
        // });
        
        
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            

            statusMessage = document.createElement('div');
            let statusImg = document.createElement('img');
            statusImg.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            statusImg.setAttribute('src', messageBox.spinner);
            statusMessage.style.cssText = `
                margin: 30px auto 0 auto;
                font-size: 20px;
                color: red;
                text-align: center;
            `;
            statusMessage.textContent = messageBox.loading;
            form.append(statusImg);
            form.append(statusMessage); 
            

            let formData = new FormData(form);
            
            postData("../../../assets/server.php", formData)
                .then(data => console.log(data))
                .then(() => {
                    form.style.display = 'none';
                    statusMessage.textContent = messageBox.success;
                    statusImg.setAttribute('src', messageBox.ok);
                    form.parentNode.append(statusImg);
                    form.parentNode.append(statusMessage);
                    
                })
                .catch(() => {
                    form.style.display = 'none';
                    statusMessage.textContent = messageBox.failure;
                    statusImg.setAttribute('src', messageBox.fail);
                    form.parentNode.append(statusImg, statusMessage);
                })
                .finally(() => {
                    form.reset();
                    setTimeout(() => {
                        statusMessage.remove();
                        statusImg.remove();
                        form.classList.add('animated', 'fadeInDown');
                        form.style.display = 'block';
                    }, 3000);
                    
                });
        });


    });
    function showThanksModal(message) {
        const prevModal = document.querySelector('[data-active]'),
              prevDialogScreen = prevModal.querySelector('.popup-dialog');
        prevDialogScreen.style.display = 'none';
        let newDialogScreen = document.createElement('div');
        newDialogScreen.classList.add('popup-dialog');
        newDialogScreen.innerHTML = `
            <div class=popup-content>
                <button class=popup-close data-close>&times;</button>
                <h4>${message}</h4>
            </div>
        `;
        prevModal.append(newDialogScreen);
        let timerId = setTimeout(() => {
            newDialogScreen.remove();
            prevDialogScreen.style.display = 'block';
        }, 3000);

    }
};

export default form;