import ReactApexChart from "react-apexcharts";
import Nav from "../comp/nav";

export default function About() {
    return (
        <div >
            <Nav />
            <h1>About</h1>
            <ReactApexChart
                type="bar"
                series={[
                    {
                        name: 'a',
                        data: [10, 20, 30]
                    }
                ]}
                height={300}
                width={200}
                options={{}}
            ></ReactApexChart>
        </div>
    )
}