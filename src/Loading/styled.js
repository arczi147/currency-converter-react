import styled from "styled-components";

export const Load = styled.div`
    width: 70%;
    margin: auto;
`;

export const Legend = styled.legend`
    background-color: ${({ theme }) => theme.color.tangerine};
    color: ${({ theme }) => theme.color.white};
    border-radius: 10px;
    padding: 15px;
    text-align: left;
`;

export const Fieldset = styled.fieldset`
    border: 1px solid ${({ theme }) => theme.color.silver};
    text-align: left;
    padding: 20px;
    border-radius: 10px;
    margin: 200px 0;
    background-color: ${({ theme }) => theme.color.gallery};
    line-height: 1.5;
`;