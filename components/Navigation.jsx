import React from 'react'
import { Box, Flex, Link, Spacer, Button, Heading } from '@chakra-ui/react'

export default function Navigation() {
	return (
		<div>
			<Box boxShadow="base" p="5">
				<Flex mr="10" ml="10">
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
						<Button colorScheme="yellow" mr="4">
							Sign Up
						</Button>
						<Button colorScheme="yellow">Log in</Button>
					</Box>
				</Flex>
			</Box>
		</div>
	)
}
