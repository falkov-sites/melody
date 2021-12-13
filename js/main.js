$(document).ready(function () {
	let floorPath = $('.home-image path');
	let currentFloor = 2;
	let modal = $('.modal');

	highlightFloor(currentFloor);

	// image --------------------------
	floorPath.on('mouseover', function(){
		currentFloor = $(this).attr('data-floor');
		highlightFloor(currentFloor);
	});

	floorPath.on('click', function(){
		modal.addClass('modal-open');
		$('.flats path').removeClass('active-flat-path');
		$('.flat-link').removeClass('active-flat-in-list');

	});

	$('.modal-close-btn').on('click', function(){
		modal.removeClass('modal-open');
	});

	// counter ------------------------
	$('.counter-up').on('click', function(){
		if(currentFloor < 18) {
			highlightFloor(++currentFloor);
		}
	});
	$('.counter-down').on('click', function(){
		if(currentFloor > 2) {
			highlightFloor(--currentFloor);
		}
	});

	function highlightFloor(floor) {
		let strFloor = floor.toLocaleString('en-US', { minimumIntegerDigits: 2 });
		$('.counter').text(strFloor);
		floorPath.removeClass('active-floor');
		$(`[data-floor=${strFloor}]`).addClass('active-floor');
	};

	// flats --------------------------
	$('.flats path').on('mouseover', function(){
		currentFlat = $(this).attr('data-flat');
		$('.flats path').removeClass('active-flat-path');

		$('.flat-link').removeClass('active-flat-in-list');
		$(`.flat-link[data-flat=${currentFlat}]`).addClass('active-flat-in-list');
	});

	$('.flat-link').on('mouseover', function(){
		currentFlat = $(this).attr('data-flat');

		$('.flat-link').removeClass('active-flat-in-list');
		$(`.flat-link[data-flat=${currentFlat}]`).addClass('active-flat-in-list');

		$('.flats path').removeClass('active-flat-path');
		$(`.flats path[data-flat=${currentFlat}]`).addClass('active-flat-path');
	});

	$('.button-show-flat').on('click', function(){
		modal.addClass('modal-open');
		$('.flats path').removeClass('active-flat-path');
		$('.flat-link').removeClass('active-flat-in-list');
	});

});

