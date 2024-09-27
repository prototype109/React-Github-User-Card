import React from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './component/User-Card';
import { GitHubCalendar } from 'github-calendar';
import UserForm from './component/User-Form';

class App extends React.Component {

  constructor(){
    super();
    this.state= {
      data: {},
      followersData: []
    };
  }

  componentDidMount(){
    axios.get('https://api.github.com/users/jacobAngulo')
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

        //GitHubCalendar('.calendar', `${this.state.data.login}`);
    }
  }

  getUser = (user) => {
    axios.get(`https://api.github.com/users/${user}`)
      .then(res => {
        console.log('Result: ', res);
        this.setState({data: res.data});
      })
      .catch(err => {
        console.log('Err: ', err);
      });
  }

  render(){
    return (
      <div className="App">
        <UserForm getUser={this.getUser} />
        <UserCard userInfo={this.state} />
      </div>
    );
  }
}

export default App;
