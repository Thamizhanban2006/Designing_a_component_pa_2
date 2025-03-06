import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Usercard from './components/usercard.jsx';
import img from './assets/Ben 10.png'

function App() {
  const cards = [
    {
      name:"Shankar",
      email:"shankar@gamil.com",
      phone_no:12345678,
      address:"36, gandhi street, chennai",
      image:img
    },
    {
      name:"Abishek",
      email:"abishek@gamil.com",
      phone_no:12345678,
      address:"36, Nehru street, chennai",
      image:img,
    },
    {
      name:"Lithish",
      email:"lithish@gamil.com",
      phone_no:12345678,
      address:"36,  mosque street, chennai",
      image:img,
    },
    {
      name:"Rohan",
      email:"rohan@gamil.com",
      phone_no:12345678,
      address:"36, dark street, chennai",
      image:img,
    },
    {
      name:"Joe Celaster",
      email:"celaster@gamil.com",
      phone_no:12345678,
      address:"36, Church street street, chennai",
      image:img,
    },




  ]
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
    padding: '20px',
  };
  // const box = {
  //   padding:'10px',
  //   border:'2px solid black',
  //   padding:'20px',
  //   height:'300px',
  //   width:'200px',
    

  // }

  return (
    <div style={gridStyle}>
      {cards.map((i, index) => (
        <Usercard key={index} name={i.name} email={i.email} pno={i.phone_no} address={i.address} image={i.image} />
      ))}
    </div>
  );
}

export default App;
