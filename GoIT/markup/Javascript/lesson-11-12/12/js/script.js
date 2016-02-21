$(function() {

        var html = $('#my-page').html()

        var answers = 
            {
                myname: 'Красный Михаил Алексеевич',
                image: 'img/miha.jpg',
                job: 'Тренер по футболу, студент Winner OS FrontEnd',
                frontend: 'Хочу учить фронтенд, потому что:',
                item1: 'Всегда хотел научиться делать сайты',
                item2: 'Поменять,что то в жизни',
                item3: 'За ним будущее',
                mobile: 'Мой контактный телефон',
                number: '+380936765962',
                vk: 'Мой профиль вконтакте',
                vk_url: 'http://vk.com/miha_krasnyy',
                link: 'vk.com',
                feedback: 'Мой фидбек:',
                text: 'Чтобы достичь цели, нужно, прежде всего,к ней идти'
            };

        var content = tmpl(html, answers);
        $('body').append(content);

    });