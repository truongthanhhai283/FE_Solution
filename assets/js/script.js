// comment js -> // || /* */

var person = {
    name: 'Trương Thanh Hải',
    age: 18,
    address: 'Đà Nẵng'
}

function displayInfo() {
    console.log(person.name);
}

displayInfo();

$(function() {
    // How to use jQuery
    // $('.box-2').slideUp(1000).slideDown(1000);

    $('.box-2').css({
        color: 'red',
        width: '1000'
    });

    $('.box-2').click(function() {
        $('.box-2').css({
            background: 'green'
        });

        $('.box-2').mouseover(function() {
            color: 'red'
        });
    });
})

$(window).on('load', function() {

});