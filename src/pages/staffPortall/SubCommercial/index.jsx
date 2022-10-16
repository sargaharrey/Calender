import Navigation from '@/components/Navigation'
import React from 'react'
import MinistryLogo from "../../../assist/images/Ministry_of_Justice.png";

export default function SubCommercial() {
  return (
    <>
      <Navigation />
      <div className="query">
        <span className="title"> السجلات التابعة للسجل أو الهوية </span>
        <div className="subquery-inputs">
          <div className="query-label">
            <span>
              <span className="inner-span">*</span>رقم السجل التجاري - الرقم
              الموحد
            </span>
            <input
              className="customers-input"
              type="text"
              placeholder="نص العنصر النائب"
            />
          </div>
          <div className="query-label">
            <span>سبب الاستعلام</span>
            <input
              className="customers-input"
              type="text"
              placeholder="نص العنصر النائب"
            />
          </div>
        </div>

        <div className="sub-query">
          <div className="query-radios">
            <span className="mx-5"> نوعية رقم المرجع</span>
            <div className="query-radio">
              <label>
                الرقم الموحد
                <input type="radio" name="query-radio" id="query-radio-1" />
              </label>
              <label>
                جواز سفر
                <input type="radio" name="query-radio" id="query-radio-1" />
              </label>
              <label>
                هوية وطنية
                <input type="radio" name="query-radio" id="query-radio-1" />
              </label>
              <label>
                هوية اقامة
                <input type="radio" name="query-radio" id="query-radio-1" />
              </label>
              <label>
                رقم السجل التجاري
                <input type="radio" name="query-radio" id="query-radio-1" />
              </label>
            </div>
            <span className="inner-span mx-5">
              لا تترك رقم المرجع بلا اختيار
            </span>
          </div>
          <button>النتيجة</button>
        </div>

        <div className="query-result mt-24">
          <button>PDF تحميل النتائج</button>
          <div className="estate-result-content">
            <img className="Ministry" src={MinistryLogo} alt="ministry-logo" />
            <div className="query-inputs">
              <div className="query-label">
                <span>*نوع السجل</span>
                <input
                  className="customers-input"
                  type="text"
                  placeholder="نص العنصر النائب"
                  value="خاص"
                />
              </div>
              <div className="query-label">
                <span> الرقم الموحد</span>
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
                <span>نوع الكيان</span>
                <input
                  className="customers-input"
                  type="text"
                  placeholder="نص العنصر النائب"
                  value="نشيطة"
                />
              </div>
              <div className="query-label">
                <span>*رقم السجل</span>
                <input
                  className="customers-input"
                  type="text"
                  placeholder="نص العنصر النائب"
                  value="1348/05/06"
                />
              </div>
            </div>
            <div className="query-inputs">
              <div className="query-label">
                <span>صفة الارتباط</span>
                <input
                  className="customers-input"
                  type="text"
                  placeholder="نص العنصر النائب"
                  value="مئتين الف متر مربع"
                />
              </div>
              <div className="query-label">
                <span>*اسم السجل </span>
                <input
                  className="customers-input"
                  type="text"
                  placeholder="نص العنصر النائب"
                  value="شكرة معينة"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
