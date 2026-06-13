import { Button } from '@/components/ui/button'
import Link from 'next/link'

import { BookOpen } from 'lucide-react'
import { ModeToggle } from './mode-toggle'

export default function Navbar() {
  return (
    <header className='sticky top-0 z-50 border-b bg-background'>
      <div className='container mx-auto flex h-16 items-center justify-between px-6'>
        <div className='flex items-center gap-2'>
          <BookOpen className='h-7 w-7 text-blue-600' />
          <span className='font-bold text-xl'>DevLearn</span>
        </div>

        <nav className='hidden md:flex items-center gap-8'>
          <Link href='/'>Home</Link>
          <Link href='/'>Tutorials</Link>
          <Link href='/'>Stories</Link>
          <Link href='/'>Dashboard</Link>
          <Link href='/'>About</Link>
        </nav>

        <div className='flex items-center gap-3'>
          <ModeToggle />

          <Button>
            <Link href='/login'>Login</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
