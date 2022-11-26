import React from 'react';
import './Facultyhome.css';

function FacultyPage() {
  return (
    <div>
    <div className="topnav">
    <a className="active" href="#home">Home</a>
    <a href="#Status">Status</a>
    <a href="#Pending">Pending</a>
    <a href="#account">Account</a>
  </div>
    <div className='wrapper1'>
      <Card
        title='Meet Vora'
        description='I am curently pursuing Computer Science from Nirma University'
        img='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
      />

      <Card
        title='Meet Vora'
        description='I am curently pursuing Computer Science from Nirma University'
        img='https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
      />

      <Card
        title='Meet Vora'
        description='I am curently pursuing Computer Science from Nirma University'
        img='https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
      />

      <Card
        title='Meet Vora'
        description='I am curently pursuing Computer Science from Nirma University'
        img='https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
      />

      <Card
        title='Meet Vora'
        description='I am curently pursuing Computer Science from Nirma University'
        img='https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
      />
      <Card
        title='Meet Vora'
        description='I am curently pursuing Computer Science from Nirma University'
        img='https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
      />
    </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className='card'>
      
      <body className='body1'>
      
        <div className='card__body'>
          <img className='card__image' src={props.img} />
          <h2 className='card__title'>{props.title}</h2>
          <p className='card_description'>{props.description}</p>
        </div>
        <button id='button1' className='card_btn1'>
          Accept
        </button>
        <button id='button2' className='card_btn2'>
          Reject
        </button>
      </body>
    </div>
  );
}

export default FacultyPage;
