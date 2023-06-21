import Table from 'react-bootstrap/Table';

function TabelaMunicipio() {
  return (
    <Table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th>#</th>
          <th>MUNICIPIO_CIRCUNSCRICAO</th>
          <th>QTDE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>São Paulo</td>
          <td>232</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Campinas</td>
          <td>50</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Guarulhos</td>
          <td>28</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Osasco</td>
          <td>22</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Sorocaba</td>
          <td>18</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Ribeirão Preto</td>
          <td>14</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Bauru</td>
          <td>13</td>
        </tr>
        <tr>
          <td>8</td>
          <td>Santo André</td>
          <td>12</td>
        </tr>
        <tr>
          <td>9</td>
          <td>São Bernardo do Campo</td>
          <td>12</td>
        </tr>
        <tr>
          <td>10</td>
          <td>São José dos Campos</td>
          <td>12</td>
        </tr>
        
      </tbody>
    </Table>
  );
}

export default TabelaMunicipio;