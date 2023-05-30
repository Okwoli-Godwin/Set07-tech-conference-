import React from 'react'
import styled from 'styled-components'
import cake from "../Assets/realcake.png"
import Button from '../Components/Static/Button'

const Homescreen = () => {
  return (
      <div>
          <Container>
              <Main>
                 <Text>
                      <Big> The Perfect Baked Cake Everday</Big>
                      <Small>Cake gives a great satisfaction and joy to a soul,<br />
              why not click the botton to get yours delievered to you.</Small>
                <Button color='white' text="Read More" bg='orange'/>
                  </Text>
                   <Image src={cake} />
        </Main>
        
        <Store>
          <Storemain>
            <Bigtext> Welcome To Our Store</Bigtext>
            <Smalltext> A place where you can get any Pastry u grave ,and can be delivered  <br />to your door step fresh and hot  and ur taste-bud get happy </Smalltext>
          </Storemain>
          <Storeimage>
            <Card></Card>
          </Storeimage>

        </Store>
          </Container>
    </div>
  )
}

export default Homescreen

const Storeimage = styled.div`
background-color: blue;
`;

const Card = styled.div``;

const Storemain = styled.div``;

const Store = styled.div`
width: 100%;
height: 180px;
background-color: white;
justify-content: center;
display: flex;
align-items: center;
`;

const Bigtext = styled.div`
font-size: 35px;
font-weight: Bold;
margin-bottom: 15px;
text-align: center;
`;

const Smalltext = styled.div``

const Container = styled.div`
width: 100%;
height: 100%;
background-color: rgb(219,254,249);
background: linear-gradient(90deg, rgba(219,254,249,1) 0%, 
rgba(254,255,255,1) 51%, rgba(218,205,205,1) 100%);
align-items: center;
justify-content: center;
display: flex;
flex-direction:column;
`;

const Main = styled.div`
width: 90%;
height: 600px;

display: flex;
justify-content: space-between;
`;

const Image = styled.img`
width: 50%;
height:500px;
object-fit : cover;
`;

const Text = styled.div`
width: 48%;
height:500px ;
justify-content: center;
align-items: center;
display: flex;
flex-direction:column;

`;

const Big = styled.div`
font-size: 50px;
font-weight: 100 ;
margin-bottom:20px;
`;

const Small = styled.div`
/* align-items: center; */
/* justify-content: center; */
display: flex;
margin-right: 100px;
font-size: 20px;
font-weight: 50 ;
`;