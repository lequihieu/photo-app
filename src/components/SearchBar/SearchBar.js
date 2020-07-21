import React, { useState } from 'react'
import {connect} from 'react-redux'
import {fetch} from '../../actions/fetchImage'
import { useDispatch } from 'react-redux'
import './SearchBar.scss'
import '../../../node_modules/font-awesome/css/font-awesome.min.css'; 
const SearchBar = () => {

    const dispatch = useDispatch()
    const [input, setInput] = useState('');
    return (
        <div className="search">
            <input className="searchTerm" onChange={e=>setInput(e.target.value)} />
            <button className="searchButton" onClick={() => dispatch(fetch(input, 1))} ><i className="fa fa-search"></i></button> 
        </div>
    )
}

export default connect()(SearchBar)