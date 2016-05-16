$(function() {
  var state = true;
  $( "#toggle" ).click(function() {
    if ( state ) {
      $( "#elem" ).animate({
        backgroundColor: "#aabb00",
        color: "#fff",
        width: 1100
      }, 1000 );
    } else {
      $( "#elem" ).animate({
        backgroundColor: "#ccc",
        color: "#000",
        width: 1150
      }, 1000 );
    }
    state = !state;
  });
});

/* fold effect start JQuery*/
$( "#squareToggle" ).click(function() {
		$( "#square" ).toggle( "fold" );
});

/* scale effect start JQuery*/
$( "#squareScale" ).click(function() {
		$( "#square2" ).toggle({ effect: "scale", direction: "horizontal" });
});

/* scale effect start JQuery*/
$("#draggable").draggable();

/* Slider scale effects*/
$(function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 1, 250 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  });

/* Button effects */
$(function() {
// run the currently selected effect
function runEffect() {
// get effect type from
var selectedEffect = $( "#effectTypes" ).val();

// most effect types need no options passed by default
var options = {};
// some effects have required parameters
if ( selectedEffect === "scale" ) {
  options = { percent: 0 };
} else if ( selectedEffect === "transfer" ) {
  options = { to: "#button", className: "ui-effects-transfer" };
} else if ( selectedEffect === "size" ) {
  options = { to: { width: 200, height: 60 } };
}

// run the effect
$( "#effect" ).effect( selectedEffect, options, 500, callback );
};

// callback function to bring a hidden box back
function callback() {
setTimeout(function() {
  $( "#effect" ).removeAttr( "style" ).hide().fadeIn();
}, 1000 );
};

// set effect from select menu value
$( "#effectTypes" ).change(function() {
runEffect();
return false;
});
});