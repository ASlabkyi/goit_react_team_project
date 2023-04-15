import CalcRightSide from 'components/CalcRightSide/CalcRightSide';
import DailyCaloriesForm from 'components/DailyCaloriesForm/DailyCaloriesForm';

import { Wrapper } from './Calculator.styled';
const Calculator = () => {
  return (
    <Wrapper>
      <DailyCaloriesForm />
      <CalcRightSide />
    </Wrapper>
  );
};

export default Calculator;
