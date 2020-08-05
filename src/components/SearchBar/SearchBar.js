import React, { useState } from 'react'
import {connect} from 'react-redux'
import {fetch} from '../../actions/fetchImage'
import { useDispatch, useSelector } from 'react-redux'
import './SearchBar.scss'
import '../../../node_modules/font-awesome/css/font-awesome.min.css'; 
const SearchBar = () => {

    const dispatch = useDispatch()
    const loading = useSelector(state => state.reducer.loading)
    const [term, setTerm] = useState('');
    const search = (keyCode) => {
        if(keyCode === 13) 
        {
            dispatch(fetch(term, 1))
        }
    }
    return (
        <div className="container">
            <div className="search">
                <input className="search-term" onChange={e=>setTerm(e.target.value)} onKeyDown={e=>search(e.keyCode)}/>
                <button className="search-button" onClick={() => dispatch(fetch(term, 1))} ><i className="fa fa-search"></i></button>     
            </div>
            {loading ? <div class="sk-chase">
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
            </div> : <div></div>}
        </div>
    )
}

export default connect()(SearchBar)