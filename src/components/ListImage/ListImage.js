import React , { useState } from 'react'
import { connect } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'

import '../../../node_modules/font-awesome/css/font-awesome.min.css'; 
import './ListImage.scss';

var _ = require('lodash');
const ListImage = () => {
 
    const [page, setPage] = useState(1);

    const dispatch = useDispatch()
    const data = useSelector(state => state.reducer.data)
    let list = [];
    let totalPages = 0;
    let key = '';

    if(data!=null) {
        list =  _.get(data.imageData, 'results', []);
        totalPages = _.get(data.imageData, 'total_pages', 0);
        key = data.key;
    }

    const handlePageChange = (newPage) => {

         setPage(newPage);
         console.log("123");
         dispatch(fetch('sun', 2));
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