$(function(){
    //variaveis para formulário..
    var atual_fs, next_fs, prev_fs;

    //quando eu clicar em próximo
    $('.next').click(function(){

        //pega o primeiro fieldset e passa pro próximo
        atual_fs = $(this).parent();
        next_fs = $(this).parent().next();

        //pega etapa atual na barra de progresso
        //adciona ativo pro próximo fieldset
        $('#progress li').eq($('fieldset').index(next_fs)).addClass('ativo')
        atual_fs.hide(550);
        next_fs.show(550);
    });

    //se clicar em anterior
    $('.prev').click(function(){

        //pega o  fieldset atual e passa pro anterior
        atual_fs = $(this).parent();
        prev_fs = $(this).parent().prev();
        
        //pega etapa atual na barra de progresso
        //removo ativo do atual fieldset
        $('#progress li').eq($('fieldset').index(atual_fs)).removeClass('ativo')
        atual_fs.hide(550);
        prev_fs.show(550);
    });

    //tirar o get do submit
    $("#form button[type=submit]").click(function(){
        return false;
    });

});