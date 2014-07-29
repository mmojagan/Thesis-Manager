$( document ).ready(function() {
$( "#cfeatures, #sfeatures").hide();

$( "#profile" ).click(function( event ) {
 $( "#pfeatures" ).fadeIn("slow");
$( "#sfeatures, #cfeatures" ).hide();
});
$( "#school" ).click(function( event ) {
$( "#sfeatures" ).fadeIn("slow");
$( "#pfeatures,  #cfeatures" ).hide();
});
$( "#contact" ).click(function( event ) {
$( "#cfeatures" ).fadeIn("slow");
$( "#sfeatures, #pfeatures" ).hide();
});

});