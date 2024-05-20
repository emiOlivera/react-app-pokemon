import Provider from "./Contexto/Provider"
import Router from "./routes/Router"
const Home = () => {
  return (
    <>
      <Provider>
        <Router/>
      </Provider>
    </>
    )
  }
export default Home