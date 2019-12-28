import React from 'react'
import "./style.css";

export default class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            error: true,
        }
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
            <>
                <div className='profileContainer'>
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
                        className='userNameBtn userNameBtnText'
                        onClick={() => {
                            this.handleUserName(userName);
                            this.setState({ userName: '' })
                        }
                        }
                    >Save</button>
                </div>
                <div>
                    <input type='file' placeholder='url of the '></input>
                    <button>Upload</button>
                </div>
            </>
        )
    }
}
