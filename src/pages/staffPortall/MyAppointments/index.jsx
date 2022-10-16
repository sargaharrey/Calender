import Navigation from '@/components/Navigation';
import ArabicDate from '@/utils/ArabicDate';
import Modal from '@/utils/modal/Modal';
import React, { useState } from 'react'
import Cancel from "../../../assist/icons/cancel.svg";
import Cancelbtn from "../../../assist/icons/cancel-grey.svg";
import Right from "../../../assist/icons/right.svg";

export default function MyAppointmetns() {
    const [active, setActive] = useState(1);
    const [modal, setModal] = useState(false);
    const [input, setInput] = useState(false)
    const [inputCase, setInputCase] = useState(false)
    const [lawyer, setLawyer] = useState(false)
    const authnticated = true

    const handleActive = (index) => {
      setActive(index);
      console.log(active);
    };

  return (
    <>
      <Navigation />
      <div className="case-container">
        <ArabicDate />
        <div>
          <div className="welcomer">مرحباً, اهلاً بعودتك أ. ماجد بن طالب </div>
        </div>

        <div className="app-tabs">
          <div className="right-apponitments">
            <div className="navbar_button">
              <span
                onClick={() => handleActive(1)}
                style={{ color: active === 1 ? "#AE965A" : "#39281F" }}
              >
                المواعيد
              </span>
              <div
                className={
                  active === 1
                    ? "navbar_line navbar_line_active"
                    : "navbar_line"
                }
              ></div>
            </div>
            <div className="navbar_button">
              <span
                onClick={() => handleActive(2)}
                style={{ color: active === 2 ? "#AE965A" : "#39281F" }}
              >
                المواعيد المسندة الي
              </span>
              <div
                className={
                  active === 2
                    ? "navbar_line navbar_line_active"
                    : "navbar_line"
                }
              ></div>
            </div>
            {authnticated && <div className="navbar_button">
              <span
                onClick={() => handleActive(3)}
                style={{ color: active === 3 ? "#AE965A" : "#39281F" }}
              >
                جميع مواعيد المكتب
              </span>
              <div
                className={
                  active === 3
                    ? "navbar_line navbar_line_active"
                    : "navbar_line"
                }
              ></div>
            </div>}
          </div>

          {active === 1 && (
            <div className="left-appointments">
              <button
                className="requestExchangeBtn"
                onClick={() => setModal(true)}
              >
                <span className="add-icon">+</span> اضافة موعد جديد
              </button>
            </div>
          )}
        </div>

        {active === 1 && (
          <div>
            <table className="appointments-table">
              <thead>
                <tr>
                  <td> اسناد </td>
                  <td>وقت الموعد </td>
                  <td>تاريخ الموعد </td>
                  <td>نوع الموعد</td>
                  <td>القضية</td>
                  <td>موضوع الموعد</td>
                  <td>الرقم</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <button onClick={() => setLawyer(true)}>اسناد</button>
                  </td>
                  <td>1443-12-01</td>
                  <td>12:00 PM</td>
                  <td>استشارة قانونية اتصال مرئي (عن بعد)</td>
                  <td>الغريبة</td>
                  <td>سبب</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>
                    <button onClick={() => setLawyer(true)}>اسناد</button>
                  </td>
                  <td>1443-12-01</td>
                  <td>جدة</td>
                  <td>العامة</td>
                  <td>الغريبة</td>
                  <td>سبب</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>
                    <button onClick={() => setLawyer(true)}>اسناد</button>
                  </td>
                  <td>1443-12-01</td>
                  <td>جدة</td>
                  <td>العامة</td>
                  <td>الغريبة</td>
                  <td>سبب</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>
                    <button onClick={() => setLawyer(true)}>اسناد</button>
                  </td>
                  <td>1443-12-01</td>
                  <td>جدة</td>
                  <td>العامة</td>
                  <td>الغريبة</td>
                  <td>سبب</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>
                    <button onClick={() => setLawyer(true)}>اسناد</button>
                  </td>
                  <td>1443-12-01</td>
                  <td>جدة</td>
                  <td>العامة</td>
                  <td>الغريبة</td>
                  <td>سبب</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>
                    <button onClick={() => setLawyer(true)}>اسناد</button>
                  </td>
                  <td>1443-12-01</td>
                  <td>جدة</td>
                  <td>العامة</td>
                  <td>الغريبة</td>
                  <td>سبب</td>
                  <td>6</td>
                </tr>
                <tr>
                  <td>
                    <button onClick={() => setLawyer(true)}>اسناد</button>
                  </td>
                  <td>1443-12-01</td>
                  <td>جدة</td>
                  <td>العامة</td>
                  <td>الغريبة</td>
                  <td>سبب</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>
                    <button onClick={() => setLawyer(true)}>اسناد</button>
                  </td>
                  <td>1443-12-01</td>
                  <td>جدة</td>
                  <td>العامة</td>
                  <td>الغريبة</td>
                  <td>سبب</td>
                  <td>8</td>
                </tr>
                <tr>
                  <td>
                    <button onClick={() => setLawyer(true)}>اسناد</button>
                  </td>
                  <td>1443-12-01</td>
                  <td>جدة</td>
                  <td>العامة</td>
                  <td>الغريبة</td>
                  <td>سبب</td>
                  <td>9</td>
                </tr>
                <tr>
                  <td>
                    <button onClick={() => setLawyer(true)}>اسناد</button>
                  </td>
                  <td>1443-12-01</td>
                  <td>جدة</td>
                  <td>العامة</td>
                  <td>الغريبة</td>
                  <td>سبب</td>
                  <td>10</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {active === 2 && (
          <div>
            <table className="appointments-table">
              <thead>
                <tr>
                  <td> حالة الاسناد </td>
                  <td>وقت الموعد </td>
                  <td>تاريخ الموعد </td>
                  <td>نوع الموعد</td>
                  <td>القضية</td>
                  <td>موضوع الموعد</td>
                  <td>الرقم</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src={Right} alt="right" />
                    <img src={Cancel} alt="cancel" />
                  </td>
                  <td>10:00 am</td>
                  <td>01-12-1443</td>
                  <td>استشارة قانونية اتصال مرئي (عن بعد)</td>
                  <td>الغريبة</td>
                  <td>سبب</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>
                    <img src={Right} alt="right" />
                    <img src={Cancel} alt="cancel" />
                  </td>
                  <td>10:00 am</td>
                  <td>1443-12-01</td>
                  <td>العامة</td>
                  <td>الغريبة</td>
                  <td>سبب</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>
                    <img src={Right} alt="right" />
                    <img src={Cancel} alt="cancel" />
                  </td>
                  <td>10:00 am</td>
                  <td>1443-12-01</td>
                  <td>العامة</td>
                  <td>الغريبة</td>
                  <td>سبب</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>
                    <img src={Right} alt="right" />
                    <img src={Cancel} alt="cancel" />
                  </td>
                  <td>10:00 am</td>
                  <td>1443-12-01</td>
                  <td>العامة</td>
                  <td>الغريبة</td>
                  <td>سبب</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>
                    <img src={Right} alt="right" />
                    <img src={Cancel} alt="cancel" />
                  </td>
                  <td>10:00 am</td>
                  <td>1443-12-01</td>
                  <td>العامة</td>
                  <td>الغريبة</td>
                  <td>سبب</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>
                    <img src={Right} alt="right" />
                    <img src={Cancel} alt="cancel" />
                  </td>
                  <td>10:00 am</td>
                  <td>1443-12-01</td>
                  <td>العامة</td>
                  <td>الغريبة</td>
                  <td>سبب</td>
                  <td>6</td>
                </tr>
                <tr>
                  <td>
                    <img src={Right} alt="right" />
                    <img src={Cancel} alt="cancel" />
                  </td>
                  <td>10:00 am</td>
                  <td>1443-12-01</td>
                  <td>العامة</td>
                  <td>الغريبة</td>
                  <td>سبب</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>
                    <img src={Right} alt="right" />
                    <img src={Cancel} alt="cancel" />
                  </td>
                  <td>10:00 am</td>
                  <td>1443-12-01</td>
                  <td>العامة</td>
                  <td>الغريبة</td>
                  <td>سبب</td>
                  <td>8</td>
                </tr>
                <tr>
                  <td>
                    <img src={Right} alt="right" />
                    <img src={Cancel} alt="cancel" />
                  </td>
                  <td>10:00 am</td>
                  <td>1443-12-01</td>
                  <td>العامة</td>
                  <td>الغريبة</td>
                  <td>سبب</td>
                  <td>9</td>
                </tr>
                <tr>
                  <td>
                    <img src={Right} alt="right" />
                    <img src={Cancel} alt="cancel" />
                  </td>
                  <td>10:00 am</td>
                  <td>1443-12-01</td>
                  <td>العامة</td>
                  <td>الغريبة</td>
                  <td>سبب</td>
                  <td>10</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {active === 3 && (
          <div>
            <table className="appointments-table">
              <thead>
                <tr>
                  <td> حالة الاسناد </td>
                  <td>وقت الموعد </td>
                  <td>تاريخ الموعد </td>
                  <td>نوع الموعد</td>
                  <td>القضية</td>
                  <td>موضوع الموعد</td>
                  <td>اسم المحامي</td>
                  <td>الرقم</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src={Right} alt="right" />
                    <img src={Cancel} alt="cancel" />
                  </td>
                  <td>10:00 am</td>
                  <td>01-12-1443</td>
                  <td>استشارة قانونية اتصال مرئي (عن بعد)</td>
                  <td>الغريبة</td>
                  <td>سبب</td>
                  <td>أ. مجد</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>
                    <img src={Right} alt="right" />
                    <img src={Cancel} alt="cancel" />
                  </td>
                  <td>10:00 am</td>
                  <td>1443-12-01</td>
                  <td>العامة</td>
                  <td>الغريبة</td>
                  <td>سبب</td>
                  <td>أ. مجد</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>
                    <img src={Right} alt="right" />
                    <img src={Cancel} alt="cancel" />
                  </td>
                  <td>10:00 am</td>
                  <td>1443-12-01</td>
                  <td>العامة</td>
                  <td>الغريبة</td>
                  <td>سبب</td>
                  <td>أ. مجد</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>
                    <img src={Right} alt="right" />
                    <img src={Cancel} alt="cancel" />
                  </td>
                  <td>10:00 am</td>
                  <td>1443-12-01</td>
                  <td>العامة</td>
                  <td>الغريبة</td>
                  <td>سبب</td>
                  <td>أ. مجد</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>
                    <img src={Right} alt="right" />
                    <img src={Cancel} alt="cancel" />
                  </td>
                  <td>10:00 am</td>
                  <td>1443-12-01</td>
                  <td>العامة</td>
                  <td>الغريبة</td>
                  <td>سبب</td>
                  <td>أ. مجد</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>
                    <img src={Right} alt="right" />
                    <img src={Cancel} alt="cancel" />
                  </td>
                  <td>10:00 am</td>
                  <td>1443-12-01</td>
                  <td>العامة</td>
                  <td>الغريبة</td>
                  <td>سبب</td>
                  <td>أ. مجد</td>
                  <td>6</td>
                </tr>
                <tr>
                  <td>
                    <img src={Right} alt="right" />
                    <img src={Cancel} alt="cancel" />
                  </td>
                  <td>10:00 am</td>
                  <td>1443-12-01</td>
                  <td>العامة</td>
                  <td>الغريبة</td>
                  <td>سبب</td>
                  <td>أ. مجد</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>
                    <img src={Right} alt="right" />
                    <img src={Cancel} alt="cancel" />
                  </td>
                  <td>10:00 am</td>
                  <td>1443-12-01</td>
                  <td>العامة</td>
                  <td>الغريبة</td>
                  <td>سبب</td>
                  <td>أ. مجد</td>
                  <td>8</td>
                </tr>
                <tr>
                  <td>
                    <img src={Right} alt="right" />
                    <img src={Cancel} alt="cancel" />
                  </td>
                  <td>10:00 am</td>
                  <td>1443-12-01</td>
                  <td>العامة</td>
                  <td>الغريبة</td>
                  <td>سبب</td>
                  <td>أ. مجد</td>
                  <td>9</td>
                </tr>
                <tr>
                  <td>
                    <img src={Right} alt="right" />
                    <img src={Cancel} alt="cancel" />
                  </td>
                  <td>10:00 am</td>
                  <td>1443-12-01</td>
                  <td>العامة</td>
                  <td>الغريبة</td>
                  <td>سبب</td>
                  <td>أ. مجد</td>
                  <td>10</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
      {modal && (
        <Modal setModal={setModal}>
          <div className="modal-content">
            <img src={Cancelbtn} onClick={() => setModal(false)} alt="" />
            <div className="inputs">
              <div className="input">
                <input type="text" placeholder="القضية" />
              </div>
              <div className="input">
                <input type="text" placeholder="نوع الموعد" />
              </div>
            </div>
            <div className="inputs">
              <div className="input">
                <input type="text" placeholder="وقت الموعد" />
              </div>
              <div className="input">
                <input type="text" placeholder="تاريخ الموعد" />
              </div>
            </div>
            <div className="inputs">
              <div className="input">
                <input type="text" placeholder="موضوع الموعد" />
              </div>
            </div>
            <div className="inputs">
              <label>
                <input type="checkbox" onChange={(e) => setInput(!input)} />
                اضافة الى عميل
              </label>
              <label>
                <input
                  type="checkbox"
                  onChange={(e) => setInputCase(!inputCase)}
                />
                <span>اضافة الى قضية</span>
              </label>
            </div>
            <div className="inputs">
              {input && (
                <div className="input">
                  <input type="text" placeholder="اضافة الى العميل" />
                </div>
              )}
              {inputCase && (
                <div className="input">
                  <input type="text" placeholder="القضية" />
                </div>
              )}
            </div>
            <button>اضافة</button>
          </div>
        </Modal>
      )}
      {lawyer && (
        <Modal>
          <div className="modal-content">
            <img src={Cancelbtn} onClick={() => setLawyer(false)} alt="" />
            <div className="input" style={{ margin: "20px auto" }}>
              <input type="text" placeholder="المحامي" />
            </div>

            <div className="input" style={{ margin: "20px auto" }}>
              <input type="text" placeholder="تحديد الوقت لقبول المحامي" />
            </div>
            <label
              style={{
                flexDirection: "row",
                marginLeft: "65%",
                color: "#ae965a",
                width: "100%",
              }}
            >
              حق اسناد الغير
              <input type="checkbox" />
            </label>

            <button>حفظ</button>
          </div>
        </Modal>
      )}
    </>
  );
}
