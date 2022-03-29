export class Component {
  constructor() {
    this.state = {};

    /*
      this.componentDidMount = () => {};
      this.componentDidMount();
      try {} finally {}
    */
  }

  componentDidMount() {}

  forceUpdate() {
    this._root.innerHTML = this.render();
  }

  setState(param) {
    this.state = typeof param === "function" ? param(this.state) : param;
    this.forceUpdate();
  }

  render() {
    return `<div id="root"></div>`;
  }
}
