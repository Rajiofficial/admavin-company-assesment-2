import React from 'react'

const Sorting = () => {
  function groupBy(arr) {
    arr.sort((a, b) => a.age - b.age); // Sort by age in ascending order
  
    const grouped = {};
  
    for (const person of arr) {
      const age = person.age;
  
      if (!grouped[age]) {
        grouped[age] = [];
      }
  
      grouped[age].push(person);
    }
  
    return grouped;
  }
  
  const people = [
    { name: 'Alice', age: 21 },
    { name: 'Alice', age: 24 },
    { name: 'Max', age: 21 },
    { name: 'June', age: 23 },
    { name: 'July', age: 24 }
  ];
  
  console.log(   "sorting ",groupBy(people));
  
  return (
    <div>Sorting</div>
  )
}

export default Sorting