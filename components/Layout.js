import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
    const router = useRouter();

    const menuItems = [
        {
            href: '/',
            title: 'Homepage',
        },
        {
            href: '/about',
            title: 'About',
        },
        {
            href: '/contact',
            title: 'Contact',
        },
    ];

    return (
        <div className='min-h-screen flex flex-col'>
            <header className='bg-blue-200 sticky top-0 h-14 flex justify-center items-center font-semibold uppercase'>
                Next.js sidebar menu
            </header>
            <div className='flex flex-col md:flex-row flex-1'>
                <aside className='bg-gray-900 w-full md:w-60'>
                    <nav>
                        <ul>
                            {menuItems.map(({ href, title }) => (
                                <li className='m-2' key={title}>
                                    <Link href={href}>
                                        <a
                                            className={`flex p-2 bg-blue-200 rounded hover:bg-red-400 cursor-pointer ${router.asPath === href && 'bg-red-600 text-white'
                                                }`}
                                        >
                                            {title}
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>
                <main className='flex-1'>{children}</main>
            </div>
        </div>
    );
}