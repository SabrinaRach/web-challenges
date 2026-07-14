import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1111,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 2222,
      name: "🍎 Apple",
      color: "red",
    },
    {
      id: 3333,
      name: "🥝 Kiwi",
      color: "green",
    },
    {
      id: 4444,
      name: "🍇 grapes",
      color: "violet",
    },
    {
      id: 5555,
      name: "🍊 Orange",
      color: "orange",
    },
  ];

   return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card key={fruit.id} name={fruit.name} color={fruit.color}/>
      ))}
    </div>
  );
}
