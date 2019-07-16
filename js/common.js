$(document).ready(function() {
	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	$(".bQ1_act_img").hover(function() {
		$(this).addClass("animated bounceOut");
	}, function() {
		$(this).removeClass("animated bounceOut");
	});


	// $(".b1_coff").hover(function() {
	// 	$(this).addClass("animated jello");
	// }, function() {
	// 	$(this).removeClass("animated jello");
	// });
	

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

	$(window).scroll(function() {
		$('.myb1').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("db1 fadeInUp animated ");
			}
		});
	});

	$(window).scroll(function() {
		$('.b3').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$('.b3 .container').css('visibility', 'visible').addClass("bounceIn animated");
			}
		});
	});
	$(window).scroll(function() {
		$('.b5').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(".b5 .b5_form").css('visibility', 'visible').addClass("animated fadeInRight");
			}
		});
	});
	$(window).scroll(function() {
		$('.b7').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$('.b7 .container').addClass("tada animated ");
			}
		});
	});
	$(window).scroll(function() {
		$('#h5').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("slideLeftx");
			}
		});
	});
	$(window).scroll(function() {
		$('.b2_t, .b4_title').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).css('visibility', 'visible').addClass("animated fadeInLeft");
			}
		});
	});
	$(window).scroll(function() {
		$('.b6_text').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).css('visibility', 'visible').addClass("db1 animated fadeInRight");
			}
		});
	});
	$(window).scroll(function() {
		$('.mov').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("floating");
			}
		});
	});
    $(window).scroll(function() {
          $('.otz').each(function(){
          var imagePos = $(this).offset().top;

          var topOfWindow = $(window).scrollTop();
              if (imagePos < topOfWindow+400) {
                  $(this).addClass("slideRightx");
              }
          });
    });
    $(window).scroll(function() {
          $('.otzr').each(function(){
          var imagePos = $(this).offset().top;

          var topOfWindow = $(window).scrollTop();
              if (imagePos < topOfWindow+400) {
                  $(this).addClass("slideLeftx");
              }
          });
    });
    $(window).scroll(function() {
          $('.otzr2').each(function(){
          var imagePos = $(this).offset().top;

          var topOfWindow = $(window).scrollTop();
              if (imagePos < topOfWindow+400) {
                  $(this).addClass("hatch");
              }
          });
    });
    $(window).scroll(function() {
            $('.otzr3').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+400) {
                    $(this).addClass("bigEntrance");
                }
            });
      });

});