$(document).ready(function(){
	$('#invalidEmail').hide();
	$('#getStartedForm').submit(function(){
		var url = "http://app.adzoco.com/#/signup-pop?username=" + $('#userEmail').val() + "&firstName=none&lastName=none&phoneNumber=none";
		var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
		if (testEmail.test($('#userEmail').val())){
			window.location.replace(url);
			$('#invalidEmail').hide();
		}
		else{
			$('#invalidEmail').show();
		}
		return false;
	});

});
