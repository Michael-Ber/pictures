import {postData} from "../services/requests";

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
  
};

export default form;