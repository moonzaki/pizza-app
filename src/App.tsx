import Button from './components/Button/Button';
import Input from './components/Input/Input';


function App() {
  return (
    <>
      <Button className="accent" onClick={() => { }}>Button</Button>
      <Button appearence="big">Button</Button>
      <Input placeholder="Placeholder" />
    </>
  );
}

export default App;
