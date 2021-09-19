import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import img3 from "../images/img3.jpg";
const JokeStyle = styled.section`
width: 100%;
height: 100vh;
background: linear-gradient(to right top, #65dfc9, #6cdbeb);
background: url(${img3});
background-position: center;
background-size: cover;
display: grid;
place-items: center;
text-align: center;

.container{
 display: grid;
 place-items: center;
 position: relative;
 width: 100%;
 height: 100%;
 flex-direction: column;
 font-size: 1.3rem;
 transition: 1s;
  p{
  font-size: 2rem;
}
.glass{
 width: 60%;
 min-height: 30vh;
 height: 60vh;
 padding: 50px;
 background: white;
 border-radius: 2rem;
 backdrop-filter: blur(200rem);
 background: rgba(255,255,255,0.1);
 border: 2px solid transparent;
 background-clip: padding-box;
 box-shadow: 10px 10px 10px rgba(45,55,67,0.3);
 display: grid;
 place-items: center;
 position: relative;
 z-index: 1;

}
.btn-container{
 .btn{
  
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 20px;
  margin: 10px;
  font-size: 1.5rem;
  background: transparent;
  transition: 1s ease-in-out;
  &:hover{
   transform: scale(1.2);
  }
 }
}
.circle{
 width: 15rem;
 height: 15rem;
 background: rgba(255,255,255,0.1);
 backdrop-filter: blur(200rem);
 border: 2px solid transparent;
 background-clip: padding-box;
 box-shadow: 10px 10px 10px rgba(45,55,67,0.3);
 position: absolute;
 border-radius: 50%;

}
.circle-1{
 left: 15%;
 top: 12%;
 animation: circle-1 4s infinite ease-in-out;

}
.circle-2{
 right: 14%;
 bottom: 12%;
  animation: circle-2 4s infinite ease-in-out;
  
}
}

@media only screen and (max-width: 768px){
 .container{
   p{
     font-size: inherit;
   }
  .glass{
   font-size: 1rem;
  }
  .circle{
   width: 10rem;
   height: 10rem;
  }
  .circle-1{
  left: 12%;
  top: 12% ;
  }
   .circle-2{
  right: 10%;
  bottom:10% ;
  }
 }
}
@keyframes circle-1 {
 50%{
  transform: translateY(150%);
  
 }
 100%{
  transform: translateY(0);
 }
} 
@keyframes circle-2 {
 50%{
  transform: translateY(-150%);
 }
  100%{
  transform: translateY(0);
 }
} 
`
function Joke() {
 const [joke, setJoke] = useState("")
 let color = ["#730071", "#FF007F", "#004FFF", "#02182B", "#F4FAFF", "#0D1821", "#001011",]
 const colorRef = useRef()
 const getJoke = () => {
  fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
  .then((res)=> res.json())
  .then((data) => {
   setJoke(data)
  })
 }
 useEffect(()=>{
  getJoke()
 },[])
 useEffect(()=>{
  colorRef.current.style.color = color[Math.floor(Math.random() * color.length)]
 },[joke])
 
 return (
  <JokeStyle>
 <div className="container">
 
   <div className="glass">
      <p ref={colorRef}>{joke.joke}</p>
      <div className="btn-container">
       <button className="btn" onClick={getJoke}>Get Jock</button>
       <a href={`https://www.twitter.com/intent/tweet?text=${joke.joke}`}
       target="_blank" rel="noopener noreferrer" className="btn">Tweet</a>
      </div> 
   </div>
  <div className="circle-1 circle"></div>
  <div className="circle-2 circle"></div>
 </div>
  </JokeStyle>
 )
}

export default Joke

