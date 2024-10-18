import * as S from './style';
import fishingAnimate from '../../assets/fishing-animate.svg'
import { useEffect, useState } from 'react';

export const Hero = () => {
    const [resolutionScreen, setResolutionScreen] = useState(document.body.clientWidth);
    const [isVisible, setIsVisible] = useState();

    document.body.onresize = () => {
        setResolutionScreen(document.body.clientWidth)
    };

    useEffect(()=> {
        if(resolutionScreen < 800){
            setIsVisible(true);
        }else{
            setIsVisible(false);
        }
        
    }, [resolutionScreen])

    return(
        <S.Hero id='#'>
            <S.HeroContentContainer>
                {!isVisible && <S.HeroTitle>Navegando no mar digital para o sucesso!</S.HeroTitle>}
                <S.HeroContent>Te guiamos pelo caminho mais eficiente para aumentar suas vendas e expandir sua presença online. Com Landing Page de alta performance e campanhas de Google Ads que geram resultados reais!</S.HeroContent>
                <S.HeroBtn>Vamos Navegar!</S.HeroBtn>
            </S.HeroContentContainer>
            <S.HeroImg src={fishingAnimate}/>
            {isVisible && <S.HeroTitleMobile>Navegando no mar digital para o sucesso!</S.HeroTitleMobile>}
        </S.Hero>
    )
}