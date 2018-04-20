import * as React from 'react';

class MutationInfoV2 extends React.Component<{}>
{
    public render() {
        return (
            <span>
                Single residue and in-frame indel mutation hotspots identified in 24,592 tumor samples by the algorithm described in
                [<span className="header-citation"><a href="https://www.ncbi.nlm.nih.gov/pubmed/29247016">Chang et al. 2017</a></span>]
                and
                [<span className="header-citation"><a href="https://www.ncbi.nlm.nih.gov/pubmed/26619011">Chang et al. 2016</a></span>]
            </span>
        );
    }
}

export default MutationInfoV2;
