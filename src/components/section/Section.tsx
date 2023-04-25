import React from "react";
import CardTitle from "../customer/CardTitle";
import { MiterRoom } from "@/models/mitorRoom";

type Props = {
  section: Array<MiterRoom>;
};

function Section({ section }: Props) {
  return (
    <div>
      {section
        ? section.map((room) => {
            return <CardTitle Room={room} key={room._id} />;
          })
        : null}
    </div>
  );
}

export default Section;
