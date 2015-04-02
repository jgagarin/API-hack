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


