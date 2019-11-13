import React, { Component } from 'react';
import Header from './header';
import Card from './card';
import data from "./data.json"

//Define class component
class Gameboard extends Component{
    // Here we do the state via calling the constructor method
    constructor(props){
        super(props);
        //Here we create state
        this.state = {
            characters: data
        }
    }
    render() {
        //render methods return JSX
        //Can only return one element (div)
        return <div>
            <h1>Gameboard</h1>
            <Header />

            {/* Map returns a new array. We are returning a new array of JSX elements, and we are dynamically creating the elements. Replace character.id with character.image to display images. Go into json file to add all the characters.   */}
            {this.state.characters.map(function (character){
                return <p>{character.id}</p>
            })}
        </div>
    }
}

export default Gameboard;