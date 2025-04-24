// import { RootState } from "@/redux/store";
import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";


export type TUser = {
  email: string;
  role: string;
  iat: number;
  exp: number;
};

type TAuthState = {
  user: null | TUser;
  token: null | string;
};

const initialState: TAuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;

export const useCurrentToken = (state: RootState) => state.auth.token;
export const selectCurrentUser = (state: RootState) => state.auth.user;

// import { RootState } from "@/redux/store";
// import { RootState } from "@/redux/store";
// import { createSlice, PayloadAction } from "@reduxjs/toolkit";


// type TJwtPayload = {
//   email: string;
//   role: string;
//   iat: number;
//   exp: number;
// };
// type TUserProfile = {
//   name: string;
//   address: string;
//   city: string;
// };

// export type TUser = TJwtPayload & TUserProfile;

// type TAuthState = {
//   user: null | TUser;
//   token: null | string;
//   profileLoaded: boolean;
// };

// const initialState: TAuthState = {
//   user: null,
//   token: null,
//   profileLoaded: false,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setUser: (state, action: PayloadAction<{ user: TJwtPayload; token: string }>)  => {
//       const { user, token } = action.payload;

//       state.token = token;
//       state.user = {
//         ...user,
//         name: '',
//         address: '',
//         city: '',
//       };
//       state.profileLoaded = false;
//     },
//     setProfile: (state, action: PayloadAction<TUserProfile>) => {
//       if (state.user) {
//         state.user = {
//           ...state.user,
//           ...action.payload,
//         };
//         state.profileLoaded = true;
//       }
//     },
//     logout: (state) => {
//       state.user = null;
//       state.token = null;
//       state.profileLoaded = false;
//     },
//   },
// });

// export const { setUser, setProfile,logout } = authSlice.actions;

// export default authSlice.reducer;

// export const useCurrentToken = (state: RootState) => state.auth.token;
// export const selectCurrentUser = (state: RootState) => state.auth.user;
// export const selectProfileLoaded = (state: RootState) => state.auth.profileLoaded;

