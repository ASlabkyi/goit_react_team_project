import { DiaryList } from 'components/DiaryList/DiaryList';
import CalcRightSide from 'components/CalcRightSide/CalcRightSide';
import { DiaryWrapper } from './Diary.styled';
import DiaryLeftSide from 'components/DiaryLeftSide/DiaryLeftSide';

const Diary = () => {
  return (
    <DiaryWrapper>
      <DiaryLeftSide />
      <CalcRightSide />
    </DiaryWrapper>
  );
};

export default Diary;
