import {Stack} from "@mui/material";
import {Link} from 'react-router-dom'
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import BodySubtitle from "../BodySubtitle";
import "./Enterpreneurship.css";

export default function Entrepreneurship() {
  return (
    <Link to='/entrepreneurship' style={{textDecoration:'none',color:'#6D787E'}}>
      <Stack direction="row" spacing={1}>
        <AddAlertOutlinedIcon className="AlertIcon" />
        <BodySubtitle text=" Enterpreneurship" className="CorporateCulture" />
      </Stack>
    </Link>
  );
}
