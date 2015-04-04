//global variables
var listCounter = 0;
var listResults;

$(document).ready(function() {
    
    $('.playlist-search').submit(function(event){
        //stop default form submit
        event.preventDefault();
        //returns counter back to zero
        listCounter = 0;
        //zero out prev search
        $('.input-search').html('');
        //zero out prev results
        $('#results-list').html('');
        //grab user value
          var userSearch = $(this).find('input[type="text"]').val();
        //pass val to function
        getPlaylist(userSearch);
    });
    nextPlaylist();
});


function getPlaylist(userSearch){
    
    
    //parameters to be passed
    var params = { q: userSearch, type: 'playlist' };
    
    //ajax request
    
    var results = $.ajax({
        url: 'https://api.spotify.com/v1/search',
        data: params,
        dataType: "json",
        type: "GET",
    })
    .done(function(results){
        
        console.log(results);
        //assign to global variable
        listResults = results;
        
        //show current playlist
        showPlaylist();
    
    })
    .fail(function(){
        alert('error');
    });
    
    
}

var showPlaylist = function(){
    
    var playlistImage = listResults.playlists.items[listCounter].images[1].url;
        
        //playlist url
        var playlistUrl = listResults.playlists.items[listCounter].external_urls.spotify;
        
        //playlist title
        var playlistTitle = listResults.playlists.items[listCounter].name;
        
        //posting playlist to page
        var imagePost = '<li><i id="prev" class="fa fa-angle-double-left"></i><figure><div class="playlist-img"><a href="'+ playlistUrl + '"><img src='+'"'+ playlistImage +'"'+' width="300px" height="300px" alt="test" /></a></div><figcaption class="caption"><h3>' + playlistTitle + '</h3></figcaption></figure><i id="next" class="fa fa-angle-double-right"></i></li>';
        $('#results-list').html(imagePost);
    
    
    
}

 var nextPlaylist = function(){
     console.log('next playlist begin');
     
        $(document).on('click','#next', function(){
                
            listCounter++;
            showPlaylist();
            
        
        });
        $(document).on('click','#prev',function(){
              
            listCounter--;
            showPlaylist();
            
        
        });
    }