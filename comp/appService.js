import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
import moment from 'moment';

export default function AppService({ cpuv }) {

    const avg = cpuv.map((emp, i) => {
        return (emp.avg)
    })
    const dat = cpuv.map((emp, i) => emp.TimeGenerated)

    return (
        <div>
            <ReactApexChart
                type="bar"
                series={[
                    {
                        name: "project-1",
                        data: avg
                    }
                ]
                }
                height={500}
                width={500}
                options={{
                    xaxis: {
                        type: 'category',
                        categories: dat,
                        labels: {
                            show: true,
                            rotate: -45,
                            rotateAlways: true,
                            hideOverlappingLabels: true,
                            formatter: function (value, tempDate, index) {
                                return moment.utc(value).format('DD MMM YY');
                            }
                        }
                    },
                    yaxis: {
                        labels: {
                            formatter: function (value) {
                                return value.toPrecision(5)
                            }
                        }
                    }
                }}
            />
        </div>
    )
}

