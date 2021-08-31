

$(".js-range-slider").ionRangeSlider();
let my_range = $(".js-range-slider").data("ionRangeSlider");
var lpf = document.getElementById("lbOff_On");
lpf.append("Off");

function toggleBilling() {
    if( $("input").is(':checked') )
    {
        $('label[id*="lbOff_On"]').text(""); // очистка label
        lpf.append("On"); //  label => On
        my_range.update({
            max:100,
            from: 50,
            prettify:"%",
            
            onStart: function(data) {              //}
                $input.prop("value", data.from);   //}
            },                                     //} = Вивод на нижній дачик
            onChange: function(data) {             //}
                $input.prop("value", data.from);   //}
            }
        });
        my_range.reset();
    }
    else{
        $('label[id*="lbOff_On"]').text("");
        $('input[id*="id_in_table"]'.valueOf="0"); // очистка label
        lpf.append("Off"); //  label => Off
        my_range.update({
            max:0,
            from: 0,
            prettify:"%",
        });
        my_range.reset();
    }
}

var $range = $(".js-range-slider"),
 $input = $(".js-input"),
 instance;

 $range.ionRangeSlider({
        onStart: function(data) {
            $input.prop("value", data.from);
        },
        onChange: function(data) {
            $input.prop("value", data.from);
        }
    });

 instance = $range.data("ionRangeSlider");

 $input.on("change keyup", function() {
     
     var val = $(this).prop("value");
     
     if (val < min) {
         val = min;
     } else if (val > max) {
         val = max;
     }
     
     instance.update({
         from: val,
        
     });
});

// onchange="javascript:toggleBilling()"


// onchange="javascript:toggleBilling()"


// var $range = $(".js-range-slider"),
// $input = $(".js-input"),
// instance;


// $range.ionRangeSlider({
//     skin: "round",
//     type: "single",
//     min: 0,
//     max: 100,
//     from: 50,
//     prettify:"%",
//     grid: true,
    
//     onStart: function(data) {
//         $input.prop("value", data.from);
//     },
//     onChange: function(data) {
//         $input.prop("value", data.from);
//     }
// });



// instance = $range.data("ionRangeSlider");

// $input.on("change keyup", function() {
    
//     var val = $(this).prop("value");
    
//     // validate
//     if (val < min) {
//         val = min;
//     } else if (val > max) {
//         val = max;
//     }
    
//     instance.update({
//         from: 0,
//         max: 0,
//     });

//     $range.reset();
    
// });

// function toggleBilling() {
  
//     $my_range.update({
//         skin: "round",
//         type: "single",
//         min: 0,
//         max: 0,
//         from: 0,
//         prettify:"%",
//         grid: true,

//     });
//         instance = $range.data("ionRangeSlider");

// $input.on("change keyup", function() {
    
//     var val = $(this).prop("value");
    
//     // validate
//     if (val < min) {
//         val = min;
//     } else if (val > max) {
//         val = max;
//     }
    
//     instance.update({
//         from: 0,
//         max: 0,
//     });

//     $range.reset();
    
// });
        
    
// }

