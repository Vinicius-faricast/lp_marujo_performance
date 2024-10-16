import * as S from './styles';

export const MenuList = (props) => {
    const {isOpen, handleClick, value, styles} = props;

    return(
        <S.MenuList open={isOpen}>
        <S.MenuItem><S.ItemLink href='#service' onClick={(e) =>handleClick(e) } style={value === 'service'?{...styles}:{color:''}}>Serviços</S.ItemLink></S.MenuItem>
        <S.MenuItem><S.ItemLink href='#useCase' onClick={(e) =>handleClick(e) } style={value === 'useCase'?{...styles}:{color:''}}>Caso de Uso</S.ItemLink></S.MenuItem>
        <S.MenuItem><S.ItemLink href='#ourMethod' onClick={(e) =>handleClick(e) } style={value === 'ourMethod'?{...styles}:{color:''}}>Nossa Metodologia</S.ItemLink></S.MenuItem>
        <S.MenuBtn><S.ItemLink href='#' >Vamos navegar!</S.ItemLink></S.MenuBtn>
    </S.MenuList>
    )
}