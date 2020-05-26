import { React, Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
    <div className="App">
      <h1>React Playground</h1>
      {/* Link to Planets */}
      <Link to={'./planets'}>
        <button variant="raised">
            Hello Planets
        </button>
      </Link>
    </div>
    );
  }
}
export default Home;