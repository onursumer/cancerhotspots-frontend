import * as React from 'react';
import * as _ from 'lodash';
import {VictoryStack, VictoryBar } from 'victory';


interface VariantStackProps
{
    values: {[name: string]: number};
    size?: number;
}

const VARIANT_TYPE_STYLE = {
    "A": {color: "#3366cc"},
    "R": {color: "#dc3912"},
    "N": {color: "#dc3912"},
    "D": {color: "#ff9900"},
    "B": {color: "#109618"},
    "C": {color: "#990099"},
    "E": {color: "#0099c6"},
    "Q": {color: "#dd4477"},
    "Z": {color: "#66aa00"},
    "G": {color: "#b82e2e"},
    "H": {color: "#316395"},
    "I": {color: "#994499"},
    "L": {color: "#22aa99"},
    "K": {color: "#aaaa11"},
    "M": {color: "#6633cc"},
    "F": {color: "#e67300"},
    "P": {color: "#8b0707"},
    "S": {color: "#651067"},
    "T": {color: "#329262"},
    "W": {color: "#5574a6"},
    "Y": {color: "#3b3eac"},
    "V": {color: "#b77322"},
    "X": {color: "#16d620"},
    "sp": {color: "#b91383"},
    "*": {color: "#090303"}
};

class StackedBar extends React.Component<VariantStackProps>
{
    constructor(props: VariantStackProps) {
        super(props);
    }

    public static defaultProps: Partial<VariantStackProps> = {
        size: 25
    };

    public render()
    {
        const bars = _.entries(this.props.values)
            .sort((a, b) => a[1] > b[1] ? -1 : 1)
            .map((pair: any[], index: number) => {
            const data = [
                {
                    x: 1,
                    y: pair[1],
                    width: this.props.size,
                    fill: VARIANT_TYPE_STYLE[pair[0]].color
                }
            ];

            return (
                <VictoryBar
                    horizontal={true}
                    key={index}
                    data={data}
                />
            );
        });

        return (
            <VictoryStack
                height={this.props.size}
                horizontal={true}
            >
                {bars}
            </VictoryStack>
        );
    }
}

export default StackedBar;
