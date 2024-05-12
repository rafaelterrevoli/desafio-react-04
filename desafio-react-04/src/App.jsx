import Footer from "./components/Footer/Footer"
import Topbar from "./components/Topbar/Topbar";
import Header from "./components/Header/Header";
import { fetchData } from "./components/MiApi";
import { Suspense, useState } from "react";
import { Table } from 'react-bootstrap'

const apiData = fetchData("http://universities.hipolabs.com/search?name=middle");
const App = () => {
  const universidades = apiData.read();
  const [search, setSearch] = useState("");

  const searcher = (e) => {
    setSearch(e.target.value)
  }

  //filter para la busqueda
  const results = !search ? universidades:universidades.filter((dato)=> dato.country.toLowerCase().includes(search.toLocaleLowerCase()))

  return (
    <div>
      <Topbar/>
      <Header/>
      <Suspense fallback={  <div>Cargando....</div> } >
      <div className="tabla">
      <input value={search} onChange={searcher} type="text" placeholder="Buscar por país" class="col-sm-3"/>
                <Table>
                    <tbody>
                        <tr class="table-danger">
                            <td className="cabecera">País</td>
                            <td className="cabecera">Nombre de la Universidad</td>
                            <td className="cabecera">Página Web</td>
                        </tr>
                        {
                            universidades.legth === 0 ? <td><h2>No hay datos</h2></td>
                            :results.map((item, i) =>
                                    <tr key={i}>
                                        <td>{item.country}</td>
                                        <td>{item.name}</td>
                                        <td>{item.web_pages[0]}</td>
                                    </tr>
                            )
                        }    
                    </tbody>
                </Table>
            </div>
      </Suspense>
      <Footer/>
    </div>
  )
}

export default App