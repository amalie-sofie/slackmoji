/**
 * A preview card for each emoji!
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import ImageWrap from '../primitives/ImageWrap'
import Text from '../primitives/Text'

/** ImageCards 
 * @example
  <ImageCards
    imageSrc=""
    imageAlt=""
    emojiDescription=""
    emojiCategory=""
    emojiDownload=""
  >
*/

const ImageCards = ({
  emojiDescription,
  emojiCategoryOne,
  emojiCategoryTwo,
  emojiDownload,
  imageSrc,
  imageAlt,

}) => {

  return (

    <div className={classNames('rounded-xl mb-10 hover:bg-darkgrey hover:text-white flex flex-col justify-between')}>

      <ImageWrap
        className="mb-4 p-4 place-content-center border-b-2"
        src={imageSrc}
        alt={imageAlt}
        width={200}
        height={200}
      />

      <Text className="text-center text-xs border-b-2 border-dashed pb-4">{emojiDescription}</Text>
      <div className="text-center text-xs border-b-2 border-dashed pb-4 pt-4 font-line">
        <button className="px-2">{emojiCategoryOne}</button>
        <button className="px-2">{emojiCategoryTwo}</button>
      </div>
      <a className="text-center text-xs pb-4 pt-4 font-line" href={imageSrc} download>{emojiDownload}</a>

    </div>

  )

}

ImageCards.defaultProps = { level: 1, size: null, serif: false }

ImageCards.propTypes = {
  /** The heading string */
  emojiDescription: PropTypes.string,
  emojiCategoryOne: PropTypes.string,
  emojiCategoryTwo: PropTypes.string,
  emojiDownload: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default ImageCards
