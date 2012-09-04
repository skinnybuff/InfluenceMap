jQuery(document).ready(function(){
	
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
	
	
	$('input[id^="label"]').keyup(function() {
		//$('').html(this.value)
		
		var labelHolder = $(this).attr("id");
		var sectionNumber = labelHolder.slice(5);
		//'[id^="accordionHead"]' + sectionNumber
		$('a[id$="' + sectionNumber + '"]').html(this.value);
		
	});
	
	var sectionOdrer = [];
	$('input[id^="accordionHead"]').each(function(index) {
		var tempHeader = this.value;
		sectionOdrer.push(tempHeader.innerHTML);
		console.log(tempHeader);
	});
	
	
	$( function(){
		
		
	
	});
	
	
        /*
        $(#accordion).click(function() {
		$(this).next().toggle('slow');
		return false;
	}).next().hide();
        */
        
	var testLabel = $('[name=name1]').val();
	$().html(testLabel);
	
});
