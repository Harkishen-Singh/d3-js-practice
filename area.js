var data = [12,34,35,46,56,3,4,56,34,65,2,5,68,2,343,343,463,213,123,];
var x_increase = [];
for (var i = 0; i < data.length; i++) {
  x_increase.push(i+1);
}
console.log(x_increase);

var area = d3.area().x(function (a,i) {
  return x_increase[i]*50;
}).y0(function(a,i) {
  return 600;
}).y1(function(a,i) {
  console.log(a);
  return 600-a;
});
var line = d3.line().curve(d3.curveCardinal).x(function (a,i) {
  return x_increase[i]*50 ;
}).y(function(a,i) {
  console.log(a);
  return 600-a;
});
var line_step = d3.line().curve(d3.curveStep).x(function (a,i) {
  return x_increase[i]*50;
}).y(function(a,i) {
  console.log(a);
  return 600-a;
});

var svg = d3.select('body').append('svg').attr('height', '100%').attr('width','100%');

var group = svg.append('g').attr('transform', 'translate(0,0)');
group.append('path').attr('d',area(data)).attr('fill','none').attr('stroke','black').attr('stroke-width','2');
group.selectAll('circle').data(data).enter().append('circle').data(data).attr('cx', function (a,i) {
  return x_increase[i]*50;
}).attr('cy', function(a,i) {
  console.log(a + ' circle part');
  return 600-a;
}).attr('r', '5').attr('fill', 'black');
group.append('path').attr('d', line(data)).attr('stroke', 'blue').attr('stroke-width','4').attr('fill', 'none');
group.append('path').attr('d', line_step(data)).attr('stroke', 'yellow').attr('stroke-width', '4').attr('fill', 'none');
