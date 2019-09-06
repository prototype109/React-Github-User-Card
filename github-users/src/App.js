import React from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './component/User-Card';

class App extends React.Component {

  constructor(){
    super();
    this.state= {
      data: {},
      followersData: []
    };
  }

  componentDidMount(){
    axios.get('https://api.github.com/users/prototype109')
      .then(res => {
        console.log('Result: ', res);
        this.setState({data: res.data});
      })
      .catch(err => {
        console.log('Err: ', err);
      });
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.data !== this.state.data){
      axios.get(`https://api.github.com/users/${this.state.data.login}/followers`)
        .then(res => {
          console.log('Followers: ', res);
          this.setState({followersData: res.data});
        })
        .catch(err => {
          console.log('Error followers: ', err);
        });
    }
  }

  render(){
    return (
      <div className="App">
        <UserCard userInfo={this.state} />
      </div>
    );
  }
}

export default App;
