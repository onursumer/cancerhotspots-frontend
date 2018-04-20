import {action, observable} from "mobx";

export type Status = 'ready' | 'pending' | 'error' | 'complete';

export interface Query
{
    $queryParameters? :any;
    $domain? :string;
}

abstract class RemoteData<T>
{
    @observable public result: T|undefined;
    @observable public status: Status;

    constructor()
    {
        this.status = 'ready';
    }

    @action
    public fetch(query: Query): void
    {
        this.status = 'pending';

        this.fetchRemoteData(query).then(result => {
            this.result = result;
            this.status = 'complete';
        }).catch(() => {
            this.status = 'error';
        });
    }

    abstract fetchRemoteData(query: Query): Promise<T>;
}

export default RemoteData;