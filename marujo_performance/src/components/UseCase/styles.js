import {styled} from 'styled-components';

export const UseCaseContainer = styled.div`
    border: 1px solid red;
    max-width: 1024px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0 auto;
    
`;

export const CarrousselContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    overflow: hidden;

    @media screen and (max-width: 800px){
        border: 1px solid red;
        width: 100%;
    }
`;

export const Carroussel = styled.div`
    /* border: 1px solid black; */
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    /* gap: 3rem; */
    
    @media screen and (max-width:800px){
        gap: 1rem;
        width: 1024px;
        /* overflow: hidden; */
        
    }
`;
