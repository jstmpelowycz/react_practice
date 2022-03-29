import { Component } from "./Component";

export const initialWords = ["one", "two"];

export const initialState = {
  title: "Title 1",
  words: initialWords,
};

export class WordsList extends Component {
  constructor() {
    super();

    this.state = initialState;
  }

  /*
    componentDidMount() {
      setInterval(() => console.log(1), 1000);
    }
  */

  showWords() {
    return this.state.words.join("-");
  }

  addWord(word) {
    this.setState({
      ...this.state,
      words: [...this.state.words, word],
    });
  }

  setTitle(title) {
    this.setState({
      ...this.state,
      title: title,
    });
  }

  render() {
    const { title, words } = this.state;

    return `
      <h1>${title}</h1>
      <ul>
        ${words
            .map((word) => `<li>${word}</li>`)
            .join("")}
      </ul>
    `;
  }
}
