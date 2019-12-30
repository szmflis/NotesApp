import React from 'react'
import styled from 'styled-components'
import typing from '../assets/typing.jpg'


const Home = (props) => {

  const Container = styled.div`
    background-image: url(${typing});
    background-size: cover;
    background-color: rgba(0,0,0,0.5);
    position: absolute;
    width: 100%;
    height: 100%;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: #000000;
      opacity: 0.7;
    }
  `

  const Grid = styled.div`
    display: grid;
    grid-template-columns: 20% 30% 30% 20%;
  `

  const LeftColumn = styled.div`
    grid-column: 2/3;
    margin: 20px 45px 30px 0px;
    display: grid;

    grid-template-columns: 3% auto;

    max-height: 70%;
  `

  const RightColumn = styled.div`
    grid-column: 3/4;
    margin: 20px 0px 30px 45px;
    display: grid;

    grid-template-columns: 3% auto;

    max-height: 70%;
  `

  const VerticalLine = styled.div`
    grid-column: 1/2;
    width: 2px;
    height: auto;

    z-index: 2;
    border-radius: 50px;
    background: #535353;
  `

  const Content = styled.p`
    z-index: 2;
    grid-column: 2/3;
    color: white;
    font-weight: 600;
    font-size: 1.5em;
    font-family: Montserrat;
    font-style: normal;
    line-height: 26px;
  `

  return (
    <Container>
      <Grid>
        <LeftColumn>
          <VerticalLine></VerticalLine>
          <Content>
            "There are two kinds of pain. The sort of pain that makes you strong,
            or useless pain. The sort of pain that’s only suffering. I have no patience
            for useless things." <br></br><br></br> – Frank Underwood
          </Content>
      </LeftColumn>
        <RightColumn>
          <VerticalLine></VerticalLine>
          <Content>
            "His palms are sweaty, knees weak, arms are heavy
            There's vomit on his sweater already, mom's spaghetti
            He's nervous, but on the surface he looks calm and ready
            To drop bombs, but he keeps on forgettin
            What he wrote down, the whole crowd goes so loud"
            <br></br>
            <br></br>
            – Eminem
          </Content>
        </RightColumn>
      </Grid>
    </Container>
  )
}

export default Home
