import { LineChart as Lchart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const subjectsMarksData =[
        {"id": 1, "name": "Alice", "math": 85, "physics": 78, "chemistry": 90},
        {"id": 2, "name": "Bob", "math": 78, "physics": 82, "chemistry": 85},
        {"id": 3, "name": "Charlie", "math": 92, "physics": 88, "chemistry": 94},
        {"id": 4, "name": "David", "math": 67, "physics": 72, "chemistry": 75},
        {"id": 5, "name": "Emma", "math": 89, "physics": 85, "chemistry": 91},
        {"id": 6, "name": "Frank", "math": 73, "physics": 68, "chemistry": 72},
        {"id": 7, "name": "Grace", "math": 95, "physics": 92, "chemistry": 98},
        {"id": 8, "name": "Hannah", "math": 82, "physics": 79, "chemistry": 84},
        {"id": 9, "name": "Ian", "math": 70, "physics": 65, "chemistry": 68},
        {"id": 10, "name": "Jack", "math": 88, "physics": 84, "chemistry": 90}
      ]
      
      
    return (
        <div>
            <Lchart width={400} height={200} data={subjectsMarksData}>
                <XAxis dataKey='name' />
                <YAxis dataKey=''/>
                <Line dataKey='math' stroke='red'></Line>
                <Line dataKey='physics' stroke='yellow'></Line>
                <Line dataKey='chemistry' stroke='blue'></Line>
            </Lchart>
        </div>
    );
};

export default LineChart;