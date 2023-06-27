import Square from "./square";
import { useState } from "react";
const Board = () => {

    const [squares, setSquares] = useState(Array(9).fill(null))

    const handleSquareClick = (clickedPosition) => {
        setSquares(currentSquares => {
            return currentSquares.map((squareValue, position) => {
                if (clickedPosition === position) {
                    console.log(squareValue)
                    console.log(position)
                    return "X"
                }
                return squareValue
            })
        })
    }

    const renderPosition = (position) => {
        return <Square value={squares[position]} onClick={() => handleSquareClick(position)} />
    }

    return (
        <div className="board">
            <div className="board-row">
                {renderPosition(0)}
                {renderPosition(1)}
                {renderPosition(2)}
            </div>
            <div className="board-row">
                {renderPosition(3)}
                {renderPosition(4)}
                {renderPosition(5)}
            </div>
            <div className="board-row">
                {renderPosition(6)}
                {renderPosition(7)}
                {renderPosition(8)}
            </div>
        </div>
    );
};

export default Board