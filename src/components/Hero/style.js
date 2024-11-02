import {styled} from 'styled-components';

export const Hero = styled.section`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    padding: 10rem 1rem 3rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    animation: .3s linear forwards appear;
    /* -webkit-animation: .2s appear ease-in-out; */


    @media screen and (max-width:800px) {
        flex-direction: column-reverse;
        align-items: center;
        padding: 10rem 1rem 5rem 1rem;
    }

    @keyframes appear {
        from{
            opacity: 0;
            transform: translateX(25%);
            transform-origin: left center;
        }
        to{
            opacity: 1;
            transform: translateX(0);
        }
    }
`;

export const HeroContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1rem;
    /* animation: appear .2s ease-in-out; */
    /* transition: appear .5s ease-in-out; */

    @media screen and (max-width:800px) {
        align-items: center;
    }

    @keyframes appear {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
`;

export const HeroTitle = styled.h1`
    font-size: 3rem;
    color: var(--text-color100);
    line-height: 110%;

    @media screen and (max-width:800px) {
        display: none;
    }
`;

export const HeroContent = styled.p`
    color: var(--text-color100);
    font-size: 1.2rem;

    @media screen and (max-width:800px) {
        text-align: center;
    }
`;

export const HeroBtn = styled.button`
    font-size: 1.5rem;
    font-weight: 500;
    padding: .5rem 1rem;
    border-radius: 1rem;
    border: none;
    cursor: pointer;
    background: var(--primary-color);
    color: var(--text-color0);
    transition: all .5s ease-in-out;

    &:hover{
        transform: scale(105%);
        background: var(--secundary-color);
        box-shadow: 1px 1px 4px rgba(0,0,0,0.2);

    }
`;

export const HeroImg = styled.img`
    max-width: 40rem;
    transform: scaleX(-1);

    @media screen and (max-width:800px) {
        max-width: 100%;
    }
    
    @keyframes appear {
        from{
            transform: translateX(-10px);
            opacity: 0;
        }
        to{
            transform: translateX(0);
            opacity: 1;
        }
    }
`;

export const HeroTitleMobile = styled.h1`
    display: none;
    color: var(--secundary-color);
    font-size: 2rem;

    @media screen and (max-width:800px) {
        display: flex;
    }
`;