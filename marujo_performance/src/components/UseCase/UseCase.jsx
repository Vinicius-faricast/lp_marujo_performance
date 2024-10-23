import { HeaderSections } from '../HeaderSections/HeaderSections';
import * as S from './styles';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ArticleCase } from '../ArticleCase/ArticleCase';

export const UseCase = () => {
    return (
        <S.UseCaseContainer>
            <HeaderSections title='Caso de Estudo'>Veja como nossos projetos podem ajudar no seus negocios</HeaderSections>

            <Swiper style={{'border': '1px solid red', 'width': '80%'}}
 
                observeParents = {true}
                observer = {true}
                slidesPerView={2}
                spaceBetween={10}
                centeredSlides={true}
                initialSlide={1}
                resistanceRatio= {0}
                pagination={{ clickable: true }}
                
                // navigation
                modules={[Pagination]}
                allowSlideNext = {true}
                allowSlidePrev = {true}
                // allowTouchMove = {false}
            >
                <SwiperSlide><ArticleCase direction={'first'}></ArticleCase></SwiperSlide>
                <SwiperSlide><ArticleCase></ArticleCase></SwiperSlide>
                <SwiperSlide><ArticleCase direction={'last'}></ArticleCase></SwiperSlide>
            </Swiper>

        </S.UseCaseContainer>
    )
}