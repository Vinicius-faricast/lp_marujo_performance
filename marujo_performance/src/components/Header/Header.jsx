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
                </S.MenuMobile>
                <MenuList isOpen={isOpen} handleClick={handleClick} value={value} styles={styles}/>
                {/* <S.MenuList open={isOpen}>
                    <S.MenuItem><S.ItemLink href='#service' onClick={(e) =>handleClick(e) } style={value === 'service'?{...styles}:{color:''}}>Serviços</S.ItemLink></S.MenuItem>
                    <S.MenuItem><S.ItemLink href='#useCase' onClick={(e) =>handleClick(e) } style={value === 'useCase'?{...styles}:{color:''}}>Caso de Uso</S.ItemLink></S.MenuItem>
                    <S.MenuItem><S.ItemLink href='#ourMethod' onClick={(e) =>handleClick(e) } style={value === 'ourMethod'?{...styles}:{color:''}}>Nossa Metodologia</S.ItemLink></S.MenuItem>
                    <S.MenuBtn><S.ItemLink href='#' >Vamos navegar!</S.ItemLink></S.MenuBtn>
                </S.MenuList> */}
            </S.NavBar>
        </S.Header>
    )
}