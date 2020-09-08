import VideoListEntry from './VideoListEntry.js';

var VideoList = props => React.createElement(
  "div",
  { className: "video-list" },
  props.videos.map((video, index) => React.createElement(VideoListEntry, { key: index, video: video, videoClickHandler: props.videoClickHandler, getVideos: props.getVideos }))
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZpZGVvTGlzdC5qc3giXSwibmFtZXMiOlsiVmlkZW9MaXN0RW50cnkiLCJWaWRlb0xpc3QiLCJwcm9wcyIsInZpZGVvcyIsIm1hcCIsInZpZGVvIiwiaW5kZXgiLCJ2aWRlb0NsaWNrSGFuZGxlciIsImdldFZpZGVvcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsY0FBUCxNQUEyQixxQkFBM0I7O0FBRUEsSUFBSUMsWUFBYUMsS0FBRCxJQUNkO0FBQUE7QUFBQSxJQUFLLFdBQVUsWUFBZjtBQUNHQSxRQUFNQyxNQUFOLENBQWFDLEdBQWIsQ0FBaUIsQ0FBQ0MsS0FBRCxFQUFRQyxLQUFSLEtBQ2hCLG9CQUFDLGNBQUQsSUFBZ0IsS0FBS0EsS0FBckIsRUFBNEIsT0FBT0QsS0FBbkMsRUFBMEMsbUJBQW9CSCxNQUFNSyxpQkFBcEUsRUFBdUYsV0FBWUwsTUFBTU0sU0FBekcsR0FERDtBQURILENBREY7O0FBT0E7QUFDQTtBQUNBUCxVQUFVUSxTQUFWLEdBQXNCO0FBQ3BCTixVQUFRTyxVQUFVQyxLQUFWLENBQWdCQztBQURKLENBQXRCOztBQUlBO0FBQ0E7QUFDQSxlQUFlWCxTQUFmIiwiZmlsZSI6IlZpZGVvTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWaWRlb0xpc3RFbnRyeSBmcm9tICcuL1ZpZGVvTGlzdEVudHJ5LmpzJztcblxudmFyIFZpZGVvTGlzdCA9IChwcm9wcykgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWxpc3RcIj5cbiAgICB7cHJvcHMudmlkZW9zLm1hcCgodmlkZW8sIGluZGV4KSA9PlxuICAgICAgPFZpZGVvTGlzdEVudHJ5IGtleT17aW5kZXh9IHZpZGVvPXt2aWRlb30gdmlkZW9DbGlja0hhbmRsZXI9IHtwcm9wcy52aWRlb0NsaWNrSGFuZGxlcn0gZ2V0VmlkZW9zPSB7cHJvcHMuZ2V0VmlkZW9zfS8+KX1cbiAgPC9kaXY+XG4pO1xuXG4vLyBQcm9wVHlwZXMgdGVsbCBvdGhlciBkZXZlbG9wZXJzIHdoYXQgYHByb3BzYCBhIGNvbXBvbmVudCBleHBlY3RzXG4vLyBXYXJuaW5ncyB3aWxsIGJlIHNob3duIGluIHRoZSBjb25zb2xlIHdoZW4gdGhlIGRlZmluZWQgcnVsZXMgYXJlIHZpb2xhdGVkXG5WaWRlb0xpc3QucHJvcFR5cGVzID0ge1xuICB2aWRlb3M6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXG59O1xuXG4vLyBJbiB0aGUgRVM2IHNwZWMsIGZpbGVzIGFyZSBcIm1vZHVsZXNcIiBhbmQgZG8gbm90IHNoYXJlIGEgdG9wLWxldmVsIHNjb3BlLlxuLy8gYHZhcmAgZGVjbGFyYXRpb25zIHdpbGwgb25seSBleGlzdCBnbG9iYWxseSB3aGVyZSBleHBsaWNpdGx5IGRlZmluZWQuXG5leHBvcnQgZGVmYXVsdCBWaWRlb0xpc3Q7XG4iXX0=