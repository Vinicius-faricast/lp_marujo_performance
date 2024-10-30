import { ArticleMethodology } from "../ArticleMethodology/ArticleMethodology";
import { FishsBg } from "../FishsBg/FishsBg";
import { HeaderSections } from "../HeaderSections/HeaderSections"
import * as S from './styles';

export const Methodology = () => {
    const ItensMethodology = [
        {
            number: '01',
            title: "Consulta",
            content: 'Durante a consulta inicial, discutiremos suas metas e objetivos de negócios, público- alvo e ações de marketing atuais.Isso nos permitirá entender suas necessidades e adaptar nossos serviços para melhor atender às suas exigências.'
        },
        {
            number: '02',
            title: "Pesquisa e Desenvolvimento de Estratégia",
            content: 'Após a consulta, conduziremos uma pesquisa para identificar as melhores estratégias de marketing digital para o seu negócio. Isso incluirá pesquisa de palavras-chave, análise de concorrentes e pesquisa de mercado para desenvolver uma estratégia abrangente que ajudará você a atingir seus objetivos.'
        },
        {
            number: '03',
            title: "Implementação",
            content: 'Uma vez que a estratégia tenha sido desenvolvida e aprovada, começaremos a implementar os serviços descritos no plano. Isso pode incluir otimização de SEO,   implementação da landing page para captação de lead,  publicidade PPC, ....'
        },
        {
            number: '04',
            title: "Monitoramento e Otimização",
            content: 'Ao longo da campanha, monitoraremos o desempenho da campanha e faremos ajustes conformenecessário para otimizar os resultados. Isso pode incluir o ajuste de palavras-chave, texto do anúncio ou segmentação para melhorar o desempenho e atingir os melhores resultados possíveis.'
        },
        {
            number: '05',
            title: "Relatórios e Comunicação",
            content: 'Forneceremos relatórios regulares sobre o desempenho da campanha,  como tráfego do site, leads e conversões. Também estaremos disponíveis para responder a quaisquer perguntas e fornecer atualizações sobre o progresso da campanha.'
        },
        {
            number: '06',
            title: "Melhoria Contínua",
            content: 'Nosso objetivo é ajudar seu negócio a crescer e ter sucesso online. No final do projeto iremos te oferecer um relatório estratégia para que poça ter melhoras continuas no desempenho da campanha e identificar novas oportunidades de crescimento. Isso pode incluir testar novas estratégias, expandir para novos mercados ou refinar esforços existentes para  atingir melhores resultados.'
        },
    ]

return (
    <S.MethodologyContainer id='#ourMethod'>
        <HeaderSections title='Nossa Metodologia'>
            Guia passo a passo para atingir seus objetivos de negócios
        </HeaderSections>

        <S.MethodologyArticlesContainer>
            {
                ItensMethodology.map(({number, title, content}) =>(
                    <ArticleMethodology key={number} number={number} title={title}>{content}</ArticleMethodology>
                ))
                    
            }

        </S.MethodologyArticlesContainer>
        <FishsBg $right={-4}/>
    </S.MethodologyContainer>
)
}