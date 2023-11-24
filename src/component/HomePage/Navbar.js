// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import posImage from '../components/12.png'
// import './Navbar1.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import MenuIcon from '@mui/icons-material/Menu';
// import AdbIcon from '@mui/icons-material/Adb';

// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// function Navbar() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <>
//       <AppBar position="static">
//         <Container maxWidth="xl">
//           <Toolbar disableGutters>
//             <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
//             <Typography
//               variant="h6"
//               noWrap
//               component="a"
//               href="#app-bar-with-responsive-menu"
//               sx={{
//                 mr: 2,
//                 display: { xs: 'none', md: 'flex' },
//                 fontFamily: 'monospace',
//                 fontWeight: 500,
//                 letterSpacing: '.3rem',
//                 color: 'inherit',
//                 textDecoration: 'none',
//               }}
//             >
//               <div>
//                 <img style={{ height: "50px" }} src={posImage} alt='' />
//               </div>
//             </Typography>

//             <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//               <IconButton
//                 size="large"
//                 aria-label="account of current user"
//                 aria-controls="menu-appbar"
//                 aria-haspopup="true"
//                 onClick={handleOpenNavMenu}
//                 color="inherit"
//               >
//                 <MenuIcon />
//               </IconButton>
//               <Menu
//                 id="menu-appbar"
//                 anchorEl={anchorElNav}
//                 anchorOrigin={{
//                   vertical: 'bottom',
//                   horizontal: 'left',
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: 'top',
//                   horizontal: 'left',
//                 }}
//                 open={Boolean(anchorElNav)}
//                 onClose={handleCloseNavMenu}
//                 sx={{
//                   display: { xs: 'block', md: 'none' },
//                 }}
//               >
//               </Menu>
//             </Box>
//             <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
//             <Typography
//               variant="h5"
//               noWrap
//               component="a"
//               href="#app-bar-with-responsive-menu"
//               sx={{
//                 mr: 2,
//                 display: { xs: 'flex', md: 'none' },
//                 flexGrow: 1,
//                 fontFamily: 'monospace',
//                 fontWeight: 700,
//                 letterSpacing: '.3rem',
//                 color: 'inherit',
//                 textDecoration: 'none',
//                 fontStyle: 'bold',
//                 textShadow: '2px 2px 5px red'
//               }}
//             >
//               Sri Satya Sai University
//             </Typography>
//             <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//               <h1 style={{ fontStyle: 'italic', textShadow: '2px 2px 5px red' }}>  Sri Satya Sai University of Technology and Medical Sciences</h1>

//             </Box>

//             <Box sx={{ flexGrow: 0 }}>
//               <Tooltip title="Open settings">
//                 <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                   <Avatar alt="Remy Sharp" style={{ width: '50px', height: '50px' }} src="https://th.bing.com/th/id/R.091bfeb8ddd2ccff19b61399b2876a8c?rik=XabpEVEeaXE%2bgA&riu=http%3a%2f%2fwww.sssutms.co.in%2fcms%2fAreas%2fWebsite%2fFiles%2fSlide%2fslide1.jpg&ehk=3aloipXBXN%2bG7CUBk2N1hGTpYHYezaWDvyKJeBMAd1M%3d&risl=&pid=ImgRaw&r=0" />
//                 </IconButton>
//               </Tooltip>
//               <Menu
//                 sx={{ mt: '45px' }}
//                 id="menu-appbar"
//                 anchorEl={anchorElUser}
//                 anchorOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 open={Boolean(anchorElUser)}
//                 onClose={handleCloseUserMenu}
//               >
//                 {settings.map((setting) => (
//                   <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                     <Typography textAlign="center">{setting}</Typography>
//                   </MenuItem>
//                 ))}
//               </Menu>
//             </Box>
//           </Toolbar>
//         </Container>
//       </AppBar>
     
//     </>
//   );
// }

// export default Navbar
// import React from "react";
// import './Navbar1.css';

