import {Typography,Stack} from "@mui/material";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import BodySubtitle from '../BodySubtitle'
import "./Science.css";

export default function Science() {
  return (
    <Stack direction="row" spacing={1}>
      <ScienceOutlinedIcon className="ScienceIcon" />
      <BodySubtitle text="Science" className="Science" />
    </Stack>
  );
}
