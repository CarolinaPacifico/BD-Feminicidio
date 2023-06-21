import Carrossel from '../components/Carrossel'
import NavProjeto from '../components/NavProjeto'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';
import TabelaMunicipio from '../components/municipio'
import TabelaIdade from '../components/idade'
import TabelaProfissao from '../components/profissao'
import TabelaHora from '../components/hora'
import TabelaMes from '../components/mes'

function Home() {
    return (
      <>
        <div>
          <NavProjeto/>
          <Carrossel/>
          <br/>
          <h1>O que é feminicídio</h1>
          <li>O assassinato de mulheres em contextos discriminatórios recebeu uma designação própria: feminicídio. Nomear o problema é uma forma de visibilizar um cenário grave e permanente: milhares de mulheres são mortas todos os anos no Brasil.</li>
          <br/>
          <h1>Dados Informativos sobre os casos de feminicídio no Brasil entre 2015 e 2022</h1><br/>
          <h2>Os 10 municípios brasileiros com maior número de casos de feminicídio relatados</h2>
          <TabelaMunicipio/>
          <br />
          <li>A cidade de São Paulo é onde o crime de feminicídio tem mais ocorrência</li>
          <br/>
          <h2>As 10 principais idades em que as mulheres sofreram feminicídio</h2>
          <TabelaIdade/>
          <br />
          <li>Mulheres entre 22 e 35 anos são as mais atingidas por esse crime</li>
          <br/>
          <h2>As 5 principais profissões em que as mulheres foram mais atingidas</h2>
          <TabelaProfissao/>
          <br />
          <li>Na maioria das vítimas, a profissão delas não pode ser identificada pelas autoridades.</li>
          <br/>
          <h2>Os 10 principais horários em que esse crime foi cometido</h2>
          <TabelaHora/>
          <br />
          <li>Os casos de feminicídio possuem uma maior incidência durante a madrugada.</li>
          <br/>
          <h2>O número de casos de feminicídio durante os meses</h2>
          <TabelaMes/>
          <br />
          <li>O mês de Dezembro é onde ocorre um maior número de feminicídios.</li>
          <br />
          <Footer/>
        </div>
      </>
    )
  }
  
  export default Home