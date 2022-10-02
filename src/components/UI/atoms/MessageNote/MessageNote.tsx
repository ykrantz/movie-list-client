import "./MessageNote.css";
import React from "react";

import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
// import CircularIndeterminate from "../CircularIndeterminate/CircularIndeterminate";
import { CircularProgress, Typography } from "@mui/material";
import { alertType, messageType } from "../../../../types/types";

// type appProps = {
//   message: string;
//   type: "error" | "success" | "warning" | "info";
// };
type appProps = {
  messageStr: string | undefined;
  alertKind: alertType | undefined;
};
// type appProps < messageType>;

// messageType;

const MessageNote = ({ messageStr, alertKind }: appProps) => {
  console.log({ messageStr }, 52);

  return (
    <div>
      <Stack
        sx={{ width: "100%" }}
        spacing={2}
        justifyContent="center"
        display={"flex"}
      >
        {messageStr === "Waiting for results from server" && (
          // <CircularIndeterminate />
          <Typography align="center">
            <CircularProgress />
          </Typography>
        )}
        {messageStr && messageStr !== "Waiting for results from server" && (
          <Alert severity={alertKind}>{messageStr}</Alert>
        )}
      </Stack>
    </div>
  );
};

export default MessageNote;
