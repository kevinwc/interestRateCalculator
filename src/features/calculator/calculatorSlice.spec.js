import calculatorReducer, { calculateInterest } from "./calculatorSlice";

describe("calculator reducer", () => {
  const initialState = {
    value: 0,
  };

  it("should handle interest calculation", () => {
    const testValue = {
      principalValue: 5000,
      interestValue: 0.025,
      yearsValue: 5,
    };
    const actual = calculatorReducer(
      initialState,
      calculateInterest(testValue)
    );
    expect(actual.total).toEqual(5625);
  });
});
