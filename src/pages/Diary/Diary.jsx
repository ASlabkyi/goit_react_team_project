import { DiaryList } from 'components/DiaryList/DiaryList';
import CalcRightSide from 'components/CalcRightSide/CalcRightSide';
import { DiaryWrapper } from './Diary.styled';
import CalcLeftSide from 'components/CalcLeftSide/CalcLeftSide';

const Diary = () => {
  return (
    <DiaryWrapper>
      {/* <DiaryList /> */}
      <CalcLeftSide />
      <CalcRightSide />
    </DiaryWrapper>
  );
};

export default Diary;
