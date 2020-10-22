import {getResource} from "../services/requests";

const moreStyles = (btnSelector, parentSelector, visibleClass) => {
    const elemsParent = document.querySelector(parentSelector),
          btnMore = document.querySelector(btnSelector);

    btnMore.addEventListener('click', () => {
        let spinner = document.createElement('img');
        spinner.src = "assets/img/spinner.gif";
        spinner.style.cssText = `
            display: block;
            margin: 0 auto;
            max-width: 50px;
            max-height: 50px;
            object-fit: cover;
        `;
        elemsParent.append(spinner);
        getResource('db.json')
            .then(response => createCard(response.styles))
            .catch((error) => {
                let message = document.createElement('span');
                message.style.cssText = `
                    display: block;
                    color: red;
                    text-align: center;
                    font-size: 18px;
                    margin-bottom: 40px;
                `;
                message.textContent = 'Что-то пошло не так. Проверьте ваше интернет соединение!';
                elemsParent.append(message);
                setTimeout(() => {
                    message.remove();
                }, 6000);

            })
            .finally(() => {
                spinner.remove();
            });

        btnMore.remove();
    });

    function createCard(response) {
        response.forEach(item => {
            let div = document.createElement('div');
            div.classList.value = visibleClass + ' animated' + ' fadeIn';
            div.innerHTML = `
                <div class=styles-block>
                    <img src=${item.src} alt>
                    <h4>${item.title}</h4>
                    <a href=${item.link}>Подробнее</a>
                </div>
            `;
            elemsParent.append(div);
        });
    }
};

export default moreStyles;