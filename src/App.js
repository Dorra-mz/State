import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'John Snow',
        bio: 'A short bio about John Snow.',
        imgSrc: 'https://th.bing.com/th/id/R.bdf26c72e5ea48a9ca0952317a0cec73?rik=mugWTFHX7Hb5Jw&pid=ImgRaw&r=0',
        profession: 'Software Developer',
      },
      show: false,
      mountTime: null,
    };
  }

  componentDidMount() {
    this.setState({ mountTime: new Date() });

    this.intervalId = setInterval(() => {
      this.forceUpdate();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleShow() {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  }

  render() {
    const { person, show, mountTime } = this.state;

    return (
      <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', padding: '20px', color: 'white', backgroundColor: 'blue' }}>
        <h1>React Class Component</h1>
        <button
          style={{
            padding: '10px',
            margin: '10px',
            fontSize: '16px',
            color: 'white',
            backgroundColor: 'black',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            
          }}
          onClick={() => this.toggleShow()}
        >
          Toggle Profile
        </button>

        {show && (
          <div
            style={{
              margin: '20px',
              border: '1px solid black',
              padding: '10px',
              borderRadius: '8px',
              backgroundColor: 'white',
            }}
          >
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} style={{ maxWidth: '100%', borderRadius: '4px' }} />
            <p style={{ fontWeight: 'bold', marginTop: '10px' }}>Profession: {person.profession}</p>
          </div>
        )}

        <p style={{ marginTop: '20px', color: 'black' }}>
          Time interval since mount: {mountTime && Math.floor((new Date() - mountTime) / 1000)} seconds
        </p>
      </div>
    );
  }
}

export default App;
    
           