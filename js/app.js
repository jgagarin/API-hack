//global variables
var searchVal = $('.input-search').val();

$(document).ready(function() {
    
    $('.playlist-search').submit(function(event){
        //stop default form submit
        event.preventDefault();
        //zero out prev search
        $('.input-search').html('');
        //zero out prev results
        $('#results-list').html('');
        //grab user value
          var userSearch = $(this).find('input[type="text"]').val();
        //pass val to function
        getPlaylist(userSearch);
    });
});


function getPlaylist(userSearch){
    
    //parameters to be passed
    var params = { q: userSearch, type: 'playlist' };
    
    //ajax request
    
    var results = $.ajax({
        url: 'http://api.spotify.com/v1/search',
        data: params,
        dataType: "json",
        type: "GET",
    })
    .done(function(results){
        
        console.log(results);
    
    });


}