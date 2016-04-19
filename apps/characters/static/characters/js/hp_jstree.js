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
    var jsonurl = "http://127.0.0.1:8000/api/characters/";
    var graph_get = $.get(jsonurl, {});

    //$('.spinner').show();
    graph_get.done(function( data ) {

        //$('.spinner').hide();

        console.log(data.results);
        //var json_parsed = JSON.parse(data);
        //console.log(json_parsed);

        var json_jstree_formatted = get_json_jstree_formatted(data.results);

        $('#hp_jstree').jstree({
            "core" : {
                "data" : json_jstree_formatted,
                "multiple": false
            }
        });


    });
});

