import Image from "next/image"
import Link from "next/link"
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";









const Navbar = async () => {

    const session = await getServerAuthSession();

    return (
        <div className='fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[10] py-2'>
     
      <div className='container max-w-7xl h-full mx-auto flex items-center justify-between gap-2'>
{/* logo */}
<Link href="/">

    <Image
    src="assets/images/logo.png"  
    alt="Logo" 
    width={48} height={48} layout="responsive"

   
    />
    
    


<p className='hidden text-zinc-700 text-sm font-medium md:block'>Swipe</p>

</Link>
        {/* search bar */}
                {/* actions */}
                <Link
              href={session ? "/" : "/api/auth/signin"}
              className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
            >
              {session ? "/" : "Sign in"}
            </Link>

        </div>
        </div>
  )
}

export default Navbar