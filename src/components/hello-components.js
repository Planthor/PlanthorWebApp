import Component from "react";
let namc = "123l";
class helloComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <h1>Hello {namc}</h1>;
  }
}

export default helloComponents;
