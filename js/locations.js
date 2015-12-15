$(document).ready(function(){

	var lastAddress = '';
	
	$('#advertiser-listing').hide();

	var advertisers = [ {
			'category': 'Recreation Companies',
			'icon'    : 'fa fa-globe'
		}, {
		 	'category': 'Building Contractors',
			'icon'    : 'fa fa-home'
		}, {
		 	'category': 'Heavy Duty Contractors',
			'icon'    : 'fa fa-road'
		}, {
		 	'category': 'Electrical Companies',
			'icon'    : 'fa fa-bolt'
		}, {
			'category' : 'Food Products',
			'icon' : 'fa fa-cutlery'
		}, {
			'category' : 'Coffee Shops',
			'icon' : 'fa fa-coffee'
		}, {
			'category' : 'Laundry Shops',
			'icon' : 'fa fa-refresh'
		}, {
			'category' : 'Cakes & Pastries',
			'icon' : 'fa fa-birthday-cake'
		}, {
			'category' : 'Fitness Centers',
			'icon' : 'fa fa-building'
		}, {
			'category' : 'Music Studios',
			'icon' : 'fa fa-music'
		}, {
			'category' : 'Restaurants',
			'icon' : 'fa fa-cutlery'
		}, {
			'category' : 'Bars/Clubs',
			'icon' : 'fa fa-glass'
		}, {
			'category' : 'Fashion Stores',
			'icon' : 'fa fa-shopping-bag'
		}, {
			'category' : 'Sports Clubs',
			'icon' : 'fa fa-futbol-o'
		}, {
			'category' : 'Fashion Products',
			'icon' : 'fa fa-female'
		}, {
			'category' : 'Health Products',
			'icon' : 'fa fa-heart'
		}, {
			'category' : 'Drinks / Beverages',
			'icon' : 'fa fa-beer'
		}, {
			'category' : 'Appliance Dealers',
			'icon' : 'fa fa-television'	
		}, {
			'category' : 'Computer Stores',
			'icon' : 'fa fa-laptop'
		}, {
			'category' : 'Software Industries',
			'icon' : 'fa fa-laptop'
		}, {
			'category' : 'Electronic Gadgets',
			'icon' : 'fa fa-gamepad'
		}, {
			'category' : 'Auto Shops',
			'icon' : 'fa fa-car'
		}, {
			'category' : 'Healthcare Industries',
			'icon' : 'fa fa-heartbeat'
		}, {
			'category' : 'Hollywood Movies',
			'icon' : 'fa fa-file-video-o'
		}, {
			'category' : 'Jewelry Shops',
			'icon' : 'fa fa-diamond'
		}, {
			'category' : 'Grocery Stores',
			'icon' : 'fa fa-shopping-cart'
		}, {
			'category' : 'Real Estate',
			'icon' : 'fa fa-map-signs'
		}, {
			'category' : 'Legal Services',
			'icon' : 'fa fa-gavel'
		}, {
			'category' : 'Nursing Homes',
			'icon' : 'fa fa-hospital-o'	
		}, {
			'category' : 'Travel Agencies',
			'icon' : 'fa fa-plane'
		}, {
			'category' : 'Finance Institutions',
			'icon' : 'fa fa-university'
		}, {
			'category' : 'Credit Card Promos',
			'icon' : 'fa fa-credit-card'
		}, {
			'category' : 'Admin Firms',
			'icon' : 'fa fa-users'
		} ];

	function resetCount(){
		return advertisers.forEach(function(item){
			item.count = 0;
		});
	}

	function generateHTML(places){
		var html = '';

		places.forEach(function(item){
			item.count = item.count ? item.count : Math.floor((Math.random() * 30) + 1);

			html += '<div class="col-xs-12 col-sm-3 col-md-3 no-gutter-container">';
			html += '	<div class="col-xs-4 listing-icon-container">';
			html += '		<i class="'+ item.icon +' listing-icon"></i>';
			html += '	</div>';
			html += '	<div class="col-xs-7">';
			html += '		<h3 class="listing-title">' + item.category + '</h3>';
			html += '		<h2 class="listing-count flipInX">' + item.count + '</h2>';
			html += '	</div>';
			html += '</div>';
		});

		return html;
	}

	function randomize(){
		var places = window.knuthShuffle(advertisers);
		var html = '';

		html = generateHTML(places.slice(0,4));

		$('#advertiser-listing').html(html);
		$('#advertiser-listing').show();

		return places.slice(0, 4);
	}    

	var options = {
		map     : ".map_canvas",
		location: "SF"
	};

	/**
	 *
	 * Initializers
	 *
	 */
	$("#geocomplete").geocomplete(options);

	/**
	 *
	 * Event Listeners
	 *
	 */
	$("#geocomplete")
		.geocomplete()
		.bind("geocode:result", function(event, result){

			if(lastAddress !== $('#geocomplete').val()){
				lastAddress = $('#geocomplete').val();
				resetCount();
			}

			randomize();
		});

	// Trigger geocoding request.
	$(".map-search-btn").click(function(){
		$("#geocomplete").trigger("geocode");
	});
});