 'use strict';
$(function(){
    var html = $('#user_tmpl').html();
    var questions = [
                {   question: 'Кто стал родоначальником футбола?',
                    answer1: 'Бразилия',
                    answer2: 'Англия',
                    answer3: 'Германия',
                    key: 1
               },
               {    question: 'Какой клуб становился больше всех победителем лиги чемпионов?',
                    answer1: "Реал",
                    answer2: "Милан",
                    answer3: "Ливерпуль",
                    key: 1
               },
               {    question: 'Первый чемпион украины по футболу?',
                    answer1: "Динамо",
                    answer2: "Шахтер",
                    answer3: "Таврия",
                    key: 3
               }];
    
   var content = tmpl(html, {data : questions});
    $('body').append(content);
    
   
    $('.checkbox').on('click', function(){
    $(this).parent().siblings().children().filter(':checked').not(this).removeAttr('checked');
    });
    
    
    var str = JSON.stringify(questions);
    var obj = JSON.parse(str);
    
    var $modal_window = $('.modal_window');
    var $modal_answers = $modal_window.children();
    var $tryAgain_button = $('.try_again');
    
    
    $('.button').on('click', check); 
    $tryAgain_button.on('click', function(){
        $modal_window.hide();
        $('.checkbox').removeAttr('checked');
    });
                    
    function check(){
    if($('.answer_label_1').eq(1).children().prop('checked')){
       $modal_answers.eq(0).children().eq(1).html('Правильно').css({
            'color': 'green',
            'font-weight' : 'bold'
        });
     }else{
         $modal_answers.eq(0).children().eq(1).html('Нет').css({
            'color': 'red',
            'font-weight' : 'bold'
        });
     }
       
       if($('.answer_label_2').eq(0).children().prop('checked')){
       $modal_answers.eq(1).children().eq(1).html('Правильно').css({
            'color': 'green',
            'font-weight' : 'bold'
        });
     }else{
        $modal_answers.eq(1).children().eq(1).html('Нет').css({
            'color': 'red',
            'font-weight' : 'bold'
        });
     } 
        
       if($('.answer_label_3').eq(2).children().prop('checked')){
       $modal_answers.eq(2).children().eq(1).html('Правильно').css({
            'color': 'green',
            'font-weight' : 'bold'
        });
     }else{
        $modal_answers.eq(2).children().eq(1).html('Нет').css({
            'color': 'red',
            'font-weight' : 'bold'
        });
     } 
        $modal_window.show();
        
    }
   
});