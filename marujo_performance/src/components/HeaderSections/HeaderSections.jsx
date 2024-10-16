import * as S from './styles'

export const HeaderSections = ({title, children}) => {

    return (
        <S.HeaderSectionContainer>
        <S.TitleSection>{title}</S.TitleSection>
        <S.ContentSection>{children}</S.ContentSection>
        </S.HeaderSectionContainer>

    )
}