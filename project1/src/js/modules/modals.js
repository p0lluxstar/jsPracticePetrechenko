const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) { // функция показывает модальные окна

        const trigger = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);
        const windows = document.querySelectorAll('[data-modal]'); // в этой переменноый лежат все модальные окна с атрибутом data-modal

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
                    //document.body.classList.add('modal-open');
    
            });
        });
        
        close.addEventListener('click',  () => {
            windows.forEach(item =>{
                item.style.display = 'none';
            })

            modal.style.display = 'none';
            document.body.style.overflow = '';
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

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false); // false не позволить закрыть модельное окно нажав на подложку
    // false не позволить закрыть модельное окно нажав на подложку
    //showModalBuTime('.popup', 60000);
};

export default modals;