/**
 * Section
 * En seksjon med padding :--)
 */

import classNames from 'classnames'
import PropTypes from 'prop-types'

const Section =({ className, children}) => (
    <section className={classNames( 'px-10 pt-7', className)}>
        {children}
    </section>
)

Section.propTypes = {
    /** children */
    children:PropTypes.node,
    /** className */
    className:PropTypes.string
}

export default Section
