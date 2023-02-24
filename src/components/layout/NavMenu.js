import classNames from 'classnames'
import propTypes from 'prop-types'
import Paragraph from '../primitives/Paragraph'

export default function NavMenu({onCloseMenu}) {

  return (
    <main className={classNames("col-span-12 w-full h-screen fixed z-50 bg-green px-5 py-5 grid grid-flow-row auto-rows-max")}>

      <header className="py-4">
        
        <div className="flex flex-row">

          <div className="basis-1/2 text-left">
            <a className="text-md hover:text-green" href="https://netlife.com">
                    Netlife
            </a>
          </div>

          <div className="basis-1/2 text-right">
            <button onClick={onCloseMenu} className="text-md" id="nav-overlay" href="#overlay" aria-controls="nav-overlay" aria-label="Meny" >
              ≡
            </button>
          </div>
        </div>
        
      </header>

      <ul className="lg:text-md md:text-sm font-line">
        
        <li>
          <a href="https://www.netlife.com/tjenester">Tjenester</a>
        </li>
        
        <li>
          <a href="https://www.netlife.com/referanser">Referanser</a>
        </li>
        
        <li>
          <a href="https://www.netlife.com/kurs-og-arrangementer">Kurs og arrangementer</a>
        </li>
        
        <li>
          <a href="https://www.netlife.com/om-oss">Om oss</a>
        </li>
        
        <li>
          <a href="https://www.netlife.com/folka">Folka i Netlife</a>
        </li>
      
      </ul>
      
      <footer id="footer">
          
          <div className="flex flex-col md:flex-row flex-wrap">
            
            <div>
              
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
      
      </footer>
    
    </main>

  )

}

NavMenu.propTypes = {
  className:propTypes.string
}