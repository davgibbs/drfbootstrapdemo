"use strict";

function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}
$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    }
});


// using jQuery
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

var csrftoken = getCookie('csrftoken');

// Handle Add Event form submission
var add_form = $('#add-event-form');
// Unbind any previous bindings for add
$(add_form).unbind( "submit" );
$(add_form).submit(function(event) {
    event.preventDefault();
    console.log('dd');
    $("#AddEventModal").modal('hide');

    var event_date = $("input[id='InputEventDate']").val();
    var event_title = $("input[id='InputEventTitle']").val();

    var add_event_post = $.ajax({
      url: "../api/events/",
      type: "POST",
      dataType: "json",
      data: { "date": event_date,
             "title": event_title,
             "short_description": "description",
             "hp_character": "http://127.0.0.1:8000/api/characters/" + selected_character.character_id + "/",
             }
        });

    //$('.spinner').show();
    add_event_post.done(function( data ) {
        process_and_show_result(data);
    });
});