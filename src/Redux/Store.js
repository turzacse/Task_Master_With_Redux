import {configureStore} from "@reduxjs/toolkit"
import taskSlice from "./Features/Task/taskSlice";
import userSlice from "./Features/User/userSlice";

const store = configureStore( {
    reducer: {
        tasksSlice: taskSlice,
        userSlice: userSlice
    },
} );

export default store;