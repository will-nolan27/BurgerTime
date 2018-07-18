// Handle click event a burger is eaten
$(".eatBurger").on('click', function(event) {
	event.preventDefault();

	var id = $(this).data("burgerid");
	console.log('burgerid: ' + id);

	$.ajax("/api/eat/" + id, {
		type: "PUT"
	}).then(function() {
		location.reload();
	});
});

// Handle form submit a burger
$(".add-burger").on('submit', function(event) {
	event.preventDefault();

	var newBurger = {
		burger_name: $("#burgerName").val().trim(),
		devoured: false
	};

	$.post("/api/new", newBurger)
		.then(function() {
			location.reload();
		});
});