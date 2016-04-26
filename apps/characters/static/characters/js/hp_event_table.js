"use strict";

$( document ).ready(function() {
    $('#hp_jstree').on("changed.jstree", function (e, data) {
        // Make an Ajax call to the api to get all events
        var jsonurl = "http://127.0.0.1:8000/api/events/?character_id=" + data.selected[0];
        var graph_get = $.get(jsonurl, {});

        //$('.spinner').show();
        graph_get.done(function( data ) {
            //$('.spinner').hide();
            $('#hp_events_table').empty();

            var $table = $('<table class="table table-bordered" />');
            $table.append( '<tr><th>Date</th><th>Event</th></tr>' );
            for (var event = 0; event < data.results.length; event++) {
                $table.append( '<tr><td>' + data.results[event].date + '</td><td>' + data.results[event].title + '</td></tr>' );
            }
            $('#hp_events_table').append($table);
        });
    });
});
