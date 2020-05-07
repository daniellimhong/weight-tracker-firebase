import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    width: 100%;
    height: 100px; // change later
    // border: 1px solid black;
    text-align: center;
    margin: 0;

`

const Heading = styled.h1`
`


export default function Header() {
    return (
        <HeaderContainer>
            <Heading>Daniel's Fitness Tracker</Heading>
        </HeaderContainer>
    )
}