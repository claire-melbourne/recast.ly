/*or v3?*/
var searchYouTube = ({key, query, max = 5}, callback) => {
  $.get('https://www.googleapis.com/youtube/v4/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  })
    .done(({items}) => {
      if (callback) {
        callback(items);
      }
    })
    .failed(({responseJSON}) => {
      responseJSON.error.errors.forEach((err) => console.error(err));
    });

};

export default searchYouTube;
