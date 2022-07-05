import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { getBeerWithFilter, setFilterData } from '../../../slices/beerSlice';


const Header = () => {
    const dispatch = useDispatch();

    const [search, setSearch] = useState("");

    if (search.length < 1) {
        dispatch(setFilterData());
    }

    const handleSubmit = () => {
        search.length >= 1 && dispatch(getBeerWithFilter(search));
    }

    return (
        <nav className="navbar navbar-expand-lg  navbar-dark bg-primary sticky-top">
            <div className="container-fluid">
                <Link to={'/'}><span className="navbar-brand">Beers</span></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={'/'}><span className="nav-link active" aria-current="page">Home</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/favorites'}><span className="nav-link" aria-current="page">Favorite</span></Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
                        <button className="btn btn-outline-light" onClick={() => handleSubmit()} type="button">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Header