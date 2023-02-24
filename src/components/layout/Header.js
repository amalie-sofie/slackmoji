/**
 * Header
 */
import classNames from 'classnames'

export default function Header({ onOpenMenu}) {
  return (
    <header className={classNames("w-full")}>
      <div className="col-span-12 w-full flex flex-row">

        <div className="basis-1/3 text-left">
          <a className="text-md hover:text-green" href="https://netlife.com">
                  N
          </a>
        </div>

        <div className="basis-1/3 text-center">
          <a className="text-md font-line" href="https://netlife.com/merkevarehandboka/">
              Merkevarehandboka
          </a>
        </div>

        <div className="basis-1/3 text-right">
          <button onClick={onOpenMenu} className="text-md hover:text-green">
            ≡
          </button>
        </div>

      </div>
      
    </header>
  )
}

Header.defaultProps = { }
