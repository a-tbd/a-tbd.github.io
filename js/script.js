var win_width;
var win_height;

$(document).ready(function() {

	$(window).resize(function(){
	    win_width = $(window).width();
	    win_height = $(window).height();

	    if (win_width < 1030) {
			$('#battery-image').css("background", "url(imgs/battery3crop.gif) center, url(imgs/battery3-phone.jpg)  center"); 

		} else {
			$('#battery-image').css("background", "url(imgs/battery3.gif) left bottom, url(imgs/battery3.jpg) left bottom");
		};


	}).resize();

	$('#title').click(function(){
		$('#about-modal').show();
		$('#title').hide();
	});
	
	$('#close-about').click(function(){
		$('#about-modal').hide();
		$('#title').show();
	});

	// Set up vars
    var _window = $(window),
        panels = $('#battery-modal'),
        panelsY = [];

    // Cache position of each panel
    $.each(panels, function(i, el) {
        panelsY.push(panels.eq(i).offset().top);
    });

    // Bind our function to window scroll
    _window.bind('scroll', function() {
        updateWindow();
    });

    // Update the window
    function updateWindow() {
        var y = _window.scrollTop();

        // Loop through our panel positions
        for (i = 0, l = panels.length; i < l; i++) {
            /* 
                Firstly, we break if we're checking our last panel,
                otherwise we compare if he y position is in between
                two panels
            */
            if ((i === l - 1) || (y >= panelsY[i] && y <= panelsY[i+1])) {
                break;
            }
        };

        // Update classes
        panels.not(':eq(' + i + ')').removeClass('panel-fixed');
        panels.eq(i).addClass('panel-fixed');
    };

});