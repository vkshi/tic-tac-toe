import React from 'react';
import styled from 'styled-components';

interface StyledTileProps {
    onClick: () => void;
    value: string;
}

const StyledTile = styled.button`
    width: 100px;
    height: 100px;
    padding: 0;
    margin: 0;

    // TODO
`

const Tile: React.FC<StyledTileProps> = (props) => {
    const hasValue = props.value ? `tile ${props.value}` : `tile`

    return (
        <StyledTile
            className={hasValue}
            onClick={props.onClick}>{props.value}</StyledTile>
    );
};

export default Tile;