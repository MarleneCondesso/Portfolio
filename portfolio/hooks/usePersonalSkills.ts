import useSWR from 'swr';
import fetcher from '@/libs/fetcher';

const usePersonalSkills = () => {

    const { data, error, isLoading, mutate } = useSWR('/api/personalSkills', fetcher, {
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


export default usePersonalSkills;