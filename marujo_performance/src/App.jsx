import { Header } from "./components/Header/Header"
import { Hero } from "./components/Hero/Hero"
import { Services } from "./components/Services/Services";
import { ArticleDivulgation } from "./components/ArticleDivulgation/ArticleDivulgation";
import sail_boat_cuate from "./assets/sail_boat_cuate.svg"
import { UseCase } from "./components/UseCase/UseCase";
import { Methodology } from "./components/Methodology/Methodology";


function App() {

  return (
    <>
      <Header />
      <Hero />
      <Services />
      <ArticleDivulgation title='Mensagem de efeito!' img={sail_boat_cuate}>
        Entre em contato conosco hoje mesmo para saber mais como nossos projetos podem ajudar sua empresa a crescer e ter sucesso online.
      </ArticleDivulgation>
      <UseCase/>
      <Methodology />
    </>
  )
}

export default App
