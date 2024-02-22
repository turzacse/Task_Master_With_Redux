import {configureStore} from "@reduxjs/toolkit"
import taskSlice from "./Features/Task/taskSlice";

const store = configureStore( {
    reducer: {
        tasks: taskSlice,
    },
} );

export default store;