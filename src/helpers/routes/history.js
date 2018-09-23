import createBrowserHistory from 'history/createBrowserHistory';
import createMemoryHistory from 'history/createMemoryHistory';

export default __CLIENT__ ? createBrowserHistory() : createMemoryHistory();
