import {css, styled} from 'styled-components';

export const Article = styled.article`
    border: 1px solid var(--secundary-color-dark);
    box-shadow: 0px 2px 0px var(--secundary-color-dark);
    background: var(--text-color20);
    border-radius: 1.8rem;
    width: 100%;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;
    /* transform: scaleY(10%); */
    transition: all .5s ease-in-out;

    ${({$isOpen}) => $isOpen && css`
        background: var(--primary-color-light); 
        /* transform: scaleY(100%); */
    `}
`;

export const HeaderArticle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: transparent;
    transition: all .2s ease-in-out;

    /* padding-block: 1rem; */
    ${ ({$isOpen}) => $isOpen && css`
        border-bottom: 2px solid var(--secundary-color-dark);
    `}
    
`;

export const TitleContainer = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
`;

export const NumberArticle = styled.p`
    color: var(--text-color100);
    font-size: 3rem;
    font-weight: 400;

    @media screen and (max-width: 800px){
        font-size: 2rem;
    }

`;

export const TitleArticle = styled.h3`
    color: var(--text-color100);
    font-size: 2rem;
    font-weight: 400;

    @media screen and (max-width: 800px){
        font-size: 1rem;
    }
`;

export const ButtonArticle = styled.button`
    background: transparent;
    font-size: 4rem;
    line-height: 0%;
    border: none;
    cursor: pointer;
    color: var(--text-color100);
    z-index: 2;
`;

export const ContentArticleContainer = styled.div`
    overflow: hidden;
    width: 100%;
    height: 0px;

    ${({$isOpen}) => $isOpen && css`
        height: fit-content;
    `}
`;

export const ContentArticle = styled.p`
    font-size: 1rem;
    color: var(--text-color100);
    line-height: 150%;
    opacity: 0;
    transform: translatey(-20px);
    transition: all .2s ease-in-out;

    ${({$isOpen}) => $isOpen && css`
        transform: translatey(0);
        opacity: 1;
    `}
`;
