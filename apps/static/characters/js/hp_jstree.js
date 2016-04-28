"use strict";

function get_json_jstree_formatted(results){
    var json_jstree_formatted = [];

    var i = 0;
    for (i; i < results.length; i++){
        json_jstree_formatted.push({
            text: results[i].full_name,
            id: results[i].id
        })
    }

    return json_jstree_formatted;
}


$( document ).ready(function() {
    var jsonurl = "../api/characters/";
    var graph_get = $.get(jsonurl, {});

    graph_get.done(function( data ) {
        var json_jstree_formatted = get_json_jstree_formatted(data.results);

        $('#hp_jstree').jstree({
            "core" : {
                "data" : json_jstree_formatted,
                "multiple": false
            },
            "types" : {
              "default" : {
                "icon" : "glyphicon glyphicon-flash"
              },
            },
            "plugins" : [ "themes", "ui", "wholerow", "types" ]
        });
    });
});

