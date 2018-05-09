var data = [
  12404,
11532,
16300,
14200,
13600,
6528,
7242,
5661,
7752,
7850,
9160,
6550,
9440,
8450,
5500,
8750,
9200,
13125,
17750,
12200,
14602,
14315,
12300,
13200,
15500,
18250,
12974,
5046,
10155,
16115,
16115,
10545,
12175,
17350,
14250,
12575,
10200,
7650,
16200,
9700,
10460,
11850,
14000,
13500,
13484,
9486,
11280,
15136,
12890,
14150,
14340,
6750,
8100,
16952,
14300,
14900,
21086,
5402,
5225,
6400,
6882,
1140,
1325,
3205,
3825,
3087,
2432,
2372,
1826,
2115,
873,
1850,
6434,
4215,
4225,
1010,
685,
955,
680,
1150,
1150,
1250,
9500,
4575,
1120,
1050,
850,
1325,
7455,
10700,
10230,
14570,
11129,
11496,
11420,
11910,
10650,
10365,
13250,
];
var max = data[0];
for (var i = 0; i < data.length; i++) {
  if (data[i]>max) {
    max=data[i];
  }
}

var svg = d3.select('body').append('svg').attr('height', '100%').attr('width', '100%');
var line = d3.line().curve(d3.curveCardinal).x(function(s, index) {
  return index*10;
}).y( function (s, index) {
  //console.log(s);
  return (max-s)/40;
});
var line_step = d3.line().curve(d3.curveStep).x(function(s, index) {
  return index*10;
}).y( function (s, index) {
  //console.log(s);
  return (max-s)/40;
});

var y = d3.scaleLinear().domain([0,600]).range([600,0]);
var yAxis = d3.axisRight(y).ticks('5').tickPadding('10').tickSize('10');
var x = d3.scaleLinear().domain([0, 110]).range([0, 1100]);
var xAxis = d3.axisBottom(x);

var group = svg.append('g').attr('transform', 'translate(50,50)');

group.append('g').attr('class', 'axis x').call(xAxis);
group.append('g').attr('class', 'axis y').call(yAxis);
group.append('path').attr('d', line(data)).attr('fill', 'none').attr('stroke', 'black').attr('stroke-width',  '2');
group.selectAll('circle').data(data).enter().append('circle').attr('cx',function (a,i) {
  return i*10;
}).attr('cy',function (a,i) {
  return (max-a)/40;
}).attr('r', '4').attr('fill', 'blue');
group.append('path').attr('d', line_step(data)).attr('fill', 'none').attr('stroke', 'blue').attr('stroke-width',  '1');
