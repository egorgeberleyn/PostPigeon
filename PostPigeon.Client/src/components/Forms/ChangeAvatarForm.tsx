import { Box, Button, Input, Paper, Stack, Typography } from "@mui/material";
import uploadImg from "../../images/upload.png";
import { FC, FormEventHandler, useState } from "react";
import { changeAvatar } from "../../app/profilesClient";

interface ChangeAvatarFormProps {
  close: () => void;
}

const ChangeAvatarForm: FC<ChangeAvatarFormProps> = ({ close}) => {
  const [file, setFile] = useState("");
  const [blob, setBlob] = useState<Blob>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(URL.createObjectURL(event.target.files![0]));
    setBlob(event.target.files![0]);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    if (blob) {
      const arr = new Uint8Array(await blob.arrayBuffer());
      changeAvatar(arr);
      close();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <button
        onClick={close}
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          boxShadow: "0 5px 20px 0 rgba(0, 0, 0, 0.04)",
          background: "rgba(250, 44, 44)",
          transform: "translate(6px, -4px)",
          padding: "2px 8px",
          border: "none",
          borderRadius: "5px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        X
      </button>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Box>
          <label htmlFor="file-input">
            <Paper sx={{ borderRadius: "10%", bgcolor: "#252525", p: 1 }}>
              <Paper
                sx={{ borderRadius: "50%", width: "200px", height: "200px" }}
              >
                <img
                  alt="avatar"
                  src={file ? file : uploadImg}
                  style={{
                    width: "200px",
                    height: "200px",
                    cursor: "pointer",
                    borderRadius: "50%",
                    padding: file ? 0 : "20px",
                  }}
                />
              </Paper>
            </Paper>
          </label>
          <Input
            type="file"
            id="file-input"
            sx={{ display: "none" }}
            name="file"
            onChange={handleChange}
          />
        </Box>

        <Box sx={{ mt: 2, ml: 4 }}>
          <Typography>Загрузите изображение для вашего профиля</Typography>
          <Typography sx={{ color: "gray" }}>*png, jpg, svg</Typography>
          <Button
            type="submit"
            variant="contained"
            sx={{
              bgcolor: "#252525",
              color: "white",
              px: 9,
              mt: 9,
            }}
          >
            Done
          </Button>
        </Box>
      </Stack>
    </form>
  );
};

export default ChangeAvatarForm;
