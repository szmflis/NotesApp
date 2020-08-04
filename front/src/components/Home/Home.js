import React from 'react'
import styled from 'styled-components'
import laptop from '../../assets/laptop.jpg'
import LoginPanel from './LoginPanel'
import Footer from './Footer'

const Home = (props) => {

    const HomeGrid = styled.div `
    display: grid;
    grid-template-columns: 35% 65%;
    grid-template-rows: auto auto;
  `

    const BackgroundPic = styled.div `
    background-image: url(${laptop});
    
    
    height: 100vh;
    background-size: cover;
    background-position: center;

    grid-column: 1/3;
    grid-row: 1/2;
  `

    const TextOverBackground = styled.div `
    font-size: 2.5em;
    color: white;
    padding: 120px 0px 0px 120px
    
  `

    const Paragraph = styled.p `
    line-height: 12px;
  `

  return (
    <HomeGrid>
      <BackgroundPic>
        <TextOverBackground>
          <Paragraph>Simple Notes application.</Paragraph>
          <Paragraph>Made using React and Redux</Paragraph>
          <Paragraph>Server-side Node.js</Paragraph>
          <Paragraph>MongoDB as database.</Paragraph>
        </TextOverBackground>
      </BackgroundPic>
      <LoginPanel>

      </LoginPanel>
      <Footer></Footer>
    </HomeGrid>  
  )
}

export default Home
