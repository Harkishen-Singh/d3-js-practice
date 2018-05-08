var dataArray = [3,24,45,2,9];
var svg = d3.select('body').append('svg')
.attr('height', '70%')
.attr('width', '100%');
;

svg.selectAll('rect').data(dataArray).enter().append('rect')
.attr('height', function(d,i){console.log('height'+d+' '+i); return d*10})
.attr('width', '70')
.attr('x', function(d,i){console.log('x'+d+' '+i); return 80*i;})
.attr('y', function(d,i){console.log('y'+d+' '+i); return 350-(d*10);})
.attr('fill', 'red');

var cirArr = [34,23,10,23];

var s = d3.select('body').append('svg').attr('height','80%').attr('width','100%');

svg.selectAll('circle').data(cirArr).enter().append('circle')
.attr('cx', function(a,b){return b*100+50+(80*5)})
.attr('cy', function(a,b){return 350;})
.attr('r', function(a,b) {return a;})
.attr('fill', 'yellow');

svg.append('text').text('This is the text from d3 js')
.attr('x', 350).attr('y', '350').attr('font-weight', 'bolder').attr('fill', 'green')
