var ONE_YEAR =  ((new Date("January 01, 0001 00:00:00")).getTime()-(new Date("January 01, 0000 00:00:00")).getTime());

function showTooltip(x, y, contents) {
    $('<div id="tooltip">' + contents + '</div>').css( {
        position: 'absolute',
        display: 'none',
        top: y + 5,
        left: x + 20,
        border: '1px solid #fdd',
        padding: '2px',
        'background-color': '#fee',
        opacity: 0.8
    }).appendTo("body").fadeIn(200);
}

$(document).ready(function() {

	DataPuller.getVolcanoList({handler: loadVolcano});

	/*
	*	load the volcano list
	*
	*/
	function loadVolcano(args) {
		var data = args.data;
		var volcanoSelect = $("#volcano");
		volcanoSelect.empty();
		volcanoSelect.append(new Option("...", ""));
		for (var i = 0; i < data.length; i++) {
			var option = new Option(data[i]['vd_name'], data[i]['vd_id']);
			volcanoSelect.append(option);
		}
	}

	/*
	*	when user select a volcano
	*/
	$("#volcano").change(function() {
		var volcano = $("#volcano").val();
		DataPuller.getEruptionList({vd_id: volcano, handler: plotEruption});
		DataPuller.getEruptionForecastList({vd_id: volcano, handler: plotEruptionForecast});
	});	
});