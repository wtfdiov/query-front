import styled from 'styled-components';

export const Container = styled.div`
    box-sizing: border-box;
    margin-top: 12px;
    padding: 12px 6px;
    position: sticky;
    top: 0;
    z-index: 10;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #082032;
    outline: 1px solid #DDD;
`;

export const Input = styled.input`
    all: unset;
    box-sizing: border-box;
    background-color: white;
    outline: black;
    padding: 4px 6px;
    color: black;
    margin-bottom: 6px;
    width: 100%;
`;

export const Content = styled.div`
    width: 100%;
`;