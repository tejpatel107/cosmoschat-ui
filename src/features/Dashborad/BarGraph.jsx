import React from "react";
import { ResponsiveBar } from '@nivo/bar';


// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export default function BarGraph({ data }) {
    return (
        <ResponsiveBar
            data={data}
            keys={["savedSessions", "deletedSessions"]}
            indexBy="date"
            margin={{ top: 60, right: 130, bottom: 45, left: 65 }}
            padding={0.7} // Adjust padding as needed for spacing between bars
            groupMode={'grouped'}
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={{ scheme: 'nivo' }}
            theme={{
                "legends": {
                    "text": {
                        "fontSize": 14,
                        "fill": "#ffffff",
                        "outlineWidth": 0,
                        "outlineColor": "transparent"
                    }
                },
                "axis": {
                    "domain": {
                        "line": {
                            "stroke": "#777777",
                            "strokeWidth": 1
                        }
                    },
                    "legend": {
                        "text": {
                            "fontSize": 15,
                            "fill": "#008080",
                            "outlineWidth": 0,
                            "outlineColor": "transparent"
                        }
                    },
                    "ticks": {
                        "line": {
                            "stroke": "#777777",
                            "strokeWidth": 1
                        },
                        "text": {
                            "fontSize": 12,
                            "fill": "#008080",
                            "outlineWidth": 0,
                            "outlineColor": "transparent"
                        }
                    }
                }
            }}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Dates',
                legendPosition: 'middle',
                legendOffset: 37,
                truncateTickAt: 0,
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Number of Sessions',
                legendPosition: 'middle',
                legendOffset: -40,
                truncateTickAt: 0,
            }}
            labelSkipWidth={1} // Adjust label skipping as needed
            labelSkipHeight={1}

            legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'top',
                    direction: 'row',
                    justify: false,
                    translateX: -300,
                    translateY: -35,
                    itemsSpacing: 50,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    itemTextColor: "#008080"
                },
            ]}
            barAriaLabel={(e) => e.id + " : " + e.indexValue}
        />
    )
};
