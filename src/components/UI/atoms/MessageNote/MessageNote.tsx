import "./MessageNote.css";
import React from "react";

import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { CircularProgress, Typography } from "@mui/material";
import { alertType, messageType } from "../../../../types/types";

type appProps = {
  messageStr: string | undefined;
  alertKind: alertType | undefined;
};

const MessageNote = ({ messageStr, alertKind }: appProps) => {
  return (
    <div>
      <Stack
        sx={{ width: "100%" }}
        spacing={2}
        justifyContent="center"
        display={"flex"}
      >
        {messageStr === "Waiting for results from server" && (
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
