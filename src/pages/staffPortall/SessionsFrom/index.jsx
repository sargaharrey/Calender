import React, { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import ArabicDate from "@/utils/ArabicDate";
import More from '../../../assist/icons/angle_down_black.svg';
import { useAuth } from "@/context";
import { httpGetRequest } from "@/networking";
import endpoints from "@/constants/endpoints";

export default function SessionsFrom() {
  const [active, setActive] = useState(1);

  const handleActive = (index) => {
    setActive(index);
    console.log(active);
  };

  const {authToken}  = useAuth();

  useEffect(() => {

    if(authToken) {
      httpGetRequest(endpoints.sessionsListFrom, {}, authToken).then(response => {
        if(response.status) {
          console.log(response);
        }
      })
    }

  }, [authToken])

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
                الجلسات المسندة من قبلي
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
                المواعيد المسندة من قبلي
              </span>
              <div
                className={
                  active === 2
                    ? "navbar_line navbar_line_active"
                    : "navbar_line"
                }
              ></div>
            </div>
            <div className="navbar_button">
              <span
                onClick={() => handleActive(3)}
                style={{ color: active === 3 ? "#AE965A" : "#39281F" }}
              >
                المهمات المسندة من قبلي
              </span>
              <div
                className={
                  active === 3
                    ? "navbar_line navbar_line_active"
                    : "navbar_line"
                }
              ></div>
            </div>
            <div className="navbar_button">
              <span
                onClick={() => handleActive(4)}
                style={{ color: active === 4 ? "#AE965A" : "#39281F" }}
              >
                المراجعات المسندة من قبلي
              </span>
              <div
                className={
                  active === 4
                    ? "navbar_line navbar_line_active"
                    : "navbar_line"
                }
              ></div>
            </div>
          </div>
        </div>

        {active === 1 && (
          <div>
            <table className="appointments-table">
              <thead>
                <tr>
                  <td> عرض التفاصيل </td>
                  <td> حالة قبول المحامي </td>

                  <td>تاريخ الرد / المقدرا المتبقي للرد</td>
                  <td>تاريخ الارسال</td>
                  <td>المتلقي</td>
                  <td>نوع الطلب</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src={More} alt="more" />
                  </td>
                  <td>تم القبول</td>
                  <td>10:00 am 1443-12-01</td>
                  <td>1443-12-01</td>
                  <td>ماجد سليمان</td>

                  <td>1</td>
                </tr>
                <tr>
                  <td>
                    <img src={More} alt="more" />
                  </td>
                  <td>تم القبول</td>
                  <td>10:00 am 1443-12-01</td>
                  <td>1443-12-01</td>
                  <td>ماجد سليمان</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>
                    <img src={More} alt="more" />
                  </td>
                  <td>تم القبول</td>
                  <td>10:00 am 1443-12-01</td>
                  <td>1443-12-01</td>
                  <td>ماجد سليمان</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>
                    <img src={More} alt="more" />
                  </td>
                  <td>تم القبول</td>
                  <td>10:00 am 1443-12-01</td>
                  <td>1443-12-01</td>
                  <td>ماجد سليمان</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>
                    <img src={More} alt="more" />
                  </td>
                  <td>تم القبول</td>
                  <td>10:00 am 1443-12-01</td>
                  <td>1443-12-01</td>
                  <td>ماجد سليمان</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>
                    <img src={More} alt="more" />
                  </td>
                  <td>تم القبول</td>
                  <td>10:00 am 1443-12-01</td>
                  <td>1443-12-01</td>
                  <td>ماجد سليمان</td>
                  <td>6</td>
                </tr>
                <tr>
                  <td>
                    <img src={More} alt="more" />
                  </td>
                  <td>تم القبول</td>
                  <td>10:00 am 1443-12-01</td>
                  <td>1443-12-01</td>
                  <td>ماجد سليمان</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>
                    <img src={More} alt="more" />
                  </td>
                  <td>تم القبول</td>
                  <td>10:00 am 1443-12-01</td>
                  <td>1443-12-01</td>
                  <td>ماجد سليمان</td>
                  <td>8</td>
                </tr>
                <tr>
                  <td>
                    <img src={More} alt="more" />
                  </td>
                  <td>تم القبول</td>
                  <td>10:00 am 1443-12-01</td>
                  <td>1443-12-01</td>
                  <td>ماجد سليمان</td>
                  <td>9</td>
                </tr>
                <tr>
                  <td>
                    <img src={More} alt="more" />
                  </td>
                  <td>تم القبول</td>
                  <td>10:00 am 1443-12-01</td>
                  <td>1443-12-01</td>
                  <td>ماجد سليمان</td>
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
                  <td> عرض التفاصيل </td>
                  <td> حالة قبول المحامي </td>

                  <td>تاريخ الرد / المقدرا المتبقي للرد</td>
                  <td>تاريخ الارسال</td>
                  <td>المتلقي</td>
                  <td>نوع الطلب</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                 <td>
                    <img src={More} alt="more" />
                  </td>
                  <td>تم القبول</td>
                  <td>10:00 am 1443-12-01</td>
                  <td>1443-12-01</td>
                  <td>ماجد سليمان</td>

                  <td>1</td>
                </tr>
                <tr>
                 <td>
                    <img src={More} alt="more" />
                  </td>
                  <td>تم القبول</td>
                  <td>10:00 am 1443-12-01</td>
                  <td>1443-12-01</td>
                  <td>ماجد سليمان</td>
                  <td>2</td>
                </tr>
                <tr>
                 <td>
                    <img src={More} alt="more" />
                  </td>
                  <td>تم القبول</td>
                  <td>10:00 am 1443-12-01</td>
                  <td>1443-12-01</td>
                  <td>ماجد سليمان</td>
                  <td>3</td>
                </tr>
                <tr>
                 <td>
                    <img src={More} alt="more" />
                  </td>
                  <td>تم القبول</td>
                  <td>10:00 am 1443-12-01</td>
                  <td>1443-12-01</td>
                  <td>ماجد سليمان</td>
                  <td>4</td>
                </tr>
                <tr>
                 <td>
                    <img src={More} alt="more" />
                  </td>
                  <td>تم القبول</td>
                  <td>10:00 am 1443-12-01</td>
                  <td>1443-12-01</td>
                  <td>ماجد سليمان</td>
                  <td>5</td>
                </tr>
                <tr>
                 <td>
                    <img src={More} alt="more" />
                  </td>
                  <td>تم القبول</td>
                  <td>10:00 am 1443-12-01</td>
                  <td>1443-12-01</td>
                  <td>ماجد سليمان</td>
                  <td>6</td>
                </tr>
                <tr>
                 <td>
                    <img src={More} alt="more" />
                  </td>
                  <td>تم القبول</td>
                  <td>10:00 am 1443-12-01</td>
                  <td>1443-12-01</td>
                  <td>ماجد سليمان</td>
                  <td>7</td>
                </tr>
                <tr>
                 <td>
                    <img src={More} alt="more" />
                  </td>
                  <td>تم القبول</td>
                  <td>10:00 am 1443-12-01</td>
                  <td>1443-12-01</td>
                  <td>ماجد سليمان</td>
                  <td>8</td>
                </tr>
                <tr>
                 <td>
                    <img src={More} alt="more" />
                  </td>
                  <td>تم القبول</td>
                  <td>10:00 am 1443-12-01</td>
                  <td>1443-12-01</td>
                  <td>ماجد سليمان</td>
                  <td>9</td>
                </tr>
                <tr>
                 <td>
                    <img src={More} alt="more" />
                  </td>
                  <td>تم القبول</td>
                  <td>10:00 am 1443-12-01</td>
                  <td>1443-12-01</td>
                  <td>ماجد سليمان</td>
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
                  <td> عرض التفاصيل </td>
                  <td> حالة قبول المحامي </td>

                  <td>تاريخ الرد / المقدرا المتبقي للرد</td>
                  <td>تاريخ الارسال</td>
                  <td>المتلقي</td>
                  <td>نوع الطلب</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src={More} alt="more" />
                  </td>
                  <td>تم القبول</td>
                  <td>10:00 am 1443-12-01</td>
                  <td>1443-12-01</td>
                  <td>ماجد سليمان</td>

                  <td>1</td>
                </tr>
                <tr>
                  <td>
                    <img src={More} alt="more" />
                  </td>
                  <td>تم القبول</td>
                  <td>10:00 am 1443-12-01</td>
                  <td>1443-12-01</td>
                  <td>ماجد سليمان</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>
                    <img src={More} alt="more" />
                  </td>
                  <td>تم القبول</td>
                  <td>10:00 am 1443-12-01</td>
                  <td>1443-12-01</td>
                  <td>ماجد سليمان</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>
                    <img src={More} alt="more" />
                  </td>
                  <td>تم القبول</td>
                  <td>10:00 am 1443-12-01</td>
                  <td>1443-12-01</td>
                  <td>ماجد سليمان</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>
                    <img src={More} alt="more" />
                  </td>
                  <td>تم القبول</td>
                  <td>10:00 am 1443-12-01</td>
                  <td>1443-12-01</td>
                  <td>ماجد سليمان</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>
                    <img src={More} alt="more" />
                  </td>
                  <td>تم القبول</td>
                  <td>10:00 am 1443-12-01</td>
                  <td>1443-12-01</td>
                  <td>ماجد سليمان</td>
                  <td>6</td>
                </tr>
                <tr>
                  <td>
                    <img src={More} alt="more" />
                  </td>
                  <td>تم القبول</td>
                  <td>10:00 am 1443-12-01</td>
                  <td>1443-12-01</td>
                  <td>ماجد سليمان</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>
                    <img src={More} alt="more" />
                  </td>
                  <td>تم القبول</td>
                  <td>10:00 am 1443-12-01</td>
                  <td>1443-12-01</td>
                  <td>ماجد سليمان</td>
                  <td>8</td>
                </tr>
                <tr>
                  <td>
                    <img src={More} alt="more" />
                  </td>
                  <td>تم القبول</td>
                  <td>10:00 am 1443-12-01</td>
                  <td>1443-12-01</td>
                  <td>ماجد سليمان</td>
                  <td>9</td>
                </tr>
                <tr>
                  <td>
                    <img src={More} alt="more" />
                  </td>
                  <td>تم القبول</td>
                  <td>10:00 am 1443-12-01</td>
                  <td>1443-12-01</td>
                  <td>ماجد سليمان</td>
                  <td>10</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {active === 4 && (
          <div>
            <table className="appointments-table">
              <thead>
                <tr>
                  <td> عرض التفاصيل </td>
                  <td> حالة قبول المحامي </td>

                  <td>تاريخ الرد / المقدرا المتبقي للرد</td>
                  <td>تاريخ الارسال</td>
                  <td>المتلقي</td>
                  <td>نوع الطلب</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src={More} alt="more" />
                  </td>
                  <td>تم القبول</td>
                  <td>10:00 am 1443-12-01</td>
                  <td>1443-12-01</td>
                  <td>ماجد سليمان</td>

                  <td>1</td>
                </tr>
                <tr>
                  <td>
                    <img src={More} alt="more" />
                  </td>
                  <td>تم القبول</td>
                  <td>10:00 am 1443-12-01</td>
                  <td>1443-12-01</td>
                  <td>ماجد سليمان</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>
                    <img src={More} alt="more" />
                  </td>
                  <td>تم القبول</td>
                  <td>10:00 am 1443-12-01</td>
                  <td>1443-12-01</td>
                  <td>ماجد سليمان</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>
                    <img src={More} alt="more" />
                  </td>
                  <td>تم القبول</td>
                  <td>10:00 am 1443-12-01</td>
                  <td>1443-12-01</td>
                  <td>ماجد سليمان</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>
                    <img src={More} alt="more" />
                  </td>
                  <td>تم القبول</td>
                  <td>10:00 am 1443-12-01</td>
                  <td>1443-12-01</td>
                  <td>ماجد سليمان</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>
                    <img src={More} alt="more" />
                  </td>
                  <td>تم القبول</td>
                  <td>10:00 am 1443-12-01</td>
                  <td>1443-12-01</td>
                  <td>ماجد سليمان</td>
                  <td>6</td>
                </tr>
                <tr>
                  <td>
                    <img src={More} alt="more" />
                  </td>
                  <td>تم القبول</td>
                  <td>10:00 am 1443-12-01</td>
                  <td>1443-12-01</td>
                  <td>ماجد سليمان</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>
                    <img src={More} alt="more" />
                  </td>
                  <td>تم القبول</td>
                  <td>10:00 am 1443-12-01</td>
                  <td>1443-12-01</td>
                  <td>ماجد سليمان</td>
                  <td>8</td>
                </tr>
                <tr>
                  <td>
                    <img src={More} alt="more" />
                  </td>
                  <td>تم القبول</td>
                  <td>10:00 am 1443-12-01</td>
                  <td>1443-12-01</td>
                  <td>ماجد سليمان</td>
                  <td>9</td>
                </tr>
                <tr>
                  <td>
                    <img src={More} alt="more" />
                  </td>
                  <td>تم القبول</td>
                  <td>10:00 am 1443-12-01</td>
                  <td>1443-12-01</td>
                  <td>ماجد سليمان</td>
                  <td>10</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}
