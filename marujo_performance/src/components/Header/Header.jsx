import * as S from './styles';
import brandNav from '../../assets/brandNav.svg' 
import { useState } from 'react';
import { IoMenu, IoClose } from "react-icons/io5";
import { MenuList } from '../MenuList/MenuList';

export const Header = () => {
    const [value, setValue] = useState('')
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (e) => {
        if(e.target.href){
            setValue(e.target.href.split('#')[1]);
            setIsOpen(false);
            return;
        }
        setValue('');
        setIsOpen(false);
    }

    const styles = {
        color: 'var(--primary-color)', 
        borderBottom: '1px solid var(--text-color100)'
    }

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }

    return(
        <S.Header>
            <S.NavBar>
                <S.ItemLink href='#home' onClick={(e) =>handleClick(e)}>
                    <S.BrandNav src={brandNav} />
                </S.ItemLink>
                <S.MenuMobile onClick={toggleOpen}>
                    {isOpen ? <IoClose/> : <IoMenu/>}
                    {/* aplicar uma condicional para ver quando a resolução a tela diminuir */}
                    {/* <MenuList isOpen={isOpen} handleClick={handleClick} value={value} styles={styles}/> */}
                </S.MenuMobile>
                {/* aplicar a mesma condicional aqui também */}
                <MenuList isOpen={isOpen} handleClick={handleClick} value={value} styles={styles}/>
            </S.NavBar>
        </S.Header>
    )
}