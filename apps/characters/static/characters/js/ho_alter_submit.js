"use strict";

// Handle Add Event form submission
var add_form = $('#add-event-form');
// Unbind any previous bindings for add
$(add_form).unbind( "submit" );
$(add_form).submit(function(event) {
    event.preventDefault();
    console.log('dd');
    $("#AddDPModal").modal('hide');
    console.log('ss');
    var event_date = $("input[id='InputEventDate']").val();
    var event_title = $("input[id='InputEventTitle']").val();

    console.log(event_date);
    console.log(event_title);


    var jsonurl = "../api/events/";
    var add_event_post = $.post(
        jsonurl,
        JSON.stringify({ "date": event_date,
                         "title": event_title,
                         "short_description": "description",
                         "hp_character": null
                         })
                         );

    //$('.spinner').show();
    add_event_post.done(function( data ) {
        process_and_show_result(data);
    });
});