import React from "react";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Avatar, List } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 443.9,
  height: 120,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "left",
}));

const Rightbar = () => {
  return (
    <div>
      <Stack direction="column" spacing={2}>
        <DemoPaper
          variant="elevation"
          style={{
            borderRadius: 10,
            height: 550,
            marginTop: 80,
            fontSize: 18,
            fontWeight: 10,
          }}
        >
          <h2
            style={{
              fontWeight: 30,
            }}
          >
            Popular products
          </h2>
          <h3 style={{ display: "inline", color: "grey" }}>Products</h3>
          <h3 style={{ display: "inline", marginLeft: 240, color: "grey" }}>
            Earnings
          </h3>

          <List
            sx={{
              width: "100%",
              maxWidth: 600,
              bgcolor: "background.paper",
              maxHeight: 390,
              overflowY: "scroll",
              scrollbarWidth: "none",
            }}
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="A"
                  src="/87943427_PANDA BAMBOO.jpg"
                  sx={{
                    height: 60,
                    width: 60,
                    position: "absolute",
                    left: 5,
                    borderRadius: 3,
                  }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography
                      sx={{
                        display: "inline",
                        fontSize: 15,
                        fontWeight: "bold",
                      }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Product A
                    </Typography>
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      UI KIT
                    </Typography>
                    <Typography
                      sx={{
                        display: "inline",
                        marginLeft: 30,
                        fontWeight: "bold",
                      }}
                    >
                      $2220
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="B"
                  src="/15477911_5564330.jpg"
                  sx={{
                    height: 60,
                    width: 60,
                    position: "absolute",
                    left: 5,
                    borderRadius: 3,
                  }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography
                      sx={{
                        display: "inline",
                        fontSize: 15,
                        fontWeight: "bold",
                      }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Product B
                    </Typography>
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      UI KIT
                    </Typography>
                    <Typography
                      sx={{
                        display: "inline",
                        marginLeft: 30,
                        fontWeight: "bold",
                      }}
                    >
                      $4100
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="C"
                  src="/21743158_6479743.jpg"
                  sx={{
                    height: 60,
                    width: 60,
                    position: "absolute",
                    left: 5,
                    borderRadius: 3,
                  }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography
                      sx={{
                        display: "inline",
                        fontSize: 15,
                        fontWeight: "bold",
                      }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Product C
                    </Typography>
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      UI KIT
                    </Typography>
                    <Typography
                      sx={{
                        display: "inline",
                        marginLeft: 30,
                        fontWeight: "bold",
                      }}
                    >
                      $5000
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="D"
                  src="/AA logo 02.jpg"
                  sx={{
                    height: 60,
                    width: 60,
                    position: "absolute",
                    left: 5,
                    borderRadius: 3,
                  }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography
                      sx={{
                        display: "inline",
                        fontSize: 15,
                        fontWeight: "bold",
                      }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Product D
                    </Typography>
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      UI KIT
                    </Typography>
                    <Typography
                      sx={{
                        display: "inline",
                        marginLeft: 30,
                        fontWeight: "bold",
                      }}
                    >
                      $2000
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="E"
                  src="/Fox 3d and minimalist logo design.jpg"
                  sx={{
                    height: 60,
                    width: 60,
                    position: "absolute",
                    left: 5,
                    borderRadius: 3,
                  }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography
                      sx={{
                        display: "inline",
                        fontSize: 15,
                        fontWeight: "bold",
                      }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Product E
                    </Typography>
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      UI KIT
                    </Typography>
                    <Typography
                      sx={{
                        display: "inline",
                        marginLeft: 30,
                        fontWeight: "bold",
                      }}
                    >
                      $2000
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              
              <ListItemAvatar>
                <Avatar
                  alt="F"
                  src="/ai-generated-8531085_1280.PNG"
                  sx={{
                    height: 60,
                    width: 60,
                    position: "absolute",
                    left: 5,
                    borderRadius: 3,
                  }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography
                      sx={{
                        display: "inline",
                        fontSize: 15,
                        fontWeight: "bold",
                      }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Product F
                    </Typography>
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      UI KIT
                    </Typography>
                    <Typography
                      sx={{
                        display: "inline",
                        marginLeft: 30,
                        fontWeight: "bold",
                      }}
                    >
                      $2150
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="G"
                  src="/logo-1873902_1280.PNG"
                  sx={{
                    height: 60,
                    width: 60,
                    position: "absolute",
                    left: 5,
                    borderRadius: 3,
                  }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography
                      sx={{
                        display: "inline",
                        fontSize: 15,
                        fontWeight: "bold",
                      }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Product G
                    </Typography>
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      UI KIT
                    </Typography>
                    <Typography
                      sx={{
                        display: "inline",
                        marginLeft: 30,
                        fontWeight: "bold",
                      }}
                    >
                      $3055
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="H"
                  src="/apple-7741471_1280.PNG"
                  sx={{
                    height: 60,
                    width: 60,
                    position: "absolute",
                    left: 5,
                    borderRadius: 3,
                  }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography
                      sx={{
                        display: "inline",
                        fontSize: 15,
                        fontWeight: "bold",
                      }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Product H
                    </Typography>
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      UI KIT
                    </Typography>
                    <Typography
                      sx={{
                        display: "inline",
                        marginLeft: 30,
                        fontWeight: "bold",
                      }}
                    >
                      $2530
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="I"
                  src="/ai-generated-8531096_1280.PNG"
                  sx={{
                    height: 60,
                    width: 60,
                    position: "absolute",
                    left: 5,
                    borderRadius: 3,
                  }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography
                      sx={{
                        display: "inline",
                        fontSize: 15,
                        fontWeight: "bold",
                      }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Product I
                    </Typography>
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      UI KIT
                    </Typography>
                    <Typography
                      sx={{
                        display: "inline",
                        marginLeft: 30,
                        fontWeight: "bold",
                      }}
                    >
                      $4000
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="J"
                  src="/ai-generated-8531087_1280.PNG"
                  sx={{
                    height: 60,
                    width: 60,
                    position: "absolute",
                    left: 5,
                    borderRadius: 3,
                  }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography
                      sx={{
                        display: "inline",
                        fontSize: 15,
                        fontWeight: "bold",
                      }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Product J
                    </Typography>
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      UI KIT
                    </Typography>
                    <Typography
                      sx={{
                        display: "inline",
                        marginLeft: 30,
                        fontWeight: "bold",
                      }}
                    >
                      $3500
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </DemoPaper>

        <DemoPaper
          variant="outlined"
          style={{
            borderRadius: 10,
            height: 241,
          }}
        >
          {" "}
          <h2 style={{ fontSize: 20, fontWeight: 50 }}>Comments</h2>
          <List
            sx={{
              width: "100%",
              maxWidth: 600,
              bgcolor: "background.paper",
              maxHeight: 150,
              overflowY: "scroll",
              scrollbarWidth: "none",
            }}
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src="/StockCake-Joyful Celebration Moment_1721899835.jpg"
                  sx={{
                    height: 60,
                    width: 60,
                    position: "absolute",
                    left: 5,
                    borderRadius: 20,
                  }}
                />
              </ListItemAvatar>
              <ListItemText
                primary="Great Product"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Remy
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Travis Howard"
                  src="/StockCake-Serene Reading Moment_1721899943.jpg"
                  sx={{
                    height: 60,
                    width: 60,
                    position: "absolute",
                    left: 5,
                    borderRadius: 20,
                  }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={"Awsome Service"}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Travis
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Cindy Baker"
                  src="StockCake-Mountain Meditation Moment_1721900256.jpg"
                  sx={{
                    height: 60,
                    width: 60,
                    position: "absolute",
                    left: 5,
                    borderRadius: 20,
                  }}
                />
              </ListItemAvatar>
              <ListItemText
                primary="Great service"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Cindy
                    </Typography>
                    {" — Do you have Paris recommendations? Have you ever…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Billy"
                  src="/StockCake-Cozy Reading Time_1721900389.jpg"
                  sx={{
                    height: 60,
                    width: 60,
                    position: "absolute",
                    left: 5,
                    borderRadius: 20,
                  }}
                />
              </ListItemAvatar>
              <ListItemText
                primary="Amazing"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Billy
                    </Typography>
                    {" — Do you have Paris recommendations? Have you ever…"}
                  </React.Fragment>
                }
              />
            </ListItem>{" "}
          </List>
        </DemoPaper>
      </Stack>
    </div>
  );
};

export default Rightbar;
