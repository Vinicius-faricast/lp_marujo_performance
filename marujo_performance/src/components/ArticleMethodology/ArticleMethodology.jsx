import { useState } from 'react'
import * as S from './style'
import { IoMdAddCircleOutline, IoMdRemoveCircleOutline } from 'react-icons/io'

export const ArticleMethodology = ({number, title, children}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <S.Article $isOpen={isOpen}>
            <S.HeaderArticle $isOpen={isOpen}>
                <S.TitleContainer>
                    <S.NumberArticle>{number}</S.NumberArticle>
                    <S.TitleArticle>{title}</S.TitleArticle>
                </S.TitleContainer>
                <S.ButtonArticle onClick={() => setIsOpen(!isOpen)}>{isOpen ? <IoMdRemoveCircleOutline /> : <IoMdAddCircleOutline />}</S.ButtonArticle>
            </S.HeaderArticle>
            <S.ContentArticleContainer $isOpen={isOpen}>
                <S.ContentArticle $isOpen={isOpen}>
                    {children}
                </S.ContentArticle>
            </S.ContentArticleContainer>
        </S.Article>
    )
}