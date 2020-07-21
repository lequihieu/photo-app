import React , { useState } from 'react'
import { connect } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import {fetch} from '../../actions/fetchImage'

import '../../../node_modules/font-awesome/css/font-awesome.min.css'; 
import './ListImage.scss';

var _ = require('lodash');
const ListImage = () => {
 
    const [page, setPage] = useState(1);
    const [key, setKey] = useState('');

    const dispatch = useDispatch()
    const data = useSelector(state => state.reducer.data)
    let list = [];
    let totalPages = 0;
    let keyPresent = '';

    if(data!=null) 
    {
        list =  _.get(data.imageData, 'results', []);
        totalPages = _.get(data.imageData, 'total_pages', 0);
        keyPresent = data.key;
        
        if(keyPresent!=key) {
            setKey(keyPresent);
            setPage(1);
        }
    }

    const handlePageChange = (newPage) => {

         setPage(newPage);     
         dispatch(fetch(key, newPage));
    }
    return(
        <div>
            <div className="listImage">
                {list.map((element) => {
                    return <img className="item" alt="good" src={element.urls.thumb} width="192" height="130" />
                })}
            </div>
            <div>
                <button
                disabled={page <= 1}
                onClick={() => handlePageChange(page - 1)}
                >
                Prev
                </button>
        
                <button
                disabled={page >= totalPages}
                onClick={() => handlePageChange(page + 1)}
                >
                Next
                </button>
            </div>
        </div>
    )
}

export default connect()(ListImage)