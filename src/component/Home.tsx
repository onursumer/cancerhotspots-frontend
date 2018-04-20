import * as React from 'react';
import {observer} from 'mobx-react';
import 'react-table/react-table.css';
import ReactTable from "react-table";

import HotspotStore from "../store/HotspotStore";
import MutationInfoV2 from "./MutationInfoV2";
import StackedBar from "./StackedBar";

interface HomeProps
{
    hotspotStore?: HotspotStore;
}

@observer
class Home extends React.Component<HomeProps>
{
    private store: HotspotStore;

    constructor(props:HomeProps) {
        super(props);

        this.store = this.props.hotspotStore ? this.props.hotspotStore : new HotspotStore();
    }

    public componentDidMount()
    {
        this.store.fetchHotspots();
    }

    public render()
    {
        const data = this.store.hotspotData;

        const columns = [
            {
                Header: 'Gene',
                accessor: 'hugoSymbol',
            },
            {
                Header: 'Resiude',
                accessor: 'residue',
            },
            {
                Header: 'Type',
                accessor: 'type',
            },
            {
                Header: 'Variants',
                accessor: 'variantAminoAcid',
                Cell: (props: any) => <StackedBar values={props.value} />
            },
            {
                Header: 'Q-value',
                accessor: 'qValue',
            },
            {
                Header: 'Samples',
                accessor: 'tumorCount',
            }
        ];

        if (data.status === 'pending') {
            return <span>TODO: Loader!</span>
        }
        else if (data.status === 'error') {
            return <span>TODO: Error!</span>
        }
        else {
            return (
                <div>
                    <MutationInfoV2 />
                    <ReactTable
                        data={data.result}
                        columns={columns}
                        filterable={false}
                        showPagination={true}
                        pageSize={20}
                        className="-striped -highlight"
                    />
                </div>
            );
        }
    }
}

export default Home;