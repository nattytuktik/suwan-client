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
import { use, useState } from "react";
import Layout from "@/components/layout/Layout";
import CardTitle from "@/components/customer/CardTitle";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [tebSection, setTabSection] = useState(1);

  return (
    <main className="">
      <Layout>
        <div>
          {/* head selector */}
          <div>
            <TabList
              defaultValue="1"
              onValueChange={(value) => setTabSection(Number(value))}
            >
              <Tab value="1" text="ss1" />
              <Tab value="2" text="ss2" />
            </TabList>
          </div>

          {/* value out for seclect defaut is section = 1, foor = 1 */}

          <div className="mt-10">
            <CardTitle />
          </div>
        </div>
      </Layout>
    </main>
  );
}
