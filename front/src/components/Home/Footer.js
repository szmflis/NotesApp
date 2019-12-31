import styled from 'styled-components'
import React from 'react'
import {
    FaFacebookSquare, 
    FaGithubSquare, 
    FaLinkedin, 
    FaMailBulk} from 'react-icons/fa'

const Footer = () => {
    
    const Container = styled.div`
        grid-row: 2/3;
        grid-column: 2/3;

        display: grid;
        grid-template-rows: auto auto;
        grid-template-columns: 100%;
        
        background-color: #373737;
    `

    const Contact = styled.div`
        grid-row: 1/2;
        justify-self: center;
        margin: 30px;

        font-size: 2em;
        color: white;
    `
    const IconRow = styled.div`
        grid-row: 2/3;
        display: flex;
        justify-content: center;
        margin: 30px 0px 30px 0px;
    `

    const IconLink = styled.a`
        color: white;
        margin: 0px 20px 0px 20px;
        transition: color 0.2s;
    `
    
    return(
        <Container>
            <Contact>Contact me at</Contact>
            <IconRow>
                <IconLink href="https://www.facebook.com/szymonbonifacy.flis">
                    <FaFacebookSquare size={50}/>
                </IconLink>
                <IconLink href="https://github.com/szmflis">
                    <FaGithubSquare size={50}/>
                </IconLink>
                <IconLink href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=szmflis@gmail.com">
                    <FaMailBulk size={50}/>
                </IconLink>
                <IconLink href="https://www.linkedin.com/in/szymon-flis-a72680195/">
                    <FaLinkedin size={50}/>
                </IconLink>
            </IconRow>
            
        </Container>
    )
}

export default Footer