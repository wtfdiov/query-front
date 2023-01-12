import styled from "styled-components";
import { ButtonProps } from "./Button";

export const ButtonContainer = styled.button<ButtonProps>`
    all: unset;
    cursor: pointer;
    padding: 12px 6px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 12px;
    background-color: #FF4C29;
    color: white;
    &:hover {
        background-color: #f93912;
    }
`;