import { createContext, useState } from "react";
import styles from "./app-loading.module.css";

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
  const [loadingState, setLoadingState] = useState<boolean>(false);

  const providerValue: AppLoadingContextDataType = {
    loodingState: false,
    setLoading: (state: boolean) => {
      console.log(">> SETLOADING FUNCTION CALLEDBACK");
      console.log(">>SETLOADING PARAMS :", state);

      setLoadingState(state);
    },
  };

  return (
    <AppLoodingContext.Provider value={providerValue}>
      {loadingState ? (
        <div className={styles.app_loading}>
          <img src={"/assets/images/loading_2.gif"} />
        </div>
      ) : (
        <></>
      )}

      {props.children}
    </AppLoodingContext.Provider>
  );
}
