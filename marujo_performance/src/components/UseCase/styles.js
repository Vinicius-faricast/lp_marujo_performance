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
    border: 1px solid green;
    width: 80%;
    /* max-width: 100%; */
    margin: 0 auto;
    overflow-y: hidden;

    @media screen and (max-width: 800px){
        border: 1px solid red;
        width: 100%;
    }
`;

export const Carroussel = styled.div`
    border: 1px solid black;
    display: flex;
    /* width: 2000px; */
    max-width: 1024px;
    padding: 1rem;
    /* overflow-y: hidden; */
    
    @media screen and (max-width:800px){
        gap: 1rem;
        width: 1024px;
        /* overflow-y: hidden; */
        
    }
`;

export const ArticleCarroussel = styled.div`
    width: 388px;
    flex-grow: 1;
    height: 321px;
    background: var(--secundary-color-dark);
    

    &:first-child{
        border-radius: 20px 0 0 20px;
        border-right: 4px solid var(--primary-color);
    }

    &:last-child{
        border-radius: 0 20px 20px 0;
        border-left: 4px solid var(--primary-color);
    }

    @media screen and (max-width: 800px) {
        border-radius: 20px;

        &:first-child{
        border-radius: 20px 0 0 20px;
        border-right: none;
        border-radius: 20px;
    }

    &:last-child{
        border-radius: 0 20px 20px 0;
        border-left: none;
        border-radius: 20px;
    }
    }
`;

