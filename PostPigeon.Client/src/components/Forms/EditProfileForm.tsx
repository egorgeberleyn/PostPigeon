import { Box, Button, Stack, TextField, Typography } from "@mui/material";

const EditProfileForm = () => {
  return (
    <Box sx={{ mt: 5 }}>
      <form>
        <Stack direction={"column"}>
          <Typography mb={1}>Username</Typography>
          <TextField
            type="text"
            name="name"
            focused={false}
            sx={{ bgcolor: "#fff", borderRadius: "5px", width: "350px" }}
          />
          {/* <Button type="submit" variant="contained" sx={{}}>
            Save
          </Button> */}
          <Button
            type="submit"
            variant="contained"
            sx={{ bgcolor: "lightgray", color: "black", px: 6, mt: 4, width: "150px" }}
          >
            Save
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default EditProfileForm;
