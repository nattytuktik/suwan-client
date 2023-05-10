import Layout from '@/components/layout/Layout';
import React, { useEffect, useState } from 'react'

type Props = {}

export default function PutMitor({}: Props) {

    const [rooms, setRooms] = useState();

    const [sect1, setSect1] = useState([]);
    const [sect2, setSect2] = useState([]);
    const [mitorNumber, setMitorNumber] = useState();
    const [timeEdit, setTimeEdit] = useState();

    useEffect(() => {
        (async () => {
            const requestRooms = await fetch(`http://localhost:5001/room`).then(res => res.json());
            setSect1(requestRooms.sect1);
            setSect2(requestRooms.sect2)
        })()
    }, [])

    const mitorHandler = (e: any) => {

    }

    const timeEditHandler = (e:any) => {

    }


    console.log(sect2)
  return (
    <div>
        <Layout>

            <header>
                <h2>จดมิเตอร์ประจำเดือน</h2>
            </header>

            <div>
                <div className="flex`">
                    {
                        sect2? sect2.map((room, index) => {

                            if (new Date(room.current_month.time_edit).getMonth() === new Date(Date.now()).getMonth() + 1) {
                                return
                            }else {
                                return (
                                    <div key={index}>
                                        <article>
                                            <h2>{room.room}</h2>
                                            <p>{new Date(room.last_month.time_edit).toDateString()}</p>
                                        </article>
                                    </div>
                                )
                            }
                        }) : null 
                    }
                  
                </div>
            </div>
        </Layout>
    </div>
  )
}