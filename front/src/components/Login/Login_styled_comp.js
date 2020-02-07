import React from 'react'
import styled from 'styled-components'

export const Container = styled.div `
    background-color: #f2f2f2;
    width: 40%;
    margin: 15px auto;
    


    padding: 20px;
    border: 1px solid black;
`

export const Header = styled.div `
    margin: 20px;
    text-align: center;
    font-size: 1.8em;
    color: #000000;
`

export const Label = styled.div `
    margin: 10px;
    font-size: 1.5em;
    color: #000000;
`

export const Input = styled.input `
    width: 90%;
    padding: 12px 20px;
    margin-left: 10px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`

export const ButtonRow = styled.div `
    display: flex;
    justify-content: center;
`

export const SubmitButton = styled.button `
    border: 2px solid #111;
    padding: 10px 100px;
    background: transparent;
    margin: 20px;
    font-size: 2em;
    color: #000000;

    transition: background 0.5s

    &:hover{
        background: white;
    }
`