import './App.css'
import React from 'react';

import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/Repeticao'
import Condicional from './components/Condicional'
import CondicionalComIf from './components/CondicionalComIf'

export default (props) => (

	
	<div className="App">
		<Card titulo="#06 - Componente com Condicao if">
			<CondicionalComIf numero={2}></CondicionalComIf>
		</Card>

		<Card titulo="#05 - Componente com Condicao">
			<Condicional numero={1} ></Condicional>
		</Card>

		<Card titulo="#04 - Componente com Repeticao">
			<Repeticao></Repeticao>
		</Card>

		<Card titulo="#03 - Primeiro Componente">
			<Primeiro></Primeiro>			
		</Card>

		<Card titulo="#02 - Componente com Parametro">
			<ComParametro titulo="Esse é o titulo" subtitulo="Esse e o Subtitulo"></ComParametro>
			
			<ComParametro titulo="Opa" subtitulo="Epa"></ComParametro>
		</Card>

		<Card titulo="#01 - Componente com Filhos">
			<ComFilhos>
				<ul>
					<li>Ana</li>
					<li>Bia</li>
					<li>Carlos</li>
					<li>Daniel</li>
				</ul>
			</ComFilhos>			
		</Card>

	</div>	

)

