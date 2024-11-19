import * as S from './styles';

export const ArticleCase = ({direction, children}) => {

    return (
        <S.ArticleCarroussel direction={direction}>
            <S.ArticleContent>
                    {children}
            </S.ArticleContent>
        </S.ArticleCarroussel>
    )
}