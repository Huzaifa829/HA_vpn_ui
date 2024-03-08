import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Card2 from "../Card/Card2";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import Card3 from "../Card/Card3";
import Card4 from "../Card/Card4";
import { Typography } from "@mui/material";
import Box from "@mui/material";

const TimeLine = () => {
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography
            color="success"
            sx={{ fontSize: "15px", color: "#00A573" }}
          >
            AtomicVPN v1.0
          </Typography>

          <Typography sx={{ fontSize: "12px", color: "#475467" }}>
            12 Jan, 2024
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="success" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography>
            <Card2></Card2>
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="#0C111E">
          <Typography
            color="success"
            sx={{ fontSize: "15px", color: "#0C111E", marginTop: "24px" }}
          >
            AtomicVPN v1.0
          </Typography>

          <Typography sx={{ fontSize: "12px", color: "#475467" }}>
            12 Jan, 2024
          </Typography>
        </TimelineOppositeContent>

        <TimelineSeparator>
          <TimelineDot
            variant="outlined"
            color="success"
            sx={{ marginTop: "34px" }}
          />
        </TimelineSeparator>
        <TimelineContent sx={{ paddingTop: "24px" }}>
          {" "}
          <Card2></Card2>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="#0C111E"></TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="success" sx={{ marginTop: "34px" }} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ paddingTop: "24px" }}>
          <Card3 />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary"></TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="success" sx={{ marginTop: "34px" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ paddingTop: "24px" }}>
          {" "}
          <Card3 />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          <Typography
            color="success"
            sx={{ fontSize: "15px", color: "#0C111E", marginTop: "24px" }}
          >
            AtomicVPN Beta Version
          </Typography>

          <Typography sx={{ fontSize: "12px", color: "#475467" }}>
            12 Jan, 2024
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot
            variant="outlined"
            color="success"
            sx={{ marginTop: "34px" }}
          />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ paddingTop: "24px" }}>
          <Card4 />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          <Typography
            color="success"
            sx={{ fontSize: "15px", color: "#0C111E", marginTop: "24px" }}
          >
            AtomicVPN v1.0
          </Typography>

          <Typography sx={{ fontSize: "12px", color: "#475467" }}>
            12 Jan, 2024
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot
            variant="outlined"
            color="success"
            sx={{ marginTop: "34px" }}
          />
        </TimelineSeparator>
        <TimelineContent sx={{ paddingTop: "24px" }}>
          {" "}
          <Card2></Card2>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary"></TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="success" sx={{ marginTop: "34px" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ paddingTop: "24px" }}>
          {" "}
          <Card3 />
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default TimeLine;
