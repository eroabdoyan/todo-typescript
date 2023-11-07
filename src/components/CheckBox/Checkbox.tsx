import React from 'react'
import './checkBox.css';
import { RiCheckboxBlankLine, RiCheckboxLine } from 'react-icons/ri'

interface CheckBoxProps {
    onClickComplete: (evt: React.MouseEvent<HTMLDivElement>) => void
    isDone: boolean
}

const Checkbox: React.FC<CheckBoxProps> = ({ onClickComplete, isDone }) => {
    return (
        <div onClick={onClickComplete} className='block'>
            {isDone ? <RiCheckboxLine /> : <RiCheckboxBlankLine />}
        </div>
    )
}

export default Checkbox;