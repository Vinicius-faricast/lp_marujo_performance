import * as S from './styles';

export const ArticleService = ({title, image, children}) => {
    return (
        <S.Article>
            <S.ArtcleContainerContent>
                <S.ArticleTitle>{title}</S.ArticleTitle>
                <S.ArticleContent>{children}</S.ArticleContent>
            </S.ArtcleContainerContent>
            <S.ArticleImg src={image} />
        </S.Article>
    )
}