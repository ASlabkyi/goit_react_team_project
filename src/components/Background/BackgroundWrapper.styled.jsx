import styled from 'styled-components';
import strawberry from '../../images/bg-pictures/tablet/strawberry.png';
import banana from '../../images/bg-pictures/tablet/banana.png';
import leaves from '../../images/bg-pictures/tablet/leaves.png';
import stain from '../../images/bg-pictures/tablet/stain.svg';
import leavesMain from '../../images/bg-pictures/desktop/leaves_main.png';
import strawberryMain from '../../images/bg-pictures/desktop/strawberry.png';
import bananaMain from '../../images/bg-pictures/desktop/banana.png';
import stainMain from '../../images/bg-pictures/desktop/stain.svg';

const BackgroundWrapper = styled.div`
    @media screen and (min-width: 768px) {
        min-height: 100vh;
        min-width: 100vh;
        background-image: url(${strawberry}), url(${banana}), url(${leaves}), url(${stain});
        background-size: 208px 203px, 421px 351px, 502px 531px, 421px 463px;
            background-position: right 24px bottom 168px, right 0 bottom 0,
            right 166px bottom -50px, right 0 bottom -4px;
        background-repeat: no-repeat;
    }

  @media screen and (max-width: 767px) {
    background-image: none;
  }

  @media screen and (min-width: 1280px) {
        min-height: 100vh;
        min-width: 100vh;
        background-image: url(${leavesMain}), url(${bananaMain}), url(${strawberryMain}), url(${stainMain});
        background-size: 746px 820px, 715px 510px, 386px 379px, 715px 849px;
        background-position: right 195px top 0px, right -247px top -50px,
        right -8px top 470px, right -113px top 70px;
    }
`;

export default BackgroundWrapper;