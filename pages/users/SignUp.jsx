import {
	Flex,
	Box,
	Link,
	Button,
	Divider,
	Heading,
	Text,
	FormErrorMessage
} from '@chakra-ui/react'
import React, { useState, set } from 'react'
import { FacebookLogoSmall } from '../../icons/Facebook'
import { GithubLogoSmall } from '../../icons/Github'
import { GoogleLogoSmall } from '../../icons/Google'
import { useForm } from "react-hook-form"
import axios from 'axios'

export default function SignUp() {
	const [showPassword, setShowPassword] = useState(false)

	const handlePasswordClick = () => setShowPassword(!showPassword);

	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting }
	} = useForm()

	const GetGoole = (values) => {
		alert(values)
		axios.get("/api/CreateUserGoogle")
	}

	return (
		<div className="SignUpForm">
			<Flex justifyContent="center">
				<Box w="lg" boxShadow="base" borderRadius="sm" mt="50px">
					<Box p="5">
						<Heading size="md">Sign Up</Heading>
						<Box className="SignUpButtons" mt="5">
							<Flex justifyContent="center" wrap="wrap">
								<Button colorScheme="red" w="lg" variant="outline" borderRadius="sm" mt="1"
								onClick={GetGoole}>Google</Button>
								<Button colorScheme="facebook" w="lg" variant="outline" borderRadius="sm" mt="1">Facebook</Button>
								<Button colorScheme="twitter" w="lg" variant="outline" borderRadius="sm" mt="1">Github</Button>
							</Flex>
						</Box>
						<Box mt="15" fontSize="sm" className="TermsAndPrivacy">
							By continuing with Google, Github, and Facebook, you agree to our
							<Link color="gray"> Privacy Policy</Link> and <Link color="gray">Terms of Service</Link>
						</Box>
						<Divider mt="15" />
						<Box mt="15" fontSize="sm" className="AlreadySignedUp">
							<Flex justifyContent="center">
								<Box>
									If you already Signed Up <Link color="gray"> Go Here To Login</Link>
								</Box>
							</Flex>
						</Box>

					</Box>
				</Box>
			</Flex>
		</div>
	)
}
