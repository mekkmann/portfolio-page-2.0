import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto p-6 mt-20 text-lg">
      <h1 className="text-3xl font-semibold mb-6">Contact</h1>
      <div className='flex items-center space-x-4 mb-4'>
        <Mail/>
        <Link className="text-gray-700 hover:underline" href="mailto:alex.p.liljekvist@gmail.com">
          alex.p.liljekvist@gmail.com
        </Link>
      </div>
      <div className='flex items-center space-x-4 mb-4'>
        <Github/>
        <Link className="text-gray-700 hover:underline" href="https://github.com/mekkmann" target='_blank'>
          mekkmann
        </Link>
      </div>
      <div className='flex items-center space-x-4 mb-4'>
        <Linkedin/>
        <Link className="text-gray-700 hover:underline" href="https://www.linkedin.com/in/pontus-liljekvist-b7224517a/" target='_blank'>
          Pontus (Alexander) Liljekvist
        </Link>
      </div>
    </main>
  );
}