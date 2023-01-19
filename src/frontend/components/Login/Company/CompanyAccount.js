import React from 'react';
import '../../../Styles/CompanyAccount.css';

const CompanyAccount = () => {
  const companyDetails = {
    name: 'SAMSUNG',
    description:
      'Samsung was founded by Lee Byung-chul in 1938 as a trading company. Over the next three decades, the group diversified into areas including food processing, textiles, insurance, securities, and retail. Samsung entered the electronics industry in the late 1960s and the construction and shipbuilding industries in the mid-1970s; these areas would drive its subsequent growth. Following Lees death in 1987, Samsung was separated into five business groups – Samsung Group, Shinsegae Group, CJ Group and Hansol Group, and Joongang Group.',
    ctc: '18 LPA',
    Location: 'Gandhinagar',
    Roles: 'Software Engineer',
    Intake: '10 Students',
    img: 'https://i.pinimg.com/736x/74/79/a0/7479a0a02cf333e01e13d1b6d08af800.jpg',
    imgg: 'https://images.ctfassets.net/co0pvta7hzrh/2Jpyf2cKaUE9748DPwvaaZ/a744ba99ed015f7b4c87900074975773/data-entry-job-application-form-thumbnail.png',
  };

  //bla bla
  return (
    <div>
      <div className='row'>
        <div className='column_1'>
          <img className='img_resize' src={companyDetails.img}></img>
        </div>

        <div className='column_2'>
          <h1 className='text_h1'>
            <b>{companyDetails.name}</b>
          </h1>
          <p>{companyDetails.description}</p>
          <br></br>
          <p>
            <b>Cost to Company </b>
            {companyDetails.ctc}
          </p>
          <br></br>
          <p>
            <b>Location : </b> The employees would be routed to the branch of{' '}
            {companyDetails.Location}
          </p>
          <br></br>
          <p>
            <b>Roles : </b>The fresher would be assigned the role of{' '}
            {companyDetails.Roles} 1
          </p>
          <br></br>
          <p>
            <b>Job Responsibilities </b>
          </p>
          <ul>
            <li>Lead a team of sales associates</li>
            <li>Provide quality customer service</li>
            <li>Facilitate tasks for the sales associates</li>
            <li>Expertise in DBMS, OOPS, Cloud Computing, React</li>
          </ul>
          <p>
            <b>Job description </b>The graphic designer works with the rest of
            the creative team to develop advertising materials for our clients.
            They use Adobe software to design deliverables such as logos,
            brochures, print and digital advertisements, magazines and e-books.
            This individual should have a deep passion for design and always be
            looking for the latest graphic design trends and techniques.
          </p>
          <br></br>
          <button className='button_edit'>Edit</button>
        </div>
      </div>
    </div>
  );
};

export default CompanyAccount;
