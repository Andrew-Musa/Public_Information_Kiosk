import React from 'react'
import { Bento, Restaurant, RamenDining, SetMeal, RiceBowl, DinnerDining, SupportAgent, ArrowBack, Star, StarBorder } from '@mui/icons-material';


export default function Restaurants() {
    return (
        <div className='container'>
            <div className='d-flex justify-content-center fs-1 pt-5'>French Restaurants!</div>
            <div className='d-flex justify-content-between pt-5 mx-3'>
                <button className='btn btn-outline-dark'><ArrowBack />Back</button>
                <button className='btn btn-outline-dark'>Call a Volunteer<SupportAgent /></button>
            </div>

            <div className='border mt-3'>
                <div className='d-flex justify-content-evenly m-2'>
                    <div>Top Rated</div>
                    <div>Closest Proximity</div>
                </div>
                <div className='p-2'>
                    <div className='card mt-1'>
                        <div className='row p-2'>
                            <div className='col-2 d-flex justify-content-center align-items-center'>
                                <Bento fontSize="large" />
                            </div>
                            <div className='col-6' style={{ fontSize: "11px" }}>
                                <b>Restaurants</b>
                                <div>Stree, City, Province, Country</div>
                            </div>
                            <div className='col-4'>
                                <Star fontSize='small' />
                                <Star fontSize='small' />
                                <Star fontSize='small' />
                                <Star fontSize='small' />
                                <StarBorder fontSize='small' />
                            </div>
                        </div>
                    </div>

                    <div className='card mt-1'>
                        <div className='row p-2'>
                            <div className='col-2 d-flex justify-content-center align-items-center'>
                                <Restaurant fontSize="large" />
                            </div>
                            <div className='col-6' style={{ fontSize: "11px" }}>
                                <b>Restaurants</b>
                                <div>Stree, City, Province, Country</div>
                            </div>
                            <div className='col-4'>
                                <Star fontSize='small' />
                                <Star fontSize='small' />
                                <Star fontSize='small' />
                                <Star fontSize='small' />
                                <StarBorder fontSize='small' />
                            </div>
                        </div>
                    </div>

                    <div className='card mt-1'>
                        <div className='row p-2'>
                            <div className='col-2 d-flex justify-content-center align-items-center'>
                                <RamenDining fontSize="large" />
                            </div>
                            <div className='col-6' style={{ fontSize: "11px" }}>
                                <b>Restaurants</b>
                                <div>Stree, City, Province, Country</div>
                            </div>
                            <div className='col-4'>
                                <Star fontSize='small' />
                                <Star fontSize='small' />
                                <Star fontSize='small' />
                                <Star fontSize='small' />
                                <StarBorder fontSize='small' />
                            </div>
                        </div>
                    </div>

                    <div className='card mt-1'>
                        <div className='row p-2'>
                            <div className='col-2 d-flex justify-content-center align-items-center'>
                                <SetMeal fontSize="large" />
                            </div>
                            <div className='col-6' style={{ fontSize: "11px" }}>
                                <b>Restaurants</b>
                                <div>Stree, City, Province, Country</div>
                            </div>
                            <div className='col-4'>
                                <Star fontSize='small' />
                                <Star fontSize='small' />
                                <Star fontSize='small' />
                                <Star fontSize='small' />
                                <StarBorder fontSize='small' />
                            </div>
                        </div>
                    </div>

                    <div className='card mt-1'>
                        <div className='row p-2'>
                            <div className='col-2 d-flex justify-content-center align-items-center'>
                                <RiceBowl fontSize="large" />
                            </div>
                            <div className='col-6' style={{ fontSize: "11px" }}>
                                <b>Restaurants</b>
                                <div>Stree, City, Province, Country</div>
                            </div>
                            <div className='col-4'>
                                <Star fontSize='small' />
                                <Star fontSize='small' />
                                <Star fontSize='small' />
                                <Star fontSize='small' />
                                <StarBorder fontSize='small' />
                            </div>
                        </div>
                    </div>

                    <div className='card mt-1'>
                        <div className='row p-2'>
                            <div className='col-2 d-flex justify-content-center align-items-center'>
                                <DinnerDining fontSize="large" />
                            </div>
                            <div className='col-6' style={{ fontSize: "11px" }}>
                                <b>Restaurants</b>
                                <div>Stree, City, Province, Country</div>
                            </div>
                            <div className='col-4'>
                                <Star fontSize='small' />
                                <Star fontSize='small' />
                                <Star fontSize='small' />
                                <Star fontSize='small' />
                                <StarBorder fontSize='small' />
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div >
    )
}
