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
                <ArticleService title='Desenvolvimento de Landing Page' image={Static_website_cuate} alt='ilustração de uma página web sendo criada'>
                A landing page é uma página criada com o propósito de converter visitantes em leads ou potenciais clientes, direcionando a uma ação específica.
                </ArticleService>

                <ArticleService title='Motor de busca otimizado' image={Search_engines_bro} alt='ilustração de varias lupas fazendo buscas em um monitor'>     
                Um conjunto de estratégias de otimização para mecanismos de busca, que visa alcançar um bom posicionamento da página no Google e em outros buscadores.
                </ArticleService>

                <ArticleService title='Análise e Monitorando' image={Analysis_cuate} alt='ilustração de duas pessoas analizando gráficos'>
                Com dados detalhados sobre o tráfego e comportamento dos visitantes, você pode planejar o conteúdo, melhorar a experiência do usuário e otimizar a aparência e navegação na página. 
                </ArticleService>

                <ArticleService title='Google Ads' image={Google_Ads} alt='Imagem do logo do google ads'>
                Um bom anúncio deve alcançar as pessoas certas e no melhor momento. Com o Ads, você pode promover seu negócio, produto ou serviço de maneira direcionada, segmentada e também mensurável. 
                </ArticleService>
            </S.ArticleContainer>
            <FishsBg $right={-4}/>
        </S.ContainerService>
    )
}