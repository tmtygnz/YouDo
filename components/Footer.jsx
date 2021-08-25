import { Box, Flex, Text, Link, Heading, Spacer, Button, Divider, Select } from '@chakra-ui/react'
import { AiFillFacebook, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { LogoIcon } from "../icons/Logo"
import React from 'react'

export default function Footer() {
	return (
		<div className="Footer">
			<Box mr="300px" ml="300px">
				<Box p="5">
					<Divider />
					<Flex mt="5">
						<Box w="min">
							<Heading size="md">YouDo</Heading>
							<Select borderRadius="sm" mt="2">
								<option>English</option>
								<option>Tagalog</option>
							</Select>

							<Box mt="5">
								<Link mr="2">Privacy</Link>
								<Link mr="2">Terms</Link>
								<Link mr="2">Status</Link>
							</Box>
						</Box>
						<Spacer />
						<Box>
							<Heading size="sm" color="grey" fontWeight="normal">Developers</Heading>
							<Box className="Links" mt="2" fontWeight="semibold">
								<Box><Link>Documentation</Link></Box>
								<Box><Link>Getting Started</Link></Box>
								<Box><Link>Source Code</Link></Box>
							</Box>
						</Box>
						<Box ml="5">
							<Heading size="sm" color="grey" fontWeight="normal">Features</Heading>
							<Box className="Links" mt="2" fontWeight="semibold">
								<Box><Link>Templates</Link></Box>
								<Box><Link>Integrations</Link></Box>
							</Box>
						</Box>
						<Box ml="5">
							<Heading size="sm" color="grey" fontWeight="normal">Support</Heading>
							<Box className="Links" mt="2" fontWeight="semibold">
								<Box><Link>Help & Support</Link></Box>
								<Box><Link>Security</Link></Box>
							</Box>
						</Box>
					</Flex>
				</Box>
			</Box>

			<Box bgColor="gray.100" justifyContent="center" p="5" width="100vm" pos="sticky">
				<Box mr="300px" ml="300px">
					<Flex>
						<Text color="grey">2013-2020 YouDo&copy; All rights reserved </Text>
						<Spacer />
						<Box className="SocialLinks">
							<Flex>
								<Box className="Facebook">
									<AiFillFacebook size="25" color="gray" />
								</Box>
								<Box ml="2" className="Github">
									<AiFillGithub size="25" color="gray" />
								</Box>
								<Box ml="2" className="Instagram">
									<AiFillInstagram size="25" color="gray" />
								</Box>
							</Flex>
						</Box>
					</Flex>
				</Box>
			</Box >
		</div >
	)
}
