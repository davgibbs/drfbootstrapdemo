"use strict";

// A generic method to process and show the result
function process_and_show_result(data){
    $('.spinner').hide();
    var result = JSON.parse(data);

    if (result.success === "true") {
        var message = result.results[0].message;
        $("#response_type").text("Success");
        $("#wmh-button-type").removeClass( "btn-danger" );
        $("#wmh-button-type").addClass( "btn-success" );
        $("#modal-message").text(message);
    }
    else {
        var error_message = result.results[0].message;
        $("#response_type").text("Error");
        $("#wmh-button-type").removeClass( "btn-success" );
        $("#wmh-button-type").addClass( "btn-danger" );
        $("#modal-message").text(error_message);
    }
    $("#resultModal").modal('show');
}


// Handle Add Event button press
function listen_for_change_clicks() {
    $(document).ready(function(){
        $("#event-add").click( function() {
            $("#AddEventModal").modal('show');
        });
    });
};

