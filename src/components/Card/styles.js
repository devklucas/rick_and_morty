import styled from 'styled-components'

export const BoxCard = styled.li`
width:250px;
height:300px;
border:1px solid black;
margin:10px;
display:flex;
flex-direction:column;
align-items: center;
justify-content: space-between;
border: 3px solid ${(props) => props.status === 'Alive'? "#0000ff": props.status === 'Dead'? "#ce0404":"#f8f838"};

`
export const ImageChar = styled.img`
width:200px;
height:200px;
`
export const NameChar = styled.p`
font-size:12px;
`
export const BarStatus = styled.span`
width:100%;
height:40px;
background-color: ${(props) => props.status === 'Alive'? "#0000ff": props.status === 'Dead'? "#ce0404":"#f8f838"};
display:flex;
align-items:center;
justify-content:center;
color: ${(props) => props.status === 'Alive'? "#000031": props.status === 'Dead'? "#420202":"#4d4d0f"};


`