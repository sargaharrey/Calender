import Search from '../../../assist/icons/search.svg';
import Email from '../../../assist/icons/email_brown.svg';
import Phone from '../../../assist/icons/phone-solid.svg';
import Company from '../../../assist/icons/briefcase.svg';
import More from '../../../assist/icons/bars.svg';
import Arrow from "../../../assist/icons/arrow_white.svg";
import LeftArrow from "../../../assist/icons/angle-left-solid.svg";
import ArabicDate from '@/utils/ArabicDate';
import Navigation from '@/components/Navigation';
import { Link } from 'react-router-dom';

export function Customers() {
  const customers = [
    {
      customerName: "بنك الانتماء",
      customerInfo: "بنك الانتماء بنك الانتماء بنك الانتماء",
      customerPhone: "+956 55 555 5555",
      customerEmail: 'aaab@gmail.com',
      customerCompany: "الشركة",
      customerId: 1
    },
    {
      customerName: "بنك الانتماء",
      customerInfo: "بنك الانتماء بنك الانتماء بنك الانتماء",
      customerPhone: "+956 55 555 5555",
      customerEmail: 'aaab@gmail.com',
      customerCompany: "الشركة",
      customerId: 2
    },
    {
      customerName: "بنك الانتماء",
      customerInfo: "بنك الانتماء بنك الانتماء بنك الانتماء",
      customerPhone: "+956 55 555 5555",
      customerEmail: 'aaab@gmail.com',
      customerCompany: "الشركة",
      customerId: 3
    },
    {
      customerName: "بنك الانتماء",
      customerInfo: "بنك الانتماء بنك الانتماء بنك الانتماء",
      customerPhone: "+956 55 555 5555",
      customerEmail: 'aaab@gmail.com',
      customerCompany: "الشركة",
      customerId: 4
    },
    {
      customerName: "بنك الانتماء",
      customerInfo: "بنك الانتماء بنك الانتماء بنك الانتماء",
      customerPhone: "+956 55 555 5555",
      customerEmail: 'aaab@gmail.com',
      customerCompany: "الشركة",
      customerId: 5
    },
    {
      customerName: "بنك الانتماء",
      customerInfo: "بنك الانتماء بنك الانتماء بنك الانتماء",
      customerPhone: "+956 55 555 5555",
      customerEmail: 'aaab@gmail.com',
      customerCompany: "الشركة",
      customerId: 6
    },
    {
      customerName: "بنك الانتماء",
      customerInfo: "بنك الانتماء بنك الانتماء بنك الانتماء",
      customerPhone: "+956 55 555 5555",
      customerEmail: 'aaab@gmail.com',
      customerCompany: "الشركة",
      customerId: 7
    },
    {
      customerName: "بنك الانتماء",
      customerInfo: "بنك الانتماء بنك الانتماء بنك الانتماء",
      customerPhone: "+956 55 555 5555",
      customerEmail: 'aaab@gmail.com',
      customerCompany: "الشركة",
      customerId: 8
    },
    {
      customerName: "بنك الانتماء",
      customerInfo: "بنك الانتماء بنك الانتماء بنك الانتماء",
      customerPhone: "+956 55 555 5555",
      customerEmail: 'aaab@gmail.com',
      customerCompany: "الشركة",
      customerId: 9
    },
  ];

  return (
    <>
    <Navigation/>
    <div className="customers-container">
      <ArabicDate/>
      <div>
        <div className="welcomer">مرحباً, اهلاً بعودتك أ. ماجد بن طالب </div>
      </div>

      <div className="customers my-16">
        <p className="font-semibold">عملائي</p>
        <div className="customers-field">
          <input
            className="customers-input"
            type="text"
            placeholder="نص العنصر النائب"
          />
          <img src={Search} alt="search" />
        </div>
      </div>

      <div className="customers-table">

      {customers && customers.map(customer => {
        return (
          <div className="customer-card" key={customer.customerId}>
            <div className="customer-card-header">
              <h2 className="text-2xl">{customer.customerName}</h2>
              <span className="text-sm">{customer.customerInfo}</span>
            </div>
            <div className="customer-card-body">
              <div className="customer-card-body-item">
                <img src={Company} alt="icon" />
                <span>{customer.customerCompany}</span>
              </div>
              <div className="customer-card-body-item">
                <img src={Phone} alt="icon" />
                <span>{customer.customerPhone}</span>
              </div>
              <div className="customer-card-body-item">
                <img src={Email} alt="icon" />
                <span>{customer.customerEmail}</span>
              </div>
              <div className="customer-card-body-item">
                <div className="right">
                  <img src={More} alt="icon" />
                  <Link to={`/staff/customers/${customer.customerId}`}>
                    المزيد
                  </Link>
                </div>
                <div className="left">
                  <Link to={`/staff/customers/${customer.customerId}`}>
                  <img src={LeftArrow} alt="arrow" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}

        
      </div>

      <div className="customer_btns">
        <div className="customer_button">
          <img src={Arrow} alt="" />
        </div>
        <div className="customer_number active_number">
          <a>1</a>
        </div>
        <div className="customer_number">
          <a>2</a>
        </div>
        <div className="customer_number">
          <a>3</a>
        </div>
        <div className="customer_button">
          <img src={Arrow} alt="" />
        </div>
      </div>
    </div>
    </>
  );
}
