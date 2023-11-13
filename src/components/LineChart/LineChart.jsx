import { LineChart as LChart, Line, XAxis, YAxis, AreaChart, Area } from 'recharts';
const LineChart = () => {
    const studentMarks = [
        { id: 1, name: 'Alice', math: 85, physics: 78, chemistry: 90 },
        { id: 2, name: 'Bob', math: 78, physics: 70, chemistry: 85 },
        { id: 3, name: 'Charlie', math: 92, physics: 88, chemistry: 94 },
        { id: 4, name: 'David', math: 70, physics: 65, chemistry: 72 },
        { id: 5, name: 'Eva', math: 88, physics: 82, chemistry: 90 },
        { id: 6, name: 'Frank', math: 65, physics: 60, chemistry: 68 },
        { id: 7, name: 'Grace', math: 80, physics: 75, chemistry: 85 },
        { id: 8, name: 'Hannah', math: 95, physics: 88, chemistry: 96 },
        { id: 9, name: 'Ian', math: 75, physics: 70, chemistry: 78 },
        { id: 10, name: 'Jasmine', math: 82, physics: 80, chemistry: 88 }
    ];

    return (
        <div className='justify-around items-center flex flex-row gap-10'>
            <LChart width={600} height={400} data={studentMarks}>
                <XAxis dataKey={`name`}></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey="physics" stroke='yellow'></Line>
                <Line dataKey="chemistry"></Line>
            </LChart>
            <AreaChart width={600} height={400} data={studentMarks}>
                <XAxis dataKey={`name`}></XAxis>
                <YAxis></YAxis>
                <Area dataKey={`math`} stroke='red' fill="red"></Area>
                <Area dataKey={`physics`} stroke='blue' fill="blue"></Area>
                <Area dataKey={`chemistry`} stroke='green' fill="green"></Area>
            </AreaChart>
        </div>
    );
};

export default LineChart;