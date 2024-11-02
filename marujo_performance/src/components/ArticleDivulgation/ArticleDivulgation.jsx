import * as S from "./styles";

export const ArticleDivulgation = ({title, img, children}) => {

    return (
        <S.ArticleContainer>
            <S.Article>
            <S.ArticleContentContainer>
                <S.ArticleTitle>{title}</S.ArticleTitle>
                <S.ArticleContent>{children}</S.ArticleContent>
                <S.ArticleButton>Solicite um Orçamento!</S.ArticleButton>
            </S.ArticleContentContainer>
            <S.ArticleImg src={img} alt="ilustração de uma pessoa navegando em um barco a vela"/>
            </S.Article>
        </S.ArticleContainer>
    )
}