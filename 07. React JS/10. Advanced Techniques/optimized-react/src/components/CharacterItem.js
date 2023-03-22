import { memo } from 'react';

const CharacterItem = ({
    name,
    onClick,
}) => {
    return (
        <li onClick={() => onClick(name)}>{name}</li>
    );
};

export default memo(CharacterItem);
