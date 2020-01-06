import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Board = () => {
	const [grid, setGrid] = useState(Array.from(Array(7), () => new Array(6)));
	const [redTurn, setRedTurn] = useState(true);
	const [winner, setWinner] = useState(null);
	
	const renderSquare = (i, j) => {
		return (
			<button className="square" onClick={() => handleClick(i)}>
				{grid[i][j]}
			</button>
		)
	}
	
	const handleClick = (i) => {
		if (winner) {
			return;
		}
		var j = null;
		for(var k = 0; k < 6; k++) {
			if(!grid[i][k]) {
				j = k;
				break;
			}
		}
		if(j == null) {
			return;
		}
		const gridSlice = grid.slice();
		gridSlice[i][j] = redTurn ? '🔴' : '🔵';
		setGrid(gridSlice);
		checkWinner(i, j);
		if(!winner) {
			checkFull();
		}
		setRedTurn(!redTurn);
	}
	
	const checkWinner = (i, j) => {
		const hStart = Math.max((i-3),0);
		const hEnd = Math.min(i,3);
		for(var k = hStart; k <= hEnd; k ++) {
			if(grid[k][j] === grid[k+1][j] && grid[k+1][j] === grid[k+2][j] && grid[k+2][j] === grid[k+3][j]) {
				setWinner(redTurn ? "Red" : "Blue");
				break;
			}
		}
		const vStart = Math.max((j-3),0);
		const vEnd = Math.min(j,2);
		for(k = vStart; k <= vEnd; k ++) {
			if(grid[i][k] === grid[i][k+1] && grid[i][k+1] === grid[i][k+2] && grid[i][k+2] === grid[i][k+3]) {
				setWinner(redTurn ? "Red" : "Blue");
				break;
			}
		}
		const dneStart = Math.min(i, j, 3);
		const dneEnd = (3 - Math.min((7-i-1), (6-j-1), 3));
		for(k = dneStart; k >= dneEnd; k --) {
			if(grid[i-k][j-k] === grid[i-k+1][j-k+1] && grid[i-k+1][j-k+1] === grid[i-k+2][j-k+2] && grid[i-k+2][j-k+2] === grid[i-k+3][j-k+3]) {
				setWinner(redTurn ? "Red" : "Blue");
				break;
			}
		}
		const dnwStart = Math.min(i, (6-j-1), 3);
		const dnwEnd = (3 - Math.min((7-i-1), j, 3));
		for(k = dnwStart; k >= dnwEnd; k --) {
			if(grid[i-k][j+k] === grid[i-k+1][j+k-1] && grid[i-k+1][j+k-1] === grid[i-k+2][j+k-2] && grid[i-k+2][j+k-2] === grid[i-k+3][j+k-3]) {
				setWinner(redTurn ? "Red" : "Blue");
				break;
			}
		}
	}
	
	const checkFull = () => {
		for(var k = 0; k < 7; k++) {
			if(!grid[k][5]){
				console.log("not full");
				return;
			}
		}
		setWinner("No One");
	}
	
	return (
		<div>
			<div className="status">{winner ? winner+" Wins!" : (redTurn ? "Red's Turn" : "Blue's Turn")}</div>
			<div className="board-row">
				{renderSquare(0, 5)}
				{renderSquare(1, 5)}
				{renderSquare(2, 5)}
				{renderSquare(3, 5)}
				{renderSquare(4, 5)}
				{renderSquare(5, 5)}
				{renderSquare(6, 5)}
			</div>
			<div className="board-row">
				{renderSquare(0, 4)}
				{renderSquare(1, 4)}
				{renderSquare(2, 4)}
				{renderSquare(3, 4)}
				{renderSquare(4, 4)}
				{renderSquare(5, 4)}
				{renderSquare(6, 4)}
			</div>
			<div className="board-row">
				{renderSquare(0, 3)}
				{renderSquare(1, 3)}
				{renderSquare(2, 3)}
				{renderSquare(3, 3)}
				{renderSquare(4, 3)}
				{renderSquare(5, 3)}
				{renderSquare(6, 3)}
			</div>
			<div className="board-row">
				{renderSquare(0, 2)}
				{renderSquare(1, 2)}
				{renderSquare(2, 2)}
				{renderSquare(3, 2)}
				{renderSquare(4, 2)}
				{renderSquare(5, 2)}
				{renderSquare(6, 2)}
			</div>
			<div className="board-row">
				{renderSquare(0, 1)}
				{renderSquare(1, 1)}
				{renderSquare(2, 1)}
				{renderSquare(3, 1)}
				{renderSquare(4, 1)}
				{renderSquare(5, 1)}
				{renderSquare(6, 1)}
			</div>
			<div className="board-row">
				{renderSquare(0, 0)}
				{renderSquare(1, 0)}
				{renderSquare(2, 0)}
				{renderSquare(3, 0)}
				{renderSquare(4, 0)}
				{renderSquare(5, 0)}
				{renderSquare(6, 0)}
			</div>
		</div>
	);
}

class Game extends React.Component {
	render() {
		return (
			<div className="game">
				<div className="game-board">
					<Board />
				</div>
			</div>
		);
	}
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Game />, rootElement);