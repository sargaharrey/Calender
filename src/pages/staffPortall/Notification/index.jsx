import Navigation from '@/components/Navigation'
import ArabicDate from '@/utils/ArabicDate'
import React from 'react'
import User from '../../../assist/icons/user_circle.svg'
import Search from "../../../assist/icons/search.svg";

export default function Notification() {
    const notifications = [
        {notificationsName: 'خالد ناصر', notificationsText: 'قام باسناد الجلسة اليك', notificationsDate: 'منذ 3 دقائق', id: 1},
        {notificationsName: 'خالد ناصر', notificationsText: 'قام باسناد الجلسة اليك', notificationsDate: 'منذ 3 دقائق', id: 2},
        {notificationsName: 'خالد ناصر', notificationsText: 'قام باسناد الجلسة اليك', notificationsDate: 'منذ 3 دقائق', id: 3},
        {notificationsName: 'خالد ناصر', notificationsText: 'قام باسناد الجلسة اليك', notificationsDate: 'منذ 3 دقائق', id: 4},
    ]


  return (
    <>
      <Navigation />
      <div className="case-container">
        <ArabicDate />
        <div>
          <div className="welcomer">مرحباً, اهلاً بعودتك أ. ماجد بن طالب </div>
          <h1 className="addSession-title font-extrabold">الاشعارات</h1>
        </div>

        <div className="notification">

          <div className="right">
          <span>اليوم</span>
            {notifications &&
              notifications.map((noty) => {
                return (
                  <div className="notification-card" key={noty.id}>
                    <div className="notification-card-right">
                      <img src={User} alt="user" />
                      <div className="notification-card-right-info">
                        <h2>{noty.notificationsName}</h2>
                        <h2 className="font-thin">{noty.notificationsText}</h2>
                      </div>
                    </div>
                    <div className="notification-card-left">
                      {noty.notificationsDate}
                    </div>
                  </div>
                );
              })}
          <span>الأمس</span>
            {notifications &&
              notifications.map((noty) => {
                return (
                  <div className="notification-card" key={noty.id}>
                    <div className="notification-card-right">
                      <img src={User} alt="user" />
                      <div className="notification-card-right-info">
                        <h2>{noty.notificationsName}</h2>
                        <h2 className="font-thin">{noty.notificationsText}</h2>
                      </div>
                    </div>
                    <div className="notification-card-left">
                      {noty.notificationsDate}
                    </div>
                  </div>
                );
              })}
          </div>

          

          <div className="left">
            <div className="left-header">
              تصفية الاشعارات
              <div className="customers-field">
                <input
                  className="notifications-input"
                  type="text"
                  placeholder="نص العنصر النائب"
                />
                <img
                  src={Search}
                  alt="search"
                  className="session-search-icon"
                  style={{ position: "absolute", top: "50%", left: "10%" }}
                />
              </div>

              <div className="notifications-filter">
                <div className="notifications-label">
                    الضبط
                    <input type="checkbox" />
                </div>
                <div className="notifications-label">
                    الضبط
                    <input type="checkbox" />
                </div>
                <div className="notifications-label">
                    الضبط
                    <input type="checkbox" />
                </div>
                <div className="notifications-label">
                    الضبط
                    <input type="checkbox" />
                </div>
                <div className="notifications-label">
                    الضبط
                    <input type="checkbox" />
                </div>
                <div className="notifications-label">
                    الضبط
                    <input type="checkbox" />
                </div>
                <div className="notifications-label">
                    الضبط
                    <input type="checkbox" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
