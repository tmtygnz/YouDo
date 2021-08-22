import { Box } from '@chakra-ui/layout'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import LandingPage from '../components/LandingPage'
import Navigation from '../components/Navigation'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<div>
			<Navigation />
			<LandingPage/>
			<Footer/>
		</div>
	)
}
