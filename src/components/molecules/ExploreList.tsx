import Stack from "@mui/material/Stack";
import CategoriesList from "./CategoriesList";
import PopularTitlesList from "./PopularTitlesList";
import RecentTitlesList from "./RecentTitlesList";

export default function ExploreList() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        width: "100%",
        margin:"50px 0",
      }}
    >
      <CategoriesList />
      <RecentTitlesList />
      <PopularTitlesList />
    </Stack>
  );
}
