import * as S from './style'
import { IoMdAddCircleOutline, IoMdRemoveCircleOutline } from 'react-icons/io'

export const ArticleMethodology = ({setIdItem ,idItem, number, title, children}) => {

    const handleClick = (id) => {
        if(idItem === id){
            setIdItem(null);
            return;
        }

        setIdItem(id)
    }

    return (
        <S.Article $isOpen={number === idItem ? true: false}>
            <S.HeaderArticle $isOpen={number === idItem ? true: false}>
                <S.TitleContainer>
                    <S.NumberArticle>{number}</S.NumberArticle>
                    <S.TitleArticle>{title}</S.TitleArticle>
                </S.TitleContainer>
                <S.ButtonArticle aria-label='botão para exibir mais ou menos informações' onClick={() => handleClick(number)}>{number === idItem ? <IoMdRemoveCircleOutline /> : <IoMdAddCircleOutline />}</S.ButtonArticle>
            </S.HeaderArticle>
            <S.ContentArticleContainer $isOpen={number === idItem ? true: false}>
                <S.ContentArticle $isOpen={number === idItem ? true: false}>
                    {children}
                </S.ContentArticle>
            </S.ContentArticleContainer>
        </S.Article>
    )
}