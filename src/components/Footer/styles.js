import {styled} from 'styled-components';

export const Footer = styled.footer`
    width: 100%;
    background: var(--primary-color);
    padding: 2rem;
    position: relative;
`;

export const FooterContentContainer = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 800px){
        padding-bottom: 1rem;
    }
`;

export const BrandFooter = styled.img`
    width: 8rem;
`;

export const DescritionFooter = styled.p`
    font-size: .8rem;
    font-weight: 500;
    color: var(--text-color0);

    @media screen and (max-width: 800px){
        position: absolute;
        bottom: .5rem;
        text-align: center;
        left: 1rem;
    }
`;

export const SocialMediaContainer = styled.div`
    display: flex;
    gap: 1rem;
`;

export const InstaButton = styled.button`
    font-size: 3rem;
    line-height: 0;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--text-color0);
    transform: scale(100%);
    transition: all .5s ease-in-out;

    &:hover{
        color: var(--secundary-color);
        transform: scale(115%);
    }
`;

export const LinkedinButton = styled.button`
    font-size: 2.5rem;
    line-height: 0;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--text-color0);

    transform: scale(100%);
    transition: all .5s ease-in-out;

    &:hover{
        color: var(--secundary-color);
        transform: scale(115%);
    }
`;