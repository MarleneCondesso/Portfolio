import useSWR from 'swr';
import fetcher from '@/libs/fetcher';

const useEducation = () => {

    const { data, error, isLoading, mutate } = useSWR('/api/education', fetcher, {
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


export default useEducation;