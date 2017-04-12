import React from 'react'
import SelectTask from './SelectTask/index'
import ItemSupport from './ItemSupport/index'
import AccountSupport from './AccountSupport/index'
import LegalEntitySupport from './LegalEntitySupport/index'
import MarketplaceSupport from './MarketplaceSupport/index'

const TASKS = {
  'ITEM_SUPPORT': ItemSupport,
  'ACCOUNT_SUPPORT': AccountSupport,
  'LEGAL_ENTITY_SUPPORT': LegalEntitySupport,
  'MARKETPLACE_SUPPORT': MarketplaceSupport,
}

export default (props) => {
  const task = props.task
  const CurrentTask = TASKS[task.name] || SelectTask

  return (
    <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
      <CurrentTask { ...props } />
    </main>
  )
}