"use client"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
    useTranslation,
    LanguageSwitcher,
    LinkWithLocale
} from "next-export-i18n";

interface NavigationItem {
    // Define the structure of a navigation item as needed
    title: string;
    // Add more properties as needed
}

interface NavigationBarLanguagesClientComponentProps {
    item: NavigationItem;
    idx: number;
}

export default function NavigationBarLanguagesClientComponent({ item, idx }: { item: any, idx: any }) {

    const { t } = useTranslation();

    const notify = () => toast("Internationalization hasn't been applied");

    return (
        <li key={idx} className="text-gray-700 hover:text-indigo-600"
        // onClick={notify}
        >
            {/* <ToastContainer /> */}
            {/* <a href="javascript:void(0)" className="block">
                {item.title}
            </a> */}

            <nav>
                <LanguageSwitcher lang={item.lang}>{item.title}</LanguageSwitcher>
                {/* <LanguageSwitcher lang="en">English</LanguageSwitcher> */}
            </nav>
        </li>
    )
}
