"use strict";

// A generic method to process and show the result
function process_and_show_result(data){
    //$('.spinner').hide();

    //var message = result.results[0].message;
    $("#response_type").text("Success");
    $("#wmh-button-type").removeClass( "btn-danger" );
    $("#wmh-button-type").addClass( "btn-success" );
    $("#modal-message").text('Successfully created Event:\n' + data);

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


