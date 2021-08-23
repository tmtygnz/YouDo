import { Box, Flex, Text, Link, Heading, Spacer, Input, Button, OrderedList } from '@chakra-ui/react'
import { FaFacebook, FaGithub } from "@react-icons/all-files/fa/FaBeer";
import React from 'react'

export default function Footer() {
	return (
		<div className="Footer">
			<Box bgColor="gray.300" justifyContent="center" p="5" width="100vm" pos="sticky">
				<Box mr="300px" ml="300px">
					<Flex>
						<Box className="APIFooter" mr="15">
						<Heading fontWeight="semibold" fontSize="md" color="gray">DEVELOPERS</Heading>
							<Box className="SubItems" mt="2">
								<Box><Link>API Getting Started</Link></Box>
								<Box><Link>API Docs</Link></Box>
								<Box><Link>API Source Code</Link></Box>
							</Box>
						</Box>
						<Box className="AboutUs">
							<Heading fontWeight="semibold" fontSize="md" color="gray">ABOUT YOUDO</Heading>
							<Box className="SubItems" mt="2">
								<Box><Link>Home</Link></Box>
								<Box><Link>Github</Link></Box>
								<Box><Link>Twitter</Link></Box>
								<Box><Link>Contacts</Link></Box>
							</Box>
						</Box>
					</Flex>
				</Box>
			</Box >
		</div >
	)
}
