import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
*{
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
   
}

 :root{
    --primary-color: rgba(34,193,195,1);
    --secondary-color: rgba(45,253,149,1);
    font-family: 'Poppins', sans-serif;
}

button, a, input {
    cursor: pointer;
    text-decoration: none;
    border: none;
}
ul{
    list-style:none;
}
`