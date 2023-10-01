import styled, { css } from "styled-components";

export const StyledForm = styled.form`
    width: 80%;
    margin: auto;
`;

export const Fieldset = styled.fieldset`
    border: 1px solid ${({ theme }) => theme.color.silver};
    text-align: center;
    padding: 20px;
    padding-top: 5px;
    border-radius: 10px;
    margin: 30px 0;
    background-color: ${({ theme }) => theme.color.gallery};
`;

export const Legend = styled.legend`
    background-color: ${({ theme }) => theme.color.tangerine};
    color: ${({ theme }) => theme.color.white};
    border-radius: 10px;
    padding: 15px;
    text-align: left;
`;

export const Label = styled.span`
    width: 100%;
    max-width: 150px;
    display: inline-block;
    margin-right: 5px;

    ${({ result }) => result && css`
        margin-top: 15px;
    `}    
`;

export const Currency = styled.select`
    border: 1px solid ${({ theme }) => theme.color.silver};
    padding: 10px;
    width: 100%;
    max-width: 400px;
    border-radius: 5px;
`;

export const Amount = styled.input`
    border: 1px solid ${({ theme }) => theme.color.silver};
    padding: 10px;
    width: 100%;
    max-width: 400px;
    border-radius: 5px;
`;

export const Button = styled.button`
    width: 100%;
    border: none;
    background-color: ${({ theme }) => theme.color.tangerine};
    color: ${({ theme }) => theme.color.white};
    padding: 15px;
    border-radius: 10px;

    &:hover {
        background-color: ${({ theme }) => theme.color.pirateGold};
    }

    &:active {
        background-color: ${({ theme }) => theme.color.darkerPirateGold};
    }
`;