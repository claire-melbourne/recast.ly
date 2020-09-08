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

    this.props.searchYouTube(options, videos => this.setState({
      videos: videos,
      currentVideo: videos[0]
    }));
  }
  videoClickHandler(video) {
    this.setState({
      currentVideo: video
    });
  }
  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'nav',
        { className: 'navbar' },
        React.createElement(
          'div',
          { className: 'col-md-6 offset-md-3' },
          React.createElement(Search, { getVideos: this.getVideos.bind(this) })
        )
      ),
      React.createElement(
        'div',
        { className: 'row' },
        React.createElement(
          'div',
          { className: 'col-md-7' },
          React.createElement(VideoPlayer, { video: this.state.currentVideo })
        ),
        React.createElement(
          'div',
          { className: 'col-md-5' },
          React.createElement(VideoList, { videoClickHandler: this.videoClickHandler.bind(this), videos: this.state.videos })
        )
      )
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiZXhhbXBsZVZpZGVvRGF0YSIsIlZpZGVvTGlzdCIsIlZpZGVvUGxheWVyIiwiU2VhcmNoIiwiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJ2aWRlb3MiLCJjdXJyZW50VmlkZW8iLCJjb21wb25lbnREaWRNb3VudCIsImdldFZpZGVvcyIsInF1ZXJ5Iiwib3B0aW9ucyIsImtleSIsIkFQSV9LZXkiLCJzZWFyY2hZb3VUdWJlIiwic2V0U3RhdGUiLCJ2aWRlb0NsaWNrSGFuZGxlciIsInZpZGVvIiwicmVuZGVyIiwiYmluZCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsZ0JBQVAsTUFBNkIsNkJBQTdCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixnQkFBdEI7QUFDQSxPQUFPQyxXQUFQLE1BQXdCLGtCQUF4QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsYUFBbkI7O0FBRUEsTUFBTUMsR0FBTixTQUFrQkMsTUFBTUMsU0FBeEIsQ0FBa0M7QUFDaENDLGNBQVlDLEtBQVosRUFBbUI7QUFDakIsVUFBTUEsS0FBTjtBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFRVixnQkFERztBQUVYVyxvQkFBY1gsaUJBQWlCLENBQWpCO0FBRkgsS0FBYjtBQUlEOztBQUVEWSxzQkFBb0I7QUFDbEIsU0FBS0MsU0FBTCxDQUFlLGdCQUFmO0FBQ0Q7O0FBRURBLFlBQVVDLEtBQVYsRUFBaUI7QUFDZixRQUFJQyxVQUFVO0FBQ1pDLFdBQUssS0FBS1IsS0FBTCxDQUFXUyxPQURKO0FBRVpILGFBQU9BO0FBRkssS0FBZDs7QUFLQSxTQUFLTixLQUFMLENBQVdVLGFBQVgsQ0FBeUJILE9BQXpCLEVBQW1DTCxNQUFELElBQ2hDLEtBQUtTLFFBQUwsQ0FBYztBQUNaVCxjQUFRQSxNQURJO0FBRVpDLG9CQUFjRCxPQUFPLENBQVA7QUFGRixLQUFkLENBREY7QUFNRDtBQUNEVSxvQkFBa0JDLEtBQWxCLEVBQXlCO0FBQ3ZCLFNBQUtGLFFBQUwsQ0FBYztBQUNaUixvQkFBY1U7QUFERixLQUFkO0FBR0Q7QUFDREMsV0FBUztBQUNQLFdBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxRQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxzQkFBZjtBQUNFLDhCQUFDLE1BQUQsSUFBUSxXQUFZLEtBQUtULFNBQUwsQ0FBZVUsSUFBZixDQUFvQixJQUFwQixDQUFwQjtBQURGO0FBREYsT0FERjtBQU1FO0FBQUE7QUFBQSxVQUFLLFdBQVUsS0FBZjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsVUFBZjtBQUNFLDhCQUFDLFdBQUQsSUFBYSxPQUFRLEtBQUtkLEtBQUwsQ0FBV0UsWUFBaEM7QUFERixTQURGO0FBSUU7QUFBQTtBQUFBLFlBQUssV0FBVSxVQUFmO0FBQ0UsOEJBQUMsU0FBRCxJQUFXLG1CQUFtQixLQUFLUyxpQkFBTCxDQUF1QkcsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FBOUIsRUFBaUUsUUFBUSxLQUFLZCxLQUFMLENBQVdDLE1BQXBGO0FBREY7QUFKRjtBQU5GLEtBREY7QUFpQkQ7QUFqRCtCOztBQXFEbEM7QUFDQTtBQUNBLGVBQWVOLEdBQWYiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4YW1wbGVWaWRlb0RhdGEgZnJvbSAnLi4vZGF0YS9leGFtcGxlVmlkZW9EYXRhLmpzJztcbmltcG9ydCBWaWRlb0xpc3QgZnJvbSAnLi9WaWRlb0xpc3QuanMnO1xuaW1wb3J0IFZpZGVvUGxheWVyIGZyb20gJy4vVmlkZW9QbGF5ZXIuanMnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuL1NlYXJjaC5qcyc7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2aWRlb3M6IGV4YW1wbGVWaWRlb0RhdGEsXG4gICAgICBjdXJyZW50VmlkZW86IGV4YW1wbGVWaWRlb0RhdGFbMF1cbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5nZXRWaWRlb3MoJ2JhYmllcyBkYW5jaW5nJyk7XG4gIH1cblxuICBnZXRWaWRlb3MocXVlcnkpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgIGtleTogdGhpcy5wcm9wcy5BUElfS2V5LFxuICAgICAgcXVlcnk6IHF1ZXJ5XG4gICAgfTtcblxuICAgIHRoaXMucHJvcHMuc2VhcmNoWW91VHViZShvcHRpb25zLCAodmlkZW9zKSA9PlxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHZpZGVvczogdmlkZW9zLFxuICAgICAgICBjdXJyZW50VmlkZW86IHZpZGVvc1swXVxuICAgICAgfSlcbiAgICApO1xuICB9XG4gIHZpZGVvQ2xpY2tIYW5kbGVyKHZpZGVvKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjdXJyZW50VmlkZW86IHZpZGVvXG4gICAgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgb2Zmc2V0LW1kLTNcIj5cbiAgICAgICAgICAgIDxTZWFyY2ggZ2V0VmlkZW9zPSB7dGhpcy5nZXRWaWRlb3MuYmluZCh0aGlzKX0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC03XCI+XG4gICAgICAgICAgICA8VmlkZW9QbGF5ZXIgdmlkZW89IHt0aGlzLnN0YXRlLmN1cnJlbnRWaWRlb30vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTVcIj5cbiAgICAgICAgICAgIDxWaWRlb0xpc3QgdmlkZW9DbGlja0hhbmRsZXI9e3RoaXMudmlkZW9DbGlja0hhbmRsZXIuYmluZCh0aGlzKX0gdmlkZW9zPXt0aGlzLnN0YXRlLnZpZGVvc30vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG4vLyBJbiB0aGUgRVM2IHNwZWMsIGZpbGVzIGFyZSBcIm1vZHVsZXNcIiBhbmQgZG8gbm90IHNoYXJlIGEgdG9wLWxldmVsIHNjb3BlXG4vLyBgdmFyYCBkZWNsYXJhdGlvbnMgd2lsbCBvbmx5IGV4aXN0IGdsb2JhbGx5IHdoZXJlIGV4cGxpY2l0bHkgZGVmaW5lZFxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl19