import React , { useState } from 'react'
import { connect } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import {fetch} from '../../actions/fetchImage'
import ModalImage from 'react-modal-image';
import Pagination from 'react-js-pagination';

import '../../../node_modules/font-awesome/css/font-awesome.min.css'; 
import './ListImage.scss';
import ListModalImage from '../ListModalImage/ListModalImage';
import Example from '../Pagination/Pagination';

const _ = require('lodash');
const ListImage = () => {
 
    const [page, setPage] = useState(1);
    const [key, setKey] = useState('');

    const dispatch = useDispatch()
    const data = useSelector(state => state.reducer.data)
    let res = [];
    let list = [];
    let listName = [];
    let totalItem = 0;
    let keyPresent = '';
    let imageId = '';

    if(data != null) 
    {
        list = _.map(_.get(data.imageData, 'results', []), 'urls');
        listName = _.map(_.get(data.imageData, 'results', []), 'id');
        list.forEach((element, index) => element.name = listName[index]);
        totalItem = _.get(data.imageData, 'total');
        keyPresent = data.key;
        
        if(keyPresent !== key) {
            setKey(keyPresent);
            setPage(1);
        }
    }

    const handlePageChange = (pageNumber) => {
        console.log(pageNumber);
        setPage(pageNumber);     
        dispatch(fetch(key, pageNumber));
    }
    return(
        <div className="image-container">
            
            <ListModalImage images={list}/>
            <div className="pagination">

                {(list.length>0)&&<Example
                    totalItemsCount = {totalItem}
                    itemPerPage = {30}
                    pageActive = {page}
                    pageRangeDisplayed = {20} 
                    onChange = {handlePageChange}
                />}
            </div>
        </div>
    )
}

export default connect()(ListImage)