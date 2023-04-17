import CalcRightSide from 'components/CalcRightSide/CalcRightSide';
import DailyCaloriesForm from 'components/DailyCaloriesForm/DailyCaloriesForm';

import { CalculatorWrapper } from './Calculator.styled';

const Calculator = () => {
  return (
    <CalculatorWrapper>
      <DailyCaloriesForm />
      <CalcRightSide />
    </CalculatorWrapper>
  );
};

export default Calculator;
