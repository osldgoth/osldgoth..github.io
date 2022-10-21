//I don't follow why react is not imported here?

'use strict';

const reactElement = React.createElement; //I don't like single letter variable names - I find it harder to read/understand the code. what is e?

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked the button.';
    }

    return reactElement(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like this button now!'
    );
  }
}

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(reactElement(LikeButton));