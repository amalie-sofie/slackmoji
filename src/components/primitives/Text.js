
import classNames from 'classnames'
import PropTypes from 'prop-types'

const Text = ({ className, children, htmlContent, indent, serif }) => (
  <text className={classNames (serif ? 'font-serif' : 'font-text', indent ? 'indent-16' : '', className )}>
    {!htmlContent && children}
    {htmlContent && (<span dangerouslySetInnerHTML={htmlContent && { __html: htmlContent }} />)}
  </text>
)

Text.defaultProps = { serif: false }

Text.propTypes = {
  /** children */
  children: PropTypes.node,
  /** className */
  className: PropTypes.string,
  /** serif (default:false) */
  serif: PropTypes.bool,
  /** noIndent - false by default */
  noIndent: PropTypes.bool
}

export default Text
