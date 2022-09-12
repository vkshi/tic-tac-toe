import React from 'react';
import styled from 'styled-components';
import Tile from '../tile/styledTile';

interface BoardProps {
    arr: string[];
    onChangeTile: (i: number) => void;
}

const StyledBoard = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 300px;
    height: 300px;

    // TODO

`

const Board: React.FC<BoardProps> = ({arr, onChangeTile}) => {

return (
    <StyledBoard>
        {arr.map((tile: string, i: number) => {
            return (
                <Tile 
                    key={i}
                    onClick={() => {onChangeTile(i)}}
                    value={tile} />
                )
            }
        )
    }
    </StyledBoard>
    );
}

export default Board;

