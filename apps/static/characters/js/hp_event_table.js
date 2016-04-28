"use strict";

function format_date(in_date){
    var d = new Date(in_date);
    var out_date = d.toLocaleDateString('en-GB', {
        day : 'numeric',
        month : 'short',
        year : 'numeric'
    })
    return out_date
}

$( document ).ready(function() {
    $('#hp_jstree').on("changed.jstree", function (e, data) {
        // Make an Ajax call to the api to get all events
        var jsonurl = "../api/events/?character_id=" + data.selected[0];
        var graph_get = $.get(jsonurl, {});

        //$('.spinner').show();
        graph_get.done(function( data ) {
            //$('.spinner').hide();
            $('#hp_events_table').empty();

            var $add_button = $('<button type="button" class="btn btn-large btn-info" id="sensorlogs-data-add"><i class="glyphicon glyphicon-plus"></i> &nbsp; Add New Event</button>');

            var $table = $('<table class="table table-bordered" />');
            $table.append('<tr><th>Date</th><th>Event</th><th colspan="2" style="text-align: center">Actions</th></tr>' );
            for (var event = 0; event < data.results.length; event++) {
                var $row = $('<tr />');
                $row.append('<td>' + format_date(data.results[event].date) + '</td><td>' + data.results[event].title + '</td>' );
                $row.append('<td align="center" class="sensorlogs-data-delete" name="'+'"><a><span title="Delete" class="glyphicon glyphicon-remove"></span></a></td>');
                $row.append('<td align="center" class="sensorlogs-data-edit" name="'+'"><a><span title="Edit" class="glyphicon glyphicon-edit"></span></a></td>');
                $table.append($row)
            }
            $('#hp_events_table').append($add_button);
            $('#hp_events_table').append('<br><br>');
            $('#hp_events_table').append($table);
        });
    });
});