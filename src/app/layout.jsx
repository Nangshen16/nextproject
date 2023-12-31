import './globals.css'
import { Nunito } from 'next/font/google'


export const metadata = {
    title: 'Twar Mae',
    description: 'Travel Apps',
}

const font= Nunito({
    subsets:["latin"],
})

export default function RootLayout({ children }) {
    return ( 
        <html lang = "en" >
             <body className = { font.className } > { children } </body> 
        </html>
    )
}