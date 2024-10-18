import { styled } from 'styled-components';

export const Article = styled.article`
    border: 1px solid var(--text-color100);
    box-shadow: 0px 2px 0px var(--text-color100);
    border-radius: 1.25rem;
    padding: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    width:45%;
    background: var(--primary-color-light);
    

    &:nth-child(3n + 1){
        background: var(--text-color20);
    }
`;

export const ArtcleContainerContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    width: 50%;
`;

export const ArticleTitle = styled.h3`
    font-size: 1.6rem;
    color: var(--text-color100);
`;

export const ArticleContent = styled.p`
    font-size: 1rem;
    color: var(--text-color100);
`;

export const ArticleImg = styled.img`
    max-width: 16rem;
    width: 50%;
`;