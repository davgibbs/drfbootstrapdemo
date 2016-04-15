"use strict";

$( document ).ready(function() {
    console.log( "ready!" );

    // Make an Ajax call to the api to get all events
    var jsonurl = "http://127.0.0.1:8000/api/events/?character_id=1";
    console.log('cc');

    var graph_get = $.get(jsonurl, {});

   //$('.spinner').show();
    graph_get.done(function( data ) {
        //$('.spinner').hide();

        var $table = $('<table/>');
        for (var event = 0; event < data.results.length; event++) {
            $table.append( '<tr><td>' + data.results[event].date + '</td><td>' + data.results[event].title + '</td></tr>' );
        }
        $('#hp_events_table').append($table);
    });
});

