import { Link } from "react-router-dom";

export default function SidebarLink({Icon,text,to}) {
  return (
    <Link to={to} className="text-[#d9d9d9] flex items-center justify-center xl:justify-start text-xl space-x-3 hover:bg-slate-800 hover:rounded-full px-4 py-2 w-fit">
      <Icon />
      <span className="hidden xl:inline">{text}</span>
    </Link>
  );
}
