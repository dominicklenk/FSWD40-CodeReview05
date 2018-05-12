$(document).ready(function() {

var Members = [
            {
			name: 'John',
			surname: 'Doe',
			favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Kanye West"],
			age: 26,
   			myPhoto: "img/boy1.jpg",	
			likes: 0    // numeric property used to store likes
			},
			{
			name: 'Jane',
			surname: 'Powerful',
			favoritePerformers: ["Jay Z", "Rihanna", "Alicia Keys"],
			age: 25,
   			myPhoto: "img/girl1.jpg",	
			likes: 0
			},
			{
			name: 'Maxina',
			surname: 'Marina',
			favoritePerformers: ["Kanye West", "Justin Bieber", "Jennifer Lopez"],
			age: 26,
   			myPhoto: "img/girl2.jpg",	
			likes: 0
			},
			{
			name: 'Max',
			surname: 'Power',
			favoritePerformers: ["Jay Z", "Red Hot Chili Peppers", "Linkin Park"],
			age: 24,
   			myPhoto: "img/boy2.jpg",	
			likes: 0
			},
];


for (let u = 0; u < Members.length; u++) {
	$('.member').eq(u).append('<img src=\"'+Members[u].myPhoto+'\"><p>Name: '+Members[u].name+'</p><p>Surname: '+Members[u].surname+'</p><p>Age: '+Members[u].age+'</p>');

	$('.likeit').eq(u).append('<button id="button'+u+'">Like</button><span id="like'+u+'">0</span>&nbsp;<img src="img/like.png" alt="like">');

	$('#button'+u).on('click', function() {		
		Members[u].likes += 1;
		$('#like'+u).html(Members[u].likes);
	});

	console.log(u);
};

// sorting likes function incomplete

/* function sortMembers(){
	Members.sort (function (a,b) {
		return b.likes - a.likes;
	});


	for (var f = 0; f < Members.length; f++) {
		$('.member').eq(f).html('<img src=\"'+Members[f].myPhoto+'\"><p>Name: '+Members[f].name+'</p><p>Surname: '+Members[f].surname+'</p><p>Age: '+Members[f].age+'</p>');
		$('.likeit').eq(f).html('<button id="button'+f+'">Like</button><span id="like'+f+'">0</span>&nbsp;<img src="img/like.png" alt="like">');
	};

};

$('#sort-it').on('click', sortMembers);

console.log(Members); */
});