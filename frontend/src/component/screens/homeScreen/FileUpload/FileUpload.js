import React from "react";
import Iphone from "../../../../images/iphone 1.png";
import L from "../../../../images/Group.png";
import A from "../../../../images/a.jpg";
import C from "../../../../images/c.jpg";
import E from "../../../../images/ee.jpg";
import M from "../../../../images/m.jpg";
import P from "../../../../images/p.jpg";
import T from "../../../../images/t.jpg";
import PP from "../../../../images/PP.png";
import UU from "../../../../images/UU.png";
import RR from "../../../../images/RR.png";
import TT from "../../../../images/TT.png";
import SS from "../../../../images/SS.png";
import Avatar from "../../../../images/Avatar.png";
import "./FileUpload.css";
import image47 from "../../../../images/image 47.png";
const FileUpload = () => {
  return (
    <div>
      <div className="screen5__topNavbar">
        <div className="screen5__topNavbar__left">
          <div className="screen5__topHeading">
            <div className="screen5__topHeading__leftSide">
              <img src={L} alt="" />
              <img src={A} alt="" />
              <img src={C} alt="" />
              <img src={E} alt="" />
              <img src={M} alt="" />
              <img src={P} alt="" />
              <img src={T} alt="" />
              <img src={A} alt="" />
            </div>

            <div className="screen5__topHeading__rightSide">
              <img src={PP} alt="" />
              <img src={E} alt="" />
              <img src={UU} alt="" />
              <img src={RR} alt="" />
              <img src={TT} alt="" />
              <img src={E} alt="" />
              <img src={UU} alt="" />
              <img src={SS} alt="" />
            </div>
          </div>
        </div>

        <div className="screen5__topNavbar__right">
          <div className="screen5__top__Button">
            <ul>
              <li className="screen5__top__Button__listing">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                >
                  <g clip-path="url(#clip0_376_13280)">
                    <path
                      d="M17.3149 1.04148C16.8163 0.543651 16.1405 0.264038 15.4359 0.264038C14.7314 0.264038 14.0556 0.543651 13.557 1.04148L1.62912 12.9693C1.28754 13.309 1.01671 13.713 0.832286 14.158C0.647864 14.603 0.553516 15.0802 0.554698 15.5619V17.0675C0.554698 17.262 0.631966 17.4486 0.769504 17.5861C0.907041 17.7237 1.09358 17.8009 1.28809 17.8009H2.79374C3.2754 17.8023 3.75255 17.7081 4.19756 17.5238C4.64258 17.3395 5.04661 17.0687 5.38628 16.7272L17.3149 4.79864C17.8125 4.30008 18.0919 3.62445 18.0919 2.92006C18.0919 2.21566 17.8125 1.54004 17.3149 1.04148ZM4.34926 15.6902C3.93563 16.1011 3.37676 16.3325 2.79374 16.3341H2.02148V15.5619C2.02074 15.2729 2.07733 14.9866 2.18799 14.7195C2.29864 14.4525 2.46116 14.2101 2.66613 14.0064L11.7184 4.95412L13.4052 6.64092L4.34926 15.6902ZM16.2771 3.76162L14.4393 5.60023L12.7525 3.9171L14.5911 2.07849C14.7018 1.96798 14.8333 1.88036 14.9779 1.82064C15.1225 1.76092 15.2775 1.73027 15.4339 1.73044C15.5904 1.73061 15.7453 1.7616 15.8898 1.82163C16.0343 1.88166 16.1655 1.96957 16.276 2.08033C16.3865 2.19108 16.4742 2.32252 16.5339 2.46714C16.5936 2.61176 16.6242 2.76673 16.6241 2.92319C16.6239 3.07965 16.5929 3.23455 16.5329 3.37904C16.4729 3.52353 16.385 3.65478 16.2742 3.76529L16.2771 3.76162Z"
                      fill="#004AAD"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_376_13280">
                      <rect
                        width="17.6014"
                        height="17.6014"
                        fill="white"
                        transform="translate(0.554688 0.199524)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <div className="list__innerText"> Prise de note</div>
              </li>
              <li className="screen5__top__Button__listing">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                >
                  <g clip-path="url(#clip0_376_13285)">
                    <path
                      d="M15.2145 2.48912L14 1.27316C13.6602 0.931631 13.256 0.660882 12.8109 0.476585C12.3658 0.292288 11.8885 0.198102 11.4067 0.199478H6.75484C5.78266 0.200642 4.85064 0.587355 4.1632 1.27479C3.47577 1.96222 3.08906 2.89425 3.08789 3.86643V14.1339C3.08906 15.1061 3.47577 16.0381 4.1632 16.7255C4.85064 17.413 5.78266 17.7997 6.75484 17.8009H12.622C13.5941 17.7997 14.5262 17.413 15.2136 16.7255C15.901 16.0381 16.2878 15.1061 16.2889 14.1339V5.08166C16.2901 4.59996 16.1958 4.1228 16.0113 3.6778C15.8269 3.23279 15.5561 2.82878 15.2145 2.48912ZM14.1775 3.52614C14.2815 3.62978 14.3747 3.74381 14.4554 3.86643H12.622V2.03295C12.7444 2.1146 12.8586 2.20793 12.963 2.31164L14.1775 3.52614ZM14.8221 14.1339C14.8221 14.7174 14.5903 15.277 14.1777 15.6897C13.7651 16.1023 13.2055 16.3341 12.622 16.3341H6.75484C6.17132 16.3341 5.6117 16.1023 5.19909 15.6897C4.78648 15.277 4.55467 14.7174 4.55467 14.1339V3.86643C4.55467 3.28291 4.78648 2.72329 5.19909 2.31067C5.6117 1.89806 6.17132 1.66626 6.75484 1.66626H11.1552V3.86643C11.1552 4.25545 11.3097 4.62853 11.5848 4.9036C11.8599 5.17868 12.233 5.33321 12.622 5.33321H14.8221V14.1339ZM12.622 6.79999C12.8165 6.79999 13.003 6.87726 13.1406 7.0148C13.2781 7.15234 13.3554 7.33888 13.3554 7.53338C13.3554 7.72789 13.2781 7.91443 13.1406 8.05197C13.003 8.18951 12.8165 8.26677 12.622 8.26677H6.75484C6.56034 8.26677 6.3738 8.18951 6.23626 8.05197C6.09872 7.91443 6.02145 7.72789 6.02145 7.53338C6.02145 7.33888 6.09872 7.15234 6.23626 7.0148C6.3738 6.87726 6.56034 6.79999 6.75484 6.79999H12.622ZM13.3554 10.4669C13.3554 10.6615 13.2781 10.848 13.1406 10.9855C13.003 11.1231 12.8165 11.2003 12.622 11.2003H6.75484C6.56034 11.2003 6.3738 11.1231 6.23626 10.9855C6.09872 10.848 6.02145 10.6615 6.02145 10.4669C6.02145 10.2724 6.09872 10.0859 6.23626 9.94836C6.3738 9.81082 6.56034 9.73356 6.75484 9.73356H12.622C12.8165 9.73356 13.003 9.81082 13.1406 9.94836C13.2781 10.0859 13.3554 10.2724 13.3554 10.4669ZM13.2145 12.97C13.3286 13.1268 13.3758 13.3224 13.346 13.514C13.3162 13.7056 13.2117 13.8776 13.0554 13.9924C12.3123 14.5218 11.4323 14.8256 10.5208 14.8673C9.98827 14.8647 9.47192 14.684 9.05402 14.3539C8.81347 14.1889 8.7218 14.1339 8.54065 14.1339C8.05032 14.2098 7.58769 14.4103 7.19708 14.7162C7.04215 14.8267 6.85036 14.8726 6.66221 14.8442C6.47406 14.8159 6.30428 14.7156 6.18873 14.5644C6.07317 14.4133 6.02088 14.2231 6.0429 14.0341C6.06492 13.8452 6.15953 13.6721 6.30674 13.5516C6.95299 13.0499 7.72899 12.7431 8.54358 12.6671C9.03212 12.6749 9.50442 12.8438 9.88716 13.1475C10.0616 13.3044 10.2862 13.3941 10.5208 13.4005C11.1205 13.3556 11.6971 13.1507 12.1907 12.8072C12.3481 12.6931 12.5444 12.6462 12.7363 12.6767C12.9283 12.7072 13.1003 12.8127 13.2145 12.97Z"
                      fill="#004AAD"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_376_13285">
                      <rect
                        width="17.6014"
                        height="17.6014"
                        fill="white"
                        transform="translate(0.887695 0.199341)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <div className="list__innerText">Règles du jeu </div>{" "}
              </li>
              <li className="screen5__top__Button__listing">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <g clip-path="url(#clip0_376_13290)">
                    <path
                      d="M9.02243 6.06647C8.44223 6.06647 7.87505 6.23852 7.39263 6.56086C6.91021 6.88321 6.53421 7.34137 6.31217 7.8774C6.09014 8.41344 6.03204 9.00328 6.14524 9.57234C6.25843 10.1414 6.53782 10.6641 6.94809 11.0744C7.35836 11.4846 7.88107 11.764 8.45012 11.8772C9.01918 11.9904 9.60902 11.9323 10.1451 11.7103C10.6811 11.4883 11.1393 11.1123 11.4616 10.6298C11.7839 10.1474 11.956 9.58023 11.956 9.00003C11.956 8.222 11.6469 7.47584 11.0968 6.92569C10.5466 6.37554 9.80046 6.06647 9.02243 6.06647ZM9.02243 10.4668C8.73233 10.4668 8.44874 10.3808 8.20753 10.2196C7.96632 10.0584 7.77832 9.82936 7.6673 9.56134C7.55628 9.29332 7.52724 8.9984 7.58383 8.71388C7.64043 8.42935 7.78013 8.16799 7.98526 7.96286C8.19039 7.75773 8.45175 7.61803 8.73628 7.56143C9.0208 7.50484 9.31573 7.53388 9.58374 7.6449C9.85176 7.75592 10.0808 7.94392 10.242 8.18513C10.4032 8.42634 10.4892 8.70993 10.4892 9.00003C10.4892 9.38904 10.3347 9.76213 10.0596 10.0372C9.78453 10.3123 9.41145 10.4668 9.02243 10.4668Z"
                      fill="#004AAD"
                    />
                    <path
                      d="M15.8378 10.3935L15.5122 10.2057C15.6588 9.40812 15.6588 8.59047 15.5122 7.79287L15.8378 7.60512C16.0882 7.46065 16.3077 7.26828 16.4838 7.03899C16.6599 6.80969 16.789 6.54797 16.8639 6.26875C16.9389 5.98953 16.958 5.69829 16.9204 5.41166C16.8828 5.12503 16.789 4.84863 16.6446 4.59822C16.5001 4.34781 16.3077 4.12831 16.0784 3.95225C15.8491 3.77619 15.5874 3.64702 15.3082 3.5721C15.029 3.49719 14.7377 3.47801 14.4511 3.51565C14.1645 3.55329 13.8881 3.64702 13.6377 3.79149L13.3113 3.97997C12.6949 3.45334 11.9865 3.04508 11.2219 2.77574V2.39951C11.2219 1.81599 10.9901 1.25637 10.5775 0.843756C10.1648 0.431144 9.60522 0.199341 9.0217 0.199341C8.43817 0.199341 7.87855 0.431144 7.46594 0.843756C7.05333 1.25637 6.82152 1.81599 6.82152 2.39951V2.77574C6.05688 3.04605 5.34876 3.4553 4.73283 3.9829L4.405 3.79296C3.89928 3.50119 3.29837 3.42228 2.73447 3.57357C2.17057 3.72486 1.68986 4.09397 1.3981 4.59969C1.10634 5.1054 1.02742 5.70631 1.17871 6.27022C1.33001 6.83412 1.69911 7.31483 2.20483 7.60659L2.53045 7.79434C2.38386 8.59194 2.38386 9.40959 2.53045 10.2072L2.20483 10.3949C1.69911 10.6867 1.33001 11.1674 1.17871 11.7313C1.02742 12.2952 1.10634 12.8961 1.3981 13.4018C1.68986 13.9076 2.17057 14.2767 2.73447 14.428C3.29837 14.5792 3.89928 14.5003 4.405 14.2086L4.73136 14.0201C5.34797 14.5468 6.05658 14.9551 6.82152 15.2243V15.6005C6.82152 16.1841 7.05333 16.7437 7.46594 17.1563C7.87855 17.5689 8.43817 17.8007 9.0217 17.8007C9.60522 17.8007 10.1648 17.5689 10.5775 17.1563C10.9901 16.7437 11.2219 16.1841 11.2219 15.6005V15.2243C11.9865 14.954 12.6946 14.5448 13.3106 14.0172L13.6384 14.2064C14.1441 14.4981 14.745 14.577 15.3089 14.4258C15.8728 14.2745 16.3535 13.9054 16.6453 13.3996C16.9371 12.8939 17.016 12.293 16.8647 11.7291C16.7134 11.1652 16.3443 10.6845 15.8386 10.3927L15.8378 10.3935ZM13.9691 7.62419C14.2175 8.52411 14.2175 9.47449 13.9691 10.3744C13.9258 10.531 13.9357 10.6976 13.9973 10.848C14.0589 10.9984 14.1687 11.1241 14.3094 11.2053L15.1044 11.6644C15.273 11.7617 15.396 11.9219 15.4464 12.1099C15.4968 12.2978 15.4705 12.4981 15.3732 12.6666C15.276 12.8352 15.1157 12.9582 14.9278 13.0086C14.7399 13.059 14.5396 13.0327 14.371 12.9354L13.5746 12.4748C13.4337 12.3932 13.2697 12.3608 13.1083 12.3827C12.947 12.4047 12.7975 12.4796 12.6835 12.5958C12.0307 13.2622 11.2084 13.7377 10.3051 13.971C10.1475 14.0115 10.0078 14.1033 9.90807 14.232C9.80835 14.3606 9.75427 14.5188 9.75435 14.6816V15.6005C9.75435 15.7951 9.67708 15.9816 9.53955 16.1191C9.40201 16.2567 9.21547 16.3339 9.02096 16.3339C8.82645 16.3339 8.63991 16.2567 8.50238 16.1191C8.36484 15.9816 8.28757 15.7951 8.28757 15.6005V14.6823C8.28765 14.5196 8.23357 14.3614 8.13386 14.2327C8.03414 14.104 7.89445 14.0122 7.73679 13.9717C6.83351 13.7375 6.01137 13.261 5.35914 12.5936C5.24512 12.4774 5.09566 12.4025 4.93433 12.3805C4.773 12.3586 4.60896 12.391 4.46807 12.4726L3.67308 12.9325C3.58964 12.9814 3.49735 13.0133 3.40152 13.0264C3.30569 13.0395 3.20822 13.0335 3.11471 13.0088C3.02121 12.9841 2.93351 12.9411 2.85668 12.8824C2.77985 12.8236 2.7154 12.7503 2.66704 12.6665C2.61868 12.5827 2.58736 12.4902 2.5749 12.3943C2.56243 12.2984 2.56906 12.201 2.5944 12.1076C2.61974 12.0143 2.66329 11.9269 2.72255 11.8504C2.78181 11.774 2.85561 11.71 2.93969 11.6622L3.73468 11.2031C3.87546 11.1219 3.98526 10.9962 4.04686 10.8458C4.10845 10.6954 4.11834 10.5288 4.07498 10.3722C3.82662 9.47229 3.82662 8.52191 4.07498 7.62199C4.11756 7.46569 4.1072 7.29969 4.0455 7.1499C3.98381 7.00011 3.87426 6.87496 3.73395 6.79399L2.93895 6.33489C2.77041 6.23763 2.64741 6.07741 2.597 5.88947C2.54659 5.70152 2.57291 5.50125 2.67017 5.33271C2.76742 5.16417 2.92764 5.04116 3.11559 4.99076C3.30353 4.94035 3.5038 4.96667 3.67234 5.06392L4.46881 5.52449C4.60931 5.60627 4.773 5.63906 4.93416 5.61768C5.09532 5.59631 5.24481 5.52199 5.35914 5.40641C6.01192 4.74001 6.8343 4.26454 7.73753 4.03131C7.89567 3.99065 8.03572 3.89838 8.13549 3.76912C8.23526 3.63986 8.28904 3.481 8.2883 3.31772V2.39951C8.2883 2.20501 8.36557 2.01846 8.50311 1.88093C8.64065 1.74339 8.82719 1.66612 9.0217 1.66612C9.2162 1.66612 9.40274 1.74339 9.54028 1.88093C9.67782 2.01846 9.75509 2.20501 9.75509 2.39951V3.31772C9.755 3.4805 9.80908 3.63868 9.9088 3.76735C10.0085 3.89601 10.1482 3.98784 10.3059 4.02837C11.2094 4.26244 12.0318 4.73894 12.6842 5.40641C12.7983 5.52263 12.9477 5.5976 13.1091 5.61951C13.2704 5.64142 13.4344 5.60902 13.5753 5.52742L14.3703 5.06759C14.4538 5.01867 14.546 4.98675 14.6419 4.97364C14.7377 4.96054 14.8352 4.96652 14.9287 4.99124C15.0222 5.01596 15.1099 5.05894 15.1867 5.11769C15.2635 5.17644 15.328 5.24981 15.3764 5.33357C15.4247 5.41733 15.456 5.50983 15.4685 5.60574C15.481 5.70166 15.4743 5.79909 15.449 5.89243C15.4236 5.98577 15.3801 6.07317 15.3208 6.14961C15.2616 6.22605 15.1878 6.29002 15.1037 6.33782L14.3087 6.79692C14.1687 6.87811 14.0594 7.00336 13.998 7.15313C13.9366 7.3029 13.9264 7.46878 13.9691 7.62492V7.62419Z"
                      fill="#004AAD"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_376_13290">
                      <rect
                        width="17.6014"
                        height="17.6014"
                        fill="white"
                        transform="translate(0.22168 0.199341)"
                      />
                    </clipPath>
                  </defs>
                </svg>{" "}
                <div className="list__innerText"> Paramètres du jeu</div>
              </li>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                className="Screen5__TopSvg"
              >
                <path
                  d="M24.9108 14.7307C24.8148 14.7313 24.7196 14.7129 24.6307 14.6766C24.5419 14.6403 24.461 14.5868 24.3929 14.5192L13.9697 4.08879L3.54662 14.5192C3.40708 14.6387 3.22759 14.7011 3.04402 14.6941C2.86045 14.687 2.68631 14.6109 2.55641 14.481C2.42651 14.3511 2.35041 14.1769 2.34332 13.9934C2.33623 13.8098 2.39867 13.6303 2.51816 13.4908L13.4592 2.54975C13.5958 2.4139 13.7807 2.33765 13.9734 2.33765C14.1661 2.33765 14.351 2.4139 14.4876 2.54975L25.4286 13.4908C25.529 13.5932 25.597 13.7229 25.624 13.8637C25.6511 14.0045 25.6361 14.1501 25.5808 14.2824C25.5255 14.4148 25.4325 14.5278 25.3133 14.6076C25.1942 14.6873 25.0541 14.7301 24.9108 14.7307Z"
                  fill="#3F3F41"
                />
                <path
                  d="M13.9706 6.55371L5.21777 15.3357V24.2125C5.21777 24.5994 5.37147 24.9704 5.64505 25.244C5.91862 25.5176 6.28968 25.6713 6.67657 25.6713H11.7824V18.3773H16.1588V25.6713H21.2646C21.6515 25.6713 22.0225 25.5176 22.2961 25.244C22.5697 24.9704 22.7234 24.5994 22.7234 24.2125V15.2846L13.9706 6.55371Z"
                  fill="#3F3F41"
                />
              </svg>
            </ul>
          </div>
        </div>
      </div>

      <div className="Table__MiddleNavbar">
        <span className="MiddleNavbar__Arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="41"
            height="42"
            viewBox="0 0 41 42"
            fill="none"
          >
            <path
              d="M7.14648 21.4612H32.3683"
              stroke="#130F26"
              stroke-width="1.68145"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.3193 31.5909L7.14648 21.4619L17.3193 11.3311"
              stroke="#130F26"
              stroke-width="1.68145"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <div className="MiddleNavbar__Container">
          <div className="MiddleNavbar__HomeContainer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M24.9108 14.7306C24.8148 14.7312 24.7196 14.7128 24.6307 14.6765C24.5419 14.6402 24.461 14.5867 24.3929 14.5191L13.9697 4.08866L3.54662 14.5191C3.40708 14.6386 3.22759 14.701 3.04402 14.6939C2.86045 14.6868 2.68631 14.6107 2.55641 14.4808C2.42651 14.3509 2.35041 14.1768 2.34332 13.9932C2.33623 13.8097 2.39867 13.6302 2.51816 13.4906L13.4592 2.54963C13.5958 2.41378 13.7807 2.33752 13.9734 2.33752C14.1661 2.33752 14.351 2.41378 14.4876 2.54963L25.4286 13.4906C25.529 13.593 25.597 13.7227 25.624 13.8635C25.6511 14.0044 25.6361 14.15 25.5808 14.2823C25.5255 14.4146 25.4325 14.5277 25.3133 14.6074C25.1942 14.6872 25.0541 14.73 24.9108 14.7306Z"
                fill="#3F3F41"
              />
              <path
                d="M13.9706 6.55377L5.21777 15.3358V24.2126C5.21777 24.5994 5.37147 24.9705 5.64505 25.2441C5.91862 25.5177 6.28968 25.6714 6.67657 25.6714H11.7824V18.3773H16.1588V25.6714H21.2646C21.6515 25.6714 22.0225 25.5177 22.2961 25.2441C22.5697 24.9705 22.7234 24.5994 22.7234 24.2126V15.2847L13.9706 6.55377Z"
                fill="#3F3F41"
              />
            </svg>
          </div>

          <div className="MiddleNavbar__ForwardContainer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M9.09766 5L16.0977 12L9.09766 19"
                stroke="#3F3F46"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div className="MiddleNavbarSecond__container">
            <div className="MiddleNavbarText">
              <p className="MiddleNavbarInnerText">Aide</p>
            </div>

            <div className="MiddleNavbar__InnerForwardArrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M9.09766 5L16.0977 12L9.09766 19"
                  stroke="#3F3F46"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="centered__FileUpload">
        <img src={image47} className="Centered__fileUploadImage" alt="" />
      </div>
    </div>
  );
};

export default FileUpload;
