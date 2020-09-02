import React from 'react'
import styled from 'styled-components'
import laptop from '../../assets/workspace.jpg'
import { theme } from '../../utils/theme'
import { P } from '../../components/P/P'
import HowToBox from './HowToBox'
import StackBox from './StackBox'

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const BackgroundPicture = styled.div`
  background-image: url(${laptop});
  height: 400px;
  width: 100vw;
  background-size: cover;
  background-position: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const TextWrapper = styled.div`
  border-radius: 10px;
  background-color: rgba(117, 117, 117, 0.6);
  padding: 40px;
`

const Home = () => {
  return (
    <StyledWrapper>
      <BackgroundPicture>
        <TextWrapper>
          <P fontSize="3rem" color={theme.colors.white}>
            Simple note taking application
          </P>
          <P fontSize="2.5rem" color={theme.colors.white}>
            Made with React & Node
          </P>
          <P fontSize="2rem" color={theme.colors.white}>
            MongoDB as database
          </P>
        </TextWrapper>
      </BackgroundPicture>
      <HowToBox />
      <StackBox />
    </StyledWrapper>
  )
}

export default Home
