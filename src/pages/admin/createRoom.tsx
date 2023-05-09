import Layout from "@/components/layout/Layout";
import authTimeToken from "@/fetch/auth/authTimeToken";
import { TextInput, SelectBox, SelectBoxItem, Button } from "@tremor/react";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";

type Props = {};

function CreateRoom({}: Props) {
  const [room, setRoom] = useState(0);
  const [foor, setFoor] = useState(1);
  const [section, setSection] = useState(1);
  const [mitorNumber, setMitor] = useState();
  const [timeEdit, setTimeEdit] = useState(new Date());
  const [roomValid, setRoomValid] = useState(true);

  useEffect(() => {
    (async () => {

      // const validToken = await authTimeToken();

      // if (!validToken) {
      //   window.location.href = '/login'
      // }
    })();
  })

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    if (room === 0 && section === 2) {
      setRoomValid(false);
    }

    if (roomValid) {
      const token = localStorage.getItem("token");
      const createRoomPostRequest = await fetch("http://localhost:5001/room", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: "Bearer " + token,
        },

        body: JSON.stringify({
          room: {
            room: room,
            foor: foor,
            section: section,
          },

          mitor: {
            num: 2222,
            time_edit: new Date(),
            status: true,
          },
        }),
      });

      console.log(await createRoomPostRequest.json())
    }

  };

  const roomChange = (e: any) => {
    setRoom(Number(e.target.value));
  };
  const foorChange = (e: any) => {
    setFoor(e.target.value);
  };
  const sectionChange = (e: any) => {
    setSection(e.target.value);
  };
  const mitorNumberChange = (e: any) => {};

  const timeEditChange = (e: React.ChangeEvent) => {};
  return (
    <div>
      <Layout>
        <div>
          <header>
            <h2>สร้างห้องใหม่</h2>
          </header>
        </div>
        <div className="p-2">
          <form onSubmit={submitHandler}>
            <div className="grid">
              <div>
                <label>ห้อง</label>
                <SelectBox
                  defaultValue={`${room}`}
                  onSelect={roomChange}
                  placeholder="room"
                >
                  <SelectBoxItem value="0" />
                  <SelectBoxItem value="1" />
                  <SelectBoxItem value="2" />
                  <SelectBoxItem value="3" />
                  <SelectBoxItem value="4" />
                  <SelectBoxItem value="5" />
                </SelectBox>
              </div>
              <div>
                <label>ชั้น</label>
                <SelectBox
                  defaultValue={`${foor}`}
                  onSelect={foorChange}
                  placeholder="room"
                >
                  <SelectBoxItem value="1" />
                  <SelectBoxItem value="2" />
                  <SelectBoxItem value="3" />
                </SelectBox>
              </div>
              <div>
                <label>สุวรรณเสน</label>
                <SelectBox
                  defaultValue={`${section}`}
                  onSelect={sectionChange}
                  placeholder="room"
                >
                  <SelectBoxItem value="1" />
                  <SelectBoxItem value="2" />
                </SelectBox>
              </div>

              <div>
                <label>เลขมิเตอร์</label>
                <input className="border rounded-lg focus:outline-none" type="number" max={9999} />
              </div>

              <Button type="submit">
                create
              </Button>
            </div>
          </form>
        </div>
      </Layout>
    </div>
  );
}

export default CreateRoom;
