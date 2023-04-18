import React from "react";
import { Stepper, Step, StepLabel, Typography, Box } from "@mui/material";
import MoveToInboxOutlinedIcon from "@mui/icons-material/MoveToInboxOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import CancelIcon from "@mui/icons-material/Cancel";
import FlagIcon from "@mui/icons-material/Flag";

const VerticalStepperExample = () => {
  const steps = [
    {
      label: "Delivery Accepted by Messenger",
      date: "20/09/2022 12:20pm",
      icon: <MoveToInboxOutlinedIcon />,
      activityStatus: "error"
    },
    {
      label: "Step 2",
      date: "20/09/2022 12:30pm",
      icon: <MoveToInboxOutlinedIcon />,
      activityStatus: "waiting"
    },
    {
      label: "Step 3",
      date: "20/09/2022 12:40pm",
      icon: <MoveToInboxOutlinedIcon />,
      activityStatus: "waiting"
    },
    {
      label: "Step 4",
      date: "20/09/2022 12:50pm",
      icon: <MoveToInboxOutlinedIcon />,
      activityStatus: "waiting"
    },
    {
      label: "Step 5",
      date: "20/09/2022 1:00pm",
      icon: <MoveToInboxOutlinedIcon />,
      activityStatus: "waiting"
    }
  ];

  type ActivityStatus = "waiting" | "ongoing" | "completed" | "error";

  interface Step {
    label: string;
    date: string;
    activityStatus: ActivityStatus;
    icon: React.ElementType;
  }
  const getStepLabelStyle = (activityStatus: ActivityStatus) => {
    switch (activityStatus) {
      case "waiting":
        return { color: "grey" };
      case "ongoing":
        return { color: "white" };
      case "completed":
        return { color: "white" };
      case "error":
        return { color: "red" };
      default:
        return {};
    }
  };

  const getStepIconColor = (activityStatus: ActivityStatus) => {
    switch (activityStatus) {
      case "waiting":
        return "grey";
      case "ongoing":
        return "white";
      case "completed":
        return "white";
      case "error":
        return "red";
      default:
        return "inherit";
    }
  };

  return (
    <Stepper orientation="vertical">
      {steps.map((step, index) => (
        <Step key={index} completed={step.activityStatus === "completed"}>
          <StepLabel
            StepIconComponent={() => {
              if (step.activityStatus === "completed") {
                return step.icon;
              } else if (step.activityStatus === "error") {
                return <FlagIcon style={{ color: "red" }} />;
              } else {
                return step.icon;
              }
            }}
            style={{
              position: "relative",
              ...getStepLabelStyle(step.activityStatus as ActivityStatus)
            }}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box
                style={{
                  position: "relative",
                  ...getStepLabelStyle(step.activityStatus as ActivityStatus)
                }}
              >
                <Typography variant="body1">{step.label}</Typography>
                <Typography variant="body2">{step.date}</Typography>
              </Box>
              {step.activityStatus === "completed" && (
                <CheckCircleOutlineOutlinedIcon
                  style={{
                    color: getStepIconColor(
                      step.activityStatus as ActivityStatus
                    )
                  }}
                />
              )}
              {step.activityStatus === "error" && (
                <CancelIcon
                  style={{
                    color: getStepIconColor(
                      step.activityStatus as ActivityStatus
                    )
                  }}
                />
              )}
              {step.activityStatus === "waiting" && (
                <Typography variant="body1" style={{ color: "grey" }}>
                  Waiting
                </Typography>
              )}
              {step.activityStatus === "ongoing" && (
                <Typography variant="body1" style={{ color: "grey" }}>
                  In progress
                </Typography>
              )}
            </Box>
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default VerticalStepperExample;
