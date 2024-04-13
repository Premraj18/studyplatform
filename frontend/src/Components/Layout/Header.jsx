import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, VStack, position, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom';

const Header = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const isAuthenticated = false;
    const user = {
        role: 'admin'
    }

    return (
        <>
            <Button colorScheme='yellow' width={12} height={12} rounded={'full'} position={'fixed'} top={6} left={6}
                onClick={onOpen}
            >
                <RiMenu5Fill />
            </Button>

            <Drawer placement='left' onClose={onClose} isOpen={isOpen} >
                <DrawerOverlay backdropFilter={'blur(1px)'} />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth={'1px'}>COURSE BUNDLE</DrawerHeader>
                    <DrawerBody>
                        <VStack spacing={4} alignItems={'flex-start'}>
                            <Link to='/'> 
                                <Button variant={'ghost'}>Home</Button>
                            </Link>
                            <Link to='/courses'> 
                                <Button variant={'ghost'}>Brouse All Courses</Button>
                            </Link>
                            <Link to='/request'> 
                                <Button variant={'ghost'}>Request a Course</Button>
                            </Link>
                            <Link to='/contact'> 
                                <Button variant={'ghost'}>Contact Us</Button>
                            </Link>
                            <Link to='/about'> 
                                <Button variant={'ghost'}>About</Button>
                            </Link>

                            <HStack justifyContent={'space-evenly'} position={'absolute'} bottom={'2rem'} width={'80%'}>
                                {isAuthenticated ? 
                                    (<>
                                        <VStack>
                                            <HStack>
                                                <Link>
                                                    <Button variant={'ghost'} colorScheme='yellow'>
                                                        Profile
                                                    </Button>
                                                </Link>
                                                <Button>
                                                    <RiLogoutBoxLine/>
                                                    Logout
                                                </Button>
                                            </HStack>

                                            {
                                                user && user.role === 'admin' && <Link to='/admin/dashboard'>
                                                    <Button colorScheme='purple' variant={'ghost'}>
                                                        <RiDashboardFill style={{margin: '5px'}}/>
                                                        Dashboard
                                                    </Button>
                                                </Link>
                                            }

                                        </VStack>
                                    </>) : 
                                    (<>
                                        <Link to='/login'>
                                            <Button colorScheme='yellow'>Login</Button>
                                        </Link>

                                        <p>OR</p>

                                        <Link to='signup'>
                                            <Button colorScheme='yellow'>SignUp</Button>
                                        </Link>
                                    </>)
                                }
                            </HStack>
                        </VStack>
                        
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Header
