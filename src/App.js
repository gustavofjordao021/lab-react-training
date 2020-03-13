import React from 'react';
import IdCard from './idCard/idCard';

const App = () => {
  return (
    <div className="App">
      <h1>IdCard</h1>
        <IdCard
          lastName='Doe'
          firstName='John'
          gender='Male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
      <h1>Greetings</h1>
        {/* TODO: Use the Greetings component */}
    </div>
  );
}

export default App;