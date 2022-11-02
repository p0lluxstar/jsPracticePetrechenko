import checkNumInputs from "./checkNumInputs";

const forms = (state) => {
    const form = document.querySelectorAll('form'),
            inputs = document.querySelectorAll('input');

    checkNumInputs('input[name="user_phone"]'); // функция проверки того что вводятся только числа, эта фукнция отедльный модуль     

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    const postData = async (url, data) => { // функция для отравки запроса на сервер, url - это адреус куда будут уходить данные и data это сами данные. async говорит о том что в функции есть асинхронные операции
        document.querySelector('.status').textContent = message.loading; // Свойство textContent позволяет считывать или задавать текстовое содержимое элемента
        let res = await fetch(url, { // await заставит интерпретатор JavaScript ждать до тех пор, пока промис справа от await не выполнится
            method: "POST",
            body: data
        }); // С помощью функции fetch() можно отправлять сетевые запросы на сервер — как получать, так и отправлять данные

        return await res.text();
    };

    const clearInputs = () => { // функция очищает инпуты после отравки
        inputs.forEach(item =>{
            item.value='';
        })
    };

    form.forEach(item => { // фукнция перебирает все формы 
            item.addEventListener('submit', (e) => { //submit означает срабатывание события при отравки формы
                e.preventDefault();

                let statusMessage = document.createElement('div'); // После отравки данных создается div
                statusMessage.classList.add('status'); // у div будет класс status
                item.appendChild(statusMessage); // метод appendChild будет помещать созданый div в конец формы

                const formData = new FormData(item); // собираются все данные форм
                if (item.getAttribute('data-calc') === 'end'){
                    for(let key in state){
                        formData.append(key, state[key]); //Метод append позволяет вставить в конец какого-либо элемента другой элемент.
                    }
                }
                
                postData('assets/server.php', formData) // запрос отправки данных на сервер server.php с данным formData
                    .then(res => {
                        console.log(res);
                        statusMessage.textContent = message.success;
                    })

                    .catch(()=> statusMessage.textContent = message.failure) // метод .catch() объекта Promise добавляет обработчик или обработчики, которые будут вызваны при изменении состояния объекта Promise на rejected (выполнение отклонено).
                    .finally(()=>{ // метод .finally() объекта Promise добавляет обработчик, который будет вызван вне зависимости от того с каким результатом объект Promise был выполнен (rejected - выполнение отклонено, или fulfilled - успешное выполнение
                        clearInputs();
                        setTimeout(()=>{
                            statusMessage.remove();                   
                        }, 5000);
                    })

            });   
        }
    );
};

export default forms;