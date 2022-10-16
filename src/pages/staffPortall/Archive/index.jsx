import Navigation from '@/components/Navigation'
import ArabicDate from '@/utils/ArabicDate';
import React from 'react'
import Sort from '../../../assist/icons/sort.svg';
import Search from "../../../assist/icons/search.svg";
import Filter from "../../../assist/icons/filter-gold.svg";
import Download from "../../../assist/icons/download.svg";
import Cloud from "../../../assist/icons/cloud.svg";
import File from "../../../assist/icons/file-gold.svg";
import Folder from "../../../assist/icons/folder.svg";
import Acropat from "../../../assist/icons/pdf.svg";
import Zip from "../../../assist/icons/zip.svg";
import Img from "../../../assist/icons/file-image.svg";

export default function Archive() {
  return (
    <>
      <Navigation />
      <div className="case-container">
        <ArabicDate />
        <div>
          <div className="welcomer">مرحباً, اهلاً بعودتك أ. ماجد بن طالب </div>
          <h1 className="addSession-title font-extrabold">الأرشيف</h1>
        </div>

        <div className="archive-container">
          <div className="archive-header">
            <div className="archive-header-label">
              عرض النتائج 1 - 22 من 500
              <img src={Sort} alt="" />
            </div>
            <div className="archive-header-label">
              <div className="filter mr-2">
                <img src={Filter} alt="" />
              </div>
              <div className="customers-field mr-2">
                <input
                  className="customers-input"
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
              <div className="check-label">
                تحديد مستند
                <input type="checkbox" className="ml-2" />
              </div>
            </div>
            <div className="archive-header-label">
              <button
                style={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                تحميل
                <img
                  src={Download}
                  alt="icon"
                  style={{ width: "10px" }}
                  className="mr-2"
                />
              </button>
              <button
                style={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#FFF",
                  width: "50px",
                }}
                className="ml-2"
              >
                <img src={Cloud} alt="icon" style={{ width: "20px" }} />
              </button>
              <button
                style={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#FFF",
                  width: "50px",
                }}
                className="ml-2"
              >
                <img src={File} alt="icon" style={{ width: "20px" }} />
              </button>
            </div>
          </div>
          <div className="archive-body">
            <div className="archive-box">
              <img src={Folder} alt="" />
              <p>كان لوريم إيبسوم ولايزال المعيار</p>
            </div>
            <div className="archive-box">
              <img src={Folder} alt="" />
              <p>كان لوريم إيبسوم ولايزال المعيار</p>
            </div>
            <div className="archive-box">
              <img src={Folder} alt="" />
              <p>كان لوريم إيبسوم ولايزال المعيار</p>
            </div>
          </div>
          <div className="archive-content">
            <div className="archive-box">
              <img src={Folder} alt="" />
              <p>كان لوريم إيبسوم ولايزال المعيار</p>
              <span>1443-12-01</span>
            </div>
            <div className="archive-box">
              <img src={Zip} alt="" />
              <p>كان لوريم إيبسوم ولايزال المعيار</p>
              <span>1443-12-01</span>
            </div>
            <div className="archive-box">
              <img src={Img} alt="" />
              <p>كان لوريم إيبسوم ولايزال المعيار</p>
              <span>1443-12-01</span>
            </div>
            <div className="archive-box">
              <img src={Acropat} alt="" />
              <p>كان لوريم إيبسوم ولايزال المعيار</p>
              <span>1443-12-01</span>
            </div>
            <div className="archive-box">
              <img src={Folder} alt="" />
              <p>كان لوريم إيبسوم ولايزال المعيار</p>
              <span>1443-12-01</span>
            </div>
            <div className="archive-box">
              <img src={Folder} alt="" />
              <p>كان لوريم إيبسوم ولايزال المعيار</p>
              <span>1443-12-01</span>
            </div>
            <div className="archive-box">
              <img src={Zip} alt="" />
              <p>كان لوريم إيبسوم ولايزال المعيار</p>
              <span>1443-12-01</span>
            </div>
            <div className="archive-box">
              <img src={Img} alt="" />
              <p>كان لوريم إيبسوم ولايزال المعيار</p>
              <span>1443-12-01</span>
            </div>
            <div className="archive-box">
              <img src={Acropat} alt="" />
              <p>كان لوريم إيبسوم ولايزال المعيار</p>
              <span>1443-12-01</span>
            </div>
            <div className="archive-box">
              <img src={Folder} alt="" />
              <p>كان لوريم إيبسوم ولايزال المعيار</p>
              <span>1443-12-01</span>
            </div>
            <div className="archive-box">
              <img src={Folder} alt="" />
              <p>كان لوريم إيبسوم ولايزال المعيار</p>
              <span>1443-12-01</span>
            </div>
            <div className="archive-box">
              <img src={Zip} alt="" />
              <p>كان لوريم إيبسوم ولايزال المعيار</p>
              <span>1443-12-01</span>
            </div>
            <div className="archive-box">
              <img src={Img} alt="" />
              <p>كان لوريم إيبسوم ولايزال المعيار</p>
              <span>1443-12-01</span>
            </div>
            <div className="archive-box">
              <img src={Acropat} alt="" />
              <p>كان لوريم إيبسوم ولايزال المعيار</p>
              <span>1443-12-01</span>
            </div>
            <div className="archive-box">
              <img src={Folder} alt="" />
              <p>كان لوريم إيبسوم ولايزال المعيار</p>
              <span>1443-12-01</span>
            </div>
            <div className="archive-box">
              <img src={Folder} alt="" />
              <p>كان لوريم إيبسوم ولايزال المعيار</p>
              <span>1443-12-01</span>
            </div>
            <div className="archive-box">
              <img src={Zip} alt="" />
              <p>كان لوريم إيبسوم ولايزال المعيار</p>
              <span>1443-12-01</span>
            </div>
            <div className="archive-box">
              <img src={Img} alt="" />
              <p>كان لوريم إيبسوم ولايزال المعيار</p>
              <span>1443-12-01</span>
            </div>
            <div className="archive-box">
              <img src={Acropat} alt="" />
              <p>كان لوريم إيبسوم ولايزال المعيار</p>
              <span>1443-12-01</span>
            </div>
            <div className="archive-box">
              <img src={Folder} alt="" />
              <p>كان لوريم إيبسوم ولايزال المعيار</p>
              <span>1443-12-01</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
