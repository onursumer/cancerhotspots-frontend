import * as React from 'react';
import * as _ from 'lodash';
import {VictoryStack, VictoryBar, VictoryLabel, VictoryPortal} from 'victory';

interface VariantStackProps
{
    values: {[name: string]: number};
    size?: number;
    padding?: number;
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

function sumArray(values: number[])
{
    return values.reduce(((accumulator, currentValue) => accumulator + currentValue), 0);
}

class StackedBar extends React.Component<VariantStackProps>
{
    constructor(props: VariantStackProps) {
        super(props);
    }

    public static defaultProps: Partial<VariantStackProps> = {
        size: 35,
        padding: 10
    };

    public render()
    {
        const total = sumArray(_.values(this.props.values));

        const bars = _.entries(this.props.values)
            .sort((a, b) => a[1] > b[1] ? -1 : 1)
            .map((pair: any[], index: number) => {
                const data = [
                    {
                        x: 0,
                        y: pair[1]
                    }
                ];

                const labels = [];

                // only include the label if the ratio is >= 8%
                if (pair[1]/total >= 0.08) {
                    labels.push(pair[0]);
                }

                const labelStyle = {
                    fill: "#FFF",
                    fontSize: "150%",
                    fontWeight: "bold"
                };

                const labelComponent = (
                    <VictoryPortal>
                        <VictoryLabel
                            style={labelStyle}
                        />
                    </VictoryPortal>
                );

                const style = {
                    data: {
                        fill: VARIANT_TYPE_STYLE[pair[0]].color,
                        width: this.props.size
                    },
                };

                return (
                    <VictoryBar
                        labels={labels}
                        labelComponent={labelComponent}
                        key={index}
                        data={data}
                        style={style}
                    />
                );
            });

        return (
            <VictoryStack
                horizontal={true}
                height={this.props.size}
                padding={this.props.padding}
            >
                {bars}
            </VictoryStack>
        );
    }
}

export default StackedBar;
