
var VideoListEntry = props => React.createElement(
  "div",
  { className: "video-list-entry media" },
  React.createElement(
    "div",
    { className: "media-left media-middle" },
    React.createElement("img", { className: "media-object", src: props.video.snippet.thumbnails.default.url, alt: "" })
  ),
  React.createElement(
    "div",
    { className: "media-body" },
    React.createElement(
      "div",
      { className: "video-list-entry-title", onClick: () => props.videoClickHandler(props.video) },
      " ",
      props.video.snippet.title
    ),
    React.createElement(
      "div",
      { className: "video-list-entry-detail" },
      props.video.snippet.description
    )
  )
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZpZGVvTGlzdEVudHJ5LmpzeCJdLCJuYW1lcyI6WyJWaWRlb0xpc3RFbnRyeSIsInByb3BzIiwidmlkZW8iLCJzbmlwcGV0IiwidGh1bWJuYWlscyIsImRlZmF1bHQiLCJ1cmwiLCJ2aWRlb0NsaWNrSGFuZGxlciIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiO0FBQ0EsSUFBSUEsaUJBQWtCQyxLQUFELElBQ25CO0FBQUE7QUFBQSxJQUFLLFdBQVUsd0JBQWY7QUFDRTtBQUFBO0FBQUEsTUFBSyxXQUFVLHlCQUFmO0FBQ0UsaUNBQUssV0FBVSxjQUFmLEVBQThCLEtBQUtBLE1BQU1DLEtBQU4sQ0FBWUMsT0FBWixDQUFvQkMsVUFBcEIsQ0FBK0JDLE9BQS9CLENBQXVDQyxHQUExRSxFQUErRSxLQUFJLEVBQW5GO0FBREYsR0FERjtBQUlFO0FBQUE7QUFBQSxNQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUsd0JBQWYsRUFBd0MsU0FDdEMsTUFBTUwsTUFBTU0saUJBQU4sQ0FBd0JOLE1BQU1DLEtBQTlCLENBRFI7QUFBQTtBQUVJRCxZQUFNQyxLQUFOLENBQVlDLE9BQVosQ0FBb0JLO0FBRnhCLEtBREY7QUFJRTtBQUFBO0FBQUEsUUFBSyxXQUFVLHlCQUFmO0FBQTBDUCxZQUFNQyxLQUFOLENBQVlDLE9BQVosQ0FBb0JNO0FBQTlEO0FBSkY7QUFKRixDQURGOztBQWNBO0FBQ0E7QUFDQVQsZUFBZVUsU0FBZixHQUEyQjtBQUN6QlIsU0FBT1MsVUFBVUMsTUFBVixDQUFpQkM7QUFEQyxDQUEzQjs7QUFJQTtBQUNBO0FBQ0EsZUFBZWIsY0FBZiIsImZpbGUiOiJWaWRlb0xpc3RFbnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxudmFyIFZpZGVvTGlzdEVudHJ5ID0gKHByb3BzKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tbGlzdC1lbnRyeSBtZWRpYVwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtbGVmdCBtZWRpYS1taWRkbGVcIj5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwibWVkaWEtb2JqZWN0XCIgc3JjPXtwcm9wcy52aWRlby5zbmlwcGV0LnRodW1ibmFpbHMuZGVmYXVsdC51cmx9IGFsdD1cIlwiIC8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWxpc3QtZW50cnktdGl0bGVcIiBvbkNsaWNrPSB7XG4gICAgICAgICgpID0+IHByb3BzLnZpZGVvQ2xpY2tIYW5kbGVyKHByb3BzLnZpZGVvKVxuICAgICAgfT4ge3Byb3BzLnZpZGVvLnNuaXBwZXQudGl0bGV9PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWxpc3QtZW50cnktZGV0YWlsXCI+e3Byb3BzLnZpZGVvLnNuaXBwZXQuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuLy8gUHJvcFR5cGVzIHRlbGwgb3RoZXIgZGV2ZWxvcGVycyB3aGF0IGBwcm9wc2AgYSBjb21wb25lbnQgZXhwZWN0c1xuLy8gV2FybmluZ3Mgd2lsbCBiZSBzaG93biBpbiB0aGUgY29uc29sZSB3aGVuIHRoZSBkZWZpbmVkIHJ1bGVzIGFyZSB2aW9sYXRlZFxuVmlkZW9MaXN0RW50cnkucHJvcFR5cGVzID0ge1xuICB2aWRlbzogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59O1xuXG4vLyBJbiB0aGUgRVM2IHNwZWMsIGZpbGVzIGFyZSBcIm1vZHVsZXNcIiBhbmQgZG8gbm90IHNoYXJlIGEgdG9wLWxldmVsIHNjb3BlXG4vLyBgdmFyYCBkZWNsYXJhdGlvbnMgd2lsbCBvbmx5IGV4aXN0IGdsb2JhbGx5IHdoZXJlIGV4cGxpY2l0bHkgZGVmaW5lZFxuZXhwb3J0IGRlZmF1bHQgVmlkZW9MaXN0RW50cnk7XG4iXX0=