import postData from "../services/postData";

const form = (formSelector) => {
    const forms = document.querySelectorAll(formSelector);
    const messageBox = {
        loading: "идет отправка",
        success: "Спасибо! Скоро мы с вами свяжемся",
        failure: "Что-то пошло не так"
    };
    let statusMessage;
    forms.forEach(form => {
        let phoneInputs = document.querySelectorAll('[name = phone]');
        phoneInputs.forEach(input => {
            input.value = '+7(___) __ __ ___';
            input.addEventListener('input', function (e) {
               input.value.replace(/\_/ig, input.value);
            });
            
        });
        
        
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let fileUpload = form.querySelector('[type = file]');
            
            let additionData = {
                img: fileUpload.value
            };

            statusMessage = document.createElement('div');
            statusMessage.style.cssText = `
                margin: 30px auto 0 auto;
                font-size: 16px;
                color: red;
                text-align: center;
            `;
            statusMessage.textContent = messageBox.loading;
            form.append(statusMessage); 
            

            let formData = new FormData(form);
            for(let key in additionData) {
                formData.append(key, additionData[key]);
            }
            postData("../../../assets/server.php", formData)
            .then(data => console.log(data))
            .then(() => showThanksModal(messageBox.success))
            .catch(() => showThanksModal(messageBox.failure))
            .finally(() => {
                form.reset();
                statusMessage.remove();
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