import React, { useState } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const Example = (props) => {

    const {totalItemsCount, itemPerPage, pageActive, pageRangeDisplayed, onChange} = props;
    const [page, setPage] = useState(pageActive)

    const totalPage = Math.ceil(totalItemsCount/itemPerPage);

    const firstPage = () => 
    {
        setPage(1);
        onChange(1);
    }
    const lastPage = () =>
    {
        setPage(totalPage);
        onChange(totalPage);
    }
    const previous = (currentPage) => 
    {
        if(currentPage === 1) return;
        setPage(currentPage - 1);
        onChange(currentPage - 1);
    }
    const next = (currentPage) => 
    {
        if(currentPage === totalPage) return;
        setPage(currentPage + 1);
        onChange(currentPage + 1);
    }
    return (
        <Pagination size="lg" aria-label="Page navigation example">
        <PaginationItem>
            <PaginationLink first href="#" onClick={firstPage}/>
        </PaginationItem>
        <PaginationItem>
            <PaginationLink previous href="#" onClick={() => { onChange(); }}/>
        </PaginationItem>
        <PaginationItem>
            <PaginationLink href="#">
            1
            </PaginationLink>
        </PaginationItem>
        <PaginationItem>
            <PaginationLink href="#">
            2
            </PaginationLink>
        </PaginationItem>
        <PaginationItem>
            <PaginationLink href="#">
            3
            </PaginationLink>
        </PaginationItem>
        <PaginationItem>
            <PaginationLink next href="#" onClick={next}/>
        </PaginationItem>
        <PaginationItem>
            <PaginationLink last href="#" onClick={lastPage}/>
        </PaginationItem>
        </Pagination>
  );
}

export default Example;