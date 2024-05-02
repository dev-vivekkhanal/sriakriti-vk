import AdminApp from "./index/AdminApp";
import ClientApp from "./index/ClientApp";


function App() {
  return (
    <>
      {
        localStorage.getItem('userType') === 'admin' ? (<AdminApp />) : (<ClientApp />)
      }
    </>
  );
}

export default App;
