import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
// import { deepOrange, deepPurple } from '@mui/material/colors';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import profTemp from './assets/profTemp.jpg'
import { CiGrid42 } from "react-icons/ci";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Container } from 'react-bootstrap';
import camTemp from './assets/camTemp.jpg'
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const options = [
  'View',
  'Edit',
  'Delete'
];
const ITEM_HEIGHT = 48;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {/* header ? */}
      <Navbar className="border justify-content-between w-100">
        <Form inline>
          <h1 className='head-logo ms-3'>olapool</h1>
        </Form> <p className='fs-4 mt-3' style={{ marginLeft: '1300px' }}> Message</p>
        <Form inline>
          <Row>
            <Col className='p-2 pe-5' xs="auto">
              <Stack spacing={2} direction="row">

                <Button variant="outlined"  >Mayan
                  <Avatar style={{ height: '25px', width: '25px' }} className='head-avatar ms-5  fs-6'>m</Avatar>

                  <i class="fa-solid fa-chevron-down ms-1 fs-4"></i></Button>
              </Stack>
            </Col>

          </Row>
        </Form>
      </Navbar>

      <Box className='main-box' sx={{ flexGrow: 0 }}>
        <Grid container spacing={0}>

          <Grid item xs={7} md={3}>
            <Item>
              <div className='sidebar-item'>
                <Stack style={{ textAlign: 'left', overflowX: 'auto' }} className='container' gap={0}>
                  <Button className='sidebar-profile m-4 mt-5 border border-radius'>
                    <Stack style={{ textAlign: 'left' }}>
                      <Avatar className='ms-3 me-1' style={{ width: '20cqw', height: '8cqh' }} alt="Cindy Baker" src={profTemp} />
                    </Stack>
                    <Row>
                      <p className='profile-line-one text-dark '>Miya Hashim</p>
                      <p className='profile-line  text-success' >Verification level 3</p>
                      <p className='profile-line  text-secondary' >Ernakulam,India</p>
                    </Row>
                  </Button>
                </Stack>
                <div className='sidebar-item'>

                  <Stack style={{ textAlign: 'left', overflowX: 'auto' }} className='container' gap={0}>
                    <Button className='sidebar-profile m-4 mt-5 border   border-radius'>
                      <div style={{ textAlign: 'left' }} className='w-75'>
                        <p className=' text-dark fs-3'>  Avilable for use</p>
                        <p className=' text-dark fs-1 fw-bold'>0.00</p>
                        <p className=' text-dark fs-3'> Being cleared</p>
                        <p className=' text-dark fs-1 fw-bold'>0.00</p>
                      </div>
                      <div className='row'>

                        <Button className='sidebar-profile m-4 ms-5 w-50  border'>
                          Withdraw
                        </Button>
                        <Button className='sidebar-profile m-4  ms-5 w-50 border'>
                          History
                        </Button>
                      </div>

                    </Button>

                  </Stack>
                </div>
              </div>


              <Stack className='main-sidebar-categoriesmt-5  mb-5 p-2' gap={0}>
                <div className='text-right'>


                  <div className="sidebar-categories p-2 fs-3 ms-5 me-5 pt-4 "> <CiGrid42 className='fs-2 fw-bold me-5' /> Overview   <i style={{ marginLeft: '159px' }} class="fa-solid fa-chevron-down  fs-4"></i></div>

                  <div className="sidebar-categories p-2 fs-3 ms-5 me-5 pt-4"> <i class="fa-regular fa-user fs-2 me-5 "></i>Store   <i style={{ marginLeft: '204px' }} class="fa-solid fa-chevron-down  fs-4"></i></div>
                  <div className="sidebar-categories p-2 fs-3 ms-5 me-5 pt-4"> <i class="fa-regular fa-user fs-2 me-5"></i>User Account   <i style={{ marginLeft: '127px' }} class="fa-solid fa-chevron-down fs-4"></i></div>
                  <div className="sidebar-categories p-2 fs-3 ms-5 me-5 pt-4"> <i class="fa-regular fa-user fs-2 me-5"></i>Orders   <i style={{ marginLeft: '192px' }} class="fa-solid fa-chevron-down fs-4"></i></div>
                  <div className="sidebar-categories p-2 fs-3 ms-5 me-5 pt-4"> <i class="fa-regular fa-user fs-2 me-5"></i>Condact & Support   <i style={{ marginLeft: '77px' }} class="fa-solid fa-chevron-down fs-4"></i></div>
                  <div className="sidebar-categories p-2 fs-3 ms-5 me-5 pt-4"> <i class="fa-regular fa-user fs-2 me-5"></i>Terms & Conditions   <i style={{ marginLeft: '70px' }} class="fa-solid fa-chevron-down fs-4"></i></div>
                </div>

              </Stack>

            </Item>
          </Grid>

          {/* -----------------------------------------------------------------------------------------------------------------------------------------*/}
          <Grid item xs={5} md={9} style={{ margin: '0px' }}>
            <Item>
              <div className='second-grid '>
                {/* <Stack direction="horizontal"  className='all-stack'>
                    <div>  <Button variant="dark" className='all-btn border '>All <i style={{textAlign:'right'}} className='fa-solid fa-chevron-down all-btn-down'></i></Button></div>

                  </Stack> */}

                <Row>
                  <Col className='p-2 pe-5' xs="auto">
                    <Stack className='all-stack' spacing={2} direction="row">

                      <Button className='border all-btn' variant="outlined-dark" ><span className='all-margin'>All </span> <i class="fa-solid fa-chevron-down ms-1 fs-4"></i></Button>
                      <Button className='border all-btn' variant="outlined-dark" ><span className='all-margin'>All </span> <i class="fa-solid fa-chevron-down ms-1 fs-4"></i></Button>
                      <Button className='border all-btn' variant="outlined-dark" ><span className='all-margin'>All </span> <i class="fa-solid fa-chevron-down ms-1 fs-4"></i></Button>
                    </Stack>
                  </Col>

                </Row>
                <div className='stack-content'>
                  <Stack gap={1}>
                    <div className="d-flex  text-center p-3 ps-5  pe-5 stack-one">
                      Products
                      <Avatar style={{ height: '15px', width: '15px', backgroundColor: 'white' }} className='ms-5 text-dark p-3'>3</Avatar>
                    </div>
                    <div className="p-3 stack-two">Orders</div>
                    <div className="p-3 stack-two">Store Settings</div>
                  </Stack>
                </div>

                <div className='sub-second-grid border-radius '>

                  <InputGroup className="mb-3 search-bar-custom " >
                    <Form.Control
                      placeholder="Search Products"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" style={{ backgroundColor: 'blue', marginRight: '20px', borderTopRightRadius: '10px', borderBottomRightRadius: '10px' }} id="button-addon2">

                    </Button>
                    <DropdownButton
                      className='ms-5'
                      style={{ borderRadius: '10px !important' }}
                      id="dropdown-basic-button"
                      title={<><i className="fa-solid fa-filter ps-2 fs-3 me-1"></i> <span className='fs-3 me-5'>Sort</span> </>}
                    >
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </DropdownButton>
                  </InputGroup>
                  <Container>
                    <Row>

                      <Col xs={6} md={3}>
                        <Card className='mt-5 border border-primary' style={{ width: '250px', height: '350px' }}>
                          <CardContent className='justify-content-center mt-5 pt-5'>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                              <i className='fa-plus fa-solid fw-bold text-center text-primary fs-1'></i>
                            </Typography>
                            <Typography className='mt-5' variant="body2">
                              <span className='text-primary fs-2'> Add Projects</span>
                            </Typography>
                          </CardContent>
                        </Card>
                      </Col>

                      <Col className='mt-5' xs={6} md={3}>
                        <Card className='shadow' style={{ width: '250px', height: '350px' }}>
                          <CardContent>
                            <div style={{ marginLeft: '180px' }} >
                              <IconButton
                                aria-label="more"
                                id="long-button"
                                aria-controls={open ? 'long-menu' : undefined}
                                aria-expanded={open ? 'true' : undefined}
                                aria-haspopup="true"
                                onClick={handleClick}
                              >
                                <MoreVertIcon />
                              </IconButton>
                              <Menu
                                id="long-menu"
                                MenuListProps={{
                                  'aria-labelledby': 'long-button',
                                }}
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                PaperProps={{
                                  style: {
                                    maxHeight: ITEM_HEIGHT * 4.5,
                                    width: '20ch',
                                  },
                                }}
                              >
                                {options.map((option) => (
                                  <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                                    {option}
                                  </MenuItem>
                                ))}
                              </Menu>
                            </div>
                            <img style={{ width: '220px' }} src={camTemp}
                            />

                            <Typography sx={{ mb: 1.5 }} color="text.dark" className='fs-4 fw-bold text-center'>
                              Cannon EOS-5D for rent
                            </Typography>
                            <Typography className='fs-6  text-center' variant="body2">
                              From <span className='text-primary fw-bold fs-4 '> ₹2,50,000</span>
                            </Typography>
                          </CardContent>
                        </Card>
                      </Col>


                      <Col className='mt-5' xs={6} md={3}>
                        <Card className='shadow' style={{ width: '250px', height: '350px' }}>
                          <CardContent>
                            <div style={{ marginLeft: '180px' }} >
                              <IconButton
                                aria-label="more"
                                id="long-button"
                                aria-controls={open ? 'long-menu' : undefined}
                                aria-expanded={open ? 'true' : undefined}
                                aria-haspopup="true"
                                onClick={handleClick}
                              >
                                <MoreVertIcon />
                              </IconButton>
                              <Menu
                                id="long-menu"
                                MenuListProps={{
                                  'aria-labelledby': 'long-button',
                                }}
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                PaperProps={{
                                  style: {
                                    maxHeight: ITEM_HEIGHT * 4.5,
                                    width: '20ch',
                                  },
                                }}
                              >
                                {options.map((option) => (
                                  <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                                    {option}
                                  </MenuItem>
                                ))}
                              </Menu>
                            </div>
                            <img style={{ width: '220px' }} src={camTemp}
                            />

                            <Typography sx={{ mb: 1.5 }} color="text.dark" className='fs-4 fw-bold text-center'>
                              Cannon EOS-5D for rent
                            </Typography>
                            <Typography className='fs-6  text-center' variant="body2">
                              From <span className='text-primary fw-bold fs-4 '> ₹2,50,000</span>
                            </Typography>
                          </CardContent>
                        </Card>
                      </Col>


                      <Col className='mt-5' xs={6} md={3}>
                        <Card className='shadow' style={{ width: '250px', height: '350px' }}>
                          <CardContent>
                            <div style={{ marginLeft: '180px' }} >
                              <IconButton
                                aria-label="more"
                                id="long-button"
                                aria-controls={open ? 'long-menu' : undefined}
                                aria-expanded={open ? 'true' : undefined}
                                aria-haspopup="true"
                                onClick={handleClick}
                              >
                                <MoreVertIcon />
                              </IconButton>
                              <Menu
                                id="long-menu"
                                MenuListProps={{
                                  'aria-labelledby': 'long-button',
                                }}
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                PaperProps={{
                                  style: {
                                    maxHeight: ITEM_HEIGHT * 4.5,
                                    width: '20ch',
                                  },
                                }}
                              >
                                {options.map((option) => (
                                  <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                                    {option}
                                  </MenuItem>
                                ))}
                              </Menu>
                            </div>
                            <img style={{ width: '220px' }} src={camTemp}
                            />

                            <Typography sx={{ mb: 1.5 }} color="text.dark" className='fs-4 fw-bold text-center'>
                              Cannon EOS-5D for rent
                            </Typography>
                            <Typography className='fs-6  text-center' variant="body2">
                              From <span className='text-primary fw-bold fs-4 '> ₹2,50,000</span>
                            </Typography>
                          </CardContent>
                        </Card>
                      </Col>




                    </Row>
                  </Container>

                </div>


              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default App
