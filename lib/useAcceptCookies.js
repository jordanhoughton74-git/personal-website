import Cookies from 'js-cookie'
import { useState, useEffect } from 'react'

const COOKIE_ACCEPT = 'accept_cookies'
const COOKIE_RESPONSE = 'cookie_response'

export const useAcceptCookies = () => {
    const [acceptedCookies, setAcceptedCookies] = useState(true)
  
  useEffect(() => {
    if (!Cookies.get(COOKIE_RESPONSE)) {
      setAcceptedCookies(false)
    }
  }, [])
  

    const acceptCookies = () => {
      setAcceptedCookies(true)
      Cookies.set(COOKIE_ACCEPT, 'accepted', { expires: 365 })
      Cookies.set(COOKIE_RESPONSE, 'accepted', {expires: 365})
      window.location.reload(false); 

    }

    const rejectCookies = () => {
        setAcceptedCookies(true)
        Cookies.set(COOKIE_RESPONSE, 'rejected', {expires: 365})
      }
  
    return {
      acceptedCookies,
      onAcceptCookies: acceptCookies,
      onRejectCookies: rejectCookies,
    }
  }
  
