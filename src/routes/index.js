// Layouts
import { HeaderOnly } from '~/components/Layout/';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// Public Route
const publishRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

// Private Routes | Login
const privateRoutes = [];

export { publishRoutes, privateRoutes };
