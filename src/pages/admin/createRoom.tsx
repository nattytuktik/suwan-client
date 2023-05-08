import Layout from "@/components/layout/Layout";
import { TextInput, SelectBox, SelectBoxItem } from "@tremor/react";
import React, { ChangeEvent, useRef, useState } from "react";

type Props = {};

function CreateRoom({}: Props) {
  const [room, setRoom] = useState(0);
  const [foor, setFoor] = useState(1);
  const [section, setSection] = useState(1);
  const [mitorNumber, setMitor] = useState();
  const [timeEdit, setTimeEdit] = useState(new Date());

  const [roomValid, setRoomValid] = useState(true);

  const submitHandler = (e: any) => {
    e.preventDefault();

    if (room === 0 && section === 2) {
      setRoomValid(false);
    }

    if (roomValid) {
      const token = localStorage.getItem("token");
      const createRoomPostRequest = fetch("http://localhost:5001/room", {
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
            num: 3423,
            time_edit: new Date(),
            status: true,
          },
        }),
      });
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
          <form>
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
            </div>
          </form>
        </div>
      </Layout>
    </div>
  );
}

export default CreateRoom;
