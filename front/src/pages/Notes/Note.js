import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import moment from 'moment'

import { theme } from '../../utils/theme'
import { P } from '../../components/P/P'

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70rem;
  border-radius: 8px;
  margin-bottom: 10px;
`

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${theme.colors.black};
  border-radius: 8px 8px 0px 0px ;
  padding: 0px 5px 0px 5px;
`

const StyledContent = styled.div`
  padding: 5px 5px 0px 5px;
  background: ${theme.colors.yellow};
  border-radius: 0px 0px 8px 8px;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`

const Note = ({ content, date, author }) => {
  return (
    <StyledWrapper>
      <StyledHeader>
        <P color={theme.colors.white}>
          {author}
        </P>
        <P color={theme.colors.white}>
          {moment(date).format('MMM Do YYYY, h:mm:ss')}
        </P>
      </StyledHeader>
      <StyledContent>
        {content}
      </StyledContent>
    </StyledWrapper>
  )
}

Note.propTypes = {
  content: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

export default Note
