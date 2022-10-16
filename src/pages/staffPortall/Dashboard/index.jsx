import ArabicDate from '@/utils/ArabicDate';
import React from 'react'
import More from "../../../assist/icons/ellipsis-vertical-solid.svg";
import Clock from "../../../assist/icons/clock-regular-grey.svg";
import Message from "../../../assist/icons/message.svg";
import { Charts } from './Charts';
import Navigation from '@/components/Navigation';


export default function Dashboard() {
  return (
    <>
    <Navigation/>
    <div className="dashboard-container">
      <ArabicDate />
      <div>
        <div className="welcomer">مرحباً, اهلاً بعودتك أ. ماجد بن طالب </div>
      </div>

      <div className="customers my-16">
        <p className="font-semibold">لوحة المعلومات</p>
      </div>
      <div className="dashboard_box">
        <div className="dashboard_boxes">
          <div className="dashboard_boxe">
            تم تحديث لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي تم تحديث لوريم
            إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي
          </div>
          <div className="dashboard_boxe">
            تم تحديث لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي تم تحديث لوريم
            إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي
          </div>
          <div className="dashboard_boxe">
            تم تحديث لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي تم تحديث لوريم
            إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي
          </div>
          <div className="dashboard_boxe">
            تم تحديث لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي تم تحديث لوريم
            إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي
          </div>
        </div>
      </div>
      {/* <div className="scrollbar"></div> */}

      <div className="dashboard-cont">
        <div className="dashboard-right-cont">
          <div className="dashboard-right-head">
            <div className="right-head-cont">
              <div className="right-head-cont-title">
                <img src={Clock} alt="" />
                <p>اقرب موعد قادم الساعة</p>
              </div>
              <div className="right-head-cont-center">3:00 PM</div>
              <div className="right-head-cont-footer">
                <img src={Message} alt="" />
                <p>مراجعة</p>
              </div>
            </div>
            <div className="right-head-cont">
              <div className="right-head-cont-title">
                <img src={Clock} alt="" />
                <p>اقرب موعد قادم الساعة</p>
              </div>
              <div className="right-head-cont-center">3:00 PM</div>
              <div className="right-head-cont-footer">
                <img src={Message} alt="" />
                <p>مهمة</p>
              </div>
            </div>
            <div className="right-head-cont">
              <div className="right-head-cont-title">
                <img src={Clock} alt="" />
                <p>اقرب موعد قادم الساعة</p>
              </div>
              <div className="right-head-cont-center">3:00 PM</div>
              <div className="right-head-cont-footer">
                <img src={Message} alt="" />
                <p>جلسة</p>
              </div>
            </div>
          </div>
            <div className="text">
                احصائيات
            </div>
            <div className="dashboard-right-body">
            <div className="dashboard-right-body-head">
                <span></span>
                <span></span>
            </div>
            <Charts/>
            
            </div>
        </div>

        <div className="dashboard-left-cont">
          <div className="dashboard-left-cont-box">
            <div className="dashboard-left-cont-box-head">
              <p className="font-semibold">مواعيد</p>
              <img src={More} alt="more" />
            </div>
            <div className="dashboard-left-cont-box-body">
              <div className="dashboard-left-cont-box-body-item">
                <input type="checkbox" name="" id="" />
                <p>استشارة</p>
              </div>
              <p>قيد المراجعة</p>
            </div>
            <div className="dashboard-left-cont-box-body">
              <div className="dashboard-left-cont-box-body-item">
                <input type="checkbox" name="" id="" />
                <p>استشارة</p>
              </div>
              <p>قيد المراجعة</p>
            </div>
            <div className="dashboard-left-cont-box-body">
              <div className="dashboard-left-cont-box-body-item">
                <input type="checkbox" name="" id="" />
                <p>استشارة</p>
              </div>
              <p>قيد المراجعة</p>
            </div>
          </div>
          <div className="dashboard-left-cont-box">
            <div className="dashboard-left-cont-box-head">
              <p className="font-semibold">مواعيد</p>
              <img src={More} alt="more" />
            </div>
            <div className="dashboard-left-cont-box-body">
              <div className="dashboard-left-cont-box-body-item">
                <input type="checkbox" name="" id="" />
                <p>استشارة</p>
              </div>
              <p>قيد المراجعة</p>
            </div>
            <div className="dashboard-left-cont-box-body">
              <div className="dashboard-left-cont-box-body-item">
                <input type="checkbox" name="" id="" />
                <p>استشارة</p>
              </div>
              <p>قيد المراجعة</p>
            </div>
            <div className="dashboard-left-cont-box-body">
              <div className="dashboard-left-cont-box-body-item">
                <input type="checkbox" name="" id="" />
                <p>استشارة</p>
              </div>
              <p>قيد المراجعة</p>
            </div>
          </div>
          <div className="dashboard-left-cont-box">
            <div className="dashboard-left-cont-box-head">
              <p className="font-semibold">مواعيد</p>
              <img src={More} alt="more" />
            </div>
            <div className="dashboard-left-cont-box-body">
              <div className="dashboard-left-cont-box-body-item">
                <input type="checkbox" name="" id="" />
                <p>استشارة</p>
              </div>
              <p>قيد المراجعة</p>
            </div>
            <div className="dashboard-left-cont-box-body">
              <div className="dashboard-left-cont-box-body-item">
                <input type="checkbox" name="" id="" />
                <p>استشارة</p>
              </div>
              <p>قيد المراجعة</p>
            </div>
            <div className="dashboard-left-cont-box-body">
              <div className="dashboard-left-cont-box-body-item">
                <input type="checkbox" name="" id="" />
                <p>استشارة</p>
              </div>
              <p>قيد المراجعة</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
