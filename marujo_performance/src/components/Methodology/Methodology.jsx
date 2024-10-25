import { ArticleMethodology } from "../ArticleMethodology/ArticleMethodology";
import { HeaderSections } from "../HeaderSections/HeaderSections"
import * as S from './styles';

export const Methodology = () => {
    return (
        <S.MethodologyContainer>
            <HeaderSections title='Nossa Metodologia'>
                Guia passo a passo para atingir seus objetivos de negócios
            </HeaderSections>

            <S.MethodologyArticlesContainer>
                <ArticleMethodology></ArticleMethodology>
            </S.MethodologyArticlesContainer>
        </S.MethodologyContainer>
    )
}