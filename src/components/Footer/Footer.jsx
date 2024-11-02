import * as S from './styles';
import {AiFillInstagram} from 'react-icons/ai';
import {ImLinkedin} from 'react-icons/im'

import BrandFooter from './../../assets/brandFooter.svg';

export const Footer = () => {
    return (
        <S.Footer>
            <S.FooterContentContainer>
                <S.BrandFooter src={BrandFooter} alt='Logo empresa marujo performance'/>
                <S.DescritionFooter>© Marujo Performance 2024. Todos os direitos reservados.</S.DescritionFooter>
                <S.SocialMediaContainer>
                    <S.InstaButton aria-label='botão para acessar o instagram'><AiFillInstagram/></S.InstaButton>
                    <S.LinkedinButton aria-label='botão para acessar o linkedin'><ImLinkedin/></S.LinkedinButton>
                </S.SocialMediaContainer>
            </S.FooterContentContainer>
        </S.Footer>
    )
}