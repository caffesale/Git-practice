import React from "react";
import { useLocation, useNavigate }from 'react-router-dom'
import styled from "styled-components";

function DetailPage() {
    const location = useLocation();
    const navi = useNavigate();
    const { todo } = location.state;
    

    return (
        <Container>
            <Card>
                <CardContent>
                    <CardTitle>{todo.title}</CardTitle>
                    <p className="card-id">{todo.id}</p>
                    <p className="card-body">{todo.body}</p>
                    <Btn onClick={() => {
                        console.log(navi)
                        navi(-1)
                    }}>이전으로</Btn>
                </CardContent>
            </Card>
        </Container>
    )
}

export default DetailPage;

const Container = styled.div`
    display: grid;
    min-height: 100vh;
    place-items: center;
    line-height: 1.6;
    font-family: sans-serif;
`;

const Card = styled.div`
    color: #eee;
    background-color: tomato;
    background-size: cover;
    padding: 10rem 0 0;
    max-width: 35ch;
    overflow: hidden;
`
const CardContent = styled.div`
    padding: 1.5em;
    background: linear-gradient(
        hsl(0 0% 0%/ 0),
        hsl(20 0% 0%/ 0.3) 20%,
        hsl(0 0% 0%/ 0.5)
    );
`

const CardTitle = styled.h2`
    position: relative;
    width: max-content;

    &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        height: 4px;
        width: 100%;
        background-color: olive;
    }
`

const Btn = styled.button`
    cursor: pointer;
    display: inline;
    background-color: olive;
    text-decoration: none;
    padding: 0.5rem 1.25rem;

    &:hover,
    &:focus {
        background-color: yellowgreen;
    }
`