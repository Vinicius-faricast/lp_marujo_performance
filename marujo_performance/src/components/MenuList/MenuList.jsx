import * as S from './styles';
import {Link} from 'react-scroll';

export const MenuList = (props) => {
    const {isOpen, handleClick} = props;

    return(
        <S.MenuList open={isOpen}>

        <S.MenuItem>
            <S.ItemLink>
                <Link onClick={handleClick}
                    className='nav-item'
                    activeClass="active"
                    to="#service"
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={300}
                > 
                Serviços 
                </Link>
            </S.ItemLink>
        </S.MenuItem>

        <S.MenuItem>
            <S.ItemLink>
                <Link onClick={handleClick}
                    className='nav-item'
                    activeClass="active"
                    to="#useCase"
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={300}
                >
                    Caso de Uso
                </Link>
            </S.ItemLink>
        </S.MenuItem>

        <S.MenuItem>
            <S.ItemLink >
                <Link onClick={handleClick}
                    className='nav-item'
                    activeClass="active"
                    to="#ourMethod"
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={300}
                >
                    Nossa Metodologia
                </Link>
            </S.ItemLink>
        </S.MenuItem>

        <S.MenuBtn><S.ItemBtn href='#' target='_blank'>Vamos navegar!</S.ItemBtn></S.MenuBtn>
    </S.MenuList>
    )
}