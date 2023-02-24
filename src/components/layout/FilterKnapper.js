import { emojiCards } from "../primitives/emojiCards"
import Paragraph from "../primitives/Paragraph"

const filterValues = [...new Set(emojiCards.map((card) => card.emojiCategoryOne))]
const filterCategories = [...new Set(emojiCards.map((card) => card.emojiCategoryTwo))]
const sortedFilterValues = filterValues.sort()
const sortedFilterCategories = filterCategories.sort()

export default function FilterKnapper({ setSortedEmojiCards }) {
  return (
    <Paragraph className="lg:text-sm md:text-md font-thin w-full">
        <button className="pr-5" onClick={() => {
          setSortedEmojiCards(emojiCards)
        }}>Alle</button>
      {filterValues.map((value) => (
        <button className="pr-5" onClick={() => {
          setSortedEmojiCards(emojiCards.filter((card) => (card.emojiCategoryOne === value )))
        }}>{value}</button>
      ))}
      {filterCategories.map((value) => (
        <button className="pr-5" onClick={() => {
          setSortedEmojiCards(emojiCards.filter((card) => (card.emojiCategoryTwo === value )))
        }}>{value}</button>
      ))}
    </Paragraph>
  )
}