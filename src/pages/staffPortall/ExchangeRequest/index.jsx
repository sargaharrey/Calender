import Navigation from "@/components/Navigation";
import ArabicDate from "@/utils/ArabicDate";
import Modal from "@/utils/modal/Modal";
import { useState } from "react";
import Cancelbtn from "../../../assist/icons/cancel-grey.svg";

export function ExchangeRequest() {
    const [modal, setModal] = useState(false);

    return (
      <>
        <Navigation />
        <div className="case-container">
          <ArabicDate />
          <div>
            <div className="welcomer">
              مرحباً, اهلاً بعودتك أ. ماجد بن طالب{" "}
            </div>
          </div>

          <div className="exchange-title">
            <button
              className="requestExchangeBtn"
              onClick={() => setModal(true)}
            >
              <span className="add-icon">+</span> طلب صرف جديد
            </button>
            <h1 className="request-name">طلبات الصرف</h1>
          </div>
          <div>
            <table className="reqeustExchange-table">
              <thead>
                <tr>
                  <td>سبب طلب الصرف </td>
                  <td>حالة الطلب</td>
                  <td>تأريخ الاستلام</td>
                  <td>تاريخ طلب الصرف</td>
                  <td>المبلغ</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة</td>
                  <td>مقبول</td>
                  <td>1443-12-01</td>
                  <td>1443-12-01</td>
                  <td>1000</td>
                </tr>
                <tr>
                  <td>الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة</td>
                  <td>مقبول</td>
                  <td>الغريبة</td>
                  <td>سب</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة</td>
                  <td>مقبول</td>
                  <td>الغريبة</td>
                  <td>سب</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة</td>
                  <td>مقبول</td>
                  <td>الغريبة</td>
                  <td>سب</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة</td>
                  <td>مقبول</td>
                  <td>الغريبة</td>
                  <td>سب</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة</td>
                  <td>مرفوض</td>
                  <td>الغريبة</td>
                  <td>سب</td>
                  <td>6</td>
                </tr>
                <tr>
                  <td>الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة</td>
                  <td>مقبول</td>
                  <td>الغريبة</td>
                  <td>سب</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة</td>
                  <td>مقبول</td>
                  <td>الغريبة</td>
                  <td>سب</td>
                  <td>8</td>
                </tr>
                <tr>
                  <td>الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة</td>
                  <td>مقبول</td>
                  <td>الغريبة</td>
                  <td>سب</td>
                  <td>9</td>
                </tr>
                <tr>
                  <td>الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة</td>
                  <td>مقبول</td>
                  <td>الغريبة</td>
                  <td>سب</td>
                  <td>10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {modal && (
          <Modal>
            <div className="modal-content">
              <img src={Cancelbtn} onClick={() => setModal(false)} alt="" />
              <div className="input" style={{ margin: "20px auto" }}>
                <input type="text" placeholder="المبلغ المطلوب" />
              </div>
                <span style={{ color: "red", textAlign: 'center', display: 'block' }}>
                  لا تترك المبلغ المطلوب فارغا
                </span>
              <div
                className="input"
                style={{ height: "162px", margin: "20px auto" }}
              >
                <input type="text" placeholder="سبب طلب الصرف" />
              </div>
                <span style={{ color: "red" , textAlign: 'center', display: 'block'}}>
                  لا تترك سبب طلب الصرف فارغا
                </span>
              <button>حفظ</button>
            </div>
          </Modal>
        )}
      </>
    );
}