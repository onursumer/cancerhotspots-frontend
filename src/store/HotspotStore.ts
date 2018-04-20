import HotspotFetcher from "../fetcher/HotspotFetcher";

class HotspotStore
{
    public hotspotData: HotspotFetcher;
    
    constructor() {
        this.hotspotData = new HotspotFetcher();
    }

    public fetchHotspots()
    {
        this.hotspotData.fetch({});
    }
}

export default HotspotStore;