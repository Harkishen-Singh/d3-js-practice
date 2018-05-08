var data = [12,34,35,46,56,67,78,67,45,34,23,76,123];
var x_increase = [];
for (var i = 0; i < data.length; i++) {
  x_increase.push(i+1);
}
console.log(x_increase);

var area = d3.area().x(function (a,i) {
  return x_increase[i]*50;
}).y0(function(a,i) {
  return 400;
}).y1(function(a,i) {
  console.log(a);
  return 400-a;
});

var svg = d3.select('body').append('svg').attr('height', '100%').attr('width','100%');

svg.append('path').attr('d',area(data)).attr('fill','red');
