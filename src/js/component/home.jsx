import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {faClock} from '@fortawesome/free-solid-svg-icons';
//create your first component
const Home = () => {
	const [segundos, setSegundos] = useState(0);
	const [isRunning, setIsRunning] = useState(true);
	  
	const resetCounter = () => {
        setSegundos(0);
    	};

	const stopCounter = () => {
		setIsRunning(false); 
	}

	const resumeCounter = () => {
		setIsRunning(true); 
	}
		
	useEffect(() => {
		if (!isRunning) return;
		
		const intervalo = setInterval(() => {
		  setSegundos((prevSegundos) => prevSegundos + 1);
		}, 1000);
		
		return () => clearInterval(intervalo);
	  	}, [isRunning]); 
	
		const formatSeconds = (num) => {
			return String(num).padStart(6, '0'); 
		  };
		
		  const digits = formatSeconds(segundos).split('');
		
		  return (
			
			<div className='bg-dark d-flex mt-5 p-3 d-flex justify-content-center'>
				<div className='d-flex align-items-center bg-dark '>
					<FontAwesomeIcon className='text-white fs-3' icon={faClock}/>
				</div>
				<div className='ms-2 p-3 bg-dark rounded d-flex'>
					{digits.map((digit, index) => (
					<div className='fs-2 ms-3 p-2 bg-secondary text-white rounded border border-danger' key={index}>
			  		{digit}
				</div>
				))}
				</div>
			<div className='d-flex flex-column'>
				<button type="button" onClick={resetCounter} className="btn btn-dark">Reset</button>
				<button type="button" onClick={stopCounter} className="btn btn-dark">Stop</button>
				<button type="button" onClick={resumeCounter} className="btn btn-dark">Continue</button>
			</div>
			</div>
		  );
		}
export default Home;

