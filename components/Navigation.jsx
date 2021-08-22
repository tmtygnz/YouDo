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

	const { isOpen, onOpen, onClose } = useDisclosure()
	const [showPassword, setShowPassWord] = useState(false)
	
	const initialRef = useRef()
	const finalRef = useRef()

	const handleClickShow = () => setShowPassWord(!showPassword)

	return (
		<>
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
							<Button colorScheme="yellow" mr="4" onClick={onOpen} ref={finalRef}>
								Sign Up
							</Button>
							<Button colorScheme="yellow">Log in</Button>
						</Box>
					</Flex>
				</Box>
			</div>

			<div className="SignUpModal">
				<Modal
					isOpen={isOpen}
					initialRef={initialRef}
					finalRef={finalRef}
					onClose={onClose}
				>
					<ModalContent>
						<ModalHeader>Sign Up</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<FormControl>
								<FormLabel>
									First Name
								</FormLabel>
								<Input placeholder="First name" />
							</FormControl>

							<FormControl>
								<FormLabel>
									Email
								</FormLabel>
								<Input placeholder="First name" />
							</FormControl>

							<FormControl>
								<FormLabel>
									Password
								</FormLabel>
								<InputGroup size="md">
									<Input
										pr="4.5rem"
										type={showPassword ? "text" : "password"}
										placeholder="Enter password"
									/>
									<InputRightElement width="4.5rem">
										<Button h="1.75rem" size="sm" onClick={handleClickShow}>
											{showPassword ? "Hide" : "Show"}
										</Button>
									</InputRightElement>
								</InputGroup>
							</FormControl>
						</ModalBody>

						<ModalFooter>
							<Button colorScheme="blue" mr={3}>
								Save
							</Button>
							<Button onClick={onClose}>Cancel</Button>
						</ModalFooter>
					</ModalContent>
				</Modal>
			</div>
		</>
	)
}
