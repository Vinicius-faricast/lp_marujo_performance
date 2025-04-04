import { css, styled } from 'styled-components';

export const ArticleCarroussel = styled.div`
    background: var(--secundary-color-dark);
    border-radius: 20px;
    padding: 2rem;
    position: relative;
    height: 14rem;
    max-width: 90%;
    margin: 0 auto;
  
    @media screen and (min-width: 800px) {
        border-radius: 0px;
        min-height: 16rem;
        max-width: 100%;

        ${({ direction }) => direction === "last" && css`

            border-radius: 0 20px 20px 0;
            &::after{
                content: '';
                width: 2px;
                height: 80%;
                top: 10%;
                left: 0;
                border-radius: 10px;
                background: var(--primary-color-light);
                position: absolute;
            }
        `}

        ${({ direction }) => direction === "first" && css`

            border-radius: 20px 0px 0px 20px;
            &::after{
                content: '';
                width: 2px;
                height: 80%;
                top: 10%;
                right: 0;
                border-radius: 10px;
                background: var(--primary-color-light);
                position: absolute;
            }
        `}

    }
`;

export const ArticleContent = styled.p`
    font-size: 1rem;
    line-height: 150%;
    color: var(--text-color0);

`;