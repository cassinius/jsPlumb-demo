jsPlumb.ready(function() {

	jsPlumb.importDefaults({
		Connector : [ "Bezier", { curviness: 150 } ],
  		Anchors : [ "LeftCenter", "RightCenter" ]
	});

	var w34Stroke = 'rgba(50, 50, 200, 1)';
	var w34HlStroke = 'rgba(180, 180, 200, 1)';

	jsPlumb.connect( {
		source:'element1',
		target:'element2',
		paintStyle:{lineWidth:10, strokeStyle:w34Stroke},
		anchors:["RightMiddle", "LeftMiddle"],
		endpointStyle:{ gradient : {stops:[[ 0, w34Stroke ], [ 1, w34HlStroke ]], offset:17.5, innerRadius:15 }, radius:35},
		//endpointStyle:{ gradient : {stops:[[0, w34Stroke], [1, w34HlStroke]], offset:'78%', innerRadius:'73%'}, radius:35 }
	});

	var w23Stroke = 'rgb(189,11,11)';
	jsPlumb.connect({
		source:'window1',
		target:'window2',
		paintStyle:{lineWidth:10,strokeStyle:w23Stroke},
	    anchors:[[0.3,1,0,1], "Top"],
	    endpoint:"Rectangle",
	    endpointStyles:[{ gradient : {stops:[[0, w23Stroke], [1, '#558822']] }},
	             		{ gradient : {stops:[[0, w23Stroke], [1, '#882255']] }}]
	});

	jsPlumb.connect({
		source:"window3",
		target:"window4",
		anchors:[ "BottomRight","TopLeft" ],
		paintStyle:{ lineWidth:7, strokeStyle:"rgb(131,8,135)" },
		endpoint:[ "Image", { src:"http://morrisonpitt.com/jsPlumb/img/endpointTest1.png" } ],
		connector:"Straight"
	});

	jsPlumb.connect({
	    source:"window5",
	    target:"window6",
	    anchors:["Right","Left"],
	    paintStyle:{lineWidth:7,strokeStyle:'rgb(131,8,135)'},
	    hoverPaintStyle:{ strokeStyle:"rgb(0, 0, 135)" },
	    endpointStyle:{ width:40, height:40 },
	    endpoint:"Rectangle",
	    connector:"Straight",
	    dragOptions: {
	      cursor:'crosshair'
	    }
	});

});