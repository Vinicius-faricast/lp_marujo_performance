import { styled } from "styled-components";

export const ArticleContainer = styled.div`
    width: 100%;
    padding: 3rem 1rem;
  
`;

export const Article = styled.article`
    max-width: 920px;
    background: var(--text-color20);
    border-radius: 20px;
    padding: 2rem;
    display: flex;
    margin: 0 auto;
    align-items: center;
    position: relative;
    z-index: 0;

    @media screen and (max-width: 700px){
        flex-direction: column-reverse;
    }

    animation: appearArticleDivulgation 3ms ease-in-out;
    animation-timeline: view();
    animation-range: cover 0% cover 30%;

    @keyframes appearArticleDivulgation {
        from{
            opacity: 0;
            transform: translateX(15%);
        }
        to{
            opacity: 1;
            transform: translateX(0);
        }
    } 
`;

export const ArticleContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: start;
    max-width: 60%;

    @media screen and (max-width: 700px){
        max-width: 100%;
        align-items: center;
        text-align: center;
    }
`;

export const ArticleTitle = styled.h3`
    font-size: 2.2rem;
    font-weight: 600;
    color: var(--text-color100);

`;

export const ArticleContent = styled.p`
    font-size: 1rem;
    color: var(--text-color100);
`;

export const ArticleButton = styled.button`
    font-size: 1.2rem;
    font-weight: 500;
    background: var(--text-color100);
    color: var(--text-color0);
    padding: 1rem 2rem;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    transition: all .5s ease-in-out;

    &:hover{
        background: var(--primary-color);
        color: var(--text-color100);
        transform: scale(101%);
        box-shadow: 0px 0px 4px rgba(0, 0, 0, .2);
    }
`;

export const ArticleImg = styled.img`
    max-width: 40%;
    position: absolute;
    right: 0;

    @media screen and (max-width: 700px){
        position: relative;
        max-width: 80%;
    }
`;