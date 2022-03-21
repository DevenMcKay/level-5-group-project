import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Dish(props) {
  let routerParams = useParams();
  useEffect(() => {
    axios.get("/menu/" + routerParams.id).then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <>
      <p>Dish</p>
    </>
  );
}

export default Dish;
