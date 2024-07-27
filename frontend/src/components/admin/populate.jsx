import {React, Fragment } from "react";

import AddHospitalForm from "./hospital";
import AddThanaForm from "./station";

const Populate = () => {
  return (
    <Fragment>
        <AddHospitalForm />
        <AddThanaForm />
    </Fragment>
  );
}

export default Populate;