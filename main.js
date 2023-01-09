$('form').on('submit', function(e){
    e.preventDefautl();

    const input = $('#input').val();
    const novoItem = $('<li></li>');
    $(input).appendTo(novoItem);
    $(novoItem).appendTo('ul');
})
