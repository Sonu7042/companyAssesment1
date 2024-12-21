import React, { useEffect, useState } from "react";
import Form from "./component/Form";
import DisplayData from "./component/DisplayData";
import axios from "axios";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);

  // fetchData
  const fetchData = async () => {
    const response = await axios.get("https://company-assesment1.vercel.app/getAllTask");
    setData(response.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="main">
      <div>
        <Form func={fetchData} />
        <DisplayData data={data} />
      </div>
    </div>
  );
};

export default App;
