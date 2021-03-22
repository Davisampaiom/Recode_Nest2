import * as React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";

const Container = styled.div`
  background-color: #f4f4f4;
`;

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <div>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MenuIcon
              style={{
                color: "black",
                width: 40,
                height: 40,
                marginLeft: 30,
                marginTop: 15,
              }}
            />
          </Button>

          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <a href="/">
                <Grid container direction="row" alignItems="center">
                  <HomeRoundedIcon
                    style={{ width: 30, height: 30, margin: 10 }}
                  />
                  <Typography style={{ fontSize: 20, margin: 7 }}>
                    Home
                  </Typography>
                </Grid>
              </a>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <a href="Login">
                <Grid container direction="row" alignItems="center">
                  <AccountCircleRoundedIcon
                    style={{ width: 30, height: 30, margin: 10 }}
                  />
                  <Typography style={{ fontSize: 20, margin: 7 }}>
                    Login
                  </Typography>
                </Grid>
              </a>
            </MenuItem>
          </Menu>
        </div>

        <Typography
          variant="h3"
          component="div"
          gutterBottom
          style={{ marginRight: 40, marginTop: 15 }}
        >
          Espaço Seguro
        </Typography>
      </Grid>
    </Container>
  );
}
