import {styled} from 'styled-components';

export const Hero = styled.section`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    padding: 10rem 0 3rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width:800px) {
        flex-direction: column-reverse;
        align-items: center;
        padding: 10rem 1rem 5rem 1rem;
    }    
`;

export const HeroContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1.5rem;

    @media screen and (max-width:800px) {
        align-items: center;
    }
`;

export const HeroTitle = styled.h1`
    font-size: 3rem;
    color: var(--text-color100);

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

    @media screen and (max-width:800px) {
        max-width: 100%;
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