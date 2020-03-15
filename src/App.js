import React from 'react';
import IdCard from './idCard/idCard';

const App = () => {
  return (
    <div className="App">
        <IdCard
          lastName='Doe'
          firstName='John'
          gender='Male'
          height={1.78}
          birth={new Date("1992","07", "14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={1.72}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      <h1>Greetings</h1>
        {/* TODO: Use the Greetings component */}
    </div>
  );
}

export default App;