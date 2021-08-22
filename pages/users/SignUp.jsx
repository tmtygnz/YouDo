import { Flex, Box, FormControl, FormLabel, Input, InputRightElement, InputGroup, Button, Divider, Heading, Text } from '@chakra-ui/react'
import React, { useState, set } from 'react'


export default function SignUp() {
	const [showPassword, setShowPassword] = useState(false)

	const handlePasswordClick = () => setShowPassword(!showPassword);

	return (
		<div>
			<Flex justifyContent="center">
				<Box w="md" boxShadow="base" borderRadius="md" mt="50px">
					<Box p="5">
						<Heading mb="15">Sign Up</Heading>
						<div className="Form">
							<FormControl>
								<FormLabel>Email</FormLabel>
								<Input placeholder="Email" />
							</FormControl>

							<FormControl>
								<FormLabel>Name</FormLabel>
								<Input placeholder="Name" />
							</FormControl>

							<FormControl>
								<FormLabel>Passoword</FormLabel>
								<InputGroup>
									<Input type={showPassword ? "text" : "password"} placeholder="Password" />
									<InputRightElement width="4.5rem">
										<Button h="1.75rem" size="sm" onClick={handlePasswordClick}>
											{showPassword ? "Hide" : "Show"}
										</Button>
									</InputRightElement>
								</InputGroup>
							</FormControl>
						</div>

						<Divider orientation="horizontal" mt="15" />

						<div className="LoginWithOthers">
							<Flex mt="15" justifyContent="space-evenly" wrap="wrap">
								<Button w="lg" mt="1">Google</Button>
								<Button w="lg" mt="1">Facebook</Button>
								<Button w="lg" mt="1">Github</Button>
							</Flex>
						</div>

						<Divider orientation="horizontal" mt="15" />

						<div className="Support">
							<Flex justifyContent="center" mt="15">
								<Text>Support</Text>
							</Flex>
						</div>
					</Box>
				</Box>
			</Flex>
		</div>
	)
}
