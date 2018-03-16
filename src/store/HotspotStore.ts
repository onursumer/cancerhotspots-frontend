import {default as CancerHotspotsAPI, HotspotMutation} from '../api/generated/CancerHotspotsAPI';
import defaultClient from "../api/cancerHotspotsClient";
import {action, observable} from "mobx";

class HotspotStore
{
    @observable hotspots: HotspotMutation[]|undefined;

    private client: CancerHotspotsAPI;

    constructor(client?: CancerHotspotsAPI) {
        this.client = client || defaultClient;
        this.hotspots = undefined;
    }

    @action
    public fetchHotspots()
    {
        // fetch only once
        if (this.hotspots === undefined) {
            this.client.fetchSingleResidueHotspotMutations({}).then(result => {
                this.hotspots = result;
            }).catch(() => {
                // fail silently
            });
        }
    }
}

export default HotspotStore;