import React from 'react'
import { Box } from '../../components/Box/Box'
import { P } from '../../components/P/P'
import { A } from '../../components/A/A'
import { theme } from '../../utils/theme'
import { Img } from '../../components/Img/Img'
import icons from '../../utils/icons'

const StackBox = () => {
  return (
    <Box width="50rem" align="center">
      <P fontSize={theme.fontSize.bigger} borderBottom="1px solid grey" padding="2px" margin="0px 0px 7px 0px">
        Stack of this application
      </P>
      <Box direction="row" justify="center">
        <A href="https://reactjs.org/">
          <Img src={icons.reactIcon} alt="React Icon" />
        </A>
        <A href="https://nodejs.org/">
          <Img src={icons.nodeIcon} />
        </A>
        <A href="https://www.w3schools.com/js/">
          <Img src={icons.jsIcon} />
        </A>
        <A href="https://www.w3schools.com/css/">
          <Img src={icons.cssIcon} />
        </A>
        <A href="https://www.w3schools.com/html/">
          <Img src={icons.htmlIcon} />
        </A>
      </Box>
    </Box>
  )
}

export default StackBox
