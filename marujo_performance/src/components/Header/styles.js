import styled, {} from 'styled-components';

export const Header = styled.header`
    background: var(--text-color0);
    width: 100vw;
    position: fixed;
`;

export const NavBar = styled.nav`
    display: flex;
    max-width: 1024px;
    margin: 0 auto;
    gap: 2rem;
    padding: 2rem 1rem;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 800px){
        ul{
            display: none;
        }
    }
`;

export const MenuMobile = styled.div`
    display: none;
    font-size: 3rem;
    color: var(--secundary-color-dark);

    @media screen and (max-width: 800px){
        display: flex;
    }
`;

export const BrandNav = styled.img`
    max-width: 8rem;
`;

export const MenuList = styled.ul`
    display: flex;
    list-style: none;
    gap: 3rem;
    align-items: center;
`;

export const MenuItem = styled.li`

    a{
        padding-bottom: .1rem;
        
        
    }

    a:hover{
        border-bottom: 1px solid var(--text-color100);
    }
`;

export const ItemLink = styled.a`
    text-decoration: none;
    color: var(--text-color100);
    font-size: .9rem;
    transition: all .5s ease-in-out;

    &:hover{
        color: var(--primary-color);
    }
`;

export const MenuBtn = styled.button`
    background: none;
    padding: .8rem 1rem;
    border-radius: .5rem;
    border: 1px solid var(--secundary-color-dark);
    cursor: pointer;
    transition: all .5s ease-in-out;

    a{
        font-weight: 800;
        font-size: 1.1rem;
        color: var(--secundary-color-dark);
    }

    &:hover{
        a{
            border-bottom: none;
            color: var(--text-color0);
        }

        background: var(--secundary-color);
        transform: scale(102%);
        
    }
`;