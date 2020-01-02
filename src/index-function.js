import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Board = () => {
	const [grid, setGrid] = useState([[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null]]);
	const [redTurn, setRedTurn] = useState(true);
	
	const renderSquare = (i, j) => {
		return (
			<button className="square" onClick=handleClick(i,j)>
				{i},{j}
			</button>
		)
	}
	
	const handleClick = (i, j) => {
		const squares = this.state.squares.slice();
		if (calculateWinner(squares) || squares[i]) {
			return;
		}
		squares[i] = this.state.xTurn ? 'ðŸ”´' : 'ðŸ”µ';
		this.setState({
			squares: squares,
			xTurn: !this.state.xTurn,
		});
	}
	
	return (
		<div>
			<div className="status">STATUS</div>
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