import React, { useState } from "react";
import { Text, Metric, Card, Button } from "@tremor/react";
import { MiterRoom } from "@/models/mitorRoom";
type Props = {
  Room: MiterRoom;
};

function CardTitle({ Room }: Props) {

  let NUM0:number;
  let NUM1:number | null = null
  if (Room.MITOR.MITOR.length >= 2) {
    NUM0 = Room.MITOR.MITOR[0].NUM;
    NUM1 = Room.MITOR.MITOR[1].NUM;
  } else {
    NUM0 = Room.MITOR.MITOR[0].NUM;
  }
  console.log(Room.MITOR.MITOR);
  return (
    <Card
      className="max-w-xs mx-auto flex flex-col"
      decoration="top"
      decorationColor="indigo">
      <article className="flex justify-between">
        <div>
          <Text className="text-xl">room : {Room.ROOM}</Text>

          <section className="flex gap-4">
            <p>bill</p>
            <Metric className="text-sm">$ {NUM1 !== null? (NUM1 - NUM0)*6: 0}</Metric>
          </section>
          <section className="flex gap-4">
            <p>internet</p>
            <Metric className="text-sm">$ </Metric>
          </section>
        </div>

        <div>
          <i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 fill-green-700">
              <path
                fillRule="evenodd"
                d="M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.062 0 8.25 8.25 0 00-11.667 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.204 3.182a6 6 0 018.486 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0 3.75 3.75 0 00-5.304 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182a1.5 1.5 0 012.122 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0l-.53-.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </i>
        </div>
      </article>

      {/* footer */}
      <footer className=" flex justify-between items-end ">
        <section className="flex gap-4 items-baseline">
          <p className="text-2xl font-normal">total</p>
          <Metric className="text-sm">343</Metric>
        </section>
        <Button size="sm">more</Button>
      </footer>
    </Card>
  );
}

export default CardTitle;
