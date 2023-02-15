'use client'
import { AuthContextProvider } from '@/hooks/useAuth';
import StyledComponentsRegistry from '@/services/registry';
import GlobalStyles from '@/styles/global';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { inter, lexend } from './fonts';


export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en" className={`${inter.variable} ${lexend.variable}`}>
        <head />
        <body>
          <ToastContainer />
          <AuthContextProvider>
            <StyledComponentsRegistry>
              <GlobalStyles />
              {children}
            </StyledComponentsRegistry>
          </AuthContextProvider>
        </body>
      </html>
    </>
  )
}
