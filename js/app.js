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
        
        //playlist image
        var playlistImage = results.playlists.items[0].images[1].url;
        
        //playlist url
        var playlistUrl = results.playlists.items[0].external_urls.spotify;
        
        //playlist title
        var playlistTitle = results.playlists.items[0].name;
        
        //posting playlist to page
        var imagePost = '<li><i class="fa fa-angle-double-left"></i><figure><div class="playlist-img"><a href="'+ playlistUrl + '"><img src='+'"'+ playlistImage +'"'+' width="300px" height="300px" alt="test" /></a></div><figcaption class="caption"><h3>' + playlistTitle + '</h3></figcaption></figure><i class="fa fa-angle-double-right"></i></li>';
        $('#results-list').html(imagePost);
    
    });


}