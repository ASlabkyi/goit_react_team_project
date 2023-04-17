import DailyCaloriesForm from 'components/DailyCaloriesForm/DailyCaloriesForm';
import BackgroundWrapper from 'components/Background/BackgroundWrapper.styled';

const HomePage = () => {
  return (
    <BackgroundWrapper>
      <div styled={{ display: 'flex', alignItems: 'flex-start' }}>
        <DailyCaloriesForm />
      </div>
    </BackgroundWrapper>
  );
};

export default HomePage;
