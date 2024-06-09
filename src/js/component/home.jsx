import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {faClock} from '@fortawesome/free-solid-svg-icons';
//create your first component
const Home = () => {
	  const [segundos, setSegundos] = useState(0);
	
	  useEffect(() => {
		// Configurar el temporizador para incrementar el contador cada segundo
		const intervalo = setInterval(() => {
		  setSegundos((prevSegundos) => prevSegundos + 1);
		}, 1000);
	
		// Limpiar el temporizador cuando el componente se desmonte
		return () => clearInterval(intervalo);
	  	}, []); // El array vacío asegura que este efecto se ejecute solo una vez cuando el componente se monta
	
		const formatSeconds = (num) => {
			return String(num).padStart(6, '0'); // Asegura que siempre haya 6 dígitos (hh:mm:ss)
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
			</div>
		  );
		}

	
export default Home;

