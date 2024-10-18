import {styled} from 'styled-components';

export const ContainerService = styled.section`
    /* border: 1px solid red; */
    /* display: flex; */
    /* flex-direction: row; */
    /* justify-content: center; */
    /* align-items: center; */
    /* max-height: 100%; */
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const ArticleContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 2rem;
    padding: 1rem;
`;
