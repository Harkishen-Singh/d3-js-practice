var maal = [{x:3,y:6},
  {x:9,y:8},
  {x:34,y:10},
  {x:38,y:17},
  {x:40,y:20},
  {x:30,y:50},
  {x:27,y:40},
  {x:45,y:65},
  {x:15,y:34},
  {x:10,y:8}
];

var svg = d3.select('body').append('svg').attr('height','100%').attr('width','100%');

var line = d3.line().curve(d3.curveCardinal).x(function(a,b){console.log('Processing x '+b);return a.x*10;}).y(function(a,b){
  console.log('Processing y '+b);return a.y*20;
});

svg.append('path').attr('d', line(maal)).attr('stroke', 'yellow').attr('stroke-width', '5').attr('fill', 'none');
