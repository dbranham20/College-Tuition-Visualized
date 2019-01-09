
Highcharts.chart('container', {
    series: [{
        type: "treemap",
        layoutAlgorithm: 'squarified',
        alternateStartingDirection: true,
        levels: [{
            level: 1,
            layoutAlgorithm: 'sliceAndDice',
            dataLabels: {
                enabled: true,
                align: 'left',
                verticalAlign: 'top',
                style: {
                    fontSize: '15px',
                    fontWeight: 'bold'
                }
            }
        }],
        data: [{
            id: 'A',
            name: 'College: $92,050',
            color: "#EC2500"
        }, {
        		id: 'B',
            name: 'Fall 2015: $13,438',
            parent: 'A',
            value: 13438,
            color: "#001f3f",
        }, {
            id: 'C',
            name: 'Spring 2016: $11,453',
            parent: 'A',
            color: '#FF851B',
            value: 11453,
        }, {
        		id:'D',
            name: 'Fall 2016: $11,993',
            parent: 'A',
            color: '#FF4136',
            value: 11993,
        },
        {
        		id:'E',
            name: 'Spring 2017: $11,858',
            parent: 'A',
            color: '#39CCCC',
            value: 11858,
        },
        {
        		id:'F',
            name: 'Fall 2017: $8,419',
            parent: 'A',
            color: '#85144b',
            value: 8419,
        },
        {
        		id:'G',
            name: 'Spring 2018: $8,509',
            parent: 'A',
            color: '#7FDBFF',
            value: 8509,
        },
        {
        		id:'H',
            name: 'Fall 2018: $8,015',
            parent: 'A',
            color: '#0074D9',
            value: 8015,
        },
        {
        		id:'I',
            name: 'Spring 2019: $7,865',
            parent: 'A',
            color: '#FFDC00',
            value: 7865,
        }]
    }],
    title: {
        text: '4 Years of College Tuition'
    }
});