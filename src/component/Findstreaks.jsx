import React from 'react'

const Findstreaks = () => {


    function findMaxStreaks(intArray) {
        if (intArray.length <= 1) {
          return {
            maxPositiveStreak: 0,
            maxNegativeStreak: 0
          };
        }
      
        let maxPositiveStreak = 0;
        let currentPositiveStreak = 0;
      
        let maxNegativeStreak = 0;
        let currentNegativeStreak = 0;
      
        for (const num of intArray) {
          if (num > 0) {
            currentNegativeStreak = 0;
            currentPositiveStreak++;
            maxPositiveStreak = Math.max(maxPositiveStreak, currentPositiveStreak);
          } else if (num < 0) {
            currentPositiveStreak = 0;
            currentNegativeStreak++;
            maxNegativeStreak = Math.max(maxNegativeStreak, currentNegativeStreak);
          } else {
            currentPositiveStreak = 0;
            currentNegativeStreak = 0;
          }
        }
      
        return {
          maxPositiveStreak,
          maxNegativeStreak
        };
      }
      
      let intArray = [-1, -3, 2, 4, 9, -10, 24, -30, -33, -29, 1, 8, 19, 23];
      console.log("find streaks",findMaxStreaks(intArray));
      
  return (
    <div>Find_streaks</div>
  )
}

export default Findstreaks