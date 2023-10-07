import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'IBM Plex Mono', monospace;
    list-style: none;
}
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 90%;
  }
`

export const Campo = styled.input`
  padding: 8px;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 8px;
`

export const Botao = styled.button`
  background-color: #8ECDDD;
  border: 1px solid #222222;
  border-radius: 8px;
  box-sizing: border-box;
  color: #000;
  cursor: pointer;
  display: inline-block;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  margin: 0;
  outline: none;
  padding: 13px 23px;
  position: relative;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
  transition: box-shadow 0.2s, -ms-transform 0.1s, -webkit-transform 0.1s,
    transform 0.1s;
  user-select: none;
  -webkit-user-select: none;
  width: auto;

  :focus-visible {
    box-shadow: #222222 0 0 0 2px, rgba(255, 255, 255, 0.8) 0 0 0 4px;
    transition: box-shadow 0.2s;
  }

  :active {
    background-color: #f7f7f7;
    border-color: #000000;
    transform: scale(0.96);
  }

  :disabled {
    border-color: #dddddd;
    color: #dddddd;
    cursor: not-allowed;
    opacity: 1;
  }
`

export default EstiloGlobal
