import {NextResponse} from "next/server";
import type {NextRequest} from "next/server";

const middleware = (req:NextRequest)=> {
    const user = null;

    
    if(!user){
        return NextResponse.redirect(new URL('/login', req.url))
    }

    return NextResponse.next()
}

export const config = {
    
    matcher: ['/dashboard', '/dashboard/:path*']
}

export default middleware