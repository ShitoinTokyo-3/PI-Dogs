import styled, { css } from 'styled-components';

const colors = {
    bord: '#0075ff',
    error: '#bb2929',
    success: '#1ed12d',
}

const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    max-width: 800px;
    width: 90%;
    margin: auto;
    padding: 40px;

    @media (max-width: 800px) {
        grid-template-columns: 1fr;
    }
`;

const Label = styled.label`
    display: block;
    font-weight: 700;
    padding: 10px;
    min-height: 40px;
    cursor: pointer;

    ${({ valid }) => valid === false && css`
        color: ${colors.error};
    `}
`;
const GruopInput = styled.div`
    display: relative;
    z-index: 90;
`;
const Input = styled.input`
    width: 100%;
    background: #fff;
    border-radius: 3px;
    height: 45px;
    line-height: 45px;
    padding: 0 40px 0 10px;
    transition: .3s ease all; 
    border: 3px solid transparent;

    &:focus {
        border: 3px solid ${colors.bord};
        outline: none;
        box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
    }

    ${({ valid }) => valid === true && css`
        border: 3px solid transparent;
    `}

    ${({ valid }) => valid === false && css`
        border: 3px solid ${colors.error} !important;
    `}
`;

const LegendError = styled.p`
    font-size: 12px;
    margin-bottom: 0;
    color: ${colors.error};
    display:none;

    ${({ valid }) => valid === true && css`
        display:none;
    `}

    ${({ valid }) => valid === false && css`
        display:block;
    `}
`;


const ContainerLine = styled.div`
    grid-column: span 2;
    
    @media (max-width: 800px) {
        grid-column: span 1;
    }
`;
const ConteinerButton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-column: span 2;

    @media (max-width: 800px) {
        grid-column: span 1;
    }
`;
const Button = styled.button`
    height: 45px;
    line-height: 45px;
    width: 30%;
    background: #000;
    color: #fff;
    font-weight: bold;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: .1s ease all;

    &:hover {
        box-shadow: 3px 0px 30px rgba(163, 163, 163, 1);
`;

const MessageSucces = styled.p`
    font-size: 14px;
    color: ${colors.success};
`;

const MessageError = styled.div`
    height: 45px;
    line-height: 45px;
    background: #f66060;
    padding: 0px 15px;
    border-radius: 3px;
    grid-column: span 2;
    p{
        margin: 0;
    }
    b{
        margin-left: 10px;
    }

    @media (max-width: 800px) {
        grid-column: span 1;
    }

`;

const TempsContainer = styled.div`
    border: 1px solid #ccc;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    grid-column: span 2;

`;
const Temps = styled.div`
    border: 1px solid #ccc;
    display:inline-block;
    margin: 8px 10px;

    input[type="checkbox"] {
        display: none;
    }
    label{
        color: #0774d9; 
        font-weight: bold;
        padding: 5px 15px 5px 43px;
        display: inline-block;
        position: relative;
        font-size: 1em;
        border-radius: 3px;
        cursor: pointer;
        -webkit-transition: all .3s ease;
        -o-transition: all .3s ease;
        transition: all .3s ease;

        &:hover {
            background: rgba(0, 116, 217, .3);
        }
        &:before {
            content: "";
            width: 13px;
            height: 13px;
            display: inline-block;
            background: none;
            border: 3px solid #0774d9;
            border-radius: 25%;
            position: absolute;
            left: 17px;
            top: 4px;
        }
    }
    input[type="checkbox"]:checked + label {
        padding: 5px 15px;
        background: #0774d9;
        border-radius: 2px;
        color: #fff;
    }
    input[type="checkbox"]:checked + label:before {
       display: none;
    }
`;

export { 
    colors, 
    Form, 
    Label, 
    GruopInput, 
    Input, 
    LegendError, 
    ContainerLine, 
    ConteinerButton, 
    Button,
    MessageSucces,
    MessageError,
    TempsContainer,
    Temps
    };