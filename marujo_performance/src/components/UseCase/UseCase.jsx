import { HeaderSections } from '../HeaderSections/HeaderSections'
import * as S from './styles'

export const UseCase = () => {
    return (
        <S.UseCaseContainer>
            <HeaderSections title='Caso de Estudo'>Veja como nossos projetos podem ajudar no seus negocios</HeaderSections>
            <S.CarrousselContainer>
                <S.Carroussel>
                    <S.ArticleCarroussel></S.ArticleCarroussel>
                    <S.ArticleCarroussel></S.ArticleCarroussel>
                    <S.ArticleCarroussel></S.ArticleCarroussel>
                </S.Carroussel>
            </S.CarrousselContainer>
        </S.UseCaseContainer>
    )
}