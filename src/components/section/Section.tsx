import React, { useState } from "react";
import CardTitle from "../customer/CardTitle";
import { MiterRoom } from "@/models/mitorRoom";
import { Tab, TabList } from "@tremor/react";

type Props = {
  section: Array<MiterRoom>;
};

function Section({ section }: Props) {
  const [foors, setFoors] = useState(1);

  // filters for 3 foors from section array
  const fillFoor = (sections: Array<MiterRoom>) => {
    let foor1 = [];
    let foor2 = [];
    let foor3 = [];
    for (let i = 0; i < sections.length; i++) {
      if (sections[i].foor === 1) {
        foor1.push(sections[i]);
      } else if (sections[i].foor === 2) {
        foor2.push(sections[i]);
      } else if (sections[i].foor === 3) {
        foor3.push(sections[i]);
      }
    }
    return {
      foor1,
      foor2,
      foor3,
    };
  };

  const { foor1, foor2, foor3 } = fillFoor(section);
  return (
    <div>
      <div>
        <TabList
          defaultValue="1"
          onValueChange={(value) => setFoors(Number(value))}>
          <Tab value="1" text="f1" />
          <Tab value="2" text="f2" />
          <Tab value="3" text="f3" />
        </TabList>
      </div>
      <div>
        {section

          
          ? section.map((room) => {
              return <CardTitle room={room} key={room._id} />;
            })
          : null}
      </div>
    </div>
  );
}

export default Section;
