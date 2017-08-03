var commander = require('commander');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');

commander
    .version('0.0.1')
    .option('-p --my_tweets', 'Display my tweets')
    .option('-c --spotify_this_song [type]', 'Spotify this song')
    .option('-c --movie_this [type]', 'Get movie details')
    .option('-p --do_what_it_says', 'Do what is in file')
    .parse(process.argv);

if (commander.my_tweets) {
    console.log('about to call twitter api');
} else if (commander.spotify_this_song) {
    console.log('about to call spotify api for info about song: ' + commander.spotify_this_song);
} else if (commander.movie_this) {
    console.log('about to look up movie on imdb, name is: ' + commander.movie_this);
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
 
var params = {screen_name: '@lchrist8775'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});

}

function getMySong(){
 
    var spotify = new Spotify({
    id: <53755270422d4685ac42959369532add>,
    secret: <c602463cd7f4408eac2ac8f9e4a050d7>
 });
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
    if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
 });

 }

function getMyMovie(){  
    request('http://www.google.com', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred 
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
    console.log('body:', body); // Print the HTML for the Google homepage.
});
}
