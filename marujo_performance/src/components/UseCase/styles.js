import {styled} from 'styled-components';

export const UseCaseContainer = styled.div`
    max-width: 1024px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0 auto;
    padding-block: 3rem;
    position: relative;
    
`;

export const CarrousselContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    overflow: hidden;

    @media screen and (max-width: 800px){
        width: 100%;
    }
`;

export const Carroussel = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    
    @media screen and (max-width:800px){
        gap: 1rem;
        width: 1024px;
        
    }
`;
