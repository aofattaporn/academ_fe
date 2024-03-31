import { useQuery } from 'react-query';
import { QUERY_KEY } from '../../types/GenericType';
import classApi from '../../libs/classApi';

const useAllClass = () => {
  const {
    isLoading: classIsLoading,
    isSuccess: classIsSuccess,
    isError: classIsError,
    refetch: classRefetch,
    data: classData,
  } = useQuery(QUERY_KEY.ALL_CLASS, () => classApi.getAllClass());
  return{
    classIsLoading,
    classIsSuccess,
    classIsError,
    classData,
    classRefetch,
  };
};

export default useAllClass;