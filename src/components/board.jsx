import Square from "./square";
import { useState } from "react";
const Board = () => {

    const [squares, setSquares] = useState(Array(9).fill(null))
    const [isXNext, setisXNext] = useState(true);

    const handleSquareClick = (clickedPosition) => {
        if (squares[clickedPosition]) {
            return
        }
        setSquares(currentSquares => {
            return currentSquares.map((squareValue, position) => {
                if (clickedPosition === position) {
                    return isXNext ? "X" : "O"
                }
                return squareValue
            })
        })
        setisXNext((currentisXNext) => {
            return currentisXNext = !currentisXNext
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