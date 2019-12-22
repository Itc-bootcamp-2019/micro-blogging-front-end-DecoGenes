import React from 'react'
import "./style.css";


export default class Profile extends React.Component {
    constructor(props) {
        super(props)
    }

    handleNameChange(event) {
        this.setState({ userName: event.target.value });
    }

    handleUserName(userName) {
        localStorage.setItem('userName', userName)
    }

    render() {
        const { userName } = this.state
        return (
            <div>
                <h1 className='profile'>Profile</h1>
                <label className='userNameLabel'>User Name</label>
                <input
                    name='userName'
                    className='userNameInput'
                    type='text'
                    placeholder='Type a User Name'
                    onChange={event => this.handleNameChange(event)}
                    value={userName}
                ></input>
                <button
                    className='userNameBtn'
                    onClick={() => {
                        this.handleUserName(userName);
                    }
                    }
                >Save</button>
            </div>
        )
    }
}
