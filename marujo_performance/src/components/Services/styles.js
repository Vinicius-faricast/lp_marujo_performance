import {styled} from 'styled-components';

export const ContainerService = styled.section`
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;
`

export const ArticleContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 2rem;
    padding: 1rem;

    @media screen and (max-width: 800px){
        flex-direction: column;
    }
`;
