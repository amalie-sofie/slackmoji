/**
 Image component, wraps around Next Image
 * @example
 * <ImageWrap
      src={''}
      width={3000}
      height={2000}
      alt=""
      cover //optional
      priority //optional
    />
 */

    import React, { useState } from 'react' // useEffect
    import PropTypes from 'prop-types'
    import classNames from 'classnames'
    import Image from 'next/image'
    
    const ImageWrap = ({
      alt,
      caption,
      className,
      classNameImg,
      cover,
      height,
      priority,
      src,
      width
    }) => {
      const [loaded, setLoaded] = useState(false)
    
      return (
        <figure
          className={classNames(
            'group',
            'flex flex-wrap w-full',
            'relative',
            className
          )}
        >
          {/* Next image component */}
          <Image
            alt={alt}
            className={classNames(
              // 'absolute inset-0',
              cover ? 'object-cover' : '',
              loaded ? 'opacity-100' : 'opacity-0',
              'transition-all duration-300 ease-out',
              classNameImg
            )}
            src={src}
            width={width}
            height={height}
            onLoad={() => setLoaded(true)}
            priority={priority}
          />
    
          {/* Loader */}
          {/* <div
            className={classNames(
              'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
            )}
          >
            Loading
          </div> */}
    
          {/* Caption */}
          {caption ? (
            <figcaption className={classNames('block')}>{caption}</figcaption>
          ) : (
            ''
          )}
        </figure>
      )
    }
    
    ImageWrap.defaultProps = {
      alt: 'A description of this image needs to be written.',
      width: 1000,
      height: 1000,
      priority: false
    }
    
    ImageWrap.propTypes = {
      alt: PropTypes.string.isRequired,
      caption: PropTypes.string,
      className: PropTypes.string,
      cover: PropTypes.bool,
      /** classnames that get passed down to the Next image component tag */
      classNameImg: PropTypes.string,
      height: PropTypes.number,
      width: PropTypes.number,
      src: PropTypes.string.isRequired,
      priority: PropTypes.bool
    }
    
    export default ImageWrap
    