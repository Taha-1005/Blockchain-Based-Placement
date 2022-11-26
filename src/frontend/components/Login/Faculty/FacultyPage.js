import React from 'react';
import './Facultyhome.css';

function FacultyPage() {
  return (
    <div>
    <div className="topnav">
    <a href="">Home</a>
    <a href="">Status</a>
    <a href="">Pending</a>
    <a href="">Account</a>
  </div>
    <div className='wrapper1'>
      <Card
        title='Meet Vora'
        description='I am curently pursuing Computer Science from Nirma University'
        img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZWr4HVTvL9Mizj4dpW3qfR-oyFGpTXx6wXg&usqp=CAU'/>

      <Card
        title='Taha Firoz'
        description='I am curently pursuing Computer Science from Nirma University'
        img='https://cdn.vox-cdn.com/thumbor/23dWY86RxkdF7ZegvfnY8gFjR7s=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19157811/ply0947_fall_reviews_2019_tv_anime.jpg'/>

      <Card
        title='Stuti Patel'
        description='I am curently pursuing Computer Science from Nirma University'
        img='https://img.freepik.com/free-vector/gradient-anime-girl-illustration_52683-83754.jpg?w=2000'/>

      <Card
        title='Virat Kohli'
        description='I am curently pursuing Computer Science from Nirma University'
        img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy9PxdGoQtz5oJEGJEbualzy8WNMFCBxddLw&usqp=CAU'
        />

      <Card
        title='Tin Tin'
        description='I am curently pursuing Computer Science from Nirma University'
        img='https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557216671.5403_tunyra_n.jpg'
        />

      <Card
        title='Jetha Gada'
        description='I am curently pursuing Computer Science from Nirma University'
        img='https://static.fandomspot.com/images/10/9546/00-featured-monkey-d-luffy-one-piece-anime.jpg'
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
          <h2 className='card__title'><b>{props.title}</b></h2>
          <p className='card__description'>{props.description}</p>
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
