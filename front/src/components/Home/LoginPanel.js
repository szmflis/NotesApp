import React,{useState} from 'react'
import styled from 'styled-components'

const LoginPanel = (props) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async(event) => {
        event.preventDefault();
    }

    const Container = styled.div`
        grid-column: 1/2;
        grid-row: 2/3;
        
        background-color: #f2f2f2;
    `

    const Header = styled.div`
        margin: 20px;
        text-align: center;
        font-size: 1.8em;
        color: #000000;
    `

    const Label = styled.div`
        margin: 10px;
        font-size: 1.5em;
        color: #000000;
    `

    const Input = styled.input`
        width: 90%;
        padding: 12px 20px;
        margin-left: 10px;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    `

    const ButtonRow = styled.div`
        display: flex;
        justify-content: center;
    `

    const SubmitButton = styled.button`
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

    return (
        <Container>
            <Header>Please login</Header>
            <form>
                <Label>Username</Label>
                <Input
                    />
                <Label>Password</Label>
                <Input
                    />
                <ButtonRow>
                    <SubmitButton type="submit">
                        login
                    </SubmitButton>
                </ButtonRow>
            </form>
        </Container>
    )
}

export default LoginPanel