// function Navv() {
//   return (
//     <>
//       <meta charSet="UTF-8" />
//       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       <link rel="stylesheet" href="index.css" />
//       <title>Document</title>
//       <header>
//         <div>
//           <div>
//          <img style ={{width:"40px"}} src={'https://previews.123rf.com/images/vectorv/vectorv1905/vectorv190507977/123658853-silver-house-icon-isolated-on-blue-background-home-symbol-vector-illustration.jpg'} />
//             <span className="s-p">About</span>
//             <span className="s-p">Examination</span>
//             <span className="s-p">Download</span>
//             <span className="s-p">Career</span>
//             {/* <span className="s-p">Contect</span> */}
//             <span className="s-p">ERP</span>
//           </div>
//           <div className="nav-li">
//             <div>LOGIN</div>
//             <div>
//               <span className="s-p">SIGNUP</span>
//             </div>
//           </div>
//         </div>
//       </header>
//       <div className="Top-bar">
//         <div>
//           <h1>
//             {/* YOUR <span>LOGO</span> */}<img  style={{width:'400px'}} src="https://www.sssutms.co.in/cms/Areas/Website/Content/images/logo21.png" alt=""/>
//           </h1>
//         </div>
//         <div className="menu">
//           <ul>
//             <li style={{fontWeight:'bolder'}}>
//               Academic
//               <hr />
//             </li>
//             <li className="dropbtn">
//               Research
//               <hr />
//               <div className="dropdown">
//                 <div className="dropdown-content">
//                   <a href="#">SUBMENU 1</a>
//                   <a href="#">SUBMENU 2</a>
//                   <a href="#" className="submenu-trigger">
//                     SUBMENU 3
//                   </a>
//                   <div className="submenu">
//                     <a href="#">SUBMENU 1</a>
//                     <a href="#">SUBMENU 2</a>
//                     <a href="#">SUBMENU 3</a>
//                   </div>
//                 </div>
//               </div>
//             </li>
//             <li>
//               Admission
//               <hr />
//             </li>
//             <li>
//               Contact
//               <hr />
//             </li>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Navv;
import React from "react";
import './Navbar1.css';
import img from '../../images/homeee.png'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="index.css" />
      <title>Document</title>
      <header>
        <div>
          <div>
         <img style ={{width:"35px"}}
src={img}
/>
            <span className="s-p"style={{marginLeft:'40px',}} >About</span>
            <span className="s-p" style={{marginLeft:'40px'}}>Examination</span>
            <span className="s-p" style={{marginLeft:'40px'}}>Download</span>
            <span className="s-p" style={{marginLeft:'40px'}}>Career</span>
            {/* <span className="s-p">Contect</span> */}
            <Link to="/erp">
            <span className="s-p" style={{marginLeft:'40px'}}>ERP</span>
            </Link>
          </div>
          <div className="nav-li">
            <Link to="/studentlogin">
            <div>LOGIN</div>
            </Link>
            <div>
             <Link to="/studentregister">
              <span className="s-p">SIGNUP</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <div className="Top-bar">
        <div>
          <h1>
            {/* YOUR <span>LOGO</span> */}<img
style={{width:'400px'}}
src="https://www.sssutms.co.in/cms/Areas/Website/Content/images/logo21.png"
alt=""/>
          </h1>
        </div>
        <div className="menu" style={{marginLeft:'80px'}}>
          <ul>
            <li style={{fontWeight:'bolder' ,fontSize:'20px',color:'orange'}}>
              Academic
              <hr />
            </li>
            <li className="dropbtn" style={{fontWeight:'bolder' ,fontSize:'20px',color:'orange'}}>
              Research
              <hr />
              <div className="dropdown">
                {/* <div className="dropdown-content">
                  <a href="#">SUBMENU 1</a>
                  <a href="#">SUBMENU 2</a>
                  <a href="#" className="submenu-trigger">
                    SUBMENU 3
                  </a>
                  <div className="submenu">
                    <a href="#">SUBMENU 1</a>
                    <a href="#">SUBMENU 2</a>
                    <a href="#">SUBMENU 3</a>
                  </div>
                </div> */}
              </div>
            </li>
            <li style={{fontWeight:'bolder' ,fontSize:'20px',color:'orange'}}>
              Admission
              <hr />
            </li>
            <li style={{fontWeight:'bolder' ,fontSize:'20px',color:'orange'}}>
              Contact
              <hr />
            </li>
            <img src='https://www.g20.org/content/dam/gtwenty/header-footer/header/g20-logo.png' alt='ffff' height='80px' width='150px' marginLeft='180px'/>
          </ul>
         
        </div>
      </div>
    </>
  );
}

export default Navbar;