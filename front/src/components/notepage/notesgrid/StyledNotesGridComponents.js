import styled from 'styled-components'

export const StyledNotesFlexbox = styled.div`
  background: #616161;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
`

export const SingleTileContainer = styled.div`
  display: grid;
  grid-template-rows: auto 30px;

  font-size: 1.1em

  height: 200px;
  min-width: 200px;
  max-width: 380px;

  margin: 10px;

  border-radius: 6px;
`

export const SingleTileText = styled.div`
  background-color: #039BE5;
  grid-row: 1/2;

  max-width: 250px;
  font-weight: 500;

  border-radius: 6px 6px 0px 0px;
  padding: 5px;

  overflow-wrap: break-word;
`

export const SingleTileDate = styled.div`
  background: #0288D1;
  gird-row: 2/3;

  border-radius: 0px 0px 6px 6px;
  font-weight: 600;
  padding: 5px;
`

export const AddNoteTile = styled.form`
  display: grid;
  grid-template-rows: auto 30px;

  min-height: 200px;
  min-width: 200px;
  max-width: 250px;

  margin: 10px;

  border-radius: 6px;
`

export const AddNoteTileTextField = styled.textarea`
  background: #C4C4C4;

  height: 100%;

  border-radius: 6px 6px 0px 0px;
  gird-row: 1/2;
`

export const AddNotePlusSign = styled.button`
  background: #AFAFAF;

  border-radius: 0px 0px 6px 6px;
  grid-row: 2/3;
`
