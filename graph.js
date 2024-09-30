class BoardGraph {
  constructor() {
    this.vertices = {};

    for (let row = 0; row < 8; row++) {
      for (let column = 0; column < 8; column++) {
        const moves = [
          [row + 2, column + 1],
          [row + 2, column - 1],
          [row - 2, column + 1],
          [row - 2, column - 1],
          [row + 1, column + 2],
          [row + 1, column - 1],
          [row - 1, column + 2],
          [row - 1, column - 2],
        ];

        this.vertices[`${row},${column}`] = moves.filter(
          (move) => move[0] >= 0 && move[0] < 8 && move[1] >= 0 && move[1] < 8
        );
      }
    }
  }
}
