import React from 'react';
import styled from 'styled-components';

class UserForm extends React.Component{
    constructor(){
        super();
        this.state = {
            gitUser: ''
        }
    }

    handleChange = (e) => {
        this.setState({gitUser: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.getUser(this.state.gitUser);
        this.setState({gitUser: ''});
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit} >
                <input type='text' 
                       name='username' 
                       placeholder='github username' 
                       value={this.state.gitUser} 
                       onChange={this.handleChange} />
                <button type='submit'>submit</button>
            </form>
        )
    }
}

export default UserForm;