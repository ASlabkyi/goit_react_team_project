import { DiaryListItem } from "components/DiaryListItem/DiaryListItem";
import { List } from "./DiaryList.styled"
import  Box from '@mui/material/Box';
import { FixedSizeList } from 'react-window';
import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import { ListItem } from "components/DiaryListItem/DiaryListItem.styled";

// {/* <DiaryListItem />; */}

export const DiaryList = () => {
  return (
    <List>
      <DiaryListItem />
    </List>
  );
}
//       // <Box sx={{ maxHeight: 300, maxWidth: 650 }}>
//       //     <List>
//       //       <DiaryListItem />
//       //     </List>
//       //   </Box>

//        <Box
//         sx={{
//           width: '100%',
//           height: "400",
//           bgcolor: 'background.paper',
//           maxWidth: '650px',
//           scrollbarColor: "red",
//         }}
//       >
//         {/* / <FixedSizeList
//           height={400}
//           width={650}
//           itemSize={30}
//           itemCount={3}
//           overscanCount={5}
//         > */}
//       <List>
//         <DiaryListItem/>
//     </List>
//           {/* // {DiaryListItem}
//         // </FixedSizeList> */}
//        </Box>










//     import * as React from 'react';
// import Box from '@mui/material/Box';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import { FixedSizeList } from 'react-window';
// import { color } from '@mui/system';

// function renderRow(props) {
//   const { index, style } = props;

//   return (
//     <ListItem style={style} key={index} component="div" disablePadding>
//       <ListItemButton>
//         <ListItemText primary={`Item ${index + 1}`} />
//       </ListItemButton>
//     </ListItem>
//   );
// }

// export default function VirtualizedList() {
//   return (
//     <Box
//       sx={{
//         width: '100%',
//         height: 400,
//         maxWidth: 360,
//         bgcolor: 'background.paper',
//         Box::- webkit - scrollbar-color;
//       }}
//     >
//       <FixedSizeList
//         height={400}
//         width={360}
//         itemSize={46}
//         itemCount={20}
//         overscanCount={5}
//       >
//         {renderRow}
//       </FixedSizeList>
//     </Box>
//   );
//   };