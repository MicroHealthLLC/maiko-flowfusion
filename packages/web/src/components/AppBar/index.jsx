import PropTypes from 'prop-types';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MuiAppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import * as React from 'react';
import AccountDropdownMenu from 'components/AccountDropdownMenu';
import Container from 'components/Container';
import Logo from 'components/Logo/index';
import TrialStatusBadge from 'components/TrialStatusBadge/index.ee';
import * as URLS from 'config/urls';
import { Link } from './style';

const accountMenuId = 'account-menu';

function AppBar(props) {
  const { drawerOpen, onDrawerOpen, onDrawerClose, maxWidth = false } = props;
  const theme = useTheme();
  const matchSmallScreens = useMediaQuery(theme.breakpoints.down('md'));
  const [accountMenuAnchorElement, setAccountMenuAnchorElement] =
    React.useState(null);
  const isMenuOpen = Boolean(accountMenuAnchorElement);
  const handleAccountMenuOpen = (event) => {
    setAccountMenuAnchorElement(event.currentTarget);
  };
  const handleAccountMenuClose = () => {
    setAccountMenuAnchorElement(null);
  };
  return (
    <MuiAppBar data-test="app-bar" style={{ display: "none"}}>
      <Container maxWidth={maxWidth} disableGutters>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={drawerOpen ? onDrawerClose : onDrawerOpen}
            sx={{ mr: 2 }}
            data-test="drawer-menu-button"
          >
            {drawerOpen && matchSmallScreens ? <MenuOpenIcon /> : <MenuIcon />}
          </IconButton>

          <div style={{ flexGrow: 1, display: 'flex' }}>
            <Link to={URLS.DASHBOARD}>
              <Logo />
            </Link>
          </div>

          <TrialStatusBadge />

          <IconButton
            size="large"
            color="inherit"
            onClick={handleAccountMenuOpen}
            aria-controls={accountMenuId}
            aria-label="open profile menu"
            data-test="profile-menu-button"
          >
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <AccountDropdownMenu
        anchorEl={accountMenuAnchorElement}
        id={accountMenuId}
        open={isMenuOpen}
        onClose={handleAccountMenuClose}
      />
    </MuiAppBar>
  );
}

AppBar.propTypes = {
  drawerOpen: PropTypes.bool.isRequired,
  onDrawerOpen: PropTypes.func.isRequired,
  onDrawerClose: PropTypes.func.isRequired,
  maxWidth: PropTypes.oneOfType([
    PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', false]),
    PropTypes.string,
  ]),
};

export default AppBar;
