import "./Tab.css";

/* - Add the prop `onClick` to the function declaration of this component */
export default function Tab({ children, isActive, onClick }) {
  return (
  /*   - Pass the prop to the `button` tag like this: `onClick={onClick}` */
    <button onClick={onClick} className={`tab${isActive ? " tab--active" : ""}`}>
      {children}
    </button>
  );
}
