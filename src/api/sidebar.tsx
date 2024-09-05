import { MdDashboard } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import { TbReportSearch } from "react-icons/tb";

export const siderbaritems = [
  {
    heading: "Administration",
    sidebaritems: [
      {
        label: "Dashboard",
        icon: <MdDashboard />,
        link: "/dashboard",
      },

      {
        label: "Members",
        icon: <FaUserGroup />,
        link: "#",
      },
    ],
  },
  {
    heading: "Management",
    sidebaritems: [
      {
        label: "Request",
        icon: <FaRegClock />,
        link: "#",
      },

      {
        label: "Invoices",
        icon: <FaFileInvoiceDollar />,
        link: "#",
      },
      {
        label: "Transaction",
        icon: <GrTransaction />,
        link: "#",
      },
    ],
  },

  {
    heading: "Accounting",
    sidebaritems: [
      {
        label: "Reports",
        icon: <TbReportSearch />,
        link: "#",
      },
    ],
  },
];
