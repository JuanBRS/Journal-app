import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedWiew } from "../views";

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas neque beatae facilis possimus ipsam. Voluptas harum maxime minus esse, unde cumque quam ipsam praesentium? Omnis id recusandae reiciendis enim dolor?</Typography> */}

      {/* <NothingSelectedWiew /> */}
      <NoteView/>

      <IconButton
        size="lagre"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          botton: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
