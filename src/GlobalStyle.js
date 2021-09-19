import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
 padding: 0;
 margin: 0;
 box-sizing: border-box;
 text-decoration: none;
 font-family: 'PT Serif', serif;
}
p{
 font-style: italic;
}
a{
 color: #F4FAFF;
}
a:hover{
 color: black;
}
`

export default GlobalStyle