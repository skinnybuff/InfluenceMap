jQuery(document).ready(function(){
	
	// JQ ui accordian and drag and drop functionality
        $(function() {
		$( "#accordion" )
			.accordion({
				header: "> div > h3", collapsible: true
			})
			.sortable({
				axis: "y",
				handle: "h3",
				stop: function( event, ui ) {
					// IE doesn't register the blur when sorting
					// so trigger focusout handlers to remove .ui-state-focus
					ui.item.children( "h3" ).triggerHandler( "focusout" );
				}
			});
	});
	//dynamicly change sectioon header with accordians first input
	$('input[id^="label"]').keyup(function() {

		// collect the id of element in focus	
		var labelHolder = $(this).attr("id");
		// trim of the naming convention and keep the trailing number
		var sectionNumber = labelHolder.slice(5);
		//adds the input value to the section header
		$('a[id$="' + sectionNumber + '"]').html(this.value);
	});
	
 
	
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
				console.log(index + ': ' + $(this).text());
			});
		}else{
			$('h3 a').each(function(index, value) {
				tempOrder.push(index + ': ' + $(this).text());
				console.log(tempOrder);
			});
			
			for(var i =0; i < sectionOrder.length; i++){
				if(sectionOrder[i] != tempOrder[i]){
					console.log(sectionOrder[i]);
				}
				
			}
			
		};	
		
	};
	
	updateArray();
	
	/*  TODO:  use accordain second inputs to add a tooltip to the image boxes
		using the largest image for testing
	*/
	
	
});
