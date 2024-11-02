import { HeaderSections } from '../HeaderSections/HeaderSections';
import * as S from './styles';

import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';

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
        observeParents : true,
        observer : true,
        slidesPerView : 2,
        spaceBetween : 10,
        centeredSlides : true,
        initialSlide : 1,
        resistanceRatio : 0,
        // pagination : {clickable: true},
        // modules : [Pagination],
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
        resistanceRatio: 0,
        // pagination: { clickable: true },
        // modules: [Pagination],
        allowSlideNext: false,
        allowSlidePrev: false,
        allowTouchMove: true,
    }

    useEffect(()=> {

        const setCarouselConfig = () => {
            if(window.innerWidth < 800){
                setIsMobile(true);
                return;
            }
            setIsMobile(false);
        }

        if(window.innerWidth < 800){
            setIsMobile(true);
        }

        window.addEventListener('resize', setCarouselConfig)
        return () => window.removeEventListener('resize', setCarouselConfig)
    }, [isMobile])

    return (
        <S.UseCaseContainer id='#useCase'>
            <HeaderSections title='Caso de Estudo'>Veja como nossos projetos podem ajudar no seus negocios</HeaderSections>

            <Swiper style={{'width': '100%'}}
                {...isMobile ? {...configsMobile} : {...configDefault}}

            >
                <SwiperSlide><ArticleCase direction={'first'}></ArticleCase></SwiperSlide>
                <SwiperSlide><ArticleCase></ArticleCase></SwiperSlide>
                <SwiperSlide><ArticleCase direction={'last'}></ArticleCase></SwiperSlide>
            </Swiper>
        <FishsBg $right={24}/>
        </S.UseCaseContainer>
    )
}