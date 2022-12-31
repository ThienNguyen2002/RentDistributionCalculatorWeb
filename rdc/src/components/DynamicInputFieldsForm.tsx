import React, { useState } from 'react';

interface User {
  name: string;
  salary: number;
  rent: number;
}

const DynamicInputFieldsForm: React.FC = () => {
  const [users, setUsers] = useState<User[]>([{ name: '', salary: 0, rent: 0 }]);

  const addUser = () => {
    setUsers([...users, { name: '', salary: 0, rent: 0 }]);
  };

  const removeUser = (index: number) => {
    if (users.length > 1) {
      setUsers(users.filter((_, i) => i !== index));
    }
  };

  const handleChange = (index: number, field: keyof User, value: string | number) => {
    const updatedUsers = [...users];
    updatedUsers[index][field] = value;
    setUsers(updatedUsers);
  };

  return (
    <div style={{ overflow: 'scroll', border: '1px solid black' }}>
        <div> 
            <input placeholder="Total Rent" type="number"  ></input>
        </div>
      {users.map((user, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
          <input
            placeholder="Name"
            value={user.name}
            onChange={(event) => handleChange(index, 'name', event.target.value)}
          />
          <input
            placeholder="Salary (monthly)"
            type="number"
            value={user.salary}
            onChange={(event) => handleChange(index, 'salary', event.target.value)}
          />
          <input
            placeholder="Rent"
            type="number"
            value={user.rent}
            onChange={(event) => handleChange(index, 'rent', event.target.value)}
            readOnly
          />
          <label onClick={() => removeUser(index)}>x</label>
        </div>
      ))}
      <div style={{ position: 'sticky', bottom: 0 }}>
        <button onClick={addUser}>Add</button>
      </div>
    </div>
  );
};

export default DynamicInputFieldsForm;
