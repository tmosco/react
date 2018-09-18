import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: 0
    
    // tags: ["tag1", "tag2", "tag3"]
    
    // imageUrl: "https://picsum.photos/200"
  };
  
  styles = {
    // fontSize: 30
    // fontWeight: "bold"
  };
  handleIncreMnt = product => {
    console.log(product);
    console.log(this.props.value)
    this.setState({ value: this.state.value + 1 });
  };
  // doHandleIncreament = () => {
  //   this.handleIncreMnt({ id: 1 });  not needed
  // };
  
  render() {
    // let classes = this.getBadgeClasses();
    // let time = this.getTime();
    console.log("props", this.props);
    // console.log("props", this.value);
    return (
      <div>
        {this.props.children}
        {/* <h4>the {this.props.id} </h4> dont use this */}
        {/* <img src={this.state.imageUrl} alt="" /> */}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={()=> this.handleIncreMnt({id :1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* <div style={{ fontWeight: "bold" }}> Will it rain today?</div> */}
        {/* {this.renderTags()} */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? " Zero " : value;
  }
  constructor() {
    super();
    this.handleIncreament = this.handleIncreament.bind(this);
  }

  handleIncreament() {
    console.log("Increment Clicked", this.state.value + 1);
  }
  //or

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags! </p>;
  //   return (
  //     <ul>
  //       {this.state.tags.map(tag => (
  //         <li key={tag}> {tag} </li>
  //       ))}
  //     </ul>
  //   );
  // }
}

export default Counter;
