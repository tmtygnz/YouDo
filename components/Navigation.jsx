import React, { useState, useRef } from 'react'
import {
	Box,
	Flex,
	Link,
	Spacer,
	Button,
	Heading,
	useDisclosure,
	Menu,
	MenuItem,
	MenuButton,
	MenuList,
	Divider
} from '@chakra-ui/react'

export default function Navigation() {

	const { isOpenSignUp, onOpenSignUp, onCloseSignUp } = useDisclosure()
	const [showPassword, setShowPassWord] = useState(false)
	
	const initialRefSignUp = useRef()
	const finalRefSignUp = useRef()

	const handleClickShow = () => setShowPassWord(!showPassword)

	return (
		<div className="NavigationBar">
				<Box p="5" pos="fixed" width="100vW" background="white" boxShadow="base" >
					<Flex mr="300px" ml="300px" justifyContent="space-between">
						<Box p="2">
							<Heading size="md">YouDo</Heading>
						</Box>
						<Box p="2">
							<Link>Features</Link>
						</Box>
						<Box p="2">
							<Link>Pricing</Link>
						</Box>
						<Box p="2">
							<Menu>
								<MenuButton as={Link}>
									Developers
								</MenuButton>
								<MenuList>
									<MenuItem>API Documentation</MenuItem>
									<MenuItem>API Getting Started Guide</MenuItem>
									<MenuItem>API Source Code</MenuItem>
								</MenuList>
							</Menu>
						</Box>

						<Spacer />
						<Box>
							<Button colorScheme="red" mr="4" onClick={onOpenSignUp} ref={finalRefSignUp}>
								Sign Up
							</Button>
							<Button colorScheme="twitter">Log in</Button>
						</Box>
					</Flex>
				</Box>
			</div>
	)
}
