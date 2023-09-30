// js
wow = new WOW(
    {
        boxClass: 'wow',      
        animateClass: 'animated', 
        offset: 10,          
        mobile: false,       
        live: true      
    }
)
wow.init();

// jq
$(document).ready(function () { })

//counterUp start 
$('.counter').counterUp({
    delay: 10,
    time: 1000
});

// $(selector).countMe(delay,speed)
$("#counter").countMe(40,65);

// num-counting
$('#my-number').counto(12345, 5000);
