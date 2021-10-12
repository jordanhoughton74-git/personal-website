import { useAcceptCookies } from "../lib/useAcceptCookies"
import s from './FeatureBar.module.css'
import cn from 'classnames'


export default function FeatureBar(){
    const { acceptedCookies, onAcceptCookies, onRejectCookies } = useAcceptCookies()


    if (acceptedCookies == true) {
        var hide = {acceptedCookies}
    }

    const rootClassName = cn(
        s.root,
        {
          transform: true,
          'translate-y-0 opacity-100': !hide,
          'translate-y-full opacity-0': hide,
        }
      )
    return (
        <div className={rootClassName} >
            <span>This site uses cookies to improve your experience. By clicking Accept Cookies, you agree to our Privacy Policy.</span>
            <button onClick={() => onRejectCookies()} className="p-3 bg-yellow-100 mx-2.5">Reject</button>
            <button onClick={() => onAcceptCookies()} className="p-3 bg-black text-white">Accept Cookies</button>
        </div>

    )
}