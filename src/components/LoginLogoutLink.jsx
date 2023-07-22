import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client"
import { useEffect, useMemo, useState } from "react"

const LoginButton = () => {
  return (
    <Link
      href="/api/auth/login"
      className="whitespace-nowrap relative block px-3 py-2 transition hover:text-teal-500"
    >
      Login
    </Link>
  )
};

const LogoutButton = () => {
  return (
    <Link
      href="/api/auth/logout"
      className="whitespace-nowrap relative block px-3 py-2 transition hover:text-teal-500"
    >
      Log out
    </Link>
  )
}

const LoginLogoutLink = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const { user, isLoading } = useUser();

  useEffect(() => {
    setIsAuthenticated(!isLoading && !!user)
  }, [user, isLoading])

  return (
    isAuthenticated ?
      <LogoutButton /> :
      <LoginButton />
  )
}

export default LoginLogoutLink
