import "./styles.css";
import { useLocation, useParams } from "react-router-dom";
import StorageUtils from "../../utils/StorageUtils";
import Home from "../../pages/Home";
import Navbar from "../../components/Navbar";

export default function Portfolio() {
  const location = useLocation();
  const params = useParams();
  const path = StorageUtils.getRoutePath(location, params);

  return (
    <div className="main">
      {/* navbar */}
      <Navbar />
      <div className="content">
        {path == "/" && <Home />}
        {/* {path == "/" && <Home />} */}
      </div>
    </div>
  );
}
