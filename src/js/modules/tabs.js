const tabs = (tabItemSelector, tabContentSelector) => {
    const tabItem = document.querySelector(tabItemSelector),
          tabContent = document.querySelectorAll(tabContentSelector),
          emptyContent = document.querySelector('.portfolio-no');

    tabContent.forEach(item => {
        item.classList.add('animated', 'fadeIn');
    });
    
    tabItem.addEventListener('click', (e) => {
        let target = e.target;
        hideTabContent();
        if(target && target.classList.contains('lovers')) {
            showTabContent('lovers');
        }else if(target && target.classList.contains('chef')) {
            showTabContent('chef');
        }else if(target && target.classList.contains('girl')) {
            showTabContent('girl');
        }else if(target && target.classList.contains('guy')) {
            showTabContent('guy');
        }else if(target && target.classList.contains('grandmother')) {
            showTabContent('grandmother');
        }else if(target && target.classList.contains('granddad')) {
            showTabContent('granddad');
        }else if(target && target.classList.contains('all')) {
            showTabContent('all');
        }
        
    });

    function showTabContent(actualClass) {
        tabContent.forEach(item => {
            if(item.classList.contains(actualClass)) {
                item.style.display = 'block';
            }
            if(actualClass == 'grandmother' || actualClass == 'granddad') {
                emptyContent.style.display = 'block';
            }else {
                emptyContent.style.display = 'none';
            }
        });
        tabItem.children.forEach(item => {
            item.classList.add('animated', 'fadeIn');
            if(item.classList.contains(actualClass)) {
                item.classList.add('active');
            }
        });
    }

    function hideTabContent() {
        tabContent.forEach(item => {
            item.style.display = 'none';
        });
        tabItem.children.forEach(item => {
            item.classList.remove('active');
        });
        emptyContent.style.display = 'none';
    }
};

export default tabs;