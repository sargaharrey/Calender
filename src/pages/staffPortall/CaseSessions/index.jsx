import Navigation from '@/components/Navigation';
import ArabicDate from '@/utils/ArabicDate';
import Modal from '@/utils/modal/Modal';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Cancelbtn from "../../../assist/icons/cancel-grey.svg";
import Sort from "../../../assist/icons/sort.svg";

export default function CaseSessions() {
  const [modal, setModal] = useState(false);
  const [lawyer, setLawyer] = useState(false);

  return (
    <>
      <Navigation />
      <div className="addSession-container">
        <ArabicDate />
        <div>
          <h1 className="addSession-title">
            جميع الجلسات الخاصة بالقضية : gf{" "}
          </h1>
        </div>

        <div className="exchange-title">
          <Link
            to="/staff/addSession"
            className="requestExchangeBtn"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span className="add-icon">+</span> اضافة جلسة جديدة
          </Link>
          <span
            className="request-name"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            عرض الأحدث
            <img
              style={{ width: "15px", height: "15px", margin: "0 10px" }}
              src={Sort}
              alt="icon"
            />
          </span>
        </div>

        <div>
          <table className="appointments-table">
            <thead>
              <tr>
                <td> المزيد </td>
                <td> الحالة </td>
                <td> اليوم </td>

                <td>الساعة</td>
                <td>تاريخ الموعد</td>
                <td>اسم المحامي</td>
                <td>رقم الجلسة</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <button
                    style={{
                      width: "20%",
                      margin: "0 5px",
                      fontSize: "8px",
                      fontWeight: "bold",
                    }}
                    onClick={() => setLawyer(true)}
                  >
                    اسناد الجلسة
                  </button>
                  <button
                    style={{
                      width: "20%",
                      margin: "0 5px",
                      fontSize: "8px",
                      fontWeight: "bold",
                    }}
                  >
                    رد المحامي
                  </button>
                  <button
                    style={{
                      width: "20%",
                      margin: "0 5px",
                      fontSize: "8px",
                      fontWeight: "bold",
                    }}
                  >
                    تعديل
                  </button>
                  <button
                    style={{
                      width: "20%",
                      margin: "0 5px",
                      fontSize: "8px",
                      fontWeight: "bold",
                    }}
                    onClick={() => setModal(true)}
                  >
                    نص الجلسة
                  </button>
                </td>
                <td>قادمة / انتهت</td>
                <td>الخميس</td>
                <td>10:00 am</td>
                <td>1443-12-01</td>
                <td>ماجد سليمان</td>

                <td>1</td>
              </tr>
              <tr>
                <td>
                  <button
                    style={{
                      width: "20%",
                      margin: "0 5px",
                      fontSize: "8px",
                      fontWeight: "bold",
                    }}
                    onClick={() => setLawyer(true)}
                  >
                    اسناد الجلسة
                  </button>
                  <button
                    style={{
                      width: "20%",
                      margin: "0 5px",
                      fontSize: "8px",
                      fontWeight: "bold",
                    }}
                  >
                    رد المحامي
                  </button>
                  <button
                    style={{
                      width: "20%",
                      margin: "0 5px",
                      fontSize: "8px",
                      fontWeight: "bold",
                    }}
                  >
                    تعديل
                  </button>
                  <button
                    style={{
                      width: "20%",
                      margin: "0 5px",
                      fontSize: "8px",
                      fontWeight: "bold",
                    }}
                    onClick={() => setModal(true)}
                  >
                    نص الجلسة
                  </button>
                </td>
                <td>قادمة / انتهت</td>
                <td>الخميس</td>
                <td>10:00 am</td>
                <td>1443-12-01</td>
                <td>ماجد سليمان</td>
                <td>2</td>
              </tr>
              <tr>
                <td>
                  <button
                    style={{
                      width: "20%",
                      margin: "0 5px",
                      fontSize: "8px",
                      fontWeight: "bold",
                    }}
                    onClick={() => setLawyer(true)}
                  >
                    اسناد الجلسة
                  </button>
                  <button
                    style={{
                      width: "20%",
                      margin: "0 5px",
                      fontSize: "8px",
                      fontWeight: "bold",
                    }}
                  >
                    رد المحامي
                  </button>
                  <button
                    style={{
                      width: "20%",
                      margin: "0 5px",
                      fontSize: "8px",
                      fontWeight: "bold",
                    }}
                  >
                    تعديل
                  </button>
                  <button
                    style={{
                      width: "20%",
                      margin: "0 5px",
                      fontSize: "8px",
                      fontWeight: "bold",
                    }}
                    onClick={() => setModal(true)}
                  >
                    نص الجلسة
                  </button>
                </td>
                <td>قادمة / انتهت</td>
                <td>الخميس</td>
                <td>10:00 am</td>
                <td>1443-12-01</td>
                <td>ماجد سليمان</td>
                <td>3</td>
              </tr>
              <tr>
                <td>
                  <button
                    style={{
                      width: "20%",
                      margin: "0 5px",
                      fontSize: "8px",
                      fontWeight: "bold",
                    }}
                    onClick={() => setLawyer(true)}
                  >
                    اسناد الجلسة
                  </button>
                  <button
                    style={{
                      width: "20%",
                      margin: "0 5px",
                      fontSize: "8px",
                      fontWeight: "bold",
                    }}
                  >
                    رد المحامي
                  </button>
                  <button
                    style={{
                      width: "20%",
                      margin: "0 5px",
                      fontSize: "8px",
                      fontWeight: "bold",
                    }}
                  >
                    تعديل
                  </button>
                  <button
                    style={{
                      width: "20%",
                      margin: "0 5px",
                      fontSize: "8px",
                      fontWeight: "bold",
                    }}
                    onClick={() => setModal(true)}
                  >
                    نص الجلسة
                  </button>
                </td>
                <td>قادمة / انتهت</td>
                <td>الخميس</td>
                <td>10:00 am</td>
                <td>1443-12-01</td>
                <td>ماجد سليمان</td>
                <td>4</td>
              </tr>
              <tr>
                <td>
                  <button
                    style={{
                      width: "20%",
                      margin: "0 5px",
                      fontSize: "8px",
                      fontWeight: "bold",
                    }}
                    onClick={() => setLawyer(true)}
                  >
                    اسناد الجلسة
                  </button>
                  <button
                    style={{
                      width: "20%",
                      margin: "0 5px",
                      fontSize: "8px",
                      fontWeight: "bold",
                    }}
                  >
                    رد المحامي
                  </button>
                  <button
                    style={{
                      width: "20%",
                      margin: "0 5px",
                      fontSize: "8px",
                      fontWeight: "bold",
                    }}
                  >
                    تعديل
                  </button>
                  <button
                    style={{
                      width: "20%",
                      margin: "0 5px",
                      fontSize: "8px",
                      fontWeight: "bold",
                    }}
                    onClick={() => setModal(true)}
                  >
                    نص الجلسة
                  </button>
                </td>
                <td>قادمة / انتهت</td>
                <td>الخميس</td>
                <td>10:00 am</td>
                <td>1443-12-01</td>
                <td>ماجد سليمان</td>
                <td>5</td>
              </tr>
              <tr>
                <td>
                  <button
                    style={{
                      width: "20%",
                      margin: "0 5px",
                      fontSize: "8px",
                      fontWeight: "bold",
                    }}
                    onClick={() => setLawyer(true)}
                  >
                    اسناد الجلسة
                  </button>
                  <button
                    style={{
                      width: "20%",
                      margin: "0 5px",
                      fontSize: "8px",
                      fontWeight: "bold",
                    }}
                  >
                    رد المحامي
                  </button>
                  <button
                    style={{
                      width: "20%",
                      margin: "0 5px",
                      fontSize: "8px",
                      fontWeight: "bold",
                    }}
                  >
                    تعديل
                  </button>
                  <button
                    style={{
                      width: "20%",
                      margin: "0 5px",
                      fontSize: "8px",
                      fontWeight: "bold",
                    }}
                    onClick={() => setModal(true)}
                  >
                    نص الجلسة
                  </button>
                </td>
                <td>قادمة / انتهت</td>
                <td>الخميس</td>
                <td>10:00 am</td>
                <td>1443-12-01</td>
                <td>ماجد سليمان</td>
                <td>6</td>
              </tr>
              <tr>
                <td>
                  <button
                    style={{
                      width: "20%",
                      margin: "0 5px",
                      fontSize: "8px",
                      fontWeight: "bold",
                    }}
                    onClick={() => setLawyer(true)}
                  >
                    اسناد الجلسة
                  </button>
                  <button
                    style={{
                      width: "20%",
                      margin: "0 5px",
                      fontSize: "8px",
                      fontWeight: "bold",
                    }}
                  >
                    رد المحامي
                  </button>
                  <button
                    style={{
                      width: "20%",
                      margin: "0 5px",
                      fontSize: "8px",
                      fontWeight: "bold",
                    }}
                  >
                    تعديل
                  </button>
                  <button
                    style={{
                      width: "20%",
                      margin: "0 5px",
                      fontSize: "8px",
                      fontWeight: "bold",
                    }}
                    onClick={() => setModal(true)}
                  >
                    نص الجلسة
                  </button>
                </td>
                <td>قادمة / انتهت</td>
                <td>الخميس</td>
                <td>10:00 am</td>
                <td>1443-12-01</td>
                <td>ماجد سليمان</td>
                <td>7</td>
              </tr>
              <tr>
                <td>
                  <button
                    style={{
                      width: "20%",
                      margin: "0 5px",
                      fontSize: "8px",
                      fontWeight: "bold",
                    }}
                    onClick={() => setLawyer(true)}
                  >
                    اسناد الجلسة
                  </button>
                  <button
                    style={{
                      width: "20%",
                      margin: "0 5px",
                      fontSize: "8px",
                      fontWeight: "bold",
                    }}
                  >
                    رد المحامي
                  </button>
                  <button
                    style={{
                      width: "20%",
                      margin: "0 5px",
                      fontSize: "8px",
                      fontWeight: "bold",
                    }}
                  >
                    تعديل
                  </button>
                  <button
                    style={{
                      width: "20%",
                      margin: "0 5px",
                      fontSize: "8px",
                      fontWeight: "bold",
                    }}
                    onClick={() => setModal(true)}
                  >
                    نص الجلسة
                  </button>
                </td>
                <td>قادمة / انتهت</td>
                <td>الخميس</td>
                <td>10:00 am</td>
                <td>1443-12-01</td>
                <td>ماجد سليمان</td>
                <td>8</td>
              </tr>
              <tr>
                <td>
                  <button
                    style={{
                      width: "20%",
                      margin: "0 5px",
                      fontSize: "8px",
                      fontWeight: "bold",
                    }}
                    onClick={() => setLawyer(true)}
                  >
                    اسناد الجلسة
                  </button>
                  <button
                    style={{
                      width: "20%",
                      margin: "0 5px",
                      fontSize: "8px",
                      fontWeight: "bold",
                    }}
                  >
                    رد المحامي
                  </button>
                  <button
                    style={{
                      width: "20%",
                      margin: "0 5px",
                      fontSize: "8px",
                      fontWeight: "bold",
                    }}
                  >
                    تعديل
                  </button>
                  <button
                    style={{
                      width: "20%",
                      margin: "0 5px",
                      fontSize: "8px",
                      fontWeight: "bold",
                    }}
                    onClick={() => setModal(true)}
                  >
                    نص الجلسة
                  </button>
                </td>
                <td>قادمة / انتهت</td>
                <td>الخميس</td>
                <td>10:00 am</td>
                <td>1443-12-01</td>
                <td>ماجد سليمان</td>
                <td>9</td>
              </tr>
              <tr>
                <td>
                  <button
                    style={{
                      width: "20%",
                      margin: "0 5px",
                      fontSize: "8px",
                      fontWeight: "bold",
                    }}
                    onClick={() => setLawyer(true)}
                  >
                    اسناد الجلسة
                  </button>
                  <button
                    style={{
                      width: "20%",
                      margin: "0 5px",
                      fontSize: "8px",
                      fontWeight: "bold",
                    }}
                  >
                    رد المحامي
                  </button>
                  <button
                    style={{
                      width: "20%",
                      margin: "0 5px",
                      fontSize: "8px",
                      fontWeight: "bold",
                    }}
                  >
                    تعديل
                  </button>
                  <button
                    style={{
                      width: "20%",
                      margin: "0 5px",
                      fontSize: "8px",
                      fontWeight: "bold",
                    }}
                    onClick={() => setModal(true)}
                  >
                    نص الجلسة
                  </button>
                </td>
                <td>قادمة / انتهت</td>
                <td>الخميس</td>
                <td>10:00 am</td>
                <td>1443-12-01</td>
                <td>ماجد سليمان</td>
                <td>10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {modal && (
        <Modal>
          <div className="modal-content">
            <img src={Cancelbtn} onClick={() => setModal(false)} alt="button" />
            <h2 className="text-right" style={{ color: "#AE965A" }}>
              نص الجلسة
            </h2>
            <p dir="rtl" className="text-right">
              "الحـمد لله وحـده والصـلاة والسـلام على من لا نبـي بعـده ، وبـعـد
              :\r\nفلدي أنا الموثق / خالد محمد المرخص له من وزارة العدل بموجب
              ترخيص رقم XX/XXXX حضر : \r\n1- ابراهيم بن عبدالعزيز سعودي الجنسية
              بموجب سجل مدني رقم 10XXXXXXXX بصفته مدير الشركة فى شركة الشركة
              التجارية سجل تجارى رقم 1010XXXXXX بتاريخ 1430/04/20 هـ الصادر من
              الرياض وبموجب عقد التأسيس المصادق عليه من كاتب العدل المكلف بوزارة
              التجارة والصناعة بتاريخ 1430/04/13 هـ صحيفة رقم 44 عدد 1234 مجلد
              رقم 256 لعام 1430 وبموجب الملحق التعديلي المصادق عليه من كاتب
              العدل المكلف بوزارة التجارة والاستثمار رقم 4014XXXXX بتاريخ
              1440/05/10 هـ\r\n\t وقـد تـم الاقـرار بتـوكـيـل : \r\n\r\n1-
              ابراهيم علي سعودي الجنسية بموجب سجل مدني رقم 10XXXXXXXX بصفته صاحب
              مؤسسة مكتب المكاتب العقارية سجل تجارى رقم 1010XXXXXX بتاريخ
              1427/07/20 هـ و أصالةُ عن نفسه\r\n فيما يخص [العقارات] وذلك في
              التأجير - توقيع عقود الأجرة - تجديد عقود الأجرة - استلام الأجرة -
              مراجعة جميع الجهات ذات العلاقة وإنهاء جميع الإجراءات اللازمة
              والتوقيع فيما يتطلب ذلك - وعليه جرى التصديق والتوقيع تحريراً في
              1440/02/01 هـ وصلى الله وسلم على نبينا محمد وآله وصحبه أجمعين." ـ
              و أصالةُ عن نفسه\r\n فيما يخص [العقارات] وذلك في التأجير - توقيع
              عقود الأجرة - تجديد عقود الأجرة - استلام الأجرة - مراجعة جميع
              الجهات ذات العلاقة وإنهاء جميع الإجراءات اللازمة والتوقيع فيما
              يتطلب ذلك - وعليه جرى التصديق والتوقيع تحريراً في 1440/02/01 هـ
              وصلى الله وسلم على نبينا محمد وآله وصحبه أجمعين."
            </p>
          </div>
        </Modal>
      )}
      {lawyer && (
        <Modal>
          <div className="modal-content">
            <img
              src={Cancelbtn}
              onClick={() => setLawyer(false)}
              alt="button"
            />
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
