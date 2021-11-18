import React, { Component } from 'react'
import './searchboxcom3.css';
export default class Searchbox extends Component {
    render() {
        return (
            <form className="searchbox">
                <input type="text" placeholder="I am looking for..." name="search" />
                <button type="submit"><i class="fa fa-search"></i></button>
            </form>
        )
    }
}