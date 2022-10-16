import Navigation from '@/components/Navigation';
import React from 'react'
import MinistryLogo from "../../../assist/images/Ministry_of_Justice.png";

export default function RealEstate() {
  return (
    <>
      <Navigation />
      <div className="query">
        <span>التحقق من حالة الصك العقاري</span>
        <div className="query-inputs">
          <div className="query-label">
            <span>سبب الاستعلام</span>
            <input
              className="customers-input"
              type="text"
              placeholder="نص العنصر النائب"
            />
          </div>
          <div className="query-label">
            <span>
              <span className="inner-span">*</span>رقم هوية احد الملاك
            </span>
            <input
              className="customers-input"
              type="text"
              placeholder="نص العنصر النائب"
            />
          </div>
          <div className="query-label">
            <span>
              <span className="inner-span">*</span>رقم الصك
            </span>
            <input
              className="customers-input"
              type="text"
              placeholder="نص العنصر النائب"
            />
          </div>
        </div>
        <div className="query-radios">
          <div className="query-radio">
            <span> نوعية هوية المالك</span>
            <label>
              هوية وطنية
              <input type="radio" name="query-radio" id="query-radio-1" />
            </label>
            <label>
              هوية اقامة
              <input type="radio" name="query-radio" id="query-radio-1" />
            </label>
            <label>
              سجل تجاري
              <input type="radio" name="query-radio" id="query-radio-1" />
            </label>
            <span className="inner-span" style={{ fontSize: "10px" }}>
              لا تترك نوعية الهوية بلا اختيار
            </span>
          </div>
        </div>
        <button className="result-btn">النتيجة</button>

        <div className="query-result">
          <button>PDF تحميل النتائج</button>
          <div className="estate-result-content">
            <img className="Ministry" src={MinistryLogo} alt="ministry-logo" />
            <div className="query-inputs">
              <div className="query-label">
                <span>الرقم التسلسلي</span>
                <input
                  className="customers-input"
                  type="text"
                  placeholder="نص العنصر النائب"
                  value="4060176"
                />
              </div>
              <div className="query-label">
                <span> الكود</span>
                <input
                  className="customers-input"
                  type="text"
                  placeholder="نص العنصر النائب"
                  value="124357547"
                />
              </div>
            </div>
            <div className="query-inputs">
              <div className="query-label">
                <span>حالة الوكالة</span>
                <input
                  className="customers-input"
                  type="text"
                  placeholder="نص العنصر النائب"
                  value="نشيطة"
                />
              </div>
              <div className="query-label">
                <span>تاريخ الاصدار</span>
                <input
                  className="customers-input"
                  type="text"
                  placeholder="نص العنصر النائب"
                  value="1438/05/06"
                />
              </div>
            </div>
            <div className="query-inputs">
              <div className="query-label">
                <span>المساحة كتابة </span>
                <input
                  className="customers-input"
                  type="text"
                  placeholder="نص العنصر النائب"
                  value="مئتين الف متر مربعا"
                />
              </div>
              <div className="query-label">
                <span>المساحة</span>
                <input
                  className="customers-input"
                  type="text"
                  placeholder="نص العنصر النائب"
                  value="200000"
                />
              </div>
            </div>
            <div className="query-inputs">
              <div className="query-label">
                <span>اسم المحكمة </span>
                <input
                  className="customers-input"
                  type="text"
                  placeholder="نص العنصر النائب"
                  value="كتابة العدل الاولى بالرياض"
                />
              </div>
              <div className="query-label">
                <span>كود المحكمة</span>
                <input
                  className="customers-input"
                  type="text"
                  placeholder="نص العنصر النائب"
                  value=""
                />
              </div>
            </div>
            <div className="query-inputs">
              <div className="query-label">
                <span>هل الصك وقف </span>
                <input
                  className="customers-input"
                  type="text"
                  placeholder="نص العنصر النائب"
                  value="لا"
                />
              </div>
              <div className="query-label">
                <span>هل الصك محجوز</span>
                <input
                  className="customers-input"
                  type="text"
                  placeholder="نص العنصر النائب"
                  value="لا"
                />
              </div>
            </div>
            <div className="query-inputs">
              <div className="query-label">
                <span>هل الصك عليه وصية </span>
                <input
                  className="customers-input"
                  type="text"
                  placeholder="نص العنصر النائب"
                  value="لا"
                />
              </div>
              <div className="query-label">
                <span>هل الصك مرهون</span>
                <input
                  className="customers-input"
                  type="text"
                  placeholder="نص العنصر النائب"
                  value="لا"
                />
              </div>
            </div>
            <div className="query-inputs">
              <div className="query-label">
                <span>ملاحظة</span>
                <textarea
                  className="customers-input"
                  type="text"
                  placeholder="نص العنصر النائب"
                  value='بناء على خطاب صندوق التنمية الزراعية رقم 1111 وتاريخ 1/ 1/ 1444 والمقيد لدينا برقم 11111111 وتاريخ 1/ 1/1444",'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
