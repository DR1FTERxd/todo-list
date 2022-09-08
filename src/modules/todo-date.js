
import { formatDistanceToNow } from "date-fns"
import { deAT } from "date-fns/locale";

import { time_s } from './creating-todo'


function alertime() {
    
    const result = formatDistanceToNow(
        (new Date(), 'yyyy-MM-dd\'T\'HH:mm', { awareOfUnicodeTokens: true })
        )
    //document.getElementById('countdown').innerHTML = result;
    console.log(result)
    console.log(time_s.value)


    
}

//i will be proboably switching to date-fns because for this logic i cant. Make the Date read the time let element wich has the time built in but it cannot readit


function work3() {
    alertime()
   
}

export {work3, alertime}