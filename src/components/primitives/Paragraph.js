
import classNames from 'classnames'
import PropTypes from 'prop-types'

const Paragraph = ({ className, children, htmlContent, indent, serif }) => (
  <p className={classNames ('mb-12', serif ? 'font-serif' : 'font-text', indent ? 'indent-16' : '', className )}>
    {!htmlContent && children}
    {htmlContent && (<span dangerouslySetInnerHTML={htmlContent && { __html: htmlContent }} />)}
  </p>
)

Paragraph.defaultProps = { serif: false }

Paragraph.propTypes = {
  /** children */
  children: PropTypes.node,
  /** className */
  className: PropTypes.string,
  /** serif (default:false) */
  serif: PropTypes.bool,
  /** noIndent - false by default */
  noIndent: PropTypes.bool
}

export default Paragraph
