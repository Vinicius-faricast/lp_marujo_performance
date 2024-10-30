import { ArticleService } from "../ArticleServices/ArticleService";
import { HeaderSections } from "../HeaderSections/HeaderSections";
import Static_website_cuate from '../../assets/Static_website_cuate.svg';
import Analysis_cuate from "../../assets/Analysis_cuate.svg";
import Search_engines_bro from "../../assets/Search_engines_bro.svg";
import Google_Ads from "../../assets/Google_Ads.svg"
import { FishsBg } from "../FishsBg/FishsBg";
import * as S from './styles'

export const Services = () => {
    return(
        <S.ContainerService id="#service">
            <HeaderSections title={'Serviços'}>
                Em nossos projetos oferecemos uma gama de serviços para ajudar sua empresa a crescer e ter sucesso online. Esses serviços incluem:
            </HeaderSections>
            <S.ArticleContainer>
                <ArticleService title='Desenvolvimento de Landing Page' image={Static_website_cuate}>
                        text of the printing and typesetting industry. Lorem Ipsum text ever since the 1500s, when an Lorem Ipsum has been the industry's standard dummy
                </ArticleService>

                <ArticleService title='Motor de busca otimizado' image={Search_engines_bro}>     
                    text of the printing and typesetting industry. Lorem Ipsum text ever since the 1500s, when an Lorem Ipsum has been the industry's standard dummy
                </ArticleService>

                <ArticleService title='Análise e Monitorando' image={Analysis_cuate}>
                    text of the printing and typesetting industry. Lorem Ipsum text ever since the 1500s, when an Lorem Ipsum has been the industry's standard dummy
                </ArticleService>

                <ArticleService title='Google Ads' image={Google_Ads}>
                    text of the printing and typesetting industry. Lorem Ipsum text ever since the 1500s, when an Lorem Ipsum has been the industry's standard dummy
                </ArticleService>
            </S.ArticleContainer>
            <FishsBg $right={-4}/>
        </S.ContainerService>
    )
}