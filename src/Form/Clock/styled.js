import styled from "styled-components";

export const Time = styled.p`
    font-family: 'Inconsolata', monospace;
    font-size: 15px;
    color: ${({ theme }) => theme.color.scorpion};
    text-align: right;
    margin-top: 0px;
    margin-right: 20px;
    margin-bottom: 50px;
`;