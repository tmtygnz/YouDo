import {
	Flex,
	Box,
	Link,
	Button,
	Divider,
	Heading,
} from '@chakra-ui/react'
import React, { useState, set } from 'react'
import { Goolge } from '../../util/CreateAccount'
import Cookies from 'universal-cookie'

export default function SignUp(props) {

	const cookies = new Cookies();
	let a = cookies.get('userdata')
	console.log(a)
	const [value, setValue] = useState()

	const GetGoole = async (values) => {
		let a = await Goolge()
		setValue(JSON.stringify(a))
		cookies.set('userdata', a, {path:'/'})
		console.log(cookies.get('userdata'))
	}

	return (
		<div className="SignUpForm">
			<Box h="100vh">
				<Flex justifyContent="center">
					<Box w="lg" boxShadow="base" borderRadius="sm" mt="50px" overflow="hidden">
						<Box p="5">
							<Heading size="md">Sign Up</Heading>
							<Box className="SignUpButtons" mt="5">
								<Flex justifyContent="center" wrap="wrap">
									<Button colorScheme="red" w="lg" variant="outline" borderRadius="xs" mt="1"
										onClick={GetGoole}>Google</Button>
									<Button colorScheme="facebook" w="lg" variant="outline" borderRadius="xs" mt="1"
										isDisabled={true}>Facebook</Button>
									<Button colorScheme="twitter" w="lg" variant="outline" borderRadius="xs" mt="1"
										isDisabled={true}>Github</Button>
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
										tests
									</Box>
								</Flex>
							</Box>
						</Box>
					</Box>
				</Flex>
			</Box>
		</div>
	)
}

