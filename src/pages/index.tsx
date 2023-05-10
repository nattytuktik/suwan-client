import Image from "next/image";
import { Inter } from "next/font/google";
import {
  Text,
  Grid,
  Card,
  Col,
  Metric,
  Button,
  TabList,
  Tab,
} from "@tremor/react";
import { use, useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import CardTitle from "@/components/customer/CardTitle";
import getDataFetch from "@/fetch/getdatafetch";
import Section from "@/components/section/Section";
import authTimeToken from "@/fetch/auth/authTimeToken";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [tebSection, setTabSection] = useState(1);
  const [foors, setFoors] = useState(1)
  const [sect1, setSection1] = useState([]);
  const [sect2, setSection2] = useState([]);
  useEffect(() => {
    (async() => {
      const test = (await getDataFetch('room'));
      const sects = await test.json();
      setSection1(sects.sect1);
      setSection2(sects.sect2);


    })();
  }, []);


  return (
    <main className="">
      <Layout>
        <div>
          {/* head selector */}

          <div className="">
            <TabList
              defaultValue="1"
              onValueChange={(value) => setTabSection(Number(value))}>
              <Tab value="1" text="ss1" />
              <Tab value="2" text="ss2" />
            </TabList>

          </div>

          {/* value out for seclect defaut is section = 1, foor = 1 */}
          <div className="mt-10">
            {
              tebSection === 1 ? 
              (<div>
                <Section section={sect1} />
              </div>):
              (
                <div>
                  <Section section={sect2} />
                </div>
              )
            }
          </div>
        </div>
      </Layout>
    </main>
  );
}
