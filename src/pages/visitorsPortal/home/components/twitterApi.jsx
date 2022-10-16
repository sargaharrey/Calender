/* eslint-disable jsx-a11y/anchor-is-valid */
import Twitter from "../../../../assist/icons/twitter_silver.svg";

export function TwitterApi() {
  return (
    <div className="twitter_box">
      <div className="twitter_top flex items-center justify-center">
        <h2 className="font-bold text-2xl">Twitter API (LIVE)</h2>
      </div>
      <div className="twitter_boxes">
        <div className="twitter_boxe">
          <img src={Twitter} alt="twitter" />
        </div>
        <div className="twitter_boxe">
          <img src={Twitter} alt="twitter" />
        </div>
        <div className="twitter_boxe">
          <img src={Twitter} alt="twitter" />
        </div>
        <div className="twitter_boxe">
          <img src={Twitter} alt="twitter" />
        </div>
      </div>
    </div>
  );
}
