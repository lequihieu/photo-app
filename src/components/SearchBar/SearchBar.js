import React, { useState } from 'react'
import {connect} from 'react-redux'
import {search} from '../../actions'
import { useDispatch } from 'react-redux'
import './SearchBar.scss'
import '../../../node_modules/font-awesome/css/font-awesome.min.css'; 
const SearchBar = () => {
    let text;
    const dispatch = useDispatch()
    return (
        <div className="search">
            <input className="searchTerm" ref={node => text = node} />
            <button className="searchButton" onClick={ e => {
                e.preventDefault()
                dispatch(search(text.value))
                text.value = ''             
            }}><i className="fa fa-search"></i></button> 
        </div>
    )
}

export default connect()(SearchBar)