$(document).ready(function() {
	//Image change
	$(".b2_count_radio_pom").change(function(event) {
		if($(this).val()=="молотый") {
			$(".mol").attr("src","img/order/molot.png");
		}
		else if($(this).val()=="зерновой") {
			$(".mol").attr("src","img/order/zerna.png");
		}
	});
	var hid_con;
	var price;
	var orig_p = false;
	var ves;
	function ver_up() {
		if ($("#radio5").prop("checked")) {
			ves = $("#radio5").val();
		}
		if ($("#radio6").prop("checked")) {
			ves = $(".b2_count_radio_label_kilo2_input").val();
		}
		ves = parseInt(ves);
	}
	function price_up() {
		price = parseInt($(".b2_count_price").text());
		if (!orig_p) {
			orig_p = price;
		}
		price = orig_p * ves;
		price = price + ".00 ГРН";
		$(".b2_count_price").text(price);
	}
	function hid_reload() {
		hid_con = 
		($(".b1_m_title").text())  + " | " + 
		($("input[name=group1]:checked").val()) + " | " + 
		($("input[name=group2]:checked").val()) + " | " + 
		(ves) + " кг" + " | " + 
		($(".b2_count_price").text()) ;
		console.log(hid_con);
		$(".b2_form_hid").val(hid_con);
	}
	//Functions call
	$(".b2_count input").change(function(event) {
		ver_up();
		price_up();
		hid_reload();
	});
	//Functions 1 time init
	ver_up();
	price_up();
	hid_reload();
	//AJAX запрос
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail_order.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});
});