import styled from 'styled-components'
import { Color } from '../../../styles_Global/variaveis'

export const EstiloBotao = styled.button`
  font-family: inherit;
  font-size: 20px;
  font-weight: 600;
  
    width: 220px;
  border: none;
  background-color: transparent;

  border-top: solid 1px #be430d;
  border-bottom: solid 1px #be430d;
  border-right: solid 1px rgba(190, 67, 13, 0.6);
  border-left: solid 1px rgba(190, 67, 13, 0.6);
  
  color: #be430d;
  padding: 0.8em 1.2em;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  transition: background, transform 0.3s;
  cursor: pointer;

  &:hover {
    background: linear-gradient(to right, #be430d 0%, rgba(48, 21, 10, 0.9) 100%);
    transform: translateY(-3px);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
    color: ${Color.branco};
    border-color: transparent;
    border-right: solid 0px;
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  }

  & span {
    display: block;
    margin-left: 0.4em;
    transition: all 0.3s;
  }

  & svg {
    width: 18px;
    height: 18px;
    fill: white;
    transition: all 0.3s;
  }

  & .svg-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #be430d;
    margin-right: 0.5em;
    transition: all 0.3s;
  }

  &:hover .svg-wrapper {
    background-color: rgba(255, 255, 255, 0.5);
  }

  &:hover svg {
    transform: rotate(45deg);
  }
`