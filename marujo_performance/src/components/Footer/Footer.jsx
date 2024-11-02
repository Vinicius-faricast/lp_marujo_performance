import * as S from './styles';
import {AiFillInstagram} from 'react-icons/ai';
import {ImLinkedin} from 'react-icons/im'

import BrandFooter from './../../assets/brandFooter.svg';

export const Footer = () => {
    return (
        <S.Footer>
            <S.FooterContentContainer>
                <S.BrandFooter src={BrandFooter}/>
                <S.DescritionFooter>© Marujo Performance 2024. Todos os direitos reservados.</S.DescritionFooter>
                <S.SocialMediaContainer>
                    <S.InstaButton><AiFillInstagram/></S.InstaButton>
                    <S.LinkedinButton><ImLinkedin/></S.LinkedinButton>
                </S.SocialMediaContainer>
            </S.FooterContentContainer>
        </S.Footer>
    )
}