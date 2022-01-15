import React from 'react';
import BudgetCard from './BudgetCard';

import { useBudgetsContext } from '../context/budgets-context';

const TotalBudgetCard = props => {
  const { expenses, budgets } = useBudgetsContext();
  const amount = expenses.reduce((total, expense) => total + expense.amount, 0);
  const max = budgets.reduce((total, budget) => total + budget.max, 0);

  if (max === 0) return null;

  return (
    <BudgetCard
      amount={amount}
      max={max}
      gray
      name="Total"
      hideButtons
    ></BudgetCard>
  );
};

export default TotalBudgetCard;
