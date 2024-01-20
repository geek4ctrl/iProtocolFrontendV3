"use client"

import {
    useTranslation,
    LanguageSwitcher,
    LinkWithLocale
} from "next-export-i18n";

export default function AuthenticatedUserDashboardTitle() {

    const { t } = useTranslation();

    return (
        <div className='relative max-w-xl mx-auto sm:text-center'>
            <h3 className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
                {t("dashboardKey")}
            </h3>
            <div className='mt-3 max-w-xl'>
                <h1>
                    {t("dashboardTitleKey")}
                </h1>
            </div>
        </div>
    )

}