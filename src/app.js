const initialWords = ["one", "two"];

const initialState = {
  title: "Title 1",
  words: initialWords,
};

export const app = {
  state: initialState,

  // DON'T use `app` variable in methods
  // Instead use this

  showWords() {
    return this.state.words.join("-");
  },

  addWord(word) {
    this.setState({
      ...this.state,
      words: [...this.state.words, word],
    });
  },

  setTitle(title) {
    this.setState({
      ...this.state,
      title: title,
    });
  },

  render() {
    const { title, words } = this.state;

    return `
      <div>
        <h1>${title}</h1>
        <ul>
          ${
            words
              .map((word) => `<li>${word}</li>`)
              .join("")
          }
        </ul>
      </div>
    `;
  },

  forceUpdate() {
    document.body.innerHTML = this.render();
  },

  setState(newState) {
    this.state = newState;
    this.forceUpdate();
  }
};
