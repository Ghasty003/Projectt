$(() => {

    //When click on burger

    $('.burger').click(() => {

        $('.nav-links').slideToggle('slow');

        $(' div.burger').toggleClass('change');

    });

    //When click on lists

    if(innerWidth <= 885) {
        
        $('li').click(() => {

            let classs =  $('div.burger');
    
            $('.nav-links').slideUp('slow');
    
            classs.toggleClass('change');
        })
    }
});
