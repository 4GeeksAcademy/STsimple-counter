import React, { useState, useEffect } from 'react';
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
	
	  return (
		<div>
		  <h1>Contador de Segundos</h1>
		  <p>Segundos: {segundos}</p>
		</div>
	  );
	};
export default Home;
