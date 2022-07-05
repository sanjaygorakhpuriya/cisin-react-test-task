import React from 'react'
import './card.css'
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../../slices/beerSlice';

const Card = ({ item, setmodalData }) => {
    const { id, image_url, name, tagline } = item;
    const dispatch = useDispatch();

    const favorites = useSelector((state) => state.beer.favorites);

    const handleAddFavorite = () => {
        dispatch(addFavorite(item));
    }
    const handleRemoveFavorite = () => {
        dispatch(removeFavorite(id));
    }

    const isFavorite = (id) => favorites.find((item) => item.id === id);

    return (
        <div className="card p-2 card-top">
            <img src={image_url} className="card-img-top" alt="Image" style={{ height: "20em" }} />
            <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">{name}</h5>
                <p className="card-text tagline" >{tagline}</p>

                <div className='d-flex justify-content-between align-items-center'>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setmodalData(item)}>
                        View Info
                    </button>

                    {isFavorite(id) ?
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={handleRemoveFavorite} width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                        </svg> :
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={handleAddFavorite} width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                        </svg>}
                </div>
            </div>
        </div >
    )
}

export default Card