import React from 'react'
import {Route, Link} from 'react-router-dom'

import {example as Props} from './01-props'
import {example as PropTypes} from './02-prop-types'
import {example as Styling} from './03-styling'
import {example as Composition} from './04-composition'
import {example as ComponentAPI} from './05-component-api'
import {example as State} from './06-state'
import {example as UncontrolledForm} from './07-uncontrolled-form'
import {example as ControlledForm} from './08-controlled-form'
import {example as DataFetching} from './09-data-fetching'
import {example as Hoc} from './10-hoc'
import {example as RenderProp} from './11-render-prop'

const exercises = [
  {title: 'Props', component: Props},
  {title: 'PropTypes', component: PropTypes},
  {title: 'Styling', component: Styling},
  {title: 'Composition', component: Composition},
  {title: 'Component API', component: ComponentAPI},
  {title: 'State', component: State},
  {title: 'Uncontrolled Form', component: UncontrolledForm},
  {title: 'Controlled Form', component: ControlledForm},
  {title: 'Data Fetching', component: DataFetching},
  {title: 'Higher Order Components', component: Hoc},
  {title: 'Render Props', component: RenderProp},
].map(e => ({
  ...e,
  slug: e.title
    .split(' ')
    .join('-')
    .toLowerCase(),
}))

function Exercises({match}) {
  return (
    <div>
      {exercises.map(({slug, component}) => (
        <Route key={slug} path={`/exercise/${slug}`} component={component} />
      ))}
      <Route
        exact
        path={match.url}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  )
}

function List() {
  return (
    <div>
      <ol style={{paddingLeft: 0}}>
        {exercises.map(({slug, title}) => (
          <li key={slug}>
            <Link to={`/exercise/${slug}`}>{title}</Link>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default Exercises

export {List}

// WORKSHOP_START
/*
eslint
no-unused-vars: 0,
*/
// WORKSHOP_END
