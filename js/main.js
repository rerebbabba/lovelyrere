

$('.item').on('click',function(e){
    e.preventDefault();

    $('.view').fadeIn();

    let KEY = $(this).find('.key').text();
    $('.view').find('figure')
    .html(`<iframe width="740" height="416" src="https://www.youtube.com/embed/${KEY}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);



    $('.btnClose, .wrapClose').on('click',function(){

        $('.view').fadeOut();
        $('.view fogure').children().remove();
    });


});



$('.box').on('click',function(e){
    e.preventDefault(); 

    $('.view').fadeIn();

    let pic = $(this).find('.pic').html();
    $('.view figure').html(pic);

});


$('.btnClose, .wrapClose').on('click',function(){

    $('.view').hide();

});