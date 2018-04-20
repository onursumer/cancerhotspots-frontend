import RemoteData, {Query} from "../lib/RemoteData";
import {
    default as CancerHotspotsAPI, HotspotMutation
} from "../api/generated/CancerHotspotsAPI";
import defaultClient from "../api/cancerHotspotsClient";

class HotspotFetcher extends RemoteData<HotspotMutation[]>
{
    private client: CancerHotspotsAPI;
    
    constructor(client?: CancerHotspotsAPI) {
        super();
        this.client = client || defaultClient;
    }

    fetchRemoteData(query: Query): Promise<HotspotMutation[]>
    {
        return this.client.fetchSingleResidueHotspotMutations(query);
    }
}

export default HotspotFetcher;