/**
 * Footer
 */
import classNames from 'classnames'

import Paragraph from '../primitives/Paragraph'

export default function Footer() {
  return (
    <footer
      className={classNames(
        'w-full',
        'pt-8 lg:pt-16',
      )}
      id="footer"
    >
          <div className="col-span-12">
            <div className="flex flex-col md:flex-row flex-wrap gap-y-8 mb-28 pt-28 border-t-2">
              <div
                className="
                  w-full md:w-1/2 xl:w-1/4
                  mt-4 md:mt-0
                  mb-8 md:mb-0
                "
              >
                <Paragraph>
                    <a className="text-sm font-line" href="https://netlife.com/kontakt">Kontakt</a> 
                    <br />
                    <a className="text-sm font-line" href="https://netlife.com/jobb-hos-oss">Jobb hos oss</a>
                </Paragraph>
								<Paragraph>
									<a className="text-sm font-line" href="https://netlife.com/blogg">Fagbloggen vår</a>
									<br />
									<a className="text-sm font-line" href="https://netlife.com/nyhetsbrev">Meld deg på nyhetsbrev</a>
                </Paragraph>
								<Paragraph>
									<a className="text-sm font-line" href="https://netlife.com/personvern-og-cookies">Personvern og cookies</a>
                </Paragraph>
              </div>
            </div>
        </div>
    </footer>
  )
}

Footer.defaultProps = { }
