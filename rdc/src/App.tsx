import React from 'react';
import Title from './components/title';
import DynamicInputFieldsForm from './components/DynamicInputFieldsForm';

const App = () => {
    React.useEffect(() => {
      document.body.style.backgroundColor = '#f5f3f5';
    }, []);
  
    return (
      <div>
        <Title></Title>
        <DynamicInputFieldsForm></DynamicInputFieldsForm>
      </div>

    );
  };

export default App;