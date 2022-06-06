import styled from 'styled-components'

export const Container = styled.div`
width: 100vw;
height: 100vh;
background: rgb(34, 193, 195);
background: linear-gradient(
  0deg,
  var(--primary-color) 0%,
  var(--secondary-color) 100%
);
display: flex;
justify-content: center;
align-items: center;
`;
export const ContentCards = styled.ul`
display: flex;
flex-wrap: wrap;
width: 80%;
height: calc(100vh - 100px);
overflow-y: scroll;
::-webkit-scrollbar {
  width: 12px; /* width of the entire scrollbar */
}

::-webkit-scrollbar-track {
  background: none; /* color of the tracking area */
}

::-webkit-scrollbar-thumb {
  background-color: blue; /* color of the scroll thumb */
  border-radius: 20px; /* roundness of the scroll thumb */
  border: 3px solid orange; /* creates padding around scroll thumb */
}
`;
export const Title = styled.h1`
color:white;
`
export const Buttons = styled.nav`
display: flex;
flex-direction: column;
margin-left: 10px;
  button {
  height: 60px;
  width: 100px;
  background: none;
  } 
  button:hover {
    background-color: blue;
    color: white;
    border-radius: 4px;
  }

`;