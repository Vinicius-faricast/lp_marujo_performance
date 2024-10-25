import * as S from './style'
import { IoMdAddCircleOutline } from 'react-icons/io'

export const ArticleMethodology = () => {
    return(
        <S.Article>
            <S.HeaderArticle>
                <S.TitleContainer>
                <S.NumberArticle>01</S.NumberArticle>
                <S.TitleArticle>Consulta</S.TitleArticle>
                </S.TitleContainer>
                <S.ButtonArticle><IoMdAddCircleOutline /></S.ButtonArticle>
            </S.HeaderArticle>
            <S.ContentArticle>
                text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an Lorem Ipsum text of the printing and typesetting industry. Lorem Ipsum has been the s standard dummy text ever since the 1500s, when an Lorem Ipsum text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an Lorem Ipsum 
            </S.ContentArticle>
        </S.Article>
    )
}