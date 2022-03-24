import {Typography,Stack} from "@mui/material";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import BodySubtitle from '../BodySubtitle'
import "./Economics.css";

export default function Economics() {
  return (
    <Stack direction="row" spacing={1}>
      <PublicOutlinedIcon className="EconomicsIcon" />
      <BodySubtitle text=" Economics" className="Economics" />
    </Stack>
  );
}
