import React from "react";
import ConnectIcon from "../../components/connectIcon/connectIcon.component";
import ParaLink from "../../components/paraLink/paraLink.component";
import { DetailsContext } from "../../contexts/myDetailsContext";
import "./connect.style.scss";
import { connectBoxOpen } from "./connectBoxOpen";

const Connect = () => {
  const { connect } = React.useContext(DetailsContext);

  const [boxPath, setBoxPath] = React.useState(
    "M17.677 16.879l-.343.195v-1.717l.343-.195v1.717zm2.823-3.324l-.342.195v1.717l.342-.196v-1.716zm3.5-7.602v11.507l-9.75 5.54-10.25-4.989v-11.507l9.767-5.504 10.233 4.953zm-11.846-1.757l7.022 3.2 1.7-.917-7.113-3.193-1.609.91zm.846 7.703l-7-3.24v8.19l7 3.148v-8.098zm3.021-2.809l-6.818-3.24-2.045 1.168 6.859 3.161 2.004-1.089zm5.979-.943l-2 1.078v2.786l-3 1.688v-2.856l-2 1.078v8.362l7-3.985v-8.151zm-4.907 7.348l-.349.199v1.713l.349-.195v-1.717zm1.405-.8l-.344.196v1.717l.344-.196v-1.717zm.574-.327l-.343.195v1.717l.343-.195v-1.717zm.584-.332l-.35.199v1.717l.35-.199v-1.717zm-16.656-4.036h-2v1h2v-1zm0 2h-3v1h3v-1zm0 2h-2v1h2v-1z"
  );
  const [boxText, setBoxText] = React.useState(connect.boxText);

  return (
    <div className="connect-section">
      {Object.keys(connect).map(
        (item, index) =>
          connect[item].text && <ParaLink key={index}>{connect[item]}</ParaLink>
      )}
      <p>{boxText}</p>
      <div className="connect-icons">
        <div className="connect-icons-inner">
          <div
            className={`connect-box ${boxText ? "close" : "open"}`}
            onMouseOver={() => connectBoxOpen(setBoxText, setBoxPath)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d={boxPath} />
            </svg>
          </div>
          {Object.keys(connect).map(
            (item, index) =>
              typeof connect[item] === "object" && (
                <ConnectIcon
                  key={index}
                  status={!boxText}
                  social={connect[item]}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Connect;
