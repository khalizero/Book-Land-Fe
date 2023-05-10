import { useRef, useState } from 'react';
import { useCancelPromise } from './useCancelPromise';

export function useApi() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const cancelPromise = useCancelPromise();
  const errorRef = useRef();

  // Making an api call and returning loading , error.
  const makeApiCall = async (apiCall) => {
    setIsLoading(true);
    setError('');

    try {
      const response = await new Promise(async (resolve, reject) => {
        try {
          const data = await apiCall();
          resolve(data);
        } catch (err) {
          reject(err);
        }
      });
      setIsLoading(false);
      setError('');
      errorRef.current = null;
      return response;
    } catch (err) {
      if (!cancelPromise.current) {
        setIsLoading(false);
        const error =
          err?.response?.data || 'An error occured. Please try again later';
        setError(error);
        errorRef.current = error;
      }
    }
  };

  return [isLoading, error, makeApiCall, setError, errorRef];
}
