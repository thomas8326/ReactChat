import { OPEN_ROOM_ID } from './../constants/room-constants';

export const openRoom = (roomId) => {
    return {
        roomId: roomId,
        type: OPEN_ROOM_ID
    }
}