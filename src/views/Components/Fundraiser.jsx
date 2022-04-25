import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "./Buttons";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import LocationMarker from "../../Assets/Images/LocationMarker";
import love from "../../Assets/Images/love.png";
import { Link } from "react-router-dom";

const Fundraiser = ({ data }) => {
  const [progress, setProgress] = React.useState(0);

  let length = 90;
  useEffect(() => {
    const calcPerc =
      (parseInt(data.moneyraised) / parseInt(data.amountneeded)) * 100;
    setProgress(calcPerc);
  }, [data.moneyraised, data.amountneeded]);
  let trimmedString =
    data.secondarytext.length > length
      ? data.secondarytext.substring(0, length) + "..."
      : data.secondarytext;

  return (
    <Link to={`/viewfundraiser/${data.id}`} className="link">
      <Card
        sx={{
          minWidth: 310,
          maxWidth: 320,
          background: "#bee3db",
          margin: "10px 0",
        }}
        raised
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="230"
            image="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            alt="cat"
          ></CardMedia>
          <CardContent>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "right",
              }}
            >
              <LocationMarker></LocationMarker>
              <Typography
                className="text"
                noWrap
                variant="subtitle2"
                component="div"
              >
                {data.location}
              </Typography>
            </div>
            <Typography
              sx={{ fontWeight: "700" }}
              className="text"
              noWrap
              gutterBottom
              variant="h6"
              component="div"
            >
              {data.title}
            </Typography>
            <Typography
              className="text"
              svariant="caption"
              color="text.secondary"
            >
              {trimmedString}
            </Typography>
            <div className="money-raised">
              <p>
                Rs <span className="money">{data.moneyraised}</span>{" "}
                <span className="raisedoutof"> Raised out of </span> Rs{" "}
                <span className="money">{data.amountneeded}</span>
              </p>
            </div>
            <Box sx={{ width: "100%" }}>
              <LinearProgress variant="determinate" value={progress} />
            </Box>
          </CardContent>
          <div className="status-container">
            {/* Expired on: Date  or Expires on: Date*/}
            <p className="date-status">
              {data.fundraiserstatus === "Not expired"
                ? "Expires On:"
                : "Expired On:"}{" "}
              <span className="date">
                {" "}
                {data.fundraiserstatus === "Not expired"
                  ? data.expireson
                  : data.expiredon}
              </span>
            </p>
            <p className="like-status">
              <img
                className="likeimage"
                src={love}
                alt="loveimage"
                width="20"
                height="20"
              />
              <span>{data.totallikes}</span>
            </p>
          </div>
        </CardActionArea>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            label="Donate"
            type="rectangle"
            size="small"
            variant="primary"
          ></Button>
          <Button
            label="Like"
            type="rectangle"
            size="small"
            variant="primary"
          ></Button>
        </CardActions>
      </Card>
    </Link>
  );
};

export default Fundraiser;
