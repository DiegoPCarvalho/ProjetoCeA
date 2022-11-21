import React from "react";
import './DropNavSmart.css';

export default props =>
	<div className="menu-droping">
		<li className='item' id="tg1">
			<a href="#tg1" className="btn">
				<i className="fa fa-lg fa-bars"></i>
			</a>
			<div className="sub-menu-drop">
				<a href="">Dash</a>
			</div>
		</li>
	</div>



{/* <li className='item' id="mn1">
<a className="btn" href="#mn1">
	<i className='fa fa-university fa-solid mx-1'></i>Ordem de Serviço Contrato
</a>
<div className="submenu">
	<a href="#">Aguardando Chegar</a>
	<a href="#">Aguardando Vistoria</a>
	<a href="#">Aguardando Aprovação</a>
	<a href="#">Aprovado - Separação</a>
	<a href="#">Aguardando Peças</a>
	<a href="#">Aprovado - Manutenção</a>
	<a href="#">Em Manutenção</a>
	<a href="#">Manutenção Concluída</a>
	<a href="#">Revisão</a>
	<a href="#">Expedição</a>
	<a href="#">Finalizada</a>
</div>
</li> */}