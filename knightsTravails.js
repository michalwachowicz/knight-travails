const BoardGraph = require("./graph");

const args = process.argv;

if (args.length < 4) {
  console.error(
    "Format: node knightsTravails.js <start e.g. 0,1> <end e.g. 0,0>\n"
  );
  return;
}

const toArray = (arg) => arg.split(",");
const graph = new BoardGraph();

graph.knightMoves(toArray(args[2]), toArray(args[3]));
