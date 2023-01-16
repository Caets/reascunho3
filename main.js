$(document).ready(function(){
$('form').on('submit', function(e){
    e.preventDefault();

    const input = $('#input').val();
    const novoItem = $('<li></li>');
    $(input).appendTo(novoItem);
    $(novoItem).appendTo('ul');
    $(`<a href="#">${input}</a>`).appendTo(novoItem);
    $('ul').on('click','.check' ,function(){
        $(input).parent('li').toggleClass('check');
    })
    })
})
