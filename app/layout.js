import TopNav from './components/TopNav';
import './globals.css'
import "bootstrap-material-design/dist/css/bootstrap-material-design.min.css";



export const metadata = {
  title: 'Next Blog',
  description: 'Next Blog',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >         
      <TopNav/>
      {children}
      </body>
    </html>
  )
}
