import { useMemo } from "react";

type IThrowError = () =>
  | {
      message: string;
      status: number | string;
    }
  | undefined;

const useThrowError: IThrowError = () => {
  const throwError = useMemo(() => {
    if (Number(localStorage.getItem("counter")) >= 5) {
      return {
        message: "Daily requests for an update is maximum",
        status: 404,
      };
    }
    return;
    // eslint-disable-next-line
  }, [localStorage.getItem("counter")]);

  return throwError;
};

export default useThrowError;
