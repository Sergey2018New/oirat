$(document).ready(function() {

	/* Установка сообщений по умолчанию */
	
	$.extend($.validator.messages, {
		required: "Обязательное поле",
		email: "E-mail некорректен"
	});
	
	/* Валидация формы поиска */
	
	if ($("#form_search").length){
		var formSearch = $("#form_search");
    formSearch.validate({
			submitHandler: function(form) {

			}
		});
	}

	/* Валидация формы входа */

	if ($("#form_entry").length){
		var formEntry = $("#form_entry");
		formEntry.validate({
			rules: {
				phone: {
					minlength: 18,
				}
			},
			messages: {
			  phone: {
				minlength: "Не верно указан телефон"
			  }
			},
			
			errorPlacement: function(error, element) {
				if ($(element).attr("type") == "checkbox"){
					$(element).closest(".checkbox").append(error); 
				}
				else{
					$(element).after(error); 
				}
				 
			}, 
			
			submitHandler: function(form) {
				$("#modal_success").modal(); 
			}
		});
	}
	
	/* Валидация формы регистрации */
	
	if ($("#form_registration").length){
		var formRegistration = $("#form_registration");
		formRegistration.validate({
			rules: {
				phone: {
					minlength: 18,
				},
				 password: {
					minlength: 6
				},
				repeat_password: {
					equalTo : "#registration_password"
				}
			},
			messages: {
				phone: {
					minlength: "Не верно указан телефон"
				},
				password: { 
					minlength: "Пароль должен содержать минимум 6 символов"
				},
				repeat_password: {
					equalTo: "Пароли не совпадают"
				},
				agreement: {
					required: "Пожалуйста, подтвердите свое согласие"
				} 
			},
			
			errorPlacement: function(error, element) {
				if ($(element).attr("type") == "checkbox"){
					$(element).closest(".checkbox").append(error); 
				}
				else{
					$(element).after(error); 
				}
				 
			}, 
			submitHandler: function(form) {
				$("#modal_success").modal(); 
			} 
		});
	}
	
	/* Валидация формы подписки */
	
	if ($("#form_subscription").length){ 
		var formSubscription = $("#form_subscription");
		formSubscription.validate({
			messages: {
				agreement: {
					required: "Пожалуйста, подтвердите свое согласие"
				}
			},
			errorPlacement: function(error, element) {
				if ($(element).attr("type") == "checkbox"){
					$(element).closest(".checkbox").append(error); 
				}
				else{
					$(element).after(error); 
				}
				 
			}, 
			submitHandler: function(form) {
				formSubscription.find(".subscription__form-submit")
					.attr("type", "button")
					.addClass("subscription__form-submit--success")
					.text("Успешно");
			} 
		});
	}
	
	/* Валидация формы подписки в футере */
	
	if ($("#form_subsciption_bottom").length){ 
		var formSubscriptionBottom = $("#form_subsciption_bottom");
		formSubscriptionBottom.validate({
			errorPlacement: function(error, element) {
				if ($(element).attr("type") == "checkbox"){
					$(element).closest(".checkbox").append(error); 
				}
				else{
					$(element).after(error); 
				}
				 
			}, 
			submitHandler: function(form) {
				$("#modal_success_subscription").modal(); 
			} 
		});
	}
	
	/* Валидация формы купить в один клик */
	
	if ($("#form_buy_click").length){
		var formBuyClick = $("#form_buy_click");
		formBuyClick.validate({
			rules: {
				phone: {
					minlength: 18,
				}
			},
			messages: {
			  phone: {
				minlength: "Не верно указан телефон"
			  },
			  agreement: {
					required: "Пожалуйста, подтвердите свое согласие"
				}
			},
			errorPlacement: function(error, element) {
				if ($(element).attr("type") == "checkbox"){
					$(element).closest(".checkbox").append(error); 
				}
				else{
					$(element).after(error); 
				}
				 
			}, 
			submitHandler: function(form) {
				$("#modal_success").modal(); 
			} 
		});
	}
	
	 
	/* Валидация формы Оставить отзыв */
	
	if ($("#form_review_feedback").length){
		var formReviewFeedback = $("#form_review_feedback");
		formReviewFeedback.validate({
			errorPlacement: function(error, element) {
				if ($(element).attr("type") == "checkbox"){
					$(element).closest(".checkbox").append(error); 
				}
				else{
					$(element).after(error); 
				}
				 
			}, 
			submitHandler: function(form) {
				// Отправка формы
				$("#modal_success_review").modal(); 
			} 
		});
	}
	
	/* Валидация формы оформления заказа */
	
	if ($("#form_ordering").length){
		var formOrdering = $("#form_ordering"); 
		formOrdering.validate({
			rules: {
				phone: {
					minlength: 18 
			  } 
			},
			messages: {
			  phone: {
				minlength: "Не верно указан телефон"
			  }
			},
			errorPlacement: function(error, element) {
				if ($(element).attr("type") == "checkbox"){
					$(element).closest(".checkbox").append(error); 
				}
				else{
					$(element).after(error); 
				}
				 
			}, 
			submitHandler: function(form) {
				// Отправка формы
				$("#modal_success").modal(); 
			} 
		});
	}
	
	
	/* Валидация формы Отправить заявку Трейд Ин */
	
	if ($("#form_request_trade_in").length){
		var formRequestTradeIn = $("#form_request_trade_in");
		formRequestTradeIn.validate({
			rules: {
				phone: {
					minlength: 18
			  } 
			},
			messages: {
			  phone: {
				minlength: "Не верно указан телефон"
			  }
			},
			errorPlacement: function(error, element) {
				if ($(element).attr("type") == "checkbox"){
					$(element).closest(".checkbox").append(error); 
				}
				else{
					$(element).after(error); 
				}
				 
			}, 
			submitHandler: function(form) {
				$("#modal_success").modal(); 
			} 
		});
	}
	
	/* Валидация формы Задайте нам вопрос */
	
	if ($("#form_contacts").length){
		var formContacts = $("#form_contacts");
		formContacts.validate({
			errorPlacement: function(error, element) {
				if ($(element).attr("type") == "checkbox"){
					$(element).closest(".checkbox").append(error); 
				}
				else{
					$(element).after(error); 
				}
				 
			}, 
			submitHandler: function(form) {
				$("#modal_success").modal(); 
			} 
		}); 
	}
	
	/* Валидация формы Калькулятора Trade-in */
	
	if ($("#form_calc").length){
		var formCalc = $("#form_calc");
		formCalc.validate({
			errorPlacement: function(error, element) {
				if ($(element).attr("type") == "checkbox"){
					$(element).closest(".checkbox").append(error); 
				}
				else{
					$(element).after(error); 
				}
				 
			}, 
			submitHandler: function(form) { 
				$("#modal_trade_in_request").modal(); 
			} 
		}); 
	}
	
	
	/* Валидация формы Заявки в описании вакансии */
	
	if ($("#form_respond_request").length){
		var formRespondRequest = $("#form_respond_request");
		formRespondRequest.validate({
			rules: {
				phone: {
					minlength: 18,
				}
			},
			messages: {
			  phone: {
				minlength: "Не верно указан телефон"
			  },
				agreement: {
					required: "Пожалуйста, подтвердите свое согласие"
				}
			},
			errorPlacement: function(error, element) {
				if ($(element).attr("type") == "checkbox"){
					$(element).closest(".checkbox").append(error); 
				}
				else{
					$(element).after(error); 
				}
				 
			}, 
			submitHandler: function(form) { 
				$("#modal_success_request").modal();   
			} 
		}); 
	}
	
});
