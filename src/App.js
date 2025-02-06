import { Card } from "./components/Card/Card";
import { Styles } from "./components/GlobalStyles/Styles";
import { Themes } from "./components/ThemeProvider/Themes";

function App() {
  return (
    <Themes>
      <Styles />
      <Card>
        <h1>Freelando</h1>
      </Card>
    </Themes>
  );
}

export default App;
