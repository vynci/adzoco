$(document).ready(function(){
	if($( window ).width() < 361){
		$('#section1-mobile').show();
		$('#section1').hide();
		$('#section1-window-img').hide();
		$('#section1-plus-symbol').hide();
		$('#section1-equal-symbol').hide();
		$('#section1-money-img').hide();
		$('#section1-advertiser-img').hide();
		$('#section1-head-text').hide();
	} else{
		$('#section1-mobile').hide();
		$('#section1').show();
	}

	intro();

	function intro(){
		$( "#section1-head-text" ).fadeIn( "fast", function() {
			setTimeout(function(){
				$('#section1-head-text').hide();
				$( "#section1-window-img" ).fadeIn( "fast", function() {
					setTimeout(function(){
						$('#section1-window-img').hide();
						$( "#section1-plus-symbol" ).fadeIn( "fast", function() {
							setTimeout(function(){
								$('#section1-plus-symbol').hide();
								$( "#section1-advertiser-img" ).fadeIn( "fast", function() {
									setTimeout(function(){
										$('#section1-advertiser-img').hide();
										$( "#section1-equal-symbol" ).fadeIn( "fast", function() {
											setTimeout(function(){
												$('#section1-equal-symbol').hide();
												$( "#section1-money-img" ).fadeIn( "fast", function() {
													setTimeout(function(){
														$('#section1-money-img').hide();
														intro();
													}, 4000);
												});
											}, 1000);
										});
									}, 2000);
								});
							}, 1000);
						});
					}, 2000);
				});
			}, 3000);

		});
	}


});
