import useSWR from 'swr';
import fetcher from '@/libs/fetcher';

const useWorkExperience = () => {

    const { data, error, isLoading, mutate } = useSWR('/api/workExperience', fetcher, {
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


export default useWorkExperience;