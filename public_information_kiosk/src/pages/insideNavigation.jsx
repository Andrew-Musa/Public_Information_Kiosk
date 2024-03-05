import React from 'react'
import { ZoomIn, ZoomOut, RotateLeft, Explore, SupportAgent, ArrowBack } from '@mui/icons-material';

export default function InsideNavigation() {
    return (
        <div className='container'>
            <div className='d-flex justify-content-center fs-1 pt-5'>Directions to Destination</div>
            <div className='d-flex justify-content-between pt-5 mx-3'>
                <button className='btn btn-outline-dark'><ArrowBack />Back</button>
                <button className='btn btn-outline-dark'>Call a Volunteer<SupportAgent /></button>
            </div>

<<<<<<< HEAD
            <div className="row px-5 mt-5">
                <div className="col-10">
                    <small style={{ fontSize: "10px" }}><b>Open: </b>8:00-17:00 <b>Phone Number: </b>(888)888-8888</small>
                    <div style={{ height: "200px" }} className='border d-flex'>Map</div>
                </div>
                <div className="col-2 d-flex flex-column">
=======
            <div class="row px-5 mt-5">
                <div class="col-10">
                    <small style={{ fontSize: "10px" }}><b>Open: </b>8:00-17:00 <b>Phone Number: </b>(888)888-8888</small>
                    <div style={{ height: "200px" }} className='border d-flex'>Map</div>
                </div>
                <div class="col-2 d-flex flex-column">
>>>>>>> main
                    <button className='btn mt-5 p-1'>
                        <ZoomIn />
                    </button>
                    <button className='btn mt-1 p-1'>
                        <ZoomOut />
                    </button>
                    <button className='btn mt-1 p-1'>
                        <Explore />
                    </button>
                    <button className='btn mt-1 p-1'>
                        <RotateLeft />
                    </button>
                </div>
            </div>
            <div className='d-flex justify-content-center pt-5'>
                <button className='btn btn-outline-dark'>Send Directions to My Phone</button>
<<<<<<< HEAD
            </div>
=======

            </div>

>>>>>>> main
        </div >
    )
}
