import { Flex, Box, FormControl, FormLabel, Input, InputRightElement, InputGroup, Button, Divider, Heading, Text } from '@chakra-ui/react'
import React, { useState, set } from 'react'
import { FacebookLogoSmall } from '../../icons/Facebook'
import { GithubLogoSmall } from '../../icons/Github'
import { GoogleLogoSmall } from '../../icons/Google'
import { useForm } from "react-hook-form"

export default function SignUp() {
	const [showPassword, setShowPassword] = useState(false)

	const handlePasswordClick = () => setShowPassword(!showPassword);

	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting }
	} = useForm()

	const SignIn = (values) => {
		return new Promise((resolve) => {
			setTimeout(() => {
				alert(JSON.stringify(values, null, 2));
				resolve();
			},1);
		});
	}

	return (
		<div className="SignUpForm">
			<Flex justifyContent="center">
				<Box w="md" boxShadow="base" borderRadius="md" mt="50px">
					<Box p="5">
						<Heading mb="15" size="md">Sign Up</Heading>
						<Box className="Form">
							<form onSubmit={handleSubmit(SignIn)}>
								<FormControl id="useremail" mt="15">
									<FormLabel>Email</FormLabel>
									<Input placeholder="Email" id="email" {...register("email")} type="email" />
								</FormControl>

								<FormControl id="username" mt="15">
									<FormLabel>Name</FormLabel>
									<Input placeholder="Name" {...register("name")} type="text" />
								</FormControl>

								<FormControl id="userpassword" mt="15">
									<FormLabel>Passoword</FormLabel>
									<InputGroup>
										<Input type={showPassword ? "text" : "password"} placeholder="Password" {...register("password")} />
										<InputRightElement width="4.5rem">
											<Button h="1.75rem" size="sm" onClick={handlePasswordClick}>
												{showPassword ? "Hide" : "Show"}
											</Button>
										</InputRightElement>
									</InputGroup>
								</FormControl>

								<Box className="SignUpButton" mt="15" justifyContent="center">
									<Flex justifyContent="space-evenly">
										<Button w="md" type="submit" isLoading={isSubmitting}>Sign Up</Button>
									</Flex>
								</Box>

							</form>

						</Box>

						<Divider orientation="horizontal" mt="15" />

						<Box className="LoginWithOthers">
							<Flex mt="15" justifyContent="space-evenly" wrap="wrap">
								<Button w="lg" mt="1" colorScheme="red" leftIcon={<GoogleLogoSmall />}>Google</Button>
								<Button w="lg" mt="1" colorScheme="blue" leftIcon={<FacebookLogoSmall />}>Facebook</Button>
								<Button w="lg" mt="1" backgroundColor="black" color="white" colorScheme="blackAlpha" leftIcon={<GithubLogoSmall />}>Github</Button>
							</Flex>
						</Box>

						<Divider orientation="horizontal" mt="15" />

						<Box className="Support">
							<Flex justifyContent="center" mt="15">
								<Text>Support</Text>
							</Flex>
						</Box>
					</Box>
				</Box>
			</Flex>
		</div>
	)
}
