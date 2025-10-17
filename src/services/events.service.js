
import apiClient from '@/libs/axios.js'

const EventsService = {
    async getEvents({query}){
        let endpoint = `/events`;
        if(query && typeof query === 'object' && Object.keys(query).length > 0){
            const params = new URLSearchParams();
            for (const key in query) {
                const value = query[key];
                params.append(key, value);
            }   
            endpoint += `?${params.toString()}`;
        }        
        const result = await apiClient.get(endpoint);
        return result?.data;
    }
}

export default EventsService;