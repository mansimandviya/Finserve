import React from 'react'
function Education() {
    return ( 
   <div className='container'>
    <div className='row'>
        <div className='col mt-3'>
        <img src='media/images/education.svg' style={{width:'80%'}}/>
        </div>
        <div className='col mt-5 '>
            <h1 className='p-3 fs-2'>Free and Open market education</h1>
            <p className='p-3'>Varsity the largest online stock market education book in the world covering everything from the basics to advance trading.</p>
            <a href=''  className="p-3" style={{textDecoration:'none'}}>Varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            <p className='p-3'>Trading Q&A, The most active trading and investment community in India for all your market related queries.</p>
            <a href='' className="p-3" style={{textDecoration:'none'}}>Trading Q&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            
        </div>
    </div>
   </div> );
}

export default Education;