import { Box, Flex, Text, Link, Heading, Spacer, Input, Button } from '@chakra-ui/react'
import { FaFacebook, FaGithub } from "@react-icons/all-files/fa/FaBeer";
import React from 'react'

export default function Footer() {
	return (
		<div className="Footer">
			<Box bgColor="yellow.300" justifyContent="center" p="5">
				<Flex>
					<div className="Links">
						<Link mr="4" fontWeight="semibold">Facebook</Link>
						<Link mr="4" fontWeight="semibold">Github</Link>
						<Link mr="4" fontWeight="semibold">Instagram</Link>
					</div>
					<Spacer/>
					<Text>Created by Timothy Ganoza</Text>
				</Flex>
			</Box>
		</div>
	)
}
