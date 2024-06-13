import { Login } from "./components/firstui";
import { Header } from "./components/header";

function App() {
  return (
    <>
      <Header />
      <div className="h-[90vh] flex justify-center items-center">
        <Login />
      </div>
    </>
  );
}

export default App;
