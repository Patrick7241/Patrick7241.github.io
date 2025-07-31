// 添加Home组件导入
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import About from '../pages/About';
import BlogDetail from '../pages/BlogDetail';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/blog', element: <Blog /> },
  { path: '/article/:id', element: <BlogDetail /> },
  { path: '/about', element: <About /> },
];

export default routes;