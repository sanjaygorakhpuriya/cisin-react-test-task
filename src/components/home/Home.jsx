import React from 'react'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../card/Card';
import Modal from '../common/modal/Modal';
import { getBeerWithPagination } from '../../slices/beerSlice.js';

const Home = () => {

    const dispatch = useDispatch();
    const beers = useSelector((state) => state.beer);
    const filterData = beers.filterData;

    const [currentPage, setCurrentPage] = useState(1);
    const [modalData, setmodalData] = useState({});

    useEffect(() => {
        if (!beers?.status) {
            dispatch(getBeerWithPagination(currentPage));
        }
    }, [beers])

    useEffect(() => {
        if (beers?.status) {
            dispatch(getBeerWithPagination(currentPage));
        }
    }, [currentPage])

    const previousPage = () => {
        setCurrentPage(currentPage - 1);
    }
    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    }

    return (
        <div className="container-fluid d-flex flex-column pb-4">
            <div className="pt-4 row">
                {filterData.length <= 1 && beers?.data && beers?.data.map((item, index) => <div key={index} className="col-2 d-flex justify-content-center my-2" ><Card item={item} setmodalData={setmodalData} /></div>)}
                {filterData.length >= 1 && filterData.map((item, index) => <div key={index} className="col-2 d-flex justify-content-center my-2" ><Card item={item} setmodalData={setmodalData} /></div>)}
                <Modal data={modalData} />
            </div>
            {filterData.length <= 1 && <div className="pt-4 d-flex flex-row justify-content-around">
                {currentPage > 1 && <button type="button" className="btn btn-success" onClick={previousPage}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg>
                </button>}
                <button type="button" className="btn btn-success" onClick={nextPage}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                    </svg>
                </button>
            </div>}
        </div>
    )
}

export default Home