import React, { useState } from "react";
import "../styles/DynamicInputFieldsForm.css";
import CurrencyInput from "react-currency-input-field";
import User from "../models/users";
import totalSalary from "../functions/totalSalary";
import rentPercentage from "../functions/rentPercentage";
import rentToMate from "../functions/rentToMate";

const DynamicInputFieldsForm: React.FC = () => {
  //Deine the state for the users
  const [users, setUsers] = useState<User[]>([
    { name: "", salary: "", rent: 0 },
  ]);

  //Define the state for the rent
  const [rent, setRent] = useState<number>(0);

  const addUser = () => {
    setUsers([...users, { name: "", salary: "", rent: 0 }]);
  };

  const removeUser = (index: number) => {
    setUsers(users.filter((_, i) => i !== index));

    if (users.length <= 1) {
      return;
    }
  };

  //Handle the change of the input fields
  const handleChange = (
    index: number,
    field: keyof User,
    value: string | number
  ) => {
    const updatedUsers = [...users];
    updatedUsers[index][field] = value;
    setUsers(updatedUsers);
  };

  return (
    <div className="form-container">
      <div className="form-row">
        <label className="form-label">Enter the rent below</label>
        <label className="form-label">Total Salary Combined</label>
        <label className="form-label">
          Percentage (Rent / Total Salary Combined)
        </label>
      </div>
      <div className="form-row">
        <CurrencyInput
          intlConfig={{ locale: "en-US", currency: "USD" }}
          placeholder="Rent"
          decimalsLimit={2}
          onValueChange={(value) => setRent(value)}
          allowNegativeValue={false}
          className="form-input"
        />
        <CurrencyInput
          intlConfig={{ locale: "en-US", currency: "USD" }}
          placeholder="Total Salary Combined"
          decimalScale={2}
          decimalsLimit={2}
          value={totalSalary(users)}
          allowNegativeValue={false}
          readOnly
          className="form-input"
        />
        <CurrencyInput
          placeholder="Percentage of Rent paid by each roommate"
          value={rentPercentage(rent, totalSalary(users))}
          suffix="%"
          decimalScale={2}
          decimalsLimit={2}
          readOnly
          className="form-input"
        />
      </div>
      <div className="form-row">
        <label className="form-label">Roommate's name</label>
        <label className="form-label">Roommate's Monthly Salary</label>
        <label className="form-label">Rent from this roommate</label>
        <div style={{ padding: "0.5rem 1rem" }}></div>
      </div>
      {users.map((user, index) => (
        <div key={index} className="form-row">
          <input
            placeholder="Name"
            value={user.name}
            onChange={(event) =>
              handleChange(index, "name", event.target.value)
            }
            className="form-input"
          />

          <CurrencyInput
            intlConfig={{ locale: "en-US", currency: "USD" }}
            placeholder="Salary (monthly)"
            decimalsLimit={2}
            onValueChange={(value) => handleChange(index, "salary", value)}
            value={user.salary}
            allowNegativeValue={false}
            className="form-input"
          />
          <CurrencyInput
            intlConfig={{ locale: "en-US", currency: "USD" }}
            placeholder="Rent from this roommate"
            decimalsLimit={2}
            decimalScale={2}
            allowNegativeValue={false}
            readOnly
            value={rentToMate(
              rentPercentage(rent, totalSalary(users)),
              user.salary
            )}
            className="form-input"
          />
          <button
            id="remove"
            onClick={() => removeUser(index)}
            className="remove-button"
            disabled={users.length <= 1}
          >
            X
          </button>
        </div>
      ))}
      <div style={{ position: "sticky", bottom: 0 }}>
        <button onClick={addUser} className="form-button">
          Add Roommate
        </button>
      </div>
    </div>
  );
};

export default DynamicInputFieldsForm;
