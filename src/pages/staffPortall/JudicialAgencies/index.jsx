import Navigation from '@/components/Navigation';
import React from 'react'
import MinistryLogo from "../../../assist/images/Ministry_of_Justice.png";

export default function JudicialAgencies() {
  return (
    <>
      <Navigation />
      <div className="query">
        <span>التحقق من الوكالة العدلية</span>
        <div className="query-inputs">
          <div className="query-label">
            <span>رقم هوية احد الموكلين</span>
            <input
              className="customers-input"
              type="text"
              placeholder="نص العنصر النائب"
            />
          </div>
          <div className="query-label">
            <span>
              <span className="inner-span">*</span>رقم الوكالة
            </span>
            <input
              className="customers-input"
              type="text"
              placeholder="نص العنصر النائب"
            />
          </div>
        </div>
        <div className="query-inputs">
          <div className="query-label">
            <span>
              <span className="inner-span">*</span>سبب الاستعلام
            </span>
            <input
              className="customers-input"
              type="text"
              placeholder="نص العنصر النائب"
            />
          </div>
          <div className="query-label">
            <span>رقم هوية احد الوكلاء</span>
            <input
              className="customers-input"
              type="text"
              placeholder="نص العنصر النائب"
            />
          </div>
        </div>
        <button className="query-btn">النتيجة</button>

        <div className="query-result">
          <button>PDF تحميل النتائج</button>
          <div className="query-result-content">
            <img
              className="Ministry" src={MinistryLogo}
              alt="ministry-logo"
            />
            <div className="query-inputs">
              <div className="query-label">
                <span>*رقم جهة العدل</span>
                <input
                  className="customers-input"
                  type="text"
                  placeholder="نص العنصر النائب"
                  value="1000"
                />
              </div>
              <div className="query-label">
                <span> *رقم الوكالة العدلية</span>
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
                <span>*حالة الوكالة</span>
                <input
                  className="customers-input"
                  type="text"
                  placeholder="نص العنصر النائب"
                  value="نشيطة"
                />
              </div>
              <div className="query-label">
                <span>*اسم جهة العدل</span>
                <input
                  className="customers-input"
                  type="text"
                  placeholder="نص العنصر النائب"
                  value="الموثقين"
                />
              </div>
            </div>
            <div className="query-inputs">
              <div className="query-label">
                <span>تاريخ انتهاء الوكالة بالهجري </span>
                <input
                  className="customers-input"
                  type="text"
                  placeholder="نص العنصر النائب"
                  value="1441/01/30"
                />
              </div>
              <div className="query-label">
                <span>تاريخ اصدار الوكالة بالهجري</span>
                <input
                  className="customers-input"
                  type="text"
                  placeholder="نص العنصر النائب"
                  value="1441/01/30"
                />
              </div>
            </div>
            <div className="query-inputs">
              <div className="query-label">
                <span>*نص الوكالة العدلية </span>
                <textarea
                  className="customers-input"
                  type="text"
                  placeholder="نص العنصر النائب"
                  value="الحـمد لله وحـده والصـلاة والسـلام على من لا نبـي بعـده ،               
 وبـعـد :\r\nفلدي أنا الموثق / خالد محمد المرخص له من وزارة العدل بموجب ترخيص رقم XX/XXXX حضر : \r\n1-  ابراهيم بن عبدالعزيز سعودي الجنسية بموجب سجل مدني رقم 10XXXXXXXX بصفته مدير الشركة فى شركة الشركة التجارية سجل تجارى رقم  1010XXXXXX بتاريخ 1430/04/20 هـ  الصادر من الرياض وبموجب عقد التأسيس المصادق عليه من  كاتب العدل المكلف بوزارة التجارة والصناعة  بتاريخ 1430/04/13 هـ صحيفة رقم 44 عدد 1234 مجلد رقم 256 لعام 1430 وبموجب الملحق التعديلي المصادق عليه من  كاتب العدل المكلف بوزارة التجارة والاستثمار رقم 4014XXXXX بتاريخ 1440/05/10 هـ\r\n\t  وقـد تـم الاقـرار بتـوكـيـل : \r\n\r\n1- ابراهيم علي سعودي الجنسية بموجب سجل مدني رقم 10XXXXXXXX بصفته صاحب مؤسسة مكتب المكاتب العقارية سجل تجارى رقم 1010XXXXXX  بتاريخ 1427/07/20 هـ  و أصالةُ عن نفسه\r\n فيما يخص [العقارات] وذلك في التأجير - توقيع عقود الأجرة - تجديد عقود الأجرة - استلام الأجرة  - مراجعة جميع الجهات ذات العلاقة وإنهاء جميع الإجراءات اللازمة والتوقيع فيما يتطلب ذلك  - وعليه جرى التصديق والتوقيع تحريراً في 1440/02/01 هـ وصلى الله وسلم على نبينا محمد وآله وصحبه أجمعين."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


