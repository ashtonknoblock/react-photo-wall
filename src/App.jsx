import React, { Component } from 'react';
import './App.css';
const PHOTO_URL = "https://picsum.photos/200?photo=";
const PHOTO_LIST_URL = "https://picsum.photos/list";

class App extends Component {
 state = {
   photos: []
 }

  componentDidMount() {
    let self = this
    fetch(PHOTO_LIST_URL)
    .then(function(res) {
      return res.json();
    })
    .then(function(myJson) {
        self.setState({
        photos: myJson
      });
    });
  }

  render() {
    const { photos = [] } = this.state;
    return (
      <React.Fragment>
        <header>
          <h1>Photo Wall</h1>
        </header>
        <div className="collage">
            {photos.map( photo => 
                <img alt={photo.filename}
                     key={photo.id}
                     src={PHOTO_URL+photo.id}
                />
            )}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
