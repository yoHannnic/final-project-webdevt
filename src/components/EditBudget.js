import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const EditBudget = () => {
    const { budget, dispatch } = useContext(AppContext);
    const [value, setValue] = useState(budget);

    const handleSave = () => {
        if (value >= 0) {
            dispatch({
                type: 'SET_BUDGET',
                payload: value,
            });
            alert('Budget updated successfully!');
        } else {
            alert('Budget cannot be negative!');
        }
    };

    return (
        <div className="edit-budget-container">
            <div className="input-group mb-3">
                <span className="input-group-text">Budget:</span>
                <input
                    type="number"
                    className="form-control"
                    value={value}
                    onChange={(e) => setValue(parseInt(e.target.value))}
                />
                <button className="btn btn-primary" onClick={handleSave}>
                    Save
                </button>
            </div>
        </div>
    );
};

export default EditBudget;
