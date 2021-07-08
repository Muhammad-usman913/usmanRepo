import "./App.css";

import Expenses from "./components/Expenses";

function App() {
  const expense = [
    {
      title: "toilet paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      title: "New TV",
      amount: 780.5,
      date: new Date(2021, 2, 12),
    },
    {
      title: "Car Insurance",
      amount: 780.5,
      date: new Date(2021, 2, 12),
    },
    { title: "New Desk (Wooden)", amount: 780.5, date: new Date(2021, 2, 12) },
  ];
  return (
    <div>
      <Expenses items={expense} />
    </div>
  );
}

export default App;
