const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) { // функция показывает модальные окна

        const trigger = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);
        const windows = document.querySelectorAll('[data-modal]'); // в этой переменноый лежат все модальные окна с атрибутом data-modal
        const scroll = calcScroll(); 

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target){
                    e.preventDefault()
                }

                windows.forEach(item =>{
                    item.style.display = 'none';
                })

                    modal.style.display = 'block';
                    document.body.style.overflow = 'hidden';
                    document.body.style.marginRight = `${scroll}px`;
                    //document.body.classList.add('modal-open');
    
            });
        });
        
        close.addEventListener('click',  () => {
            windows.forEach(item =>{
                item.style.display = 'none';
            })

            modal.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
            //document.body.classList.remove('modal-open');
                                                                                        
        });

        modal.addEventListener('click', (e) =>{ // подложка, e - объект события
            // console.log(e.target) - <div class='popup_engineer'></div>
            if (e.target === modal && closeClickOverlay){ 
                windows.forEach(item =>{
                    item.style.display = 'none';
                })
                modal.style.display = 'none';
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;
               //document.body.classList.remove('modal-open');

            }
        });
    }

    function showModalBuTime(selector, time){ // появление модального окна через заданное время
        setTimeout(function(){
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = '';
        }, time)
    };

    function calcScroll(){ // фукнция подсчитывает ширину скролинга браузера
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false); // false не позволить закрыть модельное окно нажав на подложку
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);// false не позволить закрыть модельное окно нажав на подложку
    //showModalBuTime('.popup', 60000);
};


export default modals;