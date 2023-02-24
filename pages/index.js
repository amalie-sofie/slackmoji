//DDOY
import Head from 'next/head'

// Layout
import Header from '../src/components/layout/Header'
import Headings from '../src/components/layout/Headings'
import Footer from '../src/components/layout/Footer'
import Section from '../src/components/layout/Section'

// Primitives
import ImageCards from '../src/components/primitives/ImageCards'
import Paragraph from '../src/components/primitives/Paragraph'
import Text from '../src/components/primitives/Text'
import NavMenu from '../src/components/layout/NavMenu'
import { useState } from 'react'
import { emojiCards } from '../src/components/primitives/emojiCards'
import FilterKnapper from '../src/components/layout/FilterKnapper'
import LottieAnimation from '../src/components/primitives/LottieAni'

export default function Home() {

	const [menuIsOpen, setMenuIsOpen] = useState(false)
	const [sortedEmojiCards, setSortedEmojiCards] = useState(emojiCards)

	return (

		<div className="relative">

			<Head>

				<title>Vi lager tjenester og opplevelser som fungerer for… | Netlife</title>
				<link rel="icon" href="public/favicon.ico" />

			</Head>

			{menuIsOpen && <NavMenu onCloseMenu={() => setMenuIsOpen(false)} />}

			<main className="w-full px-5 py-5 bg-white h-screen col-span-12 md:col-span-6 text-black">

				<Section className="w-full flex flex-row pb-5">

					<Header onOpenMenu={() => setMenuIsOpen(true)} />

				</Section>

				<Section className="pb-5">

					<Headings className="text-lg">
						Slackmoji
					</Headings>

					<Paragraph className="lg:text-sm md:text-md font-thin md:w-1/2 sm:w-full">
						Dette er databasen for spesiallagde emojis til Slack. Det kommer nye med jevne mellomrom. God S.
						Du kan fint lage egne, men del gjerne i <Text className="font-line" href="https://netlifedesign.slack.com/archives/C025787FE">#slackmoji</Text> på Slack, så vi er sikre på at de ikke har en hvit kant.
					</Paragraph>

				</Section>

				<Section className="pb-5">

					<Headings className="text-sm">
						Kategorier
					</Headings>
					<FilterKnapper setSortedEmojiCards={setSortedEmojiCards}  />

				</Section>

				<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 pb-28">

					{sortedEmojiCards.map((emojiCard) => (
						<ImageCards
							imageSrc={emojiCard.imageSrc}
							imageAlt={emojiCard.imageAlt}
							emojiDescription={emojiCard.emojiDescription}
							emojiCategoryOne={emojiCard.emojiCategoryOne}
							emojiCategoryTwo={emojiCard.emojiCategoryTwo}
							emojiDownload={emojiCard.emojiDownload}
						/>
					))}

				</div>
						<div>
						<LottieAnimation />
						</div>
				<div>
					<Footer>
					</Footer>
				</div>

			</main>

		</div>

	)

}	