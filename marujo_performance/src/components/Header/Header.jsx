import * as S from './styles';
import brandNav from '../../assets/brandNav.svg'; 
import { useState } from 'react';
import { IoMenu, IoClose } from "react-icons/io5";
import { MenuList } from '../MenuList/MenuList';
import { animateScroll as scroll } from "react-scroll";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        // if(e.target.id){
        //     setValue(e.target.id.split('#')[1]);
        //     setIsOpen(false);
        //     return;
        // }
        // setValue('');
        setIsOpen(false);
    }

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return(
        <S.Header>
            <S.NavBar>
                    <S.ItemLink onClick={handleClick}>
                        <S.BrandNav onClick={scrollToTop} id='#home' src={brandNav} />
                    </S.ItemLink>
                <S.MenuMobile onClick={toggleOpen}>
                    {isOpen ? <IoClose/> : <IoMenu/>}
                    {/* aplicar uma condicional para ver quando a resolução a tela diminuir */}
                    {/* <MenuList isOpen={isOpen} handleClick={handleClick} value={value} styles={styles}/> */}
                </S.MenuMobile>
                {/* aplicar a mesma condicional aqui também */}
                <MenuList isOpen={isOpen} handleClick={handleClick} />
            </S.NavBar>
        </S.Header>
    )
}