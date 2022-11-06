const timer = (id, deadline) => { // функция которая считает сколько дней, часов, секунд

    const addZero = (num) => { // функция которая подстовляет 0 перед одинарными числами
        if (num <= 9){
            return '0' + num;
        } else {
            return num;
        }
    }

    const getTimerRemaining = (endtime) => {
        const t = Date.parse(endtime) - Date.parse(new Date()), //new Date содержит текущее время в мл
        seconds = Math.floor((t/1000) % 60), // метод floor() объекта Math вычисляет и возвращает наибольшее целое число, которое меньше или равно переданному числу (округляет число вниз)
        minutes = Math.floor((t/1000/60) % 60), // число разделится с остатком на 60
        hours = Math.floor ((t/(1000 * 60 * 60)) % 24),
        days = Math.floor ((t/(1000 * 60 * 60 * 24)));

        

    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };    
        
    };

    const setClock = (selector, endtime) => { // функция которая будет подставлять значение нужному элементу
        const timer = document.querySelector(selector), 
                days = timer.querySelector('#days'),
                hours = timer.querySelector('#hours'),
                minutes = timer.querySelector('#minutes'),
                seconds = timer.querySelector('#seconds'),
                timeInterval = setInterval(updateClock, 1000); // setInterval позволяет вызывать функцию регулярно, повторяя вызов через определённый интервал времени.

    updateClock();  
                
    function updateClock(){ // функция которая обновляет время каждую секунду
        const t = getTimerRemaining(endtime);

        days.textContent = addZero(t.days);
        hours.textContent = addZero(t.hours);
        minutes.textContent = addZero(t.minutes);
        seconds.textContent = addZero(t.seconds);

        if (t.total <= 0){
            days.textContent = '00';
            hours.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';

            clearInterval(timeInterval);
        }

       
    }

    }

    setClock(id, deadline);
}

export default timer;