$(function(){
    $('#toggle_sidemenu, #home_toggle').on('click', function(){
        // $('#sidebar').toggle('slide', { direction: 'left' }, 1000);
        $('#sidebar').animate({
            'margin-left' : $('#sidebar').css('margin-left') == '0px' ? '-240px' : '0px'
        }, 500);
        
    });

    $('#close_right').on('click', function(){
        // $('#sidebar').toggle('slide', { direction: 'left' }, 1000);
        $('#rightsidebar').animate({
            'margin-right' : $('#rightsidebar').css('margin-right') == '0px' ? '-260px' : '0px'
        }, 500);
        
    });
        $('.right_sidemenu').on('click', function(){
        // $('#sidebar').toggle('slide', { direction: 'left' }, 1000);
        $('#rightsidebar').animate({
            'margin-right' : $('#rightsidebar').css('margin-right') == '0px' ? '0px' : '0px'
        }, 500);
        
    });

    
// _____________________DropDown TOggle__________________-
    $('.bell_div').on('click', function(e){
         e.stopPropagation(); 
        $('.notification_dropdown').slideToggle('1000');
    })

// _________________________ActiveClass_______________
  $('.sidemenu_list>li').click(function(){
        $('.sidemenu_list>li').removeClass("active");
        $(this).addClass("active");
    });
});