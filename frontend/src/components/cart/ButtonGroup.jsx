import { ButtonGroup, Button, styled } from '@mui/material'
import React from 'react'

const Container = styled(ButtonGroup)`
margin-top:30px;
`

const StyledButton = styled(Button)`
    border-radius:50%;
`

const GroupedButton = () => {
    return (
        <Container>
            <StyledButton>-</StyledButton>
            <Button>1</Button>
            <StyledButton>+</StyledButton>
        </Container>
    )
}

export default GroupedButton;
