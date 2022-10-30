const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
    const header = document.querySelector(headerSelector),
            tab = document.querySelectorAll(tabSelector),
            content = document.querySelectorAll(contentSelector);


    function hideTabContent(){ // скрывает определнный контент
        content.forEach(item =>{
            item.style.display = 'none';
        });

        tab.forEach(item =>{ // убирает класс активности у не нужных табов
            item.classList.remove(activeClass);
        })
    };

    function showTabContent(i = 0){ // показывает определенный контент
        content[i].style.display = display;
        tab[i].classList.add(activeClass);
    };

    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) =>{
        const target = e.target;
        if(target &&
            (target.classList.contains(tabSelector.replace(/\./, '')) ||  // Нужно использовать класс без точки. Класс приходит от tabSelector. т.е. что в итоге получалось не target.classList..glazing_block, a target.classList.glazing_block. glazing_block это класс
            target.parentNode.classList.contains(tabSelector.replace(/\./, '')))) {
                tab.forEach((item, i) =>{
                    if (target == item || target.parentNode == item){
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
        });

    header.addEvent
};

export default tabs;