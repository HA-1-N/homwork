import React from 'react';
import { setSourceMapRange } from 'typescript';

const PayrollPagination = ({ postPerPage, totalItems, paginate, currentPage, setCurrentPage }: any) => {

    const pageNumbers = [];

    for (let index = 1; index <= Math.ceil(totalItems / postPerPage); index++) {
        pageNumbers.push(index);
    }

    const handleClickNext = () => {
        if (currentPage < Math.ceil(totalItems / postPerPage)) {
            currentPage++;
        }
        setCurrentPage(currentPage);
    };

    const handleClickPrev = () => {
        if (currentPage === 1) {
            currentPage = 1;
        } else {
            currentPage--;
        }
        setCurrentPage(currentPage);
    };

    return (
        <nav>
            <ul className='pagination'>
                {currentPage === 1 ?
                    <button disabled type='button' className='btn btn-secondary' onClick={handleClickPrev}>Previous</button>
                    :
                    <button type='button' className='btn btn-secondary' onClick={handleClickPrev}>Previous</button>
                }
                {pageNumbers.map((pageNumber: any, index: number) => (
                    <li key={index} className='page-item'>
                        <button onClick={() => paginate(pageNumber)} type='button' className='btn btn-secondary'>
                            {pageNumber}
                        </button>
                    </li>
                ))}
                {
                    currentPage === Math.ceil(totalItems / postPerPage) ?
                        <button disabled onClick={handleClickNext} type='button' className='btn btn-secondary'>Next</button>
                        :
                        <button onClick={handleClickNext} type='button' className='btn btn-secondary'>Next</button>
                }
            </ul>
        </nav>
    );
};

export default PayrollPagination;