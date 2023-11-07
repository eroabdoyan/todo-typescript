import React from 'react'
import './edit.css'

interface EditTitleProps {
    onEditTitle: (evt: React.MouseEvent<HTMLButtonElement>) => void;
}

const EditTitle: React.FC<EditTitleProps> = ({ onEditTitle }) => {
    return (
        <div >
            <button className='btn-edit' onClick={onEditTitle}>Edit</button>
        </div>
    )
}

export default EditTitle;