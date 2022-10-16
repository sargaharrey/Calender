import Navigation from '@/components/Navigation'
import React, { useState } from 'react'
import Tower from '../../../assist/icons/tower.svg'
import TowerAct from '../../../assist/icons/tower-act.svg'
import File from '../../../assist/icons/file-view.svg'
import { Link } from 'react-router-dom'


export default function Query() {
    const [active, setActive] = useState(2)
    
    const handleActive = (i) => {
        setActive(i)
    }

  return (
    <>
      <Navigation />
      <div className="query">
        استعلم عن الخدمات الظاهرة
        <div className="query-header-boxes">
          <div
            onClick={() => handleActive(1)}
            className={
              active === 1 ? "query-header-box-active" : "query-header-box"
            }
          >
            <img src={Tower} alt="" />
            السجلات التجارية
          </div>
          <div
            onClick={() => handleActive(2)}
            className={
              active === 2 ? "query-header-box-active" : "query-header-box"
            }
          >
            <img src={TowerAct} alt="" />
            الصكوك العقارية
          </div>
          <div
            onClick={() => handleActive(3)}
            className={
              active === 3 ? "query-header-box-active" : "query-header-box"
            }
          >
            <img src={Tower} alt="" />
            الوكالات العدلية
          </div>
        </div>
        <div className="query-field mt-7">
          <span>
            <span className="inner-span">*</span>سبب الاستعلام{" "}
          </span>
          <input
            className="customers-input"
            type="text"
            placeholder="نص العنصر النائب"
          />
        </div>
        <div className="query-body">
          <div className="query-line"></div>
          <div className="query-links">
            <span>الاستعلامات السابقة</span>
            <Link
              to={
                (active === 1 && "/staff/query/commercialfiles") ||
                (active === 2 && "/staff/query/realestateinstruments") ||
                (active === 3 && "/staff/query/judicialagencies")
              }
              className="query-link-active"
            >
              الذهاب
            </Link>
          </div>
          {active === 1 && (
            <div className="query-body-cont">
              <span>الاستعلامات السابقة</span>
              <table className="query-table">
                <thead>
                  <tr>
                    <td>تحميل PDF</td>
                    <td>معاينة</td>
                    <td>تاريخ الاستعلام</td>
                    <td>سبب الاستعلام</td>
                    <td>رقم السجل التجاري - الهوية</td>
                    <td>الخدمة</td>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ fontSize: "12px" }}>
                    <td style={{ color: "#AE965A" }}>تحميل</td>
                    <td style={{ display: "flex", color: "#AE965A" }}>
                      <img
                        src={File}
                        alt="icon"
                        style={{
                          cursor: "pointer",
                          width: "20px",
                          margin: "0 10px",
                        }}
                      />
                      معاينة
                    </td>
                    <td>1443-12-01</td>
                    <td> لجان المخالفات والمنازعات التمويلية</td>
                    <td>1021548</td>
                    <td>التحقق من الوكالة العدلية</td>
                  </tr>

                  <tr style={{ fontSize: "12px" }}>
                    <td style={{ color: "#AE965A" }}>تحميل</td>
                    <td style={{ display: "flex", color: "#AE965A" }}>
                      <img
                        src={File}
                        alt="icon"
                        style={{
                          cursor: "pointer",
                          width: "20px",
                          margin: "0 10px",
                        }}
                      />
                      معاينة
                    </td>
                    <td>1443-12-01</td>
                    <td> لجان المخالفات والمنازعات التمويلية</td>
                    <td>1021548</td>
                    <td>التحقق من الوكالة العدلية</td>
                  </tr>
                  <tr style={{ fontSize: "12px" }}>
                    <td style={{ color: "#AE965A" }}>تحميل</td>
                    <td style={{ display: "flex", color: "#AE965A" }}>
                      <img
                        src={File}
                        alt="icon"
                        style={{
                          cursor: "pointer",
                          width: "20px",
                          margin: "0 10px",
                        }}
                      />
                      معاينة
                    </td>
                    <td>1443-12-01</td>
                    <td> لجان المخالفات والمنازعات التمويلية</td>
                    <td>1021548</td>
                    <td>التحقق من الوكالة العدلية</td>
                  </tr>

                  <tr style={{ fontSize: "12px" }}>
                    <td style={{ color: "#AE965A" }}>تحميل</td>
                    <td style={{ display: "flex", color: "#AE965A" }}>
                      <img
                        src={File}
                        alt="icon"
                        style={{
                          cursor: "pointer",
                          width: "20px",
                          margin: "0 10px",
                        }}
                      />
                      معاينة
                    </td>
                    <td>1443-12-01</td>
                    <td> لجان المخالفات والمنازعات التمويلية</td>
                    <td>1021548</td>
                    <td>التحقق من الوكالة العدلية</td>
                  </tr>

                  <tr style={{ fontSize: "12px" }}>
                    <td style={{ color: "#AE965A" }}>تحميل</td>
                    <td style={{ display: "flex", color: "#AE965A" }}>
                      <img
                        src={File}
                        alt="icon"
                        style={{
                          cursor: "pointer",
                          width: "20px",
                          margin: "0 10px",
                        }}
                      />
                      معاينة
                    </td>
                    <td>1443-12-01</td>
                    <td> لجان المخالفات والمنازعات التمويلية</td>
                    <td>1021548</td>
                    <td>التحقق من الوكالة العدلية</td>
                  </tr>
                  <tr style={{ fontSize: "12px" }}>
                    <td style={{ color: "#AE965A" }}>تحميل</td>
                    <td style={{ display: "flex", color: "#AE965A" }}>
                      <img
                        src={File}
                        alt="icon"
                        style={{
                          cursor: "pointer",
                          width: "20px",
                          margin: "0 10px",
                        }}
                      />
                      معاينة
                    </td>
                    <td>1443-12-01</td>
                    <td> لجان المخالفات والمنازعات التمويلية</td>
                    <td>1021548</td>
                    <td>التحقق من الوكالة العدلية</td>
                  </tr>

                  <tr style={{ fontSize: "12px" }}>
                    <td style={{ color: "#AE965A" }}>تحميل</td>
                    <td style={{ display: "flex", color: "#AE965A" }}>
                      <img
                        src={File}
                        alt="icon"
                        style={{
                          cursor: "pointer",
                          width: "20px",
                          margin: "0 10px",
                        }}
                      />
                      معاينة
                    </td>
                    <td>1443-12-01</td>
                    <td> لجان المخالفات والمنازعات التمويلية</td>
                    <td>1021548</td>
                    <td>التحقق من الوكالة العدلية</td>
                  </tr>

                  <tr style={{ fontSize: "12px" }}>
                    <td style={{ color: "#AE965A" }}>تحميل</td>
                    <td style={{ display: "flex", color: "#AE965A" }}>
                      <img
                        src={File}
                        alt="icon"
                        style={{
                          cursor: "pointer",
                          width: "20px",
                          margin: "0 10px",
                        }}
                      />
                      معاينة
                    </td>
                    <td>1443-12-01</td>
                    <td> لجان المخالفات والمنازعات التمويلية</td>
                    <td>1021548</td>
                    <td>التحقق من الوكالة العدلية</td>
                  </tr>

                  <tr style={{ fontSize: "12px" }}>
                    <td style={{ color: "#AE965A" }}>تحميل</td>
                    <td style={{ display: "flex", color: "#AE965A" }}>
                      <img
                        src={File}
                        alt="icon"
                        style={{
                          cursor: "pointer",
                          width: "20px",
                          margin: "0 10px",
                        }}
                      />
                      معاينة
                    </td>
                    <td>1443-12-01</td>
                    <td> لجان المخالفات والمنازعات التمويلية</td>
                    <td>1021548</td>
                    <td>التحقق من الوكالة العدلية</td>
                  </tr>

                  <tr style={{ fontSize: "12px" }}>
                    <td style={{ color: "#AE965A" }}>تحميل</td>
                    <td style={{ display: "flex", color: "#AE965A" }}>
                      <img
                        src={File}
                        alt="icon"
                        style={{
                          cursor: "pointer",
                          width: "20px",
                          margin: "0 10px",
                        }}
                      />
                      معاينة
                    </td>
                    <td>1443-12-01</td>
                    <td> لجان المخالفات والمنازعات التمويلية</td>
                    <td>1021548</td>
                    <td>التحقق من الوكالة العدلية</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          {active === 2 && (
            <div className="query-body-cont">
              <span>الاستعلامات السابقة</span>
              <table className="query-table">
                <thead>
                  <tr>
                    <td>تحميل PDF</td>
                    <td>معاينة</td>
                    <td>تاريخ الاستعلام</td>
                    <td>سبب الاستعلام</td>
                    <td>رقم السجل التجاري - الهوية</td>
                    <td>الخدمة</td>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ fontSize: "12px" }}>
                    <td style={{ color: "#AE965A" }}>تحميل</td>
                    <td style={{ display: "flex", color: "#AE965A" }}>
                      <img
                        src={File}
                        alt="icon"
                        style={{
                          cursor: "pointer",
                          width: "20px",
                          margin: "0 10px",
                        }}
                      />
                      معاينة
                    </td>
                    <td>1443-12-01</td>
                    <td> لجان المخالفات والمنازعات التمويلية</td>
                    <td>1021548</td>
                    <td>التحقق من الوكالة العدلية</td>
                  </tr>

                  <tr style={{ fontSize: "12px" }}>
                    <td style={{ color: "#AE965A" }}>تحميل</td>
                    <td style={{ display: "flex", color: "#AE965A" }}>
                      <img
                        src={File}
                        alt="icon"
                        style={{
                          cursor: "pointer",
                          width: "20px",
                          margin: "0 10px",
                        }}
                      />
                      معاينة
                    </td>
                    <td>1443-12-01</td>
                    <td> لجان المخالفات والمنازعات التمويلية</td>
                    <td>1021548</td>
                    <td>التحقق من الوكالة العدلية</td>
                  </tr>
                  <tr style={{ fontSize: "12px" }}>
                    <td style={{ color: "#AE965A" }}>تحميل</td>
                    <td style={{ display: "flex", color: "#AE965A" }}>
                      <img
                        src={File}
                        alt="icon"
                        style={{
                          cursor: "pointer",
                          width: "20px",
                          margin: "0 10px",
                        }}
                      />
                      معاينة
                    </td>
                    <td>1443-12-01</td>
                    <td> لجان المخالفات والمنازعات التمويلية</td>
                    <td>1021548</td>
                    <td>التحقق من الوكالة العدلية</td>
                  </tr>

                  <tr style={{ fontSize: "12px" }}>
                    <td style={{ color: "#AE965A" }}>تحميل</td>
                    <td style={{ display: "flex", color: "#AE965A" }}>
                      <img
                        src={File}
                        alt="icon"
                        style={{
                          cursor: "pointer",
                          width: "20px",
                          margin: "0 10px",
                        }}
                      />
                      معاينة
                    </td>
                    <td>1443-12-01</td>
                    <td> لجان المخالفات والمنازعات التمويلية</td>
                    <td>1021548</td>
                    <td>التحقق من الوكالة العدلية</td>
                  </tr>

                  <tr style={{ fontSize: "12px" }}>
                    <td style={{ color: "#AE965A" }}>تحميل</td>
                    <td style={{ display: "flex", color: "#AE965A" }}>
                      <img
                        src={File}
                        alt="icon"
                        style={{
                          cursor: "pointer",
                          width: "20px",
                          margin: "0 10px",
                        }}
                      />
                      معاينة
                    </td>
                    <td>1443-12-01</td>
                    <td> لجان المخالفات والمنازعات التمويلية</td>
                    <td>1021548</td>
                    <td>التحقق من الوكالة العدلية</td>
                  </tr>
                  <tr style={{ fontSize: "12px" }}>
                    <td style={{ color: "#AE965A" }}>تحميل</td>
                    <td style={{ display: "flex", color: "#AE965A" }}>
                      <img
                        src={File}
                        alt="icon"
                        style={{
                          cursor: "pointer",
                          width: "20px",
                          margin: "0 10px",
                        }}
                      />
                      معاينة
                    </td>
                    <td>1443-12-01</td>
                    <td> لجان المخالفات والمنازعات التمويلية</td>
                    <td>1021548</td>
                    <td>التحقق من الوكالة العدلية</td>
                  </tr>

                  <tr style={{ fontSize: "12px" }}>
                    <td style={{ color: "#AE965A" }}>تحميل</td>
                    <td style={{ display: "flex", color: "#AE965A" }}>
                      <img
                        src={File}
                        alt="icon"
                        style={{
                          cursor: "pointer",
                          width: "20px",
                          margin: "0 10px",
                        }}
                      />
                      معاينة
                    </td>
                    <td>1443-12-01</td>
                    <td> لجان المخالفات والمنازعات التمويلية</td>
                    <td>1021548</td>
                    <td>التحقق من الوكالة العدلية</td>
                  </tr>

                  <tr style={{ fontSize: "12px" }}>
                    <td style={{ color: "#AE965A" }}>تحميل</td>
                    <td style={{ display: "flex", color: "#AE965A" }}>
                      <img
                        src={File}
                        alt="icon"
                        style={{
                          cursor: "pointer",
                          width: "20px",
                          margin: "0 10px",
                        }}
                      />
                      معاينة
                    </td>
                    <td>1443-12-01</td>
                    <td> لجان المخالفات والمنازعات التمويلية</td>
                    <td>1021548</td>
                    <td>التحقق من الوكالة العدلية</td>
                  </tr>

                  <tr style={{ fontSize: "12px" }}>
                    <td style={{ color: "#AE965A" }}>تحميل</td>
                    <td style={{ display: "flex", color: "#AE965A" }}>
                      <img
                        src={File}
                        alt="icon"
                        style={{
                          cursor: "pointer",
                          width: "20px",
                          margin: "0 10px",
                        }}
                      />
                      معاينة
                    </td>
                    <td>1443-12-01</td>
                    <td> لجان المخالفات والمنازعات التمويلية</td>
                    <td>1021548</td>
                    <td>التحقق من الوكالة العدلية</td>
                  </tr>

                  <tr style={{ fontSize: "12px" }}>
                    <td style={{ color: "#AE965A" }}>تحميل</td>
                    <td style={{ display: "flex", color: "#AE965A" }}>
                      <img
                        src={File}
                        alt="icon"
                        style={{
                          cursor: "pointer",
                          width: "20px",
                          margin: "0 10px",
                        }}
                      />
                      معاينة
                    </td>
                    <td>1443-12-01</td>
                    <td> لجان المخالفات والمنازعات التمويلية</td>
                    <td>1021548</td>
                    <td>التحقق من الوكالة العدلية</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          {active === 3 && (
            <div className="query-body-cont">
              <span>الاستعلامات السابقة</span>
              <table className="query-table">
                <thead>
                  <tr>
                    <td>تحميل PDF</td>
                    <td>معاينة</td>
                    <td>تاريخ الاستعلام</td>
                    <td>سبب الاستعلام</td>
                    <td>رقم السجل التجاري - الهوية</td>
                    <td>الخدمة</td>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ fontSize: "12px" }}>
                    <td style={{ color: "#AE965A" }}>تحميل</td>
                    <td style={{ display: "flex", color: "#AE965A" }}>
                      <img
                        src={File}
                        alt="icon"
                        style={{
                          cursor: "pointer",
                          width: "20px",
                          margin: "0 10px",
                        }}
                      />
                      معاينة
                    </td>
                    <td>1443-12-01</td>
                    <td> لجان المخالفات والمنازعات التمويلية</td>
                    <td>1021548</td>
                    <td>التحقق من الوكالة العدلية</td>
                  </tr>

                  <tr style={{ fontSize: "12px" }}>
                    <td style={{ color: "#AE965A" }}>تحميل</td>
                    <td style={{ display: "flex", color: "#AE965A" }}>
                      <img
                        src={File}
                        alt="icon"
                        style={{
                          cursor: "pointer",
                          width: "20px",
                          margin: "0 10px",
                        }}
                      />
                      معاينة
                    </td>
                    <td>1443-12-01</td>
                    <td> لجان المخالفات والمنازعات التمويلية</td>
                    <td>1021548</td>
                    <td>التحقق من الوكالة العدلية</td>
                  </tr>
                  <tr style={{ fontSize: "12px" }}>
                    <td style={{ color: "#AE965A" }}>تحميل</td>
                    <td style={{ display: "flex", color: "#AE965A" }}>
                      <img
                        src={File}
                        alt="icon"
                        style={{
                          cursor: "pointer",
                          width: "20px",
                          margin: "0 10px",
                        }}
                      />
                      معاينة
                    </td>
                    <td>1443-12-01</td>
                    <td> لجان المخالفات والمنازعات التمويلية</td>
                    <td>1021548</td>
                    <td>التحقق من الوكالة العدلية</td>
                  </tr>

                  <tr style={{ fontSize: "12px" }}>
                    <td style={{ color: "#AE965A" }}>تحميل</td>
                    <td style={{ display: "flex", color: "#AE965A" }}>
                      <img
                        src={File}
                        alt="icon"
                        style={{
                          cursor: "pointer",
                          width: "20px",
                          margin: "0 10px",
                        }}
                      />
                      معاينة
                    </td>
                    <td>1443-12-01</td>
                    <td> لجان المخالفات والمنازعات التمويلية</td>
                    <td>1021548</td>
                    <td>التحقق من الوكالة العدلية</td>
                  </tr>

                  <tr style={{ fontSize: "12px" }}>
                    <td style={{ color: "#AE965A" }}>تحميل</td>
                    <td style={{ display: "flex", color: "#AE965A" }}>
                      <img
                        src={File}
                        alt="icon"
                        style={{
                          cursor: "pointer",
                          width: "20px",
                          margin: "0 10px",
                        }}
                      />
                      معاينة
                    </td>
                    <td>1443-12-01</td>
                    <td> لجان المخالفات والمنازعات التمويلية</td>
                    <td>1021548</td>
                    <td>التحقق من الوكالة العدلية</td>
                  </tr>
                  <tr style={{ fontSize: "12px" }}>
                    <td style={{ color: "#AE965A" }}>تحميل</td>
                    <td style={{ display: "flex", color: "#AE965A" }}>
                      <img
                        src={File}
                        alt="icon"
                        style={{
                          cursor: "pointer",
                          width: "20px",
                          margin: "0 10px",
                        }}
                      />
                      معاينة
                    </td>
                    <td>1443-12-01</td>
                    <td> لجان المخالفات والمنازعات التمويلية</td>
                    <td>1021548</td>
                    <td>التحقق من الوكالة العدلية</td>
                  </tr>

                  <tr style={{ fontSize: "12px" }}>
                    <td style={{ color: "#AE965A" }}>تحميل</td>
                    <td style={{ display: "flex", color: "#AE965A" }}>
                      <img
                        src={File}
                        alt="icon"
                        style={{
                          cursor: "pointer",
                          width: "20px",
                          margin: "0 10px",
                        }}
                      />
                      معاينة
                    </td>
                    <td>1443-12-01</td>
                    <td> لجان المخالفات والمنازعات التمويلية</td>
                    <td>1021548</td>
                    <td>التحقق من الوكالة العدلية</td>
                  </tr>

                  <tr style={{ fontSize: "12px" }}>
                    <td style={{ color: "#AE965A" }}>تحميل</td>
                    <td style={{ display: "flex", color: "#AE965A" }}>
                      <img
                        src={File}
                        alt="icon"
                        style={{
                          cursor: "pointer",
                          width: "20px",
                          margin: "0 10px",
                        }}
                      />
                      معاينة
                    </td>
                    <td>1443-12-01</td>
                    <td> لجان المخالفات والمنازعات التمويلية</td>
                    <td>1021548</td>
                    <td>التحقق من الوكالة العدلية</td>
                  </tr>

                  <tr style={{ fontSize: "12px" }}>
                    <td style={{ color: "#AE965A" }}>تحميل</td>
                    <td style={{ display: "flex", color: "#AE965A" }}>
                      <img
                        src={File}
                        alt="icon"
                        style={{
                          cursor: "pointer",
                          width: "20px",
                          margin: "0 10px",
                        }}
                      />
                      معاينة
                    </td>
                    <td>1443-12-01</td>
                    <td> لجان المخالفات والمنازعات التمويلية</td>
                    <td>1021548</td>
                    <td>التحقق من الوكالة العدلية</td>
                  </tr>

                  <tr style={{ fontSize: "12px" }}>
                    <td style={{ color: "#AE965A" }}>تحميل</td>
                    <td style={{ display: "flex", color: "#AE965A" }}>
                      <img
                        src={File}
                        alt="icon"
                        style={{
                          cursor: "pointer",
                          width: "20px",
                          margin: "0 10px",
                        }}
                      />
                      معاينة
                    </td>
                    <td>1443-12-01</td>
                    <td> لجان المخالفات والمنازعات التمويلية</td>
                    <td>1021548</td>
                    <td>التحقق من الوكالة العدلية</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
