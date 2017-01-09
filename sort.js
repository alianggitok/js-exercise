var shows=[
		{artist:'Kreap',city:'Melbourne',ticketPrice:'40'},
		{artist:'DJ EQ',city:'Paris',ticketPrice:'38'},
		{artist:'Treasure Fingers',city:'London',ticketPrice:'60'},
	],
	books=[
		{title:'How to DJ Proper','price':'18'},
		{title:'Music Marketing for Dummies','price':'26'},
		{title:'Turntablism for Beginners','price':'15'}
	];

var sortedShows=shows.sort(function(a,b){
		return a.ticketPrice<b.ticketPrice;
	}),
	sortedBooks=books.sort(function(a,b){
		return a.price>b.price;
	});

console.log(sortedShows,sortedBooks);


