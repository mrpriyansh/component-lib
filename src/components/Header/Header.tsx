import React, { FC } from 'react';

import { HeaderProps } from './Header.types';

const Button: FC<HeaderProps>  = ({ text}) => {
    return (
        <h2>
            {text}
        </h2>
    )
};

export default Button;