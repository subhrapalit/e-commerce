import { Button, ButtonGroup } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';


const ColorButton = styled(Button)(({ theme }) => ({

    borderRadius: '50%',

}));

const GroupButton = () => {
    const [counter, setCounter] = useState(1);

    const handleDecrement = () => {
        setCounter(counter => counter - 1);
    }

    const handleIncrement = () => {
        setCounter(counter => counter + 1);
    }

    return (


        <ButtonGroup style={{ marginTop: 30, }}>
            <ColorButton onClick={() => handleDecrement()} disabled={counter === 1}>-</ColorButton>
            <ColorButton>{counter}</ColorButton>
            <ColorButton onClick={() => handleIncrement()}>+</ColorButton>
        </ButtonGroup >


    );
};

export default GroupButton;