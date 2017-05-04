import React from 'react'

export default ({ ct, selectTask }) => {
  var tasks = [
    { name: 'ITEM_SUPPORT', display_name: 'Item Support' },
    { name: 'LEGAL_ENTITY_SUPPORT', display_name: 'Legal Entity Support' },
    { name: 'ACCOUNT_SUPPORT', display_name: 'Account Support' },
    { name: 'MARKETPLACE_SUPPORT', display_name: 'Marketplace Support' },
  ];
  return (
    <nav className="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">
      <ul className="nav nav-pills flex-column">
        {
          tasks.map((task, index) => {
            let className = ct === task.name
              ? "nav-item selected" 
              : "nav-item";
              
            return (
              <li className={ className } 
                  onClick={ () => { selectTask(task.name) } }
                  key={ index }>
                  <a className="nav-link">{ task.display_name }</a>
              </li>
            );
          })
        }
      </ul>
    </nav>
  )
}
