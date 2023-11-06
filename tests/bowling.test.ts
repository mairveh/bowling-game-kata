//Arrange
const getTotalScore = require("../src/bowling");

describe("test counting scores for a bowling game", () => {
  it("test 12 rolls: 12 strikes", () => {
    const input = "X X X X X X X X X X X X";
    const expectedResult = 300;
    //Act
    const result = getTotalScore(input);
    //Assert
    expect(result).toBe(expectedResult);
  });

  //Arrange
  it("test 20 rolls: 10 pairs of 9 and miss", () => {
    const input = "9- 9- 9- 9- 9- 9- 9- 9- 9- 9-";
    const expectedResult = 90;
    //Act
    const result = getTotalScore(input);
    //Assert
    expect(result).toBe(expectedResult);
  });
  
  //Arrange
  it("test 21 rolls: 10 pairs of 5 and spare, with a final 5", () => {
    const input = "5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/5";
    const expectedResult = 90;
    //Act
    const result = getTotalScore(input);
    //Assert
    expect(result).toBe(expectedResult);
  });

});
