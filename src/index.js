// TODO: Render the `App` component to the DOM
import App from './components/App.js'; //referencing script file in the compile
import VideoList from './components/VideoList.js';

ReactDOM.render(
  <App />, document.getElementById('app')
);
// ReactDOM.render(
//   <Search />, document.getElementById('search')
// );
ReactDOM.render(
  <VideoList />, document.getElementById('videoList')
);
// ReactDOM.render(
//   <VideoPlayer />, document.getElementById('videoPlayer')
// );