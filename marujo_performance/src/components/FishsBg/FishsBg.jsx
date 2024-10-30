import * as S from './styles';
import bg_fish from './../../assets/bg_fish.svg'

export const FishsBg = (props) => {
    return (
        <S.FishsImg src={bg_fish} {...props}/>
    )
}