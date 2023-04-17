import useSWR from 'swr';
import fetcher from '@/libs/fetcher';

const useTechnicalSkills = () => {

    const { data, error, isLoading, mutate } = useSWR('/api/technicalSkills', fetcher, {
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


export default useTechnicalSkills;