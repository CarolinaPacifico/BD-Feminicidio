// import Table from 'react-bootstrap/Table';
import profissao from '../img/profissao.svg'

function TabelaProfissao() {
  return (
    <div>
    <img className='grafico' src={profissao} alt="Gráfico de Mês" width="50%" />
  </div>
    // <Table class="table table-striped table-bordered">
    //   <thead>
    //     <tr>
    //       <th>#</th>
    //       <th>PROFISSAO</th>
    //       <th>QTDE</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     <tr>
    //       <td>1</td>
    //       <td>Prendas Domésticas</td>
    //       <td>107</td>
    //     </tr>
    //     <tr>
    //       <td>2</td>
    //       <td>Não Informada</td>
    //       <td>96</td>
    //     </tr>
    //     <tr>
    //       <td>3</td>
    //       <td>Estudante</td>
    //       <td>73</td>
    //     </tr>
    //     <tr>
    //       <td>4</td>
    //       <td>Desempregado(a)</td>
    //       <td>22</td>
    //     </tr>
    //     <tr>
    //       <td>5</td>
    //       <td>Aposentado(a)</td>
    //       <td>21</td>
    //     </tr>
    //   </tbody>
    // </Table>
  );
}

export default TabelaProfissao;