import { Box, Flex, Text, Link, Heading, Spacer, Input, Button, OrderedList } from '@chakra-ui/react'
import { FaFacebook, FaGithub } from "@react-icons/all-files/fa/FaBeer";
import React from 'react'

export default function Footer() {
	return (
		<div className="Footer">
			<Box bgColor="yellow.300" justifyContent="center" p="5" width="100vm" pos="sticky">
				<Box mr="30" ml="30">
					<Flex>
						<Box className="APIFooter" mr="15">
							<Text fontWeight="semibold">Developers</Text>
							<Box className="SubItems">
								<Box><Link>API Getting Started</Link></Box>
								<Box><Link>API Docs</Link></Box>
								<Box><Link>API Source Code</Link></Box>
							</Box>
						</Box>
						<Box className="AboutUs">
							<Text fontWeight="semibold">About Us</Text>
							<Box className="SubItems">
								<Box><Link>YouDo</Link></Box>
								<Box><Link>Facebook</Link></Box>
								<Box><Link>Twitter</Link></Box>
							</Box>
						</Box>
					</Flex>
				</Box>
			</Box >
		</div >
	)
}
