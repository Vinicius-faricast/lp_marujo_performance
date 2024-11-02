import {styled} from 'styled-components';

export const ContainerService = styled.section`
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;
    animation: appearService 3ms ease-in-out;
    animation-timeline: view();
    animation-range: cover 0% cover 30%;

    @keyframes appearService {
        from{
            opacity: 0;
            transform: translateY(-10%);
        }
        to{
            opacity: 1;
            transform: translateY(0);
        }
    }
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
