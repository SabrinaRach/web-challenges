function Smiley({ isHappy }) {
  return <p> {isHappy ? "😊" : "☹️"}</p>;
}


export default function App() {
  return (
  <div> <Smiley isHappy/> {/* für den fröhlichen Smiley  */}
  <Smiley/> {/* für den traurigen Smiley */}
    </div>
  );
}



