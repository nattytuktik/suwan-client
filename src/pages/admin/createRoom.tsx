import Layout from '@/components/layout/Layout'
import { TextInput } from '@tremor/react';
import React, { useState } from 'react'

type Props = {}

function CreateRoom({}: Props) {
  const [room, setRoom] = useState(1);
  const [foor, setFoor] = useState(1);
  const [section, setSection] = useState(1);

  const [mitorNumber, setMitor] = useState();
  const [timeEdit, setTimeEdit] = useState(new Date());

  const submitHandler = (e: any) => {
    e.preventDefault();
  }

  const roomChange = (e: React.ChangeEvent) => {
    
  }
  const foorChange = (e: React.ChangeEvent) => {

  }
  const sectionChange = (e: React.ChangeEvent) => {

  }
  const mitorNumberChange = (e: React.ChangeEvent) => {

  }
  
  const timeEditChange = (e: React.ChangeEvent) => {

  }
  
  return (
    <div>
        <Layout>

            <div>
                <header>
                    <h2>สร้างห้องใหม่</h2>
                </header>
            </div>

          <div className='p-2'> 
              <form>
                <div className='grid'>
                  <div>
                    <label>ห้อง</label>
                    <input className='border-2 rounded-md ' type="number" />
                  </div>
                </div>
              </form>
          </div>
        </Layout>
    </div>
  )
}

export default CreateRoom