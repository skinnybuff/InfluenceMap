jQuery(document).ready(function(){
	
	// accordian storage array 
	var sectionOdrer = [];
	// pushes starting order to array
	$(function(){
		$('h3 a').each(function(index) {
			sectionOdrer.push(index + ': ' + $(this).text());
			//console.log(index + ': ' + $(this).text());
		});	
	});
	// JQ ui accordian and drag and drop functionality
        $(function() {
		$( "#accordion" )
			.accordion({
				header: "> div > h3"
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
	
	// a var to make the mouse move event boolean ** use with mouse down to target a drag **
	var drag = $(document).mousemove(); 
	
	//checking for the click on accordion header
	$('[id^="accordionHead"]').mousedown( function() {
		// checking for both click and drag
		if(drag){
			// on release 
			$(this).mouseup(function() {
				// TODO:  update the array
				console.log(this.innerHTML);				
			});
		};
		
	});
	
	/*  TODO:  use accordain second inputs to add a tooltip to the image boxes
		using the largest image for testing
	*/
	$('.largestImage').attr("hover test");

	

});
