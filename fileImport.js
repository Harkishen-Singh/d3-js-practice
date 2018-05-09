d3.csv('Book1.csv', function(error, data) {
    console.log(data);
}).row(function(data){return {Variety: data['variety name'], System_of_cultivation:data['system of cultivation']};});
