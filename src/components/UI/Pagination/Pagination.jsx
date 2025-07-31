import React from 'react';
import pageCount from '../../../utils/pageCount';
import AwesomeButton from '../button/AwesomeButton';

const Pagination = ({ totalPages, limit,page,switchpage, ...props }) => {
    let pagesArr = [];
    for (let i = 0; i < totalPages; i++) {
        pagesArr.push(i + 1);
    }

    return (
        <div {...props}>
            <div className="page_wrapper" >
                {
                    pagesArr.map(p =>
                        <AwesomeButton onClick={()=>switchpage(p)} key={p} className={page === p ? "page page_current" : "page"}>{p}</AwesomeButton>
                    )
                }
            </div>
        </div>
    );
}

export default Pagination;
