import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async () => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();

      setState({
        data,
        isLoading: false,
        hasError: null,
      });
    } catch (e) {
      setState({
        data: null,
        isLoading: false,
        hasError: e,
      });
    }
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return { ...state };
};
