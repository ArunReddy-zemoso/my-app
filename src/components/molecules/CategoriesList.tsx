import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

import Entrepreneurship from '../atoms/Enterpreneurship/Enterpreneurship'
import Science from '../atoms/Science/Science'
import Economics from '../atoms/Economics/Economics'
import CorperateCulture from '../atoms/CorperateCulture/CorperateCulture'
import Psychology from '../atoms/Psychology/Psychology'
import Nature from '../atoms/Nature/Nature'

export default function CategoriesList() {
  return (
    <Stack direction="column" spacing={2} sx={{ color: "#6D787E" }}>
      <Entrepreneurship />
      <Science />
      <Economics />
      <CorperateCulture />
      <Psychology />
      <Nature />
    </Stack>
  );
}
