import "./GitHubButton.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import React from "react";
import { useNavigate } from "react-router";

type appProps = {
  gitHubUrl: string;
  urlType: "client" | "server" | "link";
};

type colorType = "primary" | "secondary";

const GitHubButton = ({ gitHubUrl, urlType }: appProps) => {
  const currentColor: colorType = "primary";
  return (
    <div>
      <IconButton aria-label="git link">
        <a href={gitHubUrl} target="_blank">
          <Tooltip title={"GitHub " + urlType}>
            <GitHubIcon fontSize="medium" color={currentColor} />
          </Tooltip>
        </a>
      </IconButton>
    </div>
  );
};

export default GitHubButton;
