import React from 'react'

export default ({ ct, selectTask }) => {
  return (
    <nav className="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">
      <ul className="nav nav-pills flex-column">
        <li className={ (ct === 'ITEM_SUPPORT' ? "nav-item selected" : "nav-item") } onClick={ () => { selectTask('ITEM_SUPPORT') } }><a className="nav-link">Item Support</a></li>
        <li className={ (ct === 'ACCOUNT_SUPPORT' ? "nav-item selected" : "nav-item") } onClick={ () => { selectTask('ACCOUNT_SUPPORT') } }><a className="nav-link">Account Support</a></li>
        <li className={ (ct === 'UPDATE_USER' ? "nav-item selected" : "nav-item") } onClick={ () => { selectTask('UPDATE_USER') } }><a className="nav-link">Update User</a></li>
      </ul>
    </nav>
  )
}
