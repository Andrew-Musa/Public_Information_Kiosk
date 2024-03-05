import React from 'react'
import { Map, Marker } from "pigeon-maps"
import { ZoomIn, ZoomOut, RotateLeft, Explore, SupportAgent, ArrowBack, Star, StarBorder } from '@mui/icons-material';


export default function OutsideNavigation() {
    return (
        <div className='container'>
            <div className='d-flex justify-content-center fs-1 pt-5'>Directions to Destination</div>
            <div className='d-flex justify-content-between pt-5 mx-3'>
                <button className='btn btn-outline-dark'><ArrowBack />Back</button>
                <button className='btn btn-outline-dark'>Call a Volunteer<SupportAgent /></button>
            </div>

            <div className="row px-5 mt-5">
                <div className='col-3 p-0'>
                    <div className='border' style={{ height: "70px" }}>pic</div>
                    <div className='border' style={{ fontSize: "6px", paddingTop: "5px", height: "130px" }}>
                        <div>Calgary Tower</div>
                        <div>Phone: (888)888-8888</div>
                        <div>Open: 8:00-20:00</div>
                        <div>All Days</div>
                        <div>Street, City, Province</div>
                        <div>Postal Code</div>
                        <Star style={{ fontSize: "8px" }} />
                        <Star style={{ fontSize: "8px" }} />
                        <Star style={{ fontSize: "8px" }} />
                        <Star style={{ fontSize: "8px" }} />
                        <StarBorder style={{ fontSize: "8px" }} />
                    </div>
                </div>
                <div className="col-8 p-0">
                    <div style={{ height: "200px" }} className='border d-flex'>Map</div>
                </div>
                <div className="col-1 d-flex flex-column">
                    <button className='btn p-1'>
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
            </div>
        </div >
    )
}
