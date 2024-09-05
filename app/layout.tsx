import { ThemeProvider } from '@/components/providers/theme-provider'
import { ChildProps } from '@/types'
import type { Metadata } from 'next'
import { Crete_Round, Work_Sans } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'


const creteRound = Crete_Round({
	weight: ['400'],
	subsets: ['latin'],
	variable: '--font-creteRound',
})
const workSans = Work_Sans({
	weight: ['500', '600'],
	subsets: ['latin'],
	variable: '--font-workSans',
})

export const metadata: Metadata = {
	title: 'Ironblog',
	description:
		'mening shaxsiy blogim',
}

function RootLayout({ children }: ChildProps) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${creteRound.variable} ${workSans.variable} overflow-x-hidden`}
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					{children}

					<Toaster position='top-right' />
				</ThemeProvider>
			</body>
		</html>
	)
}

export default RootLayout
