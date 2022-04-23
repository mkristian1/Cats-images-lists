import Main from "./components/main";
import Sidebar from "./components/sidebar";
import Wrapper from "./layout/wrapper";

function App() {
  return (
    <Wrapper>
      <Sidebar />
      <Main />
    </Wrapper>
  );
}

export default App;
