/* globals listen_for_change_clicks: true, selected_character: true */
"use strict";

function format_date(in_date){
    // Function not used at the minute
    var d = new Date(in_date);
    var out_date = d.toLocaleDateString('en-GB', {
        day : 'numeric',
        month : 'short',
        year : 'numeric'
    });
    return out_date;
}


function populate_event_table(character_id){
    // Make an Ajax call to the api to get all events
    var graph_get = $.ajax({
            url: "../api/events/?character_id=" + character_id,
            type: "GET",
        });
    selected_character.character_id = character_id;

    //$('.spinner').show();
    graph_get.done(function( data ) {
        //$('.spinner').hide();
        $('#hp_events_table').empty();

        var $add_button = $('<button type="button" class="btn btn-large btn-info" id="event-add"><i class="glyphicon glyphicon-plus"></i> &nbsp; Add New Event</button>');

        var $table = $('<table class="table table-bordered" />');
        $table.append('<tr><th>Date</th><th>Event</th><th colspan="2" style="text-align: center">Actions</th></tr>' );
        for (var event = 0; event < data.results.length; event++) {
            var $row = $('<tr />');
            $row.append('<td>' + data.results[event].date + '</td><td>' + data.results[event].title + '</td>' );
            $row.append('<td align="center" class="event-delete" name="' + data.results[event].id + '"><a><span title="Delete" class="glyphicon glyphicon-remove"></span></a></td>');
            $row.append('<td align="center" class="event-edit" name="' + data.results[event].id + '"><a><span title="Edit" class="glyphicon glyphicon-edit"></span></a></td>');
            $table.append($row);
        }
        $('#hp_events_table').append($add_button);
        $('#hp_events_table').append('<br><br>');
        $('#hp_events_table').append($table);

        listen_for_change_clicks();
    });
}


function listen_for_jstree_clicks() {
    $('#jstree_div').on("changed.jstree", function (e, data) {
        populate_event_table(data.selected[0]);
    });
}
