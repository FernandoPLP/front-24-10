import './App.css'


function App() {
  

  return (
    <>
      <h1>Aula Bootstrap</h1>
      <div className='row'>
        <div className='col-md-6 col-lg-4 col-xl-3'>COL-3</div>
        <div className='col-md-6 col-lg-4 col-xl-3'>COL-3</div>
        <div className='col-md-6 col-lg-4 col-xl-3'>COL-3</div>
        <div className='col-md-6 col-lg-4 col-xl-3'>COL-3</div>
      </div>

      <div className="text-primary text-center container border border-dark">Container</div>
      <div className="text-secondary text-end container-sm border border-dark">Container-sm</div>
      <div className="text-success container-md border border-dark">Container-md</div>
      <div className="text-danger container-lg border border-dark">Container-lg</div>
      <div className="container-xl bg-primary border border-dark">Container-xl</div>
      <div className="container-xxl bg-success border border-dark">Container-xxl</div>
      <div className="container-fluid bg-dark text-white border border-dark">Container-fluid</div>
      <div className="m-1 container-fluid border border-dark">
        <p className='m-5 px-5 py-5 border border-primary'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat veniam quidem culpa iusto praesentium laborum earum aperiam et reprehenderit aliquam voluptas necessitatibus deleniti nostrum corporis, odit perspiciatis provident doloremque rem.</p>
      </div>
      <button className='btn btn-outline-primary'>Clique Aqui</button>
      <button className='btn btn-secondary'>Clique Aqui</button>
      <button className='btn btn-success'>Clique Aqui</button>
      <button className='btn btn-danger'>Clique Aqui</button>
      <button className='btn btn-warning'>Clique Aqui</button>
      <button className='btn btn-info'>Clique Aqui</button>
      <button className='btn btn-light'>Clique Aqui</button>
      <button className='btn btn-dark'>Clique Aqui</button>
      <button className='btn btn-link'>Clique Aqui</button>
      <br />
      <hr />
      <br />
      <table className='table table-striped table-bordered border-primary table-hover' >
        <thead>
          <tr className='table-primary'>
            <th>Nome</th>
            <th>Endereço</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fernando</td>
            <td>Rua Tal, 55</td>
            <td>11992992929</td>
          </tr>
          <tr>
            <td>Julia</td>
            <td>Rua Tal, 155</td>
            <td>11992992929</td>
          </tr>
          <tr>
            <td>Yasmin</td>
            <td>Rua Tal, 355</td>
            <td>11992992929</td>
          </tr>

        </tbody>
      </table>
    </>
  )
}

export default App
