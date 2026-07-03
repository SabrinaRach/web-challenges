import { Cards } from "./components/Card/Card.js";
import { Header } from "./components/Header/Header.js";
import { Bookmark } from "./components/Bookmark/Bookmark.js";
import { Form } from "./components/Form/Form.js";
import { CardList } from "./components/CardList/CardList.js";
import { App } from "./components/App/App.js";
import { CardProps } from "./components/Card/CardProps.js";

const cards = Cards();

const header = Header();

const bookmark = Bookmark();

const form = Form();

const cardList = CardList();

const app = App();

const cardProps = CardProps();




// The render function renders the app to the DOM
function render() {
  const root = document.querySelector("#root");
  root.append(App());
}

render();
