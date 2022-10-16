import Navigation from '@/components/Navigation';
import ArabicDate from '@/utils/ArabicDate';
import Calender from '../../../assist/icons/calndergold.svg';
import Angle from '../../../assist/icons/angle_down_gold.svg';
import React from 'react'

export default function AddSessionAns() {
  return (
    <>
      <Navigation />
      <div className="addSession-container">
        <ArabicDate />
        <div>
          <h1 className="addSession-title"> إضافة جلسة جديدة للقضية : gf </h1>
        </div>

        <div className="addSessionans-form">
          <div className="input">
            <img src={Angle} alt="angle" />
            <input
              type="text"
              className="session-type-input mt-2"
              placeholder="محامي الحضور"
            />
          </div>
          <div className="input">
            <img src={Angle} alt="angle" />
            <input
              type="text"
              className="session-type-input mt-2"
              placeholder="نوع الجلسة"
            />
          </div>
          <div className="input">
            <img src={Angle} alt="angle" />
            <input
              type="text"
              className="session-type-input mt-2"
              placeholder="رقم الجلسة"
            />
          </div>
          <div className="input">
            <input
              type="text"
              className="session-type-input mt-2"
              placeholder="وقت الجلسة"
            />
          </div>
          <div className="input">
            <img src={Calender} alt="calender" />
            <input
              type="text"
              className="session-type-input mt-2"
              placeholder="تاريخ الجلسة"
            />
            <button>حفظ</button>
          </div>
          <div className="input">
            <input
              type="text"
              className="session-type-input mt-2"
              placeholder="موضوع الجلسة"
            />
          </div>
        </div>
      </div>
    </>
  );
}
