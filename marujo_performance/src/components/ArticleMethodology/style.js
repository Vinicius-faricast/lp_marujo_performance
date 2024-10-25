import {styled} from 'styled-components';

export const Article = styled.article`
    border: 1px solid var(--secundary-color-dark);
    box-shadow: 0px 2px 0px var(--secundary-color-dark);
    background: var(--primary-color-light);
    border-radius: 1.8rem;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const HeaderArticle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-block: 1rem;
    border-bottom: 2px solid var(--secundary-color-dark);
`;

export const TitleContainer = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
`;

export const NumberArticle = styled.p`
    color: var(--text-color100);
    font-size: 4rem;
    font-weight: 400;
`;

export const TitleArticle = styled.h3`
    color: var(--text-color100);
    font-size: 2.5rem;
    font-weight: 400;
`;

export const ButtonArticle = styled.button`
    background: transparent;
    font-size: 4rem;
    line-height: 0%;
    border: none;
    cursor: pointer;
    color: var(--text-color100);
`;

export const ContentArticle = styled.p`
    font-size: 1rem;
    color: var(--text-color100);
    line-height: 150%;
`;
