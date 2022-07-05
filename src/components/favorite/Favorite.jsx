import React, { useState, useEffect } from 'react'
import Card from '../card/Card'
import Modal from '../common/modal/Modal'
import { useSelector, useDispatch } from 'react-redux';
import { addRank, clearFavorites } from '../../slices/beerSlice';

const Favorite = ({ notifier }) => {
    const dispatch = useDispatch();
    const beers = useSelector((state) => state.beer);
    const favorites = beers.favorites;
    const [modalData, setmodalData] = useState({});

    //--this function handles the functionality on pressing OK on popup
    const onOk = () => {
        dispatch(clearFavorites());
    }

    //fucntion to handle delete button
    const handleClick = () => {
        notifier.confirm(
            'Are you sure?',
            onOk,
            {
                labels: {
                    confirm: 'Remove All Favorites'
                }
            }
        )
    }

    const handleRankChange = (id, value) => {
        dispatch(addRank({ id: id, value: value }));
    }

    useEffect(() => { }, [beers]); //this function is for reloading the component when the state changes


    return (<>
        <div className="container pt-4 d-flex flex-row flex-wrap justify-content-end">
            {favorites && favorites.length >= 1 && <button type="button" className="btn btn-danger" onClick={handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                </svg>
            </button>}
        </div>
        <div className="pt-4 row">
            {favorites && favorites.map((item, index) => <div key={index} className="col-2 d-flex flex-column justify-content-center my-2 align-items-center" >
                <Card item={item} setmodalData={setmodalData} />
                <select class="form-select col-3" style={{ width: "15em" }} aria-label=".form-select-sm example" onChange={(e) => handleRankChange(item.id, e.target.value)}>
                    <option selected={item?.rank != "1" || "2" | "3" | "4" | "5"}>Open this select menu</option>
                    <option selected={item?.rank == "1"} value="1">One</option>
                    <option selected={item?.rank == "2"} value="2">Two</option>
                    <option selected={item?.rank == "3"} value="3">Three</option>
                    <option selected={item?.rank == "4"} value="4">Four</option>
                    <option selected={item?.rank == "5"} value="5">Five</option>
                </select>
            </div>)}
            {favorites.length < 1 && <h2 className='text-center'>No data found</h2>}
            <Modal data={modalData} />
        </div>
    </>
    )
}

export default Favorite