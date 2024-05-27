import Logo from "./Logo";

export default function Footer() {
       return(
        <div className="w-3/5 p-10 mb-4 flex justify-between items-center bg-gradient-to-r from-blue-950/[.80] rounded-md border border-l-slate-50/[.60] border-y-slate-50/[.30] border-r-slate-50/[.10] text-slate-50 ">
            <Logo />
            <div>
                <p>Company Inc., 8901 Marmora Road, Glasgow, D04 89GR</p>
                <p>Call us now toll free: (800)2345-6789</p>
                <p>Customer support: support@demolink.org</p>
                <p>Skype: sample-username</p>
            </div>
        </div>
       )
}