import React, { useState } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const Example = (props) => {

    const {totalItemsCount, itemPerPage, pageActive, pageRangeDisplayed, onChange} = props;

    const totalPage = Math.ceil(totalItemsCount/itemPerPage);

    const previous = () => 
    {
        if(pageActive === 1) return;
        onChange(pageActive - 1);
    }
    const next = () => 
    {
        if(pageActive === totalPage) return;
        onChange(pageActive + 1);
    }

    let tr = [];
    
    if(pageActive === 1) {
        tr[0] = 1; tr[1] = 2; tr[2] = 3;
    } else if(pageActive === totalPage) {
        tr[0] = totalPage - 2;
        tr[1] = totalPage - 1;
        tr[2] = totalPage;
    } else {
        tr[0] = pageActive - 1;
        tr[1] = pageActive;
        tr[2] = pageActive + 1;
    }

    const listPage = tr.map((page, id) => {
        if(page===pageActive) 
        return (
            <PaginationItem active>
                <PaginationLink href="#" onClick={()=>onChange(page)}>
                {page}
                </PaginationLink>
            </PaginationItem>
        )
        else 
        return (
            <PaginationItem>
                <PaginationLink href="#" onClick={()=>onChange(page)}>
                {page}
                </PaginationLink>
            </PaginationItem>
        )
    })
    return (
        <Pagination size="lg" aria-label="Page navigation example">
        <PaginationItem>
            <PaginationLink first href="#" onClick={()=> onChange(1)}/>
        </PaginationItem>
        <PaginationItem>
            <PaginationLink previous href="#" onClick={()=>previous()}/>
        </PaginationItem>
        {listPage}
        <PaginationItem>
            <PaginationLink next href="#" onClick={()=>next()}/>
        </PaginationItem>
        <PaginationItem>
            <PaginationLink last href="#" onClick={()=>onChange(totalPage)}/>
        </PaginationItem>
        </Pagination>
  );
}

export default Example;