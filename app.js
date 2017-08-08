var commander = require('commander');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');

commander
    .version('0.0.1')
    .option('-p --my_tweets', 'Display my tweets')
    .option('-c --spotify_this_song', 'Spotify this song')
    .option('-c --movie_this [type]', 'Get movie details')
    .option('-p --do_what_it_says', 'Do what is in file')
    .parse(process.argv);


if (commander.my_tweets) {
    console.log(getMyTweets());
} else if (commander.spotify_this_song) {
    console.log(getMySong());
} else if (commander.movie_this) {
    console.log(getMyMovie());
} else if (commander.do_what_it_says) {
    console.log('about to do what file says');
} else {
    console.log('Unknown command');
}
function getMyTweets(){
    var client = new Twitter({
        consumer_key: 'lrDQKrrDlFhZRb7lCsFE96IPH',
        consumer_secret: 'J8sjiA6UtcecudJhVw9A8elC6PEla9lcpTYUdI3eP2ttRKm2k6',
        access_token_key: '181346655-g7beOZYuJWtxiBJb4Xdq3cMQYvbBrs7JMYalcps1',
        access_token_secret: 'idKoFLwUVngDaDy8JYLIJhEOLyN2UUV2rooLyGmksEjsd',
    });
 
var params = {screen_name: 'lchrist8775'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
        //console.log(tweets);
        for (var i = 0; i < tweets.length; i++) {
            var tweetText = tweets[i].text;
            console.log(tweetText);
        }
    }
})
};

 function getMySong(){
     var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: '53755270422d4685ac42959369532add',
  secret: 'c602463cd7f4408eac2ac8f9e4a050d7',
});
 
//spotify
//  .search({ type: 'track', query: 'All the Small Things' })
//  .then(function(response) {
//    console.log(response);
//  })
//  .catch(function(err) {
//    console.log(err);
//  });
 
// var spotify = new Spotify({
 //   id: '53755270422d4685ac42959369532add',
// secret: 'c602463cd7f4408eac2ac8f9e4a050d7'
//});
 
spotify.search({ type: 'track', query: 'Ripple' }, function(err, data) {
    if (err) {
       return console.log('Error occurred: ' + err);
    }
    //console.log(data);
    //for (var i = 0; i < data.tracks.items.length; i++) {
    //        var myText = data.tracks.items[i].album;
    //        console.log(myText);
    //    }
    for (var i = 0; i < 20; i++) {
            var myText = data.tracks.items[i].album;
            console.log(myText);
        }

});

 }

function getMyMovie(){  
    request('http://www.omdbapi.com/?i=tt3896198&apikey=165a5933', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred 
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
    console.log('body:', body); // Print the HTML for the Google homepage.
});
}