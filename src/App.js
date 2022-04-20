import './App.css';

const NameText = (props) => {
  return(
    <p>Hi, {props.name}!</p>
  );
}

const Profile = (props) => {
  return(
    <div>
      <p>{props.age}</p>
      <p>{props.country}</p>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <NameText name="Jack"/>
      <Profile age={22} country="US" />
      <NameText name="Mary" />
      <Profile age={23} country="japan" />
    </div>
  );
}

export default App;
