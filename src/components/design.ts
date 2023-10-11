/*
        *********** TABLES **************
1. products
2. categories
3. users
4. orders
5. icons --> name(id)


1. Product 
    id, name, img, price, stock, regular price, discount, tags(fruits, meat) -> keywords;

2. Category
    id, name, iconId(name), 

3. Products_Categories
    id , productId, categoryId,

4. User
    id, firstname, lastname, email, password, phone, role(enum), 

5. icons
    icons_name();

*/

/*

    ClientSide Components

    1. card
    2. info card
    3. TobarCateogryList
    4. footercard

*/

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import PaymentIcon from "@mui/icons-material/Payment";

export const InfoCardItems = [
  {
    id: 1,
    title: "Fast Delivery",
    subtitle: "Start from $10",
    icon: LocalShippingIcon,
  },
  {
    id: 2,
    title: "Money Guarantee",
    subtitle: "7 Days Back",
    icon: MonetizationOnIcon,
  },
  {
    id: 3,
    title: "365 Days",
    subtitle: "For free return",
    icon: AccessAlarmIcon,
  },
  {
    id: 4,
    title: "Payment",
    subtitle: "Secure system",
    icon: PaymentIcon,
  },
];
