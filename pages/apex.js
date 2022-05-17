import { Layout, Menu } from "antd";
import AppService from "../comp/appService";
import 'antd/dist/antd.css';
import { Header } from "antd/lib/layout/layout";
import Link from "next/link";


export default function Apex({ cpuVal }) {

  const menu = [
    { key: "Crud/crudApp", displayName: "CRUD App" },
    { key: "log/registration", displayName: "LogIn App" },
    { key: "rxjs/rxjsApp", displayName: "RxJS App" },
    { key: "redux/reduxApp", displayName: "Redux App" },
  ]

  return (
    <div>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={menu.map((_, index) => {
              return {
                label: _.displayName,
                link : '/'
              };
            })}
          />
        </Header>
      </Layout>

      <AppService cpuv={cpuVal} />
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jacksonsuthip.github.io/nxtJS/url/CpuTime.json')
  const cpuVal = await res.json()
  console.log("--", res)
  return {
    props: {
      cpuVal,
    },
  }
}