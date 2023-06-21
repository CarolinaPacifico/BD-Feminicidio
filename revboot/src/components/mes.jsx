import Table from 'react-bootstrap/Table';

function TabelaMes() {
  return (
    <Table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th>#</th>
          <th>MES_ESTATISTICA</th>
          <th>QTDE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Junho (06)</td>
          <td>61</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Julho (07)</td>
          <td>73</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Fevereiro (02)</td>
          <td>77</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Agosto (08)</td>
          <td>79</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Janeiro (01)</td>
          <td>82</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Setembro (09)</td>
          <td>87</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Abril (04)</td>
          <td>88</td>
        </tr>
        <tr>
          <td>8</td>
          <td>Março (03)</td>
          <td>94</td>
        </tr>
        <tr>
          <td>9</td>
          <td>Novembro (11)</td>
          <td>99</td>
        </tr>
        <tr>
          <td>10</td>
          <td>Maio (05)</td>
          <td>100</td>
        </tr>
        <tr>
          <td>11</td>
          <td>Outubro (10)</td>
          <td>104</td>
        </tr>
        <tr>
          <td>12</td>
          <td>Dezembro (12)</td>
          <td>116</td>
        </tr>
        
      </tbody>
    </Table>
  );
}

export default TabelaMes;