import * as S from './style';
import fishingAnimate from '../../assets/fishing-animate.svg'

export const Hero = () => {
    return(
        <S.Hero id='#'>
            <S.HeroContentContainer>
                <S.HeroTitle>Navegando no mar digital para o sucesso!</S.HeroTitle>
                <S.HeroContent>Ajudamos empresas a crescer e ter sucesso online.</S.HeroContent>
                <S.HeroBtn>Vamos Navegar!</S.HeroBtn>
            </S.HeroContentContainer>
            <S.HeroImg src={fishingAnimate}/>
            <S.HeroTitleMobile>Navegando no mar digital para o sucesso!</S.HeroTitleMobile>
        </S.Hero>
    )
}