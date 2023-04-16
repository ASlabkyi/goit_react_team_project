//import { ListItem } from '@mui/material';
import {
  ListItem,
  ProductName,
  Grams,
  DeleteButton,
} from './DiaryListItem.styled';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
export const DiaryListItem = ({onDelete}) => {
  
    return (
      <>
        <ListItem>
          <ProductName>Eggplant</ProductName>
          <Grams>100g</Grams>
          <Grams>320kcal</Grams>
          <DeleteButton type="button" onClick={() => onDelete()}>
            <FontAwesomeIcon
              icon = {faXmark}
              style={{ color: '#5c5e61' }}
            />
          </DeleteButton>
        </ListItem>
        <ListItem>
          <ProductName>Eggplant</ProductName>
          <Grams>100g</Grams>
          <Grams>320kcal</Grams>
          <DeleteButton></DeleteButton>
        </ListItem>
        <ListItem>
          <ProductName>Eggplant</ProductName>
          <Grams>100g</Grams>
          <Grams>320kcal</Grams>
          <DeleteButton></DeleteButton>
        </ListItem>
        <ListItem>
          <ProductName>Eggplant</ProductName>
          <Grams>100g</Grams>
          <Grams>320kcal</Grams>
          <DeleteButton></DeleteButton>
        </ListItem>
        <ListItem>
          <ProductName>Eggplant</ProductName>
          <Grams>100g</Grams>
          <Grams>320kcal</Grams>
          <DeleteButton></DeleteButton>
        </ListItem>
        <ListItem>
          <ProductName>Eggplant</ProductName>
          <Grams>100g</Grams>
          <Grams>320kcal</Grams>
          <DeleteButton></DeleteButton>
        </ListItem>
        <ListItem>
          <ProductName>Eggplant</ProductName>
          <Grams>100g</Grams>
          <Grams>320kcal</Grams>
          <DeleteButton></DeleteButton>
        </ListItem>
        <ListItem>
          <ProductName>Eggplant</ProductName>
          <Grams>100g</Grams>
          <Grams>320kcal</Grams>
          <DeleteButton></DeleteButton>
        </ListItem>
        <ListItem>
          <ProductName>Eggplant</ProductName>
          <Grams>100g</Grams>
          <Grams>320kcal</Grams>
          <DeleteButton></DeleteButton>
        </ListItem>
        <ListItem>
          <ProductName>Eggplant</ProductName>
          <Grams>100g</Grams>
          <Grams>320kcal</Grams>
          <DeleteButton></DeleteButton>
        </ListItem>
        <ListItem>
          <ProductName>Eggplant</ProductName>
          <Grams>100g</Grams>
          <Grams>320kcal</Grams>
          <DeleteButton></DeleteButton>
        </ListItem>
        <ListItem>
          <ProductName>Eggplant</ProductName>
          <Grams>100g</Grams>
          <Grams>320kcal</Grams>
          <DeleteButton></DeleteButton>
        </ListItem>
      </>
    );
};


