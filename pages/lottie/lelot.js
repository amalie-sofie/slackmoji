//DDOY
import Head from 'next/head'

// Layout
import YHeader from '../../src/components/layout/YHeader'
import Headings from '../../src/components/layout/Headings'
import Footer from '../../src/components/layout/Footer'
import Section from '../../src/components/layout/Section'

// Primitives
import Paragraph from '../../src/components/primitives/Paragraph'
import NavMenu from '../../src/components/layout/NavMenu'
import { useState } from 'react'
import LottieAnimationOne from '../../src/components/primitives/LottieAni'
import LottieAnimationTwo from '../../src/components/primitives/LottieAnim'
import LottieAnimationThree from '../../src/components/primitives/LottieAnima'

export default function LeLot() {

	const [menuIsOpen, setMenuIsOpen] = useState(false)

	return (

		<div className="relative">

			<Head>

				<title>Vi lager tjenester og opplevelser som fungerer for… | Netlife</title>
				<link rel="icon" href="public/favicon.ico" />

			</Head>

			{menuIsOpen && <NavMenu onCloseMenu={() => setMenuIsOpen(false)} />}

			<main className="w-full px-5 py-5 bg-white h-screen col-span-12 md:col-span-6 text-black">

				<Section className="w-full flex flex-row pb-5">

					<YHeader onOpenMenu={() => setMenuIsOpen(true)} />

				</Section>

				<Section className="pb-5">

					<Paragraph className="lg:text-sm md:text-md font-thin md:w-1/2 sm:w-full">
						alt er work in progress! det skal være på engelsk, ikke norsk. lmao.
					</Paragraph>

				</Section>
				
						<Section>
						<LottieAnimationOne />
						</Section>
						<Section>
						<LottieAnimationThree />
						</Section>
						<Section>
						<LottieAnimationTwo />
						</Section>
				<div>
					<Footer>
					</Footer>
				</div>

			</main>

		</div>

	)

}	