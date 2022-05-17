import Link from "next/link";

export default function Nav() {
  return (
    <div >
        <ul>
            <li>
                <Link href='/'>Home</Link>
            </li>
            <li>
                <Link href='/about'>About</Link>
            </li>
            <li>
                <Link href='/apex'>ApexPage</Link>
            </li>
        </ul>
        <style jsx>
            {`
                li{
                    display: inline;
                    padding: 5px;
                }
            `}
        </style>
    </div>
  )
}
