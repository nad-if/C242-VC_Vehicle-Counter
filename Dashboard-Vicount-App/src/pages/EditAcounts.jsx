import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import FormAccount from "../components/Form/FormAccount";
import ApiClient from "../api/apiClient";
const EditAccounts = () => {
  const { id } = useParams();
  return (
    <div>
      <FormAccount userId={id} />
    </div>
  );
};

export default EditAccounts;
