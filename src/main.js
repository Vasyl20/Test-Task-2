

if($('input[name="radio"]').is(':checked')) {
   
var $range = $(".js-range-slider"),
$input = $(".js-input"),
instance,
min = 0,
max = 100;

$range.ionRangeSlider({
skin: "big",
type: "single",
min: min,
max: max,
from: 50,
postfix: "%",
onStart: function(data) {
    $input.prop("value", data.from);
},
onChange: function(data) {
    $input.prop("value", data.from);
}
});

instance = $range.data("ionRangeSlider");

$input.on("change keyup", function() {
if($('input[name="radio"]').is(':checked'))
{
    var val = $(this).prop("value");

    // validate
    if (val < min) {
        val = min;
    } else if (val > max) {
        val = max;
    }

    instance.update({
        from: val
    });
}
else  {

}

});
    
}
else {
    
var $range = $(".js-range-slider"),
$input = $(".js-input"),
instance,
min = 0,
max = 0;

$range.ionRangeSlider({
skin: "big",
type: "single",
min: min,
max: max,
from: 0,
postfix: "%",
onStart: function(data) {
    $input.prop("value", data.from);
},
onChange: function(data) {
    $input.prop("value", data.from);
}
});

instance = $range.data("ionRangeSlider");

$input.on("change keyup", function() {
if($('input[name="radio"]').is(':checked'))
{
    var val = $(this).prop("value");

    // validate
    if (val < min) {
        val = min;
    } else if (val > max) {
        val = max;
    }

    instance.update({
        from: val
    });
}
else  {

}

});
}


