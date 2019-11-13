import React, { Component } from 'react';

//Define class component
class Header extends Component{
    render() {
        //render methods return JSX
        //Can only return one element (div)
        return <div>
            <p>Hi Score : 9</p>
            <p>Current Score: 7</p>
        </div>
    }
}

export default Header;