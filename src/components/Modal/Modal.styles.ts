import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  z-index: 500;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  position: relative;
  display: block;
  padding: 24px;
  background-color: white;
  outline: black;
  width: 100%;
  max-width: 400px;
  border-radius: 4px;
  height: 80vh;
  overflow-y: auto;
`;

export const CloseContainer = styled.div`
    position: fixed;
    top: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    background-color: rgba(0,0,0,.8);
    font-size: 12px;
    text-transform: uppercase;
    color: yellow;
`;
