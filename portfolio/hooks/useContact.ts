import useSWR from 'swr';
import fetcher from '@/libs/fetcher';

const useContact = () => {

    const { data, error, isLoading, mutate } = useSWR('/api/contact', fetcher, {
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


export default useContact;