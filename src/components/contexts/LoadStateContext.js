import React from 'react';

const LoadStateContext = React.createContext(false);

const withLoadState = Component => props => (
	<LoadStateContext.Consumer>
    	{ context => <Component {...props} context={context}/>}
    </LoadStateContext.Consumer>
)

export default LoadStateContext;
export { withLoadState }