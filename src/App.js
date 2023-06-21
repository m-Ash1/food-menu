import React from "react";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const App = () => {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

const Pizza = ({pizzaObj}) => {
  return (
    <li className="pizza">
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.price}</span>
      </div>
    </li>
  );
};

const Header = () => {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
};
const Menu = () => {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>
      {pizzaData.length > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza, key) => {
            return <Pizza pizzaObj={pizza} key={key} />;
          })}
        </ul>
      ) : (
        <p>we're still working on our menu. Please come back later</p>
      )}
    </main>
  );
};

const Order = ({closeHour, openHour}
) => {
  return (
    <div className="order">
      <p>We're open from {openHour}:00 to {closeHour}:00. Come visit us or order online.</p>
      <button className="btn">Order</button>
    </div>
  );
};

const Footer = () => {
  const openHour = 12;
  const closeHour = 22;
  const hour = new Date().getHours();
  const isOpen = hour >= openHour && hour <= closeHour;
  /*
  if (!isOpen) {
    return (
      <p>
        We're happy to serve you between {openHour}:00 and {closeHour}:00.
      </p>
    );
  }
  */
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour}/>
      ) : (
        <p>
          We're happy to serve you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );

  // return React.createElement(
  //   "footer",
  //   null,
  //   "We're open from 12:00 to 22:00. Come visit us or order online."
  // );
};

export default App;
