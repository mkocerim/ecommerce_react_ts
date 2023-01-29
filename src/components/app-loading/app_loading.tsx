import { createContext } from "react";

export type AppLoadingContextDataType = {
  loodingState: boolean;
  setLoading: (state: boolean) => void;
};

const initialData: AppLoadingContextDataType = {
  loodingState: false,
  setLoading: () => {},
};

export const AppLoodingContext =
  createContext<AppLoadingContextDataType>(initialData);

export default function AppLooding(props: any) {
  const providerValue: AppLoadingContextDataType = {
    loodingState: false,
    setLoading: (state: boolean) => {
      console.log(">> seLoading funtion calledback");
      console.log(">>setLoading params:", state);
    },
  };

  return (
    <AppLoodingContext.Provider value={providerValue}>
      <div>MERHABA</div>

      {props.children}
    </AppLoodingContext.Provider>
  );
}
