import React from 'react';
import BudgetCard from './BudgetCard';

import {
  UNCATEGORIZED_BUDGET_ID,
  useBudgetsContext,
} from '../context/budgets-context';

const UncategorizedBudgetCard = props => {
  const { getBudgetExpenses } = useBudgetsContext();
  const amount = getBudgetExpenses(UNCATEGORIZED_BUDGET_ID).reduce(
    (total, expense) => total + expense.amount,
    0
  );

  if (amount === 0) return null;

  return (
    <BudgetCard
      amount={amount}
      gray
      name="Uncategorized"
      {...props}
    ></BudgetCard>
  );
};

export default UncategorizedBudgetCard;
