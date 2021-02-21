import "./styles.css";
import Internet from "./Internet";
import Blog from "./Blog";
import Menu from "./componets/Menu";

function Card(props: any) {
  return (
    <div>
      <h1>{props.personName}</h1>
      <h3>{props.time}</h3>
      <hr />
    </div>
  );
}
const internetStatus = () => {
  return true;
};

export default function App() {
  return (
    <div className="App">
      <Menu />
      {/* <Internet status={internetStatus} />
      <br />
      <Blog />

      <Card personName="Emdad" time="10 min ago" /> */}
    </div>
  );
}
