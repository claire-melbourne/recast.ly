//import component
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0]
    }; //title
    //we want to pass in an id and have it access title and description from
    //we

  }

  getVideos(query) {
    var options = {
      key: this.props.API_KEY,
      q: query
    };

    this.props.searchYouTube(options, (videos) => {
      this.setState({
        videos: videos,
        currentVideo: videos[0]
      });
    });
  }

  componentDidMount() {
    this.searchYouTube
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
            <div id="search"><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>

          <div className="col-md-5">
            <VideoList videoClickHandler={this.videoClickHandler.bind(this)} videos={this.state.videos}/>
          </div>
        </div>
      </div>
    );
  }
}

//currently a functional stateless oobject
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
