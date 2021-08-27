import { Box } from '@chakra-ui/layout'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import LandingPage from '../components/LandingPage'
import Navigation from '../components/Navigation'
import styles from '../styles/Home.module.css'
import Cookies from 'universal-cookie'

export default function Home() {
	const cookies = new Cookies();
	const userdata = cookies.get('userdata')
	if(userdata){
		return(
			<h1>Hello world</h1>
		)
	}
	return (
		<div>
			<Navigation />
			<LandingPage/>
			<Footer/>
		</div>
	)
}
