export const Spinner = ({children}) => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{"height": "100px"}}>
      <div className="spinner-border" role="status">
        <span className="sr-only">{children}</span>
      </div>
    </div>
  )
}
