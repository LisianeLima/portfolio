import styled from 'styled-components';

export const Container = styled.ul `

display:flex;
margin-right:10rem;
justify-items:center;

li{
	font-size:1.8rem;
	margin:1.8rem;
	list-style:none;
	text-transform:uppercase;
	cursor: pointer;
	display:flex;
	justify-content:center;
	align-items:center;
	&:hover{
		opacity:.6
	}



	a{
		text-decoration:none;
		color:#000;
		margin-left:5px;
		i{
		font-size:16px !important;
		margin-right:4px;


  	}

	}
}
`