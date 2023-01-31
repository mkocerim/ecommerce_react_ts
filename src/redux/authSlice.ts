import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { json } from "stream/consumers";

export type AuthStateType = {
  token: string | null;
  email: string | null;
};

const token = localStorage.getItem("authToken");
const email = token ? parseEmail(token) : null;

const initialState: AuthStateType = { token, email };

function parseEmail(token: string): string {
  const splitted: string[] = token.split(".");
  const base64EncodedString = splitted[1];
  const jsonString = window.atob(base64EncodedString);
  const jsonObj = JSON.parse(jsonString);
  console.log(">>>JSONOBJ", jsonObj);

  return jsonObj.username;
}

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setToken: (state: AuthStateType, action: PayloadAction<string>) => {
      console.log(">>>SET TOKEN ACTION CALLED", action);

      localStorage.setItem("authToken", action.payload);

      const splitted: string[] = action.payload.split(".");
      const base64EncodedString = splitted[1];
      const jsonString = window.atob(base64EncodedString);
      const jsonObj = JSON.parse(jsonString);
      console.log(">>>JSONOBJ", jsonObj);

      state.token = action.payload;
      state.email = jsonObj.username;
    },
    logout: (state: AuthStateType) => {
      localStorage.removeItem("authToken");
      state.token = null;
      state.email = null;
    },
  },
});

export default authSlice.reducer;

export const { setToken, logout } = authSlice.actions;
