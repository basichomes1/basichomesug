import React from "react";
import { withRoomConsumer } from "../Context";
import Loading from "./Loading";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";

function RoomsContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomsList rooms={sortedRooms} />
      <RoomsFilter rooms={rooms} />
    </>
  );
}

export default withRoomConsumer(RoomsContainer);

// import React from "react";
// import RoomsFilter from "./RoomsFilter";
// import RoomsList from "./RoomsList";
// import { RoomConsumer } from "../Context";
// import Loading from "./Loading";

// export default function RoomsContainer() {
//   return (
//     <RoomConsumer>
//       {(value) => {
//         const { loading, sortedRooms, rooms } = value;
//         if (loading) {
//           return <Loading />;
//         }
//         return (
//           <div>
//             HELLO FROM ROOMS CONTAINER
//             <RoomsFilter rooms={rooms} />
//             <RoomsList rooms={sortedRooms} />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// }
