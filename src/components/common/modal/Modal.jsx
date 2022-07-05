import React from 'react'
import './modal.css'

const Modal = ({ data }) => {
    const { name, first_brewed, attenuation_level, volume, boil_volume } = data;

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{name}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body flex align-self-center">
                        <table className='align-self-center'>
                            <tbody>
                                <tr>
                                    <td>First Brewed</td>
                                    <td>{first_brewed}</td>
                                </tr>
                                <tr>
                                    <td>Volume</td>
                                    <td>{volume?.value} {volume?.unit}</td>
                                </tr>
                                <tr>
                                    <td>Boil Volume</td>
                                    <td>{boil_volume?.value} {boil_volume?.unit}</td>
                                </tr>
                                <tr>
                                    <td>Attenuation Level</td>
                                    <td>{attenuation_level}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal