import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import "./widget.scss"


const Widget = ({ type }) => {
    //temporary
    const amount = 123
    let data;
    switch (type) {
        case "user":
            data={
                title: "Users",
                isMoney: false,
                link: "See all users",
                icon: <PersonOutlinedIcon className="icon" 
                style={{
                    color: "crimson",
                    backgroundColor: "rgba(255, 0, 0, 0.2)",
                  }} />,
            };
        break;
        case "order":
            data={
                title: "Orders",
                isMoney: false,
                link: "See all orders",
                icon: <ShoppingCartOutlinedIcon className="icon"
                style={{
                    backgroundColor: "rgba(218, 165, 32, 0.2)",
                    color: "goldenrod",
                  }} />,
            };
        break;
        case "earning":
            data={
                title: "Earnings",
                isMoney: true,
                link: "See earnings",
                icon: <MonetizationOnOutlinedIcon className="icon"
                style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }} />,
            };
        break;
        case "balance":
            data={
                title: "Balance",
                isMoney: true,
                link: "See balance",
                icon: <AccountBalanceWalletOutlinedIcon className="icon"
                style={{
                    backgroundColor: "rgba(128, 0, 128, 0.2)",
                    color: "purple",
                  }} />,
            };
        break;
        default:
        break;
    }

    console.log(data)
  return (
    <div className="widget">

        <div className="left">
            <span className="title"> {data.title} </span>
            <span className="counter">{data.isMoney && "£"}{amount}</span>
            <span className="link">{data.link}</span>
        </div>

        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpIcon />
                84%
            </div>
            {data.icon}
        </div>

    </div>
  )
}

export default Widget