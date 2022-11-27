import React from 'react';
import '../../../Styles/CompanyDetails.css';
import man from './about_man.jpg';
import triangle from './about_tringle.png';

import { useLocation, useSearchParams } from 'react-router-dom';

const CompanyDetails = () => {
  const location = useLocation();
  const companyData = location.state.data;
  console.log(companyData);
  return (
    <div className='details'>
      <body className='body5'>
      <br/>
      <br/>
      <br/>
      <section id="about">
       <div className="row">
       <div className="col-md-5">
              {
                //   <div className="about-img">
                //  <img className="man" src={man} alt=""/>
                //   </div>
              }
       </div>
       <br></br>
       <div className="col-md-7 about-right">
         <h2 className="color-3"><b>{companyData.name}</b> </h2>
         <p className="p-first text-white">
                {companyData.description}
                {
                  // Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet nesciunt sint, esse iure eius voluptatibus perspiciatis sequi fuga magni perferendis beatae ratione, nam culpa veritatis dolore sunt ut minus qui Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ea delectus doloremque adip.
                }
         </p>

         {/* <h2 className="color-3"><b>Category</b> </h2> */}
         <p className="p-first text-white"><b>Category : </b>{companyData.category}</p> 
         <p className="p-first text-white"><b>CTC : </b>{companyData.ctc} lakhs</p>
              {//  <p className="p-first text-white"><b>Role : </b>{companyData.post}</p> 
              }
         <p className="p-first text-white"><b>CGPA : </b> Greater than {companyData.minPpi}</p>


         {/* <p className="text-white">
        <br />
        <br />
        <br />
        <section id='about'>
          <div className='row'>
            <div className='col-md-5'>
              <div className='about-img'>
                <img className='man' src={man} alt='' />
              </div>
            </div>
            <br></br>
            <div className='col-md-7 about-right'>
              <h2 className='color-3'>
                <b>{companyData.name}</b>{' '}
              </h2>
              <p className='p-first text-white'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eveniet nesciunt sint, esse iure eius voluptatibus perspiciatis
                sequi fuga magni perferendis beatae ratione, nam culpa veritatis
                dolore sunt ut minus qui Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Cum ea delectus doloremque adip.
              </p>
              {/* <p className="text-white">
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores pariatur animi sunt, assumenda dicta distinctio nostrum nisi, ullam dignissimos dolor!
         </p> */}
              <h3 className='color-3 social-link-text'>
                <button className='btn btn-danger'>Apply</button>
              </h3>
            </div>
          </div>
        </section>
      </body>
    </div>
  );
};

export default CompanyDetails;

{
  /* <h1 className='title'>{companyData.name}</h1>
      <div className='header'>Post:</div>
      <div className='post'>{companyData.post}</div>
      <div className='jobType'>
        <p>Jobt Type</p>
        <p>{companyData.post}</p>
      </div>
      <div className='ctc'>
        <p>Cost to Company</p>
        <p>{'INR ' + companyData.ctc + ' LPA'}</p>
      </div>
      <div className='location'>{companyData.location.join(', ')}</div> */
}
