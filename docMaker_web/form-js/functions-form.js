$(function(){
    //variaveis para formulário..
    var atual_fs, next_fs, prev_fs;
    //campos do formulario em variaveis
    var nome_doc = document.getElementsByName("documento_nome").value;
    var versao_doc = document.getElementsByName("documento_versao").value;
    var status_doc = document.getElementsByName("documento_status").value;
   // var formulario = $('form[name=formulario]');

   if(nome_doc == '' || versao_doc == ''|| status_doc == '') {
       alert("Preencha todos os campos!");
    }else{

    }
        
    //quando eu clicar em próximo
    $('.next').click(function(){
 
        //pega o primeiro fieldset e passa pro próximo
        atual_fs = $(this).parent();
        next_fs = $(this).parent().next();

        //pega etapa atual na barra de progresso
        //adciona ativo pro próximo fieldset
        $('#progress li').eq($('fieldset').index(next_fs)).addClass('ativo');
        atual_fs.hide(550);
        next_fs.show(550);
    });

    //se clicar em anterior
    $('.prev').click(function(){

        //pega o  fieldset atual e passa pro anterior
        atual_fs = $(this).parent();
        prev_fs = $(this).parent().prev();
        
        //pega etapa atual na barra de progresso
        //removo ativo do atual fieldsets
        $('#progress li').eq($('fieldset').index(atual_fs)).removeClass('ativo');
        atual_fs.hide(550);
        prev_fs.show(550);
    });

 /*   $('input[name=next1]').click(function(){ //isso daqui não funcionou, lembrar de apagar
        var array = formulario.serializeArray();
        if(array[0].value == '' || array[1].value == '' || array[2].value == ''){
           // $('.resp').html('<div class="erros"><p>Preencha todos os campos obrigatórios!</p> </div>');
           alert( "Preencha os campos corretamente!" );
        }else{
            $('.resp').html('');
            next($(this));
        }
    
        $('.erros').html('<p>Teste</p>');
    });*/


    //tirar o get do submit
    $("#form button[type=submit]").click(function(){
        return false;
    });

});
