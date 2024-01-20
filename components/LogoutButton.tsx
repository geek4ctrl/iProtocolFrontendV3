"use client"

import {
  useTranslation,
  LanguageSwitcher,
  LinkWithLocale
} from "next-export-i18n";

interface LogoutButtonProps { }

export default function LogoutButton(props: LogoutButtonProps) {

  const { t } = useTranslation();

  return (
    <form action="/auth/sign-out" method="post">
      <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
        {t("logoutButtonKey")}
      </button>
    </form>
  )
}
