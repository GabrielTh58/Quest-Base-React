import './App.css';
import CustomParagraph from './components/CustomParagraph/CustomParagraph.js'
import Button from './components/Button/Button.js'

function App() {
  return (
    <>
      <CustomParagraph colorText='green'> Hello, World </CustomParagraph>

      <Button label='Send' /> 

    </>    
  );
}

export default App;
