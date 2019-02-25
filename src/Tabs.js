import React from "react";

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    const arrTabs = props.children.map(el => el.props);

    this.state = {
      value: arrTabs,
      taba: arrTabs[0].children,
      tab: arrTabs[0].title
    };
  }

  viwer(val) {
    let tab = this.state.value.find(tab => tab.title === val);
    this.setState({ taba: tab.children, tab: val },
    () => console.log(val, this.state.taba));
  }

  render() {
    return (
      <div className="Tabs">
        <div className="Contenttab">
          {this.state.value.map((el, index) => {
            return (
              <div
                className={
                  this.state.value[index].title === this.state.tab
                    ? "Tab Tec"
                    : "Tab"
                }
                key={index}
                onClick={() => this.viwer(this.state.value[index].title)}
              >
                {el.title}
              </div>
            );
          })}
        </div>
        <div className="Content">{this.state.taba}</div>
      </div>
    );
  }
}

export default Tabs;
