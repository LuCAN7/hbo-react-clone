import axios from "axios";
import {useState, useEffect} from 'react'
const CastInfo = (props) => {
  
  return (
    <div className='cast-info'>
      {/* CAST & CREW */}
      <div className='cast-info__group-title'>Cast & Crew</div>
      <div className='cast-info__list'>
        <ul className='cast-info__crew'>
          <li>John Smith</li>
          <li>Denzel Washington</li>
        </ul>
        <ul className='cast-info__crew'>
          <li>Spencer Winston</li>
          <li>Will Smith</li>
        </ul>
        <ul className='cast-info__crew'>
          <li>Levi Carter</li>
          <li>Michael B Jordan</li>
        </ul>
        <ul className='cast-info__crew'>
          <li>Lisa Avi</li>
          <li>Jessica Alba</li>
        </ul>
      </div>
      {/* DIRECTOR */}
      <div className='cast-info__group-title'>Director</div>
      <div className='cast-info__list'>
        <ul className='cast-info__crew'>
          <li>George Lucas</li>
        </ul>
      </div>
      {/* PRODUCER */}
      <div className='cast-info__group-title'>Producer</div>
      <div className='cast-info__list'>
        <ul className='cast-info__crew'>
          <li>Christopher Nolan</li>
          <li>George Lucas</li>
        </ul>
      </div>
      {/* SPECIAL FX */}
      <div className='cast-info__group-title'>Special FX</div>
      <div className='cast-info__list'>
        <ul className='cast-info__crew'>
          <li>Nate Robert</li>
          <li>Kevin Earnhart</li>
        </ul>
      </div>
    </div>
  );
};

export default CastInfo;
