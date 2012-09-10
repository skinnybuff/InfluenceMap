jQuery(document).ready(function(){
	
	// accordian storage array 
	var sectionOdrer = [];
	var imageDisplay = [];
	// pushes starting order to array
	$(function (){
		$('h3 a').each(function(index, value) {
			//making an object array from form data
			//$('form').each( console.log($(this).serializeArray()));
			// pusshing section titles on the order array
			sectionOdrer.push(index + ': ' + $(this).text());
			console.log(index + ': ' + $(this).text());
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
				// TODO:  update the array use sort to update
				// sectionOdrer.sort(function(a,b){return b-a});
				console.log(this.innerHTML);
				// resort the array every time it rearranged

			});
		};
		
	});
	
	/*  TODO:  use accordain second inputs to add a tooltip to the image boxes
		using the largest image for testing
	*/
	$(function (){
		// working on all of the display divs
		$('#influenceDisplay > div').each(function(index, value) {
			// apply the url of the section to the image siplay array
			for(var i=0; i < sectionOdrer.length; i++){
				imageDisplay[i]=sectionOdrer[i].url;
				console.log(imageDisplay[i]);
			}
			
			// pushing section titles on the order array
			imageDisplay.push(index + ': ' + $(this).attr('id'));
			console.log(index + ': ' + $(this).attr('id'));
		});	
	});
	// add url test
	$('.largestImage').attr('style', "background-image: url(http://nortonmotorcycles.com/bikes/NortonCommando961Sport/1.jpg);background-size: contain;");
	
	// object constructor for influence items
	function influence(title,artist,url,order)
	{
		this.title=title;
		this.artist=artist;
		this.url=url;
		this.order=order;
	}
	
	

});
