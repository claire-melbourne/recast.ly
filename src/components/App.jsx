import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
  }

  componentDidMount() {
    this.getVideos('babies dancing');
  }

  getVideos(query) {
    var options = {
      key: this.props.API_Key,
      query: query
    };

    this.props.searchYouTube(options, (videos) =>
      this.setState({
        videos: videos,
        currentVideo: videos[0]
      })
    );
  }
  videoClickHandler(video) {
    this.setState({
      currentVideo: video
    });
  }
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search getVideos= {this.getVideos.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video= {this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videoClickHandler={this.videoClickHandler.bind(this)} videos={this.state.videos}/>
          </div>
        </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
