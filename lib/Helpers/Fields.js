"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fieldExample = exports.CellState = void 0;
var CellState = {
  empty: 0,
  bomb: 9,
  hidden: 10,
  mark: 11,
  weakMark: 12
};
exports.CellState = CellState;
var fieldExample = [[9, 1, 0, 0, 0, 0, 1, 1, 1], [9, 1, 0, 0, 0, 0, 1, 1, 1], [9, 1, 0, 0, 0, 0, 1, 1, 1], [9, 1, 0, 0, 0, 0, 1, 1, 1], [9, 1, 0, 0, 0, 0, 1, 1, 1], [9, 1, 0, 0, 0, 0, 1, 1, 1], [9, 1, 0, 0, 0, 0, 1, 1, 1], [9, 1, 0, 0, 0, 0, 1, 1, 1], [9, 1, 0, 0, 0, 0, 1, 1, 1]];
exports.fieldExample = fieldExample;