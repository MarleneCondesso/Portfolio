import useSWR from 'swr';

import fetcher from '@/libs/fetcher';

const usePersonalInformation = () => {
    
    const { data, error, isLoading, mutate } = useSWR('/api/personalInformation', fetcher);
    
    return {
        data,
        error,
        isLoading,
        mutate
    }
};

export default usePersonalInformation;