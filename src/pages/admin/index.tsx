import Layout from "@/components/layout/Layout";
import authTimeToken from "@/fetch/auth/authTimeToken";
import Link from "next/link";
import React, { useEffect } from "react";

type Props = {};

const routeAdmin = [
    {   
        text: "สร้างห้องใหม่",
        path: "/createRoom"
    },
    {   
        text: "mitor",
        path: "/putMitor"
    },
    {   
        text: "create",
        path: "/create"
    },
]

export default function Index({}: Props) {
  // useEffect(() => {
  //     (async () => {
  //         const loginState = await authTimeToken();
  //         if (!loginState) {
  //             window.location.href = '/login'
  //         }
  //     })();
  // }, [])

  return (

    <div>
      <Layout>
        <div>
            <ul>
                {
                    routeAdmin.map((route, index) => {
                        return (
                            <li key={index} className="text-blue-700">
                                <Link href={"/admin"+route.path}>{route.text}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
      </Layout>
    </div>
  );
}
