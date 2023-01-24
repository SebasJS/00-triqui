import { winnerCombos } from "../constants"

export const checkWinnerFrom = (boarToCheck) => {
    for(const combo of winnerCombos){
      const [a,b,c] = combo
      if(
        boarToCheck[a] &&
        boarToCheck[a] === boarToCheck[b] &&
        boarToCheck[a] === boarToCheck[c]
      )return boarToCheck[a]
    }
    return null
  }