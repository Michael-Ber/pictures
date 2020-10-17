import postData from "../services/postData";

const form = (formSelector) => {
    const forms = document.querySelectorAll(formSelector);
    const upload = document.querySelectorAll('[name = "upload"]');
    const messageBox = {
        loading: "идет отправка",
        success: "Спасибо! Скоро мы с вами свяжемся",
        failure: "Что-то пошло не так",
        spinner: "assets/img/spinner.gif",
        ok: "assets/img/ok.png",
        fail: "assets/img/fail.png"
    };
    const path = {
        designer: "assets/server.php",
        question: "assets/question.php"
    };
    let statusMessage;
    
    upload.forEach(input => {
        input.addEventListener('input', () => {
            let dots;
            let arr = input.files[0].name.split('.');
            arr[0].length > 6 ? dots = '...' : dots ='.';
            const name = arr[0] + dots + arr[1];   
            input.previousElementSibling.textContent = name;
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
            statusImg.classList.add('animated', 'fadeInUp');
            statusMessage.style.cssText = `
                margin: 30px auto 0 auto;
                font-size: 20px;
                color: red;
                text-align: center;
            `;
            statusMessage.textContent = messageBox.loading;
            form.parentNode.append(statusImg);
            form.parentNode.append(statusMessage); 
            form.classList.add('animated', 'fadeOutUp');
            setTimeout(() => {
                form.style.display = 'none';
            }, 400);
            

            let formData = new FormData(form);
            let api;
            
            form.closest('.popup-design') || form.classList.contains('calc_form') ? api = path.designer : api = path.question;
            console.log(api);


            postData(api, formData)
                .then(data => console.log(data))
                .then(() => {
                    statusMessage.textContent = messageBox.success;
                    statusImg.setAttribute('src', messageBox.ok);
                    
                })
                .catch(() => {
                    statusMessage.textContent = messageBox.failure;
                    statusImg.setAttribute('src', messageBox.fail);
                })
                .finally(() => {
                    form.reset();
                    upload.forEach(input => {
                        input.previousElementSibling.textContent = 'Файл не выбран';
                    });
                    setTimeout(() => {
                        statusMessage.remove();
                        statusImg.remove();
                        form.classList.remove('fadeOutUp');
                        form.classList.add('fadeInUp');
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