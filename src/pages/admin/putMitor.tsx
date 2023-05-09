import Layout from '@/components/layout/Layout';
import React, { useEffect, useState } from 'react'

type Props = {}

export default function PutMitor({}: Props) {

    const [mitorNumber, setMitorNumber] = useState();
    const [timeEdit, setTimeEdit] = useState();

    useEffect(() => {
        (async () => {
            const requestRooms = await fetch('http://localhost:5001/room?`')
        })()
    }, [])

    const mitorHandler = (e: any) => {

    }

    const timeEditHandler = (e:any) => {

    }
  return (
    <div>
        <Layout>

            <header>
                <h2>จดมิเตอร์ประจำเดือน</h2>
            </header>

            <div>
                <form>
                    <div>
                        <div>
                            <label>mitor Number</label>
                            <input type="number" name="" id="" />
                        </div>
                    </div>
                </form>
            </div>
        </Layout>
    </div>
  )
}