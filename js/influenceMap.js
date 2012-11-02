	// JQ ui accordian and drag and drop functionality
	$(function() {


		$( "#accordion" )
			.accordion({
				header: " > div > h3"
			})
			.sortable({
				axis: "y",
				handle: "h3",
				stop: function( event, ui ) {
					// IE doesn't register the blur when sorting
					// so trigger focusout handlers to remove .ui-state-focus
					ui.item.children( "h3" ).triggerHandler( "focusout" );
				},
				update: function(e, ui) {
					var order = $(this).sortable('toArray');
					console.log(order);
					//console.log($(this).children());
					var $children = $(this).children();
					//console.log($children);
					console.log("Div " + ui.item.attr("id") + " now at position " + (ui.item.index() + 1).toString());
					console.log("Position Has changed: Thank You");
					var test = ($(ui.item).find("a").html());
					$("#printLog").html("Moved Section: " + test);
					//$("#printLog").append(order.join("<br />"));

					var count = 0;

					$.each( $children, function( key, value ) {
						$("#printLog").append($("<li>" + $(value).attr("id") +" "+ $(value).find(":input").val() + " " + value.className + "</li>"));
						console.log(value + " " + count);
						count ++;
					});			







				}
			});
	

		
        $('input[id^="label"]').focus(function() {

        	var defaultText = this.value;
        	console.log(defaultText);

        	var labelHolder = $(this).attr("id");
        	var sectionName = $(this).parents("div").find("a").html();
        	console.log(sectionName);
        	var sectionNumber = labelHolder.slice(5);

        	console.log($(this).val());
        	if ($(this).length > 0) {
        		console.log("This length is greater than 0");
        		$(this).val(" ");
        	}

        	$(this).keyup(function(e) {

        		//$(this).parents("div").find("a").html(e.value);
        		//$('a[id$="' + sectionNumber + '"]').html(this.value);
        		//console.log(this);
        		console.log($(this).closest("div").find("a").html());
        		$(this).closest("div").find("a").html(this.value);


        	}).blur(function() {
        		console.log($(this).val());

        		if ($(this).val() === " ") {

        			$(this).val(defaultText);

        			console.log("Inside if: " + defaultText);
        		}

        		console.log(sectionName);

        		console.log("Blur section is active");

        	});
        	
        	//
        });

	








/*
        
	//dynamicly change section header with accordions first input
	$('input[id^="label"]').keyup(function() {

		// collect the id of element in focus	
		var labelHolder = $(this).attr("id");
		console.log(this);
		console.log(labelHolder);
		// trim of the naming convention and keep the trailing number
		var sectionNumber = labelHolder.slice(5);
		console.log(sectionNumber);
		//adds the input value to the section header
		$('a[id$="' + sectionNumber + '"]').html(this.value);
		console.log(this.value);

	});
	

	*/
	
 
	/*
	//checking for the click on accordion header
	$('h3').mousedown( function() {
		// a var to make the mouse move event boolean ** use with mouse down to target a drag **
		var drag = $(document).mousemove();
		// checking for both click and drag
		if(drag){
			// on release 
			$(this).mouseup(function() {
				// TODO:  update the array use sort to update
				updateArray();
				// resort the array every time it rearranged
			});
		};
		
	});
	*/
	
	// accordian storage array 
	var sectionOrder = [];
	// pushes starting order to array
	function updateArray(){
		
		var tempIndex;
		var tempOrder = [];
		
		if(sectionOrder.length <= 0){
			$('h3 a').each(function(index, value) {
				//making an object array from form data
				//$('form').each( console.log($(this).serializeArray()));
				// pusshing section titles on the order array
				sectionOrder.push(index + ': ' + $(this).text());
				//console.log(index + ': ' + $(this).text());
			});
		}else{
			$('h3 a').each(function(index, value) {
				tempOrder.push(index + ': ' + $(this).text());
				console.log(tempOrder);
			});
			
			for(var i =0; i < sectionOrder.length; i++){
				if(sectionOrder[i] != tempOrder[i]){
					//console.log(sectionOrder[i]);
				}
				
			}
			
		};	
		
	};
	
	updateArray();
	
	/*  TODO:  use accordain second inputs to add a tooltip to the image boxes
		using the largest image for testing
	*/
	$('input').placeholder();

});

