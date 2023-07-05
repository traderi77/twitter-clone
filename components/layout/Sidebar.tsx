import {BsHouseFill, BsBellFill} from "react-icons/bs"
import {FaUser} from "react-icons/fa"




const SideBar = () => {
    const items = [
        {
            label: "Home",
            href: "/",
            icon: BsHouseFill
        },
        {   
            label: "Notifications", 
            href: "/notifications",
            icon: BsBellFill
        },
        {
            label: "Profile", 
            href: "/users/123",
            icon: FaUser
        }
    ]

    return (
      <div></div>
    );
}

export default SideBar;

