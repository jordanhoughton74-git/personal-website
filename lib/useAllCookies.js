import Cookies from 'js-cookie'
import { useState, useEffect } from 'react'

const COOKIE_ACCEPT = 'accept_cookies'

export const useAllCookies = () => {

    const [allCookies, setAllCookies] = useState(false)
  
    useEffect(() => {
      if (Cookies.get(COOKIE_ACCEPT)) {
        setAllCookies(true)
      }
    }, [])

      return{
          allCookies,
    }
}