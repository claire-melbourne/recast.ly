// TODO: Render the `App` component to the DOM
import App from './components/App.js'; //referencing script file in the compile
import searchYouTube from './components/searchYouTube.js'; //referencing script file in the compile
import YOUTUBE_API_KEY from './components/youtube.js'; //referencing script file in the compile
// import VideoList from './components/VideoList.js';

ReactDOM.render(
  <App searchYouTube={searchYouTube} API_KEY={YOUTUBE_API_KEY}/>, document.getElementById('app')
);
// ReactDOM.render(
//   <Search />, document.getElementById('search')
// );
//function which gets data from exampleVideoData, formats it and stores what we need in an object
// var getVideoData () => {

// }
//output will be stored in a variable

// ReactDOM.render(
//   <VideoList {}{}{}/>, document.getElementById('videoList')
// );
// ReactDOM.render(
//   <VideoPlayer />, document.getElementById('videoPlayer')
// );