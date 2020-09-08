
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  render() {
    return React.createElement(
      "div",
      { className: "search-bar form-inline" },
      React.createElement("input", {
        className: "form-control",
        type: "text",
        onChange: event => this.props.getVideos(event.target.value) }),
      React.createElement(
        "button",
        { className: "btn hidden-sm-down" },
        React.createElement("span", { className: "glyphicon glyphicon-search" })
      )
    );
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJ2YWx1ZSIsInJlbmRlciIsImV2ZW50IiwiZ2V0VmlkZW9zIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiO0FBQ0EsTUFBTUEsTUFBTixTQUFxQkMsTUFBTUMsU0FBM0IsQ0FBcUM7QUFDbkNDLGNBQVlDLEtBQVosRUFBbUI7QUFDakIsVUFBTUEsS0FBTjtBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxhQUFPO0FBREksS0FBYjtBQUdEOztBQUdEQyxXQUFTO0FBQ1AsV0FDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLHdCQUFmO0FBQ0U7QUFDRSxtQkFBVSxjQURaO0FBRUUsY0FBSyxNQUZQO0FBR0Usa0JBQ0dDLEtBQUQsSUFBVyxLQUFLSixLQUFMLENBQVdLLFNBQVgsQ0FBcUJELE1BQU1FLE1BQU4sQ0FBYUosS0FBbEMsQ0FKZixHQURGO0FBT0U7QUFBQTtBQUFBLFVBQVEsV0FBVSxvQkFBbEI7QUFDRSxzQ0FBTSxXQUFVLDRCQUFoQjtBQURGO0FBUEYsS0FERjtBQWFEO0FBdkJrQztBQXlCckM7QUFDQTtBQUNBLGVBQWVOLE1BQWYiLCJmaWxlIjoiU2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5jbGFzcyBTZWFyY2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWU6ICcnXG4gICAgfTtcbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1iYXIgZm9ybS1pbmxpbmVcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgb25DaGFuZ2U9IHtcbiAgICAgICAgICAgIChldmVudCkgPT4gdGhpcy5wcm9wcy5nZXRWaWRlb3MoZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgIH0vPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBoaWRkZW4tc20tZG93blwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tc2VhcmNoXCI+PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbi8vIEluIHRoZSBFUzYgc3BlYywgZmlsZXMgYXJlIFwibW9kdWxlc1wiIGFuZCBkbyBub3Qgc2hhcmUgYSB0b3AtbGV2ZWwgc2NvcGVcbi8vIGB2YXJgIGRlY2xhcmF0aW9ucyB3aWxsIG9ubHkgZXhpc3QgZ2xvYmFsbHkgd2hlcmUgZXhwbGljaXRseSBkZWZpbmVkXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XG4iXX0=