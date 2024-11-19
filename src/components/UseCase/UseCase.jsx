import { HeaderSections } from '../HeaderSections/HeaderSections';
import * as S from './styles';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ArticleCase } from '../ArticleCase/ArticleCase';
import { useEffect, useState } from 'react';
import { FishsBg } from '../FishsBg/FishsBg';

export const UseCase = () => {
    const [isMobile, setIsMobile] = useState(false);

    const configsMobile = {
        observeParents: true,
        observer: true,
        slidesPerView: 1,
        spaceBetween: 10, //10
        centeredSlides: true,
        initialSlide: 1,
        resistanceRatio: 0,
        pagination: true,
        modules: [Pagination],
        allowSlideNext: true,
        allowSlidePrev: true,
        allowTouchMove: true,
    }


    const configDefault = {
        observeParents: true,
        observer: true,
        slidesPerView: 3,
        spaceBetween: 0,
        centeredSlides: true,
        initialSlide: 1,
        pagination: false,
        modules: [Pagination],
        resistanceRatio: 0,
        allowSlideNext: false,
        allowSlidePrev: false,
        allowTouchMove: true,
    }

    useEffect(() => {

        const setCarouselConfig = () => {
            if (window.innerWidth < 800) {
                setIsMobile(true);
                return;
            }
            setIsMobile(false);
        }

        if (window.innerWidth < 800) {
            setIsMobile(true);
        }

        window.addEventListener('resize', setCarouselConfig)
        return () => window.removeEventListener('resize', setCarouselConfig)
    }, [isMobile])

    return (
        <S.UseCaseContainer id='#useCase'>
            <HeaderSections title='Vantagens!'>Veja como nossos projetos podem ajudar no seus negocios</HeaderSections>

            <Swiper style={{ 'width': '100%'}}
                className="mySwiper"
                {...isMobile ? { ...configsMobile} : { ...configDefault }}
                

            >
                <SwiperSlide>
                    <ArticleCase direction={'first'}>
                        Landing pages são muito usadas em campanhas de marketing, como anúncios no Google Ads. Isso permite rastrear e medir o desempenho de cada campanha com precisão, entendendo quantos visitantes tomaram a ação desejada.
                    </ArticleCase>
                </SwiperSlide>

                <SwiperSlide>
                    <ArticleCase>
                        A landing page pode ser criada para diferentes etapas da jornada do cliente {'('}descoberta, consideração ou decisão{')'}, ajudando a direcionar o conteúdo certo para o público certo.
                    </ArticleCase>
                </SwiperSlide>

                <SwiperSlide>
                    <ArticleCase direction={'last'}>
                        Como tem um layout simplificado e um foco único, ela proporciona uma experiência mais fluida e direta, aumentando as chances de conversão.
                    </ArticleCase>
                </SwiperSlide>
            </Swiper>
            <FishsBg $right={24} />
        </S.UseCaseContainer>
    )
}