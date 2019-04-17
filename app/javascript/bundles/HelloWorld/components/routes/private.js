import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { withCoreWrapperUser } from 'hocs/user'
import Loader from 'components/loader'


const PrivateRoute = ({
	is_auth,
	component: Component,
	path,
	loaded,
	exact
}) => {
	if (!loaded) return <Loader type="spin" />
	return (
		<Route {...{ path, exact }} 
			render={ props => {
				if (is_auth) return <Component {...props} />
				return (
					<Redirect to={{
						pathname: '/user/sign_in',
						state: {
							referer: window.location.pathname + window.location.search
						}
					}} />
				)
			} } />
	)
}


export default withCoreWrapperUser(PrivateRoute);

