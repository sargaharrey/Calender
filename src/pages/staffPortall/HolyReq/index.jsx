import React, { useState } from 'react'
import CalenderImg from "../../../../src/assist/icons/calndergold.svg";
import Angle from "../../../../src/assist/icons/angle_down_black.svg";
import User from "../../../../src/assist/icons/user-solid.svg";
import Clock from "../../../../src/assist/icons/clock-regular.svg";
import GreenClock from "../../../../src/assist/icons/clock-regular-green.svg";
import ArabicDate from '@/utils/ArabicDate';
import Navigation from '@/components/Navigation';
// import { Calender } from './../../Invistors/consultation/components/calender';

export default function HolyReq() {

  const [active, setActive] = useState(1);

  
  const handleActive = (index) => {
      setActive(index);
      console.log(active);
  }

//   console.log(new Intl.DateTimeFormat('ar-FR-u-ca-islamic', {day: 'numeric', month: 'long',weekday: 'long',year : 'numeric'}).format(Date.now()))



  return (
    <>
    <Navigation/>
    <div className="holy-container">
      <ArabicDate/>
      {/* <Calender/> */}

      <div className="holy-title justify-end">
        <h1 className="holy-name ">التقدم بطلب للحصول على اجازة</h1>
      </div>

      <div className="tabs">
        <div className="navbar_button">
          <span
            onClick={() => handleActive(1)}
            style={{ color: active === 1 ? "#AE965A" : "#39281F" }}
          >
            اجازاتي
          </span>
          <div
            className={
              active === 1 ? "navbar_line navbar_line_active" : "navbar_line"
            }
          ></div>
        </div>
        <div className="navbar_button">
          <span
            onClick={() => handleActive(2)}
            style={{ color: active === 2 ? "#AE965A" : "#39281F" }}
          >
            التقدم بطلب
          </span>
          <div
            className={
              active === 2 ? "navbar_line navbar_line_active" : "navbar_line"
            }
          ></div>
        </div>
      </div>

      {active === 1 && (
        <div className="holy-cont" dir="rtl">
          <div className="holy-cont-card">
            <div className="holy-cont-card-head">
              <h2>لماذا نحن؟</h2>
              <div>
                معلق <img src={Clock} alt="clock" style={{ marginRight: 10 }} />
              </div>
            </div>
            <p>هو ببساطة نص شكلي (بمعنى ان الغاية هي</p>
            <div className="holy-cont-card-body">
              <img src={CalenderImg} alt="calender" />
              <p>
                <span>الاجازة من : </span> 12 محرم - 16 محرم
              </p>
            </div>
            <div className="holy-cont-card-body">
              <img src={User} alt="calender" />
              <p>
                <span>المدير: </span> ماجد بن طالب
              </p>
            </div>
            <div className="holy-cont-card-btns">
              <button>الغاء</button>
              <button>تعديل</button>
            </div>
          </div>

          <div className="holy-cont-card">
            <div className="holy-cont-card-head">
              <h2>لماذا نحن؟</h2>
              <div
                style={{ background: "#DFF8EE", fontSize: 12, color: '#6cbf72' }}
                color="#6CBF72"
              >
                تمت الموافقة{" "}
                <img src={GreenClock} alt="clock" style={{ marginRight: 10 }} />
              </div>
            </div>
            <p>هو ببساطة نص شكلي (بمعنى ان الغاية هي</p>
            <div className="holy-cont-card-body">
              <img src={CalenderImg} alt="calender" />
              <p>
                <span>الاجازة من : </span> 12 محرم - 16 محرم
              </p>
            </div>
            <div className="holy-cont-card-body">
              <img src={User} alt="calender" />
              <p>
                <span>المدير : </span> ماجد بن طالب
              </p>
            </div>
          </div>
        </div>
      )}

      {active === 2 && (
        <div className="holy-content">
          <div className="holy-input">
            <span>من</span>
            <div className="input-field">
              <input placeholder="حدد تاريخ البدء" />
              <img src={CalenderImg} alt="CalenderImg" />
            </div>
          </div>
          <div className="holy-input">
            <span>الى</span>
            <div className="input-field">
              <input placeholder="حدد تاريخ الانتهاء" />
              <img src={CalenderImg} alt="calender" />
            </div>
          </div>
          <div className="holy-input">
            <span>ابلاغ الموارد البشرية</span>
            <div className="input-field">
              <input placeholder="نوع الاجازة" />
              <img src={Angle} alt="calender" />
            </div>
          </div>
          <div className="holy-input">
            <span>الحالة</span>
            <div className="input-field">
              <input placeholder="معلق" />
            </div>
          </div>
          <div className="holy-input">
            <span>السبب</span>
            <div className="input-field">
              <input placeholder="اكتب هنا سبب رغبتك في الحصول على اجازة" />
            </div>
          </div>
          <div className="holy-btn">
            <button>قدم</button>
          </div>
        </div>
      )}
    </div>
    </>
  );
}
