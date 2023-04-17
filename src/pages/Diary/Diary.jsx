import { DiaryList } from 'components/DiaryList/DiaryList';
import CalcRightSide from 'components/CalcRightSide/CalcRightSide';
import { DiaryWrapper } from './Diary.styled';

const Diary = () => {
  return (
    <DiaryWrapper>
      <DiaryList />
      <CalcRightSide />
    </DiaryWrapper>
  );
};

export default Diary;
