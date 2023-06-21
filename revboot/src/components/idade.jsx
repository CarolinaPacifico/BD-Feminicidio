import Table from 'react-bootstrap/Table';

function TabelaIdade() {
  return (
    <Table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th>#</th>
          <th>IDADE_PESSOA</th>
          <th>QTDE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>31 anos</td>
          <td>40</td>
        </tr>
        <tr>
          <td>2</td>
          <td>32 anos</td>
          <td>32</td>
        </tr>
        <tr>
          <td>3</td>
          <td>33 anos</td>
          <td>34</td>
        </tr>
        <tr>
          <td>4</td>
          <td>34 anos</td>
          <td>39</td>
        </tr>
        <tr>
          <td>5</td>
          <td>35 anos</td>
          <td>37</td>
        </tr>
        <tr>
          <td>6</td>
          <td>36 anos</td>
          <td>30</td>
        </tr>
        <tr>
          <td>7</td>
          <td>37 anos</td>
          <td>28</td>
        </tr>
        <tr>
          <td>8</td>
          <td>38 anos</td>
          <td>32</td>
        </tr>
        <tr>
          <td>9</td>
          <td>39 anos</td>
          <td>25</td>
        </tr>
        <tr>
          <td>10</td>
          <td>40 anos</td>
          <td>25</td>
        </tr>
        
      </tbody>
    </Table>
  );
}

export default TabelaIdade;