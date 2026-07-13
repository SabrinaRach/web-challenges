function Greeting({ name }) {
  return <h1>{name === "Klaus" ? "Hello, Coach!" : `Hello, ${name}`}</h1>;
}

export default function App() {
  return <Greeting name="Klaus" />;
}
