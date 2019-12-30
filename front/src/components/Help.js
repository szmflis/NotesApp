import React from 'react'
import styled from 'styled-components'

const Help = (props) => {

  const Container = styled.div`
    background: #1B1B1B;
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 10% 80% 10%
    grid-template-rows: 10% auto 15%
  `

  const TileContainer = styled.div`
    grid-column: 2/3;
    grid-row: 2/3;
    display: grid;

    grid-template-columns: 50% 50%;
    grid-template-rows: 33% auto 33%

    justify-items: center;
    align-items: center;

    width: auto;
    height: auto;
  `

  const Tilex1y1 = styled.div`
    grid-column: 1/2;
    grid-row: 1/2;

    background-color: #363636;

    width: 100%;
    height: 100%;

    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px 8px 0px 8px;

    padding: 20px;
    color: #A6A6A6;
    font-weight: 500;
    font-size: 32px;
    text-align: left;
    line-height: 1.5em
  `

  const Tilex2y2 = styled.div`
    grid-column: 2/3;
    grid-row: 2/3;


    background-color: #363636;

    width: 100%;
    height: 100%;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 8px 8px 0px;

    padding: 20px;
    color: #A6A6A6;
    font-weight: 500;
    font-size: 20px;
    text-align: left;
    line-height: 1.5em
  `

  const Tilex3y1 = styled.div`
    grid-column: 1/2;
    grid-row: 3/4;


    background-color: #363636;

    width: 100%;
    height: 100%;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px 0px 8px 8px;
  `

  return (
    <Container>
      <TileContainer>
        <Tilex1y1>Some text.<br></br>Unhelpfull as of right now.</Tilex1y1>
        <Tilex2y2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam eu diam sit amet libero posuere auctor. <br></br>
          In eget ligula vestibulum, accumsan urna a, porttitor felis.<br></br>
          Fusce vitae felis elementum, sollicitudin sem et, ornare turpis. <br></br>
          Praesent viverra erat nec orci fringilla, et porta magna sagittis. <br></br>
          Vivamus nunc enim, finibus non molestie ut, eleifend eu risus. <br></br>
          Vivamus congue facilisis leo, ut venenatis diam. <br></br>
          Donec sit amet sapien ut justo pellentesque suscipit. <br></br>
          Integer volutpat lacinia risus eu facilisis.</Tilex2y2>
        <Tilex3y1></Tilex3y1>
      </TileContainer>
    </Container>
  )
}

export default Help
