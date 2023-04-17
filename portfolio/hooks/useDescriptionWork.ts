import useSWR from 'swr';
import fetcher from '@/libs/fetcher';

const useDescriptionWork = () => {

    const { data, error, isLoading, mutate } = useSWR('/api/descriptionWork', fetcher, {
        revalidateIfStale: false, 
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    });

    return { 
        data, 
        error,
        isLoading,
        mutate
    }
};


export default useDescriptionWork;