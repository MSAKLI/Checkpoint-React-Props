import "./App.css";
import Profile from "./profile/Profile";

const App = () => {
  const Produit = [
    {
      Name: "Marwen",
      biography: "GomyCode fullstack js Student ",
      job: "Fullstack java developer",
      photo: "profile.jpg",
    },
  ];
  return (
    <div className="App">
      <h1 style={{ color: "#rgb(255,23,15,0.7)" }}>Welcome !</h1>
      <br />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {Produit.map((el) => (
          <Profile name={el.Name} bio={el.biography} job={el.job}>
            <img src={el.photo} alt="tel" />
          </Profile>
        ))}
      </div>
    </div>
  );
};

export default App;
