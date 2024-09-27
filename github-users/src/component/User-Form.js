import React from 'react';
import styled from 'styled-components';

class UserForm extends React.Component{
    constructor(){
        super();
        this.state = {
            gitUser: ''
        }
        this.Form = styled.form`
            display: flex;
            flex-direction: column;
            margin: 0 auto;
            margin-top: 10px;
            width: 230px;
        `;
        this.Button = styled.button`
            margin: 0 auto;
            min-width: 100px;
            height: 50px;
            font-size: 2.5rem;
        `;
        this.Input = styled.input`
            height: 38px;
            font-size: 1.5rem;
        `;
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
            <this.Form onSubmit={this.handleSubmit} >
                <this.Input type='text' 
                       name='username' 
                       placeholder='github username' 
                       value={this.state.gitUser} 
                       onChange={this.handleChange} />
                <this.Button type='submit'>submit</this.Button>
            </this.Form>
        )
    }
}

export default UserForm;