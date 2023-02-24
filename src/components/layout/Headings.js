/**
 * Headings
 * Topp av side <3
 */

import classNames from 'classnames'
import PropTypes from 'prop-types'

const Headings =({ className, children}) => (
    <section className={classNames('w-full pb-8 md:pd-16', className)}>
        {children}
    </section>
)

Headings.propTypes = {
    /** children */
    children:PropTypes.node,
    /** className */
    className:PropTypes.string
}

export default Headings
