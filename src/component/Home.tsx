import * as React from 'react';
// import ReactTable from 'react-table'
import {observer} from 'mobx-react';
// import {Button} from "react-bootstrap";

import 'react-table/react-table.css';
import HotspotStore from "../store/HotspotStore";
import ReactTable from "react-table";

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
        const data = this.store.hotspots;

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
                Header: 'Q-value',
                accessor: 'qValue',
            },
            {
                Header: 'Samples',
                accessor: 'tumorCount',
            }
        ];

        return (
            <ReactTable
                data={data}
                columns={columns}
                filterable={false}
                showPagination={true}
                pageSize={20}
            />
        );

    }
}

export default Home;