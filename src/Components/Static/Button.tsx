// import React from 'react'
import styled from "styled-components"


interface iButton{
  color?: string,
  text?: string,
  bg ?: string ,

}


const Button: React.FC<iButton> = ({ color,text ,bg,}) => {
  return (
    <div>
      <Container>
        <Main bg = {`${bg}`} color= {`${color}`}>
          {text}
        </Main>
      </Container>
    </div>
  )
}

export default Button
const Container = styled.div``;


const Main = styled.div<{ color: string, bg: string }>`
width: 80px;
height: 15px;
padding: 20px 30px;
border: 5px solid block;
border-radius:25px;
color: ${({ color }) => color};
background-color: ${({ bg }) => bg} ;
display: flex;
justify-content: center;
align-content: center;
margin-top:50px;
margin-right: 450px;
 `;



// import React from 'react'

// const button = () => {
//   return (
//     <div>button</div>
//   )
// }

// export default button