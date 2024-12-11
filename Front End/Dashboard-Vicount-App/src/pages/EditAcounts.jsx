import { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import FormAccount from "../components/Form/FormAccount";
const EditAccounts = () => {
  const { id } = useParams();
  return (
    <div>
      <FormAccount userId={id} />
    </div>
  );
};

export default EditAccounts;
