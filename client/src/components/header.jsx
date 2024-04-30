import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(262deg,#0057a2,#0f3d70)",
      }}
    >
      <div className="mx-auto w-full p-3 md:p-4 flex items-center gap-6">
        <span className="md:hidden">
          <FaBars fill="#FFFFFF" size={28} />
        </span>
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="161.834"
            height="28"
            viewBox="0 0 161.834 28"
            pointer-events="all"
            cursor="pointer"
            focusable="false"
          >
            <g
              id="logo-horz-min"
              transform="translate(0.01)"
            >
              <path
                id="Path_355"
                data-name="Path 355"
                d="M85.119,20.571H88.44V15.693h4.775V13.2H88.44v-3.01h5.19V7.8H85.119V20.571Zm12.664-5.19h5.4V12.89h-5.4v-2.7h5.709V7.8H94.461V20.571H103.6V18.08H97.782v-2.7Zm16.5-6.539A7.82,7.82,0,0,0,109.719,7.8h-5.086V20.571h5.086a8.355,8.355,0,0,0,3.529-.519c2.387-1.038,3.322-3.114,3.322-5.917A6.452,6.452,0,0,0,114.287,8.842Zm-4.879,9.342h-1.453V10.295H109.3c1.038,0,3.737,0,3.737,3.841C113.041,17.146,111.692,18.08,109.408,18.184Zm11.21-2.8h5.4V12.89h-5.4v-2.7h5.709V7.8H117.3V20.571h9.134V18.08h-5.813v-2.7Zm13.909-1.038v-.1a6.6,6.6,0,0,0,1.868-.623,2.476,2.476,0,0,0,1.142-2.387,3.186,3.186,0,0,0-.83-2.491c-.727-.83-1.557-.934-3.737-.934h-5.5V20.571h3.322V15.589h1.349c1.453,0,1.557.623,1.661,2.076a27.978,27.978,0,0,0,.415,2.906h3.633a16.262,16.262,0,0,1-.519-3.114c-.415-1.972-.519-3.114-2.8-3.114ZM133.282,13.2a5.919,5.919,0,0,1-1.349.1h-1.246V10.191h1.246c.934,0,2.284,0,2.284,1.557A1.47,1.47,0,0,1,133.282,13.2Zm9.342-5.4-4.775,12.871h3.322L142,18.08h4.775l.83,2.595h3.737L146.672,7.8Zm.208,7.889,1.661-5.4h0l1.557,5.4ZM155.288,7.8h-3.425V20.571h8.719V18.08h-5.4ZM41.315,17.353,37.267,7.8H32.7V20.571h2.906V10.606l4.152,9.965h4.463V7.8H41.315Zm8.3-9.55L44.845,20.571h3.322L49,17.976h4.775l.83,2.595h3.737L53.668,7.8Zm.208,7.889,1.661-5.4h0l1.557,5.4Zm12.767,1.349L59.9,7.7H56.263l4.256,12.871h3.944L68.822,7.7H65.5ZM75.569,13.2l-2.6-5.4H69.134L73.7,15.9v4.671h3.322V16l4.671-8.3H78.268Z"
                transform="translate(1.243 0.293)"
                fill="#fff"
              ></path>
              <path
                id="Path_356"
                data-name="Path 356"
                d="M28.026,14.013A14,14,0,0,0,15.259.1,5.054,5.054,0,0,0,14.013,0a3.892,3.892,0,0,0-1.142.1A13.955,13.955,0,0,0,2.907,5.5h0L2.6,5.917l-.208.311h0A13.933,13.933,0,0,0,6.228,25.639a13.392,13.392,0,0,0,6.539,2.284,10,10,0,0,0,2.491,0A14,14,0,0,0,28.026,14.013Zm-7.577,10.38H18.477a17.711,17.711,0,0,0,1.349-3.944h3.218a14.441,14.441,0,0,1-2.595,3.944ZM4.879,20.449H8.1a17.711,17.711,0,0,0,1.349,3.944H7.578A14.781,14.781,0,0,1,4.879,20.449ZM.935,14.428H2.7a14.238,14.238,0,0,0,.934,5.086H2.076A12.147,12.147,0,0,1,.935,14.428ZM5.087,7.266A12.571,12.571,0,0,1,7.578,3.633H9.55c-.415,1.038-.83,1.972-1.142,3.01h0l-.1.415-.1.415h0v.1H4.879Zm17.957.311H19.826a17.711,17.711,0,0,0-1.349-3.944h1.972A12.4,12.4,0,0,1,23.044,7.577Zm4.048,6.02H25.328a14.238,14.238,0,0,0-.934-5.086h1.453A14.091,14.091,0,0,1,27.092,13.6Zm-2.7,0H20.553a27.257,27.257,0,0,0-.519-5.086h3.425a13.832,13.832,0,0,1,.934,5.086ZM9.135,7.266a15.323,15.323,0,0,1,1.349-3.633h3.01V7.577H9.135ZM10.069,2.8H8.616a7.249,7.249,0,0,1,2.491-1.349A6.664,6.664,0,0,0,10.069,2.8ZM13.6.934V2.8H11.107A4.144,4.144,0,0,1,13.6.934Zm.83,1.868V.934A4.465,4.465,0,0,1,16.92,2.8Zm3.01.934a16.247,16.247,0,0,1,1.453,3.944H14.429V3.737ZM13.6,8.512V13.6H8.3a27.257,27.257,0,0,1,.519-5.086H13.6Zm0,5.917v5.086H8.927A20.685,20.685,0,0,1,8.3,14.428Zm0,6.02v3.944h-3.01a17.2,17.2,0,0,1-1.453-3.841Zm0,4.775v1.868a4.465,4.465,0,0,1-2.491-1.868Zm.83,0H16.92a4.144,4.144,0,0,1-2.491,1.868Zm0-.83V20.449h4.463a18.014,18.014,0,0,1-1.453,3.944Zm0-4.775V14.532h5.19a27.257,27.257,0,0,1-.519,5.086Zm0-6.02V8.512H19.1a28.183,28.183,0,0,1,.519,5.086ZM17.958,2.8A12.594,12.594,0,0,0,16.92,1.349,7.491,7.491,0,0,1,19.411,2.8ZM7.993,8.512A28.183,28.183,0,0,0,7.474,13.6H3.633a16.943,16.943,0,0,1,.934-5.086H7.993ZM2.7,13.6H.935A12.147,12.147,0,0,1,2.076,8.512H3.633A16.366,16.366,0,0,0,2.7,13.6Zm.934.83H7.474a27.257,27.257,0,0,0,.519,5.086H4.568A13.832,13.832,0,0,1,3.633,14.428Zm6.436,10.8a6.664,6.664,0,0,0,1.038,1.349,9.556,9.556,0,0,1-2.491-1.349Zm7.889,0h1.453a8.336,8.336,0,0,1-2.491,1.349A6.664,6.664,0,0,0,17.958,25.223Zm2.076-5.605a28.183,28.183,0,0,0,.519-5.086h3.841a16.943,16.943,0,0,1-.934,5.086Zm5.294-5.19h1.765a14.091,14.091,0,0,1-1.246,5.086H24.29a16.43,16.43,0,0,0,1.038-5.086Zm.1-6.851H23.978a15.4,15.4,0,0,0-2.387-3.944h.415a13.607,13.607,0,0,1,3.425,3.944ZM5.917,3.737h.415a13.188,13.188,0,0,0-1.868,2.8h0l-.208.311-.208.415h0l-.1.311H2.6a10.941,10.941,0,0,1,.727-1.142A12.85,12.85,0,0,1,5.917,3.737ZM2.6,20.449H3.945a15.4,15.4,0,0,0,2.387,3.944H5.917A13.465,13.465,0,0,1,2.6,20.449Zm4.671,4.775Zm14.74-.83h-.415a11.821,11.821,0,0,0,2.387-3.944h1.349a10.916,10.916,0,0,1-3.322,3.944Z"
                fill="#fff"
              ></path>
            </g>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Header;
