"use strict";

// A generic method to process and show the result
function process_and_show_result(data){
    //$('.spinner').hide();

    $("#response_type").text("Success");
    $("#wmh-button-type").removeClass( "btn-danger" );
    $("#wmh-button-type").addClass( "btn-success" );
    // need a add, edit and delete $("#modal-message").html('Successfully created Event!<br>Title: ' + data.title + '<br>Date: ' + data.date);

    $("#resultModal").modal('show');
}


function listen_for_change_clicks() {
    $(document).ready(function(){
        // Handle Add Event button press
        $("#event-add").click( function() {
            $("#AddEventModal").modal('show');
        });

        // Handle Delete Event button press
        $(".event-delete").click( function() {
            $("#DeleteEventModal").modal('show');

            var event_id = $(this).attr('name');
            $("#DeleteEventID").val(event_id);

            var date = $(this).siblings("td:first").text();
            var title = $(this).siblings("td:nth-child(2)").text();
            $("#DeleteEventDate").val(date);
            $("#DeleteEventTitle").val(title);
        });
    });
};

