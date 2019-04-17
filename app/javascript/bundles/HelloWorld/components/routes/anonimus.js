import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { withCoreWrapperUser } from 'hocs/user'


const AnonimusRoute = ({
	is_auth,
	component: Component,
	path,
	exact,
	location: { state }
}) => <Route path={path} exact={exact} render={props => !is_auth ? <Component {...props} /> : <Redirect to={state && state.referer ? state.referer : '/'} />} /> 

export default withCoreWrapperUser(AnonimusRoute);

