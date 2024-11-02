import * as S from './styles';

export const ArticleService = ({title, image, children, alt}) => {
    return (
        <S.Article>
            <S.ArtcleContainerContent>
                <S.ArticleTitle>{title}</S.ArticleTitle>
                <S.ArticleContent>{children}</S.ArticleContent>
            </S.ArtcleContainerContent>
            <S.ArticleImg src={image} alt={alt}/>
        </S.Article>
    )
}