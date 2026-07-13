function Smiley({ isHappy }) {
  return <p> {isHappy ? "😊" : "☹️"}</p>;
}

/* für den fröhlichen Smiley  */
export default function App() {
  return <Smiley isHappy={true} />;
}

/* für den traurigen Smiley */
/* export default function App() {
  return <Smiley/>;
} */
