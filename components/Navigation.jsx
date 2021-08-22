import React, { useState, useRef } from 'react'
import {
	Box,
	Flex,
	Link,
	Spacer,
	Button,
	Heading,
	useDisclosure,
	Modal,
	ModalBody,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	FormControl,
	FormLabel,
	Input,
	ModalFooter,
	InputGroup,
	InputRightElement
} from '@chakra-ui/react'

export default function Navigation() {

	const { isOpenSignUp, onOpenSignUp, onCloseSignUp } = useDisclosure()
	const [showPassword, setShowPassWord] = useState(false)
	
	const initialRefSignUp = useRef()
	const finalRefSignUp = useRef()

	const handleClickShow = () => setShowPassWord(!showPassword)

	return (
		<div className="NavigationBar">
				<Box p="5" pos="fixed" width="100vW">
					<Flex mr="30" ml="30">
						<Box p="2">
							<Heading size="md">YouDo</Heading>
						</Box>
						<Box p="2">
							<Link>Features</Link>
						</Box>
						<Box p="2">
							<Link>Pricing</Link>
						</Box>
						<Spacer />
						<Box>
							<Button colorScheme="yellow" mr="4" onClick={onOpenSignUp} ref={finalRefSignUp}>
								Sign Up
							</Button>
							<Button colorScheme="yellow">Log in</Button>
						</Box>
					</Flex>
				</Box>
			</div>
	)
}
