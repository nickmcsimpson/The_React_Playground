import React, { Component } from 'react';

class List extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      planets: []
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getListOfPlanets();
  }

  // Retrieves the list of items from the Express app
  getListOfPlanets = () => {
    fetch('/api/planets')
    .then(res => res.json())
    .then(planets => this.setState({ planets }))
  }

  render() {
    const { planets } = this.state;

    return (
      <div className="App">
        <h1>Planets</h1>
        {/* Check to see if any items are found*/}
        {planets.length ? (
          <div>
            {/* Render the list of items */}
            {planets.map((item) => {
              return(
                <div>
                  <p>Hello {item}!</p>
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h2>No Planets Found</h2>
          </div>
        )
      }
      </div>
    );
  }
}

export default List;