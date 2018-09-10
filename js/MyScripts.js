/*global $, alert, console*/

$(function () {
    
    'use strict';
    
    //adjust header height
    var myHeader = $('.header'),
        
        mySlider = $('.bxslider');
    
    myHeader.height($(window).height());
    
    $(window).resize(function () {
        
        myHeader.height($(window).height());
        
        // Adjust Bxslider List Item Center
        
        mySlider.each(function () {
            
            $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
            
        });
        
    });
    
    // Links add active class
    
    $('.links li a').click(function () {
        
        $(this).parent().addClass('active').siblings().removeClass('active');
        
    });
    
    // Adjust Bxslider List Item Center
    
    mySlider.each(function () {
       
        $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
        
    });
    
    // Trigger the Bx Slider
    
    $('.bxslider').bxSlider({
        
        pager: false
    });
    
     // Smooth Scroll To Div 
    
    $('.links li a').click(function () {
       
        $('html, body').animate({
            
            scrollTop: $('#' + $(this).data('value')).offset().top
            
        }, 1000);
        
    });
    
    // My Auto Slider Code
    
    (function autoSlider() {
        
        $('.slider .active').each(function () {
           
            if (!$(this).is(':last-child')) {
                
                $(this).delay(3000).fadeOut(1000, function () {
                   
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    
                    autoSlider();
                    
                });
                
            } else {
                
                $(this).delay(3000).fadeOut(1000, function () {
                    
                    $(this).removeClass('active');
                    
                    $('.slider div').eq(0).addClass('active').fadeIn();
                    
                    autoSlider();
                    
                });
                
            }
            
        });
        
    }());
    
    // Trigger MixitUp
    
    $('#Container').mixItUp();
    
    // adjust shuffle links
    
    $('.shuffle li').click(function () {
        
        $(this).addClass('selected').siblings().removeClass('selected');
        
    });
    
     // Trigger Nice Scroll
    
    $('html').niceScroll({
        
        cursorcolor: '#3489db',
        
        cursorwidth: '10px',
        
        cursorborder: '1px solid #3489db',
        
        cursorborderradius: '10px'
        
    });
});