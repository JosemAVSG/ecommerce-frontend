import {NextResponse} from "next/server";

const middleware = (req)=> {
    
    if (req.nextUrl.pathname === '/') {
        return NextResponse.redirect('/home')
    }
    return NextResponse.next()
}

export const config = {
    matcher: ['/dashboard']
}

export default middleware