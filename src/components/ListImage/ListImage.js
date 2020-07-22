import React , { useState } from 'react'
import { connect } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import {fetch} from '../../actions/fetchImage'
import ModalImage from 'react-modal-image';
import Pagination from 'react-js-pagination';

import '../../../node_modules/font-awesome/css/font-awesome.min.css'; 
import './ListImage.scss';

const _ = require('lodash');
const ListImage = () => {
 
    const [page, setPage] = useState(1);
    const [key, setKey] = useState('');

    const dispatch = useDispatch()
    const data = useSelector(state => state.reducer.data)
    let list = [];
    let totalItem = 0;
    let keyPresent = '';

    if(data != null) 
    {
        list =  _.get(data.imageData, 'results', []);
        totalItem = _.get(data.imageData, 'total');
        keyPresent = data.key;
        
        if(keyPresent !== key) {
            setKey(keyPresent);
            setPage(1);
        }
    }

    const handlePageChange = (pageNumber) => {

         setPage(pageNumber);     
         dispatch(fetch(key, pageNumber));
    }
    return(
        <div className="image-container">
            <div className="list-image">
                {list.map((element, index) => {
                    return <ModalImage
                        small={element.urls.thumb}
                        large={element.urls.raw}
                        className="item"
                        key={index}
                        />;
                })}
            </div>
            <div className="pagination">

                <Pagination
                    itemClass="page-item"
                    linkClass="page-link"
                    activePage={page}
                    itemsCountPerPage={30}
                    totalItemsCount={totalItem}
                    pageRangeDisplayed={20}
                    onChange={handlePageChange}
                    />
            </div>
        </div>
    )
}

export default connect()(ListImage)