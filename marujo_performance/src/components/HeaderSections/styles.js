import { styled} from 'styled-components';

export const HeaderSectionContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;

    @media screen and (max-width:800px){
        flex-wrap: wrap;
    }
`;

export const TitleSection = styled.h2`
    background: var(--primary-color);
    color: var(--text-color100);
    font-weight: 400;
    font-size: 2rem;
    padding: .2rem .5rem;
    border-radius: .4rem;
`;

export const ContentSection = styled.p`
    color: var(--text-color100);
    font-size: 1rem;
    line-height: 150%;

    @media screen and (max-width:800px){
        text-align: center;
        padding-inline: 1rem;
    }
`;
