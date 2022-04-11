import { emptyFieldGenerator, CellState } from "./Field";

const { empty, bomb, hidden } = CellState;

describe("Field Generator", () => {
  describe("emptyFieldGenerator generators", () => {
    it("2x2", () => {
      const result = emptyFieldGenerator(2);
      expect(result).toStrictEqual([
        [empty, empty],
        [empty, empty],
      ]);
    });
  });
});
