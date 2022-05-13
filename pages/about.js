// import ReactApexChart from "react-apexcharts";
import { useEffect, useState } from 'react';
import Nav from "../comp/nav";
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function About() {

    const [tst, setTst] = useState();

    useEffect(() => {
        setTst(
            <ReactApexChart
                type="bar"
                series={[
                    {
                        name: 'a',
                        data: [10, 20, 30]
                    }
                ]}
                height={300}
                width={300}
                options={{}}
            ></ReactApexChart>
        )
    }, []);

    return (
        <div >
            <Nav />
            <h1>About{tst}</h1>
        </div>
    )
}