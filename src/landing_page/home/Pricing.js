import React from 'react'
function Pricing() {
    return ( 
    <div className='container p-2 mb-5'>
        <div className='row'>
            <div className='col-4'>
                <h1 className='mb-3 p-2 fs-2'>Unbeatable pricing</h1>
                <p className='p-2'>We pioneered the concept of discount broking and price transperancy in India. Flat fees and no hidden charges.</p>
                <a href="" className="p-2" style={{textDecoration:'none'}}>See Pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
            <div className='col-2 p-3'></div>
            <div className='col-6 p-3'>
                <div className='row text-center p-3'>
                    <div className='col p-2 border'>
                        <h1 className='mb-3 fs-2'><i class="fa fa-inr" aria-hidden="true"></i>0</h1>
                        <p>Free equity delivery and<br></br> direct mutual funds</p>
                    </div>
                    <div className='col p-2 border'>
                        <h1 className='mb-3 fs-2'><i class="fa fa-inr" aria-hidden="true"></i>20</h1>
                        <p>Intraday and F&O</p>
                    </div>
                </div>
            </div>
        </div>

    </div>);
}

export default Pricing;