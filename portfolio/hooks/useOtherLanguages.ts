import useSWR from 'swr';
import fetcher from '@/libs/fetcher';

const useOtherLanguages = () => {

    const { data, error, isLoading, mutate } = useSWR('/api/otherLanguages', fetcher, {
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


export default useOtherLanguages;