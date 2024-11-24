import React, { useContext, useState } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);
    const [searchTerm, setSearchTerm] = useState('');

    // Filter expenses based on the search term
    const filteredExpenses = expenses.filter((expense) =>
        expense.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            {/* Search Input */}
            <input
                type="text"
                className="form-control mb-3"
                placeholder="Search expenses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* Filtered Expense List */}
            <ul className="list-group">
                {filteredExpenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id} // Ensure to add a unique key
                        id={expense.id}
                        name={expense.name}
                        cost={expense.cost}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ExpenseList;
