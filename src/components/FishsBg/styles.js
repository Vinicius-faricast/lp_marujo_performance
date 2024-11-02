import {styled} from 'styled-components';

export const FishsImg = styled.img`
    position: absolute;
    max-width: 70%;
    z-index: -1;
    bottom: -4rem;

    right: ${({...prop}) => prop.$right}rem;
    animation: moveFish 5s ease-in-out infinite;

    @keyframes moveFish {
        0%{
            transform: translateX(0%);
            
            
        }
        50%{
            transform: translateX(1%);
        }
        100%{
            transform: translateX(0%); 
        }
    }

    @media screen and (max-width:800px){
        right: 1rem;
        bottom: -1rem;
    }
`;