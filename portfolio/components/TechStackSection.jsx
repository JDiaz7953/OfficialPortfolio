import TechCard from "./TechCard";
const TechStackSection = () => {
  return (
    <>
      <section className="mt-4 ">
        <h2 className="text-3xl font-bold gap-4 text-white">Technical Skills</h2>
        <div className="flex gap-3 flex-wrap cursor-default ml-1">
          <TechCard
            techName={"JavaScript"}
            image={
              <svg
                width="25"
                height="25"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="js">
                  <g id="js_2">
                    <path
                      id="Vector"
                      d="M100 0.000488281H0V100H100V0.000488281Z"
                      fill="#F7DF1E"
                    />
                    <path
                      id="Vector_2"
                      d="M67.1745 78.1259C69.1888 81.4148 71.8094 83.8323 76.4444 83.8323C80.338 83.8323 82.8253 81.8862 82.8253 79.1973C82.8253 75.9751 80.2698 74.8339 75.9841 72.9592L73.6348 71.9513C66.8539 69.0624 62.3491 65.4434 62.3491 57.7926C62.3491 50.745 67.719 45.3799 76.111 45.3799C82.0856 45.3799 86.3809 47.4592 89.4761 52.9037L82.1586 57.6021C80.5475 54.7132 78.8094 53.5751 76.111 53.5751C73.3587 53.5751 71.6142 55.3212 71.6142 57.6021C71.6142 60.4212 73.3602 61.5624 77.392 63.3085L79.7412 64.3148C87.7253 67.7386 92.2333 71.2291 92.2333 79.0767C92.2333 87.537 85.5872 92.1719 76.6618 92.1719C67.9348 92.1719 62.2967 88.0132 59.538 82.5624L67.1745 78.1259ZM33.9793 78.9402C35.4555 81.5592 36.7983 83.7735 40.0269 83.7735C43.1142 83.7735 45.0618 82.5656 45.0618 77.8688V45.9164H54.4586V77.9958C54.4586 87.7259 48.7539 92.1545 40.4269 92.1545C32.9031 92.1545 28.546 88.2608 26.3301 83.5712L33.9793 78.9402Z"
                      fill="black"
                    />
                  </g>
                </g>
              </svg>
            }
          />
          <TechCard
            techName={"Node.JS"}
            image={
              <svg
                width="30"
                height="30"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="nodejs">
                  <g id="nodejs_2">
                    <path
                      id="Vector"
                      d="M46.2785 1.06735C48.758 -0.351924 51.9876 -0.358335 54.465 1.06735C66.9286 8.10993 79.3961 15.1415 91.8576 22.1883C94.2014 23.5086 95.7692 26.1171 95.7454 28.8178V71.1886C95.7628 74.0012 94.0401 76.672 91.5673 77.9623C79.1447 84.9661 66.7285 91.9784 54.308 98.9821C51.7772 100.429 48.4827 100.318 46.031 98.7521C42.3067 96.5931 38.576 94.4447 34.8513 92.2879C34.0902 91.8341 33.2322 91.473 32.6948 90.735C33.1699 90.0947 34.0193 90.0149 34.7096 89.7353C36.2642 89.241 37.692 88.4475 39.1202 87.6775C39.4813 87.4303 39.9222 87.525 40.2684 87.7462C43.4531 89.5722 46.6097 91.4513 49.8051 93.2598C50.4868 93.6534 51.177 93.1309 51.7597 92.8061C63.9501 85.9163 76.1555 79.0525 88.3438 72.1606C88.7954 71.9433 89.0451 71.4639 89.0084 70.9692C89.0169 56.992 89.0105 43.0123 89.0126 29.035C89.0643 28.4737 88.7395 27.9576 88.232 27.7279C75.8524 20.7562 63.4793 13.7738 51.1019 6.80035C50.8874 6.65292 50.6334 6.57382 50.3732 6.57344C50.1129 6.57306 49.8587 6.65141 49.6438 6.79821C37.2664 13.7738 24.8954 20.7626 12.518 27.734C12.0123 27.9641 11.6728 28.4716 11.733 29.035C11.7352 43.0123 11.733 56.992 11.733 70.9714C11.7116 71.2127 11.7646 71.4549 11.8849 71.6652C12.0053 71.8756 12.1872 72.044 12.4062 72.1478C15.7091 74.0208 19.0164 75.8806 22.3215 77.7472C24.1834 78.7494 26.4696 79.3449 28.521 78.577C30.3314 77.9278 31.6003 76.0804 31.5658 74.1582C31.5829 60.2626 31.5573 46.3647 31.5786 32.4712C31.5334 31.8543 32.1185 31.3447 32.7183 31.4027C34.3053 31.392 35.8945 31.3814 37.4815 31.407C38.144 31.392 38.5998 32.0563 38.5179 32.6778C38.5115 46.6614 38.535 60.6454 38.5072 74.6291C38.5115 78.3559 36.9804 82.411 33.5332 84.2345C29.2864 86.4345 24.0374 85.9679 19.8419 83.8584C16.2099 82.0456 12.7438 79.9062 9.17621 77.9641C6.69702 76.6809 4.98286 73.9994 5.00031 71.189V28.8178C4.97431 26.0611 6.60442 23.4053 9.02128 22.1043C21.4418 15.0948 33.8601 8.08001 46.2785 1.06735Z"
                      fill="#8CC84B"
                    />
                    <path
                      id="Vector_2"
                      d="M57.1141 30.4179C62.5312 30.0692 68.3304 30.2113 73.2051 32.88C76.9793 34.925 79.0717 39.217 79.1383 43.41C79.0329 43.9756 78.4416 44.2876 77.9017 44.2488C76.33 44.2466 74.7579 44.2701 73.1862 44.2381C72.5195 44.2637 72.132 43.649 72.0483 43.0596C71.5967 41.0534 70.5026 39.0664 68.6143 38.0987C65.7156 36.6474 62.3545 36.7204 59.1937 36.7507C56.8862 36.8732 54.4048 37.073 52.4499 38.4299C50.9491 39.4578 50.4932 41.5327 51.0289 43.2038C51.5339 44.4037 52.919 44.7908 54.0522 45.1477C60.5805 46.8551 67.4985 46.6852 73.9021 48.9322C76.5533 49.8482 79.1468 51.629 80.0543 54.4048C81.2414 58.1252 80.721 62.5721 78.0741 65.5589C75.9276 68.0167 72.8012 69.3544 69.6831 70.0809C65.535 71.0059 61.2302 71.0294 57.0176 70.6187C53.0564 70.1671 48.9343 69.1264 45.8764 66.4275C43.2615 64.157 41.9843 60.6194 42.1111 57.2049C42.1414 56.6283 42.7155 56.2262 43.2679 56.2736C44.8507 56.2608 46.4334 56.2565 48.0162 56.2757C48.6483 56.2305 49.117 56.7768 49.1494 57.3727C49.4415 59.2841 50.1598 61.2903 51.8266 62.4236C55.0434 64.4989 59.0797 64.3568 62.7631 64.4149C65.8146 64.2795 69.2401 64.2386 71.7303 62.2217C73.0441 61.0713 73.4334 59.1467 73.0783 57.4909C72.6937 56.093 71.2313 55.4416 69.9755 55.0156C63.5309 52.977 56.5357 53.7167 50.1534 51.4114C47.5624 50.4957 45.0569 48.7644 44.0614 46.1025C42.6724 42.3351 43.3089 37.6752 46.2333 34.7893C49.0846 31.9187 53.2007 30.8132 57.1141 30.4175V30.4179Z"
                      fill="#8CC84B"
                    />
                  </g>
                </g>
              </svg>
            }
          />
          <TechCard
            techName={"React"}
            image={
              <svg
                width="30"
                height="30"
                viewBox="0 0 101 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="reactjs">
                  <g id="reactjs_2">
                    <path
                      id="Vector"
                      d="M50.3067 58.8168C55.1757 58.8168 59.1229 54.8697 59.1229 50.0006C59.1229 45.1315 55.1757 41.1844 50.3067 41.1844C45.4376 41.1844 41.4904 45.1315 41.4904 50.0006C41.4904 54.8697 45.4376 58.8168 50.3067 58.8168Z"
                      fill="#61DAFB"
                    />
                    <path
                      id="Vector_2"
                      d="M50.3066 68.0631C76.4333 68.0631 97.6132 59.9762 97.6132 50.0005C97.6132 40.0249 76.4333 31.938 50.3066 31.938C24.1799 31.938 3 40.0249 3 50.0005C3 59.9762 24.1799 68.0631 50.3066 68.0631Z"
                      stroke="#61DAFB"
                      strokeWidth="5"
                    />
                    <path
                      id="Vector_3"
                      d="M34.664 59.0318C47.7274 81.6582 65.3207 95.9571 73.9599 90.9692C82.5991 85.9814 79.0126 63.5957 65.9492 40.9693C52.8858 18.3428 35.2925 4.04395 26.6533 9.03178C18.0141 14.0196 21.6006 36.4054 34.664 59.0318Z"
                      stroke="#61DAFB"
                      strokeWidth="5"
                    />
                    <path
                      id="Vector_4"
                      d="M34.664 40.9692C21.6007 63.5956 18.0141 85.9814 26.6533 90.9692C35.2925 95.957 52.8859 81.6582 65.9492 59.0318C79.0126 36.4053 82.5991 14.0196 73.9599 9.03176C65.3208 4.04393 47.7274 18.3428 34.664 40.9692Z"
                      stroke="#61DAFB"
                      strokeWidth="5"
                    />
                  </g>
                </g>
              </svg>
            }
          />
          <TechCard
            techName={"Supabase"}
            image={
              <svg
                width="30"
                height="30"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="supabase">
                  <g id="supabase_2">
                    <path
                      id="Vector"
                      d="M57.8941 98.3382C55.3395 101.555 50.1596 99.7927 50.0981 95.6848L49.198 35.6028H89.5971C96.9144 35.6028 100.995 44.0544 96.4454 49.7852L57.8941 98.3382Z"
                      fill="url(#paint0_linear_790_3465)"
                    />
                    <path
                      id="Vector_2"
                      d="M57.8941 98.3382C55.3395 101.555 50.1596 99.7927 50.0981 95.6848L49.198 35.6028H89.5971C96.9144 35.6028 100.995 44.0544 96.4454 49.7852L57.8941 98.3382Z"
                      fill="url(#paint1_linear_790_3465)"
                      fillOpacity="0.2"
                    />
                    <path
                      id="Vector_3"
                      d="M41.464 1.66122C44.0187 -1.55626 49.1986 0.206684 49.2601 4.31457L49.6546 64.3965H9.76106C2.44348 64.3965 -1.63767 55.9449 2.91262 50.2141L41.464 1.66122Z"
                      fill="#3ECF8E"
                    />
                  </g>
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_790_3465"
                    x1="49.198"
                    y1="48.9245"
                    x2="85.1033"
                    y2="63.9831"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#249361" />
                    <stop offset="1" stopColor="#3ECF8E" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_790_3465"
                    x1="33.2795"
                    y1="27.1292"
                    x2="49.6542"
                    y2="57.9537"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop />
                    <stop offset="1" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            }
          />
          <TechCard
            techName={"TailwindCSS"}
            image={
              <svg
                width="30"
                height="25"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="tailwindcss">
                  <g id="tailwindcss_2">
                    <path
                      id="Vector"
                      d="M50.0002 20.0005C36.6665 20.0005 28.3334 26.6655 24.9996 39.9942C30.0002 33.3292 35.8337 30.8308 42.4999 32.4964C46.3039 33.4468 49.0224 36.2065 52.0323 39.2602C56.9341 44.2345 62.6075 49.9917 75.0009 49.9917C88.3334 49.9917 96.6677 43.3267 100 29.9967C95.0009 36.6617 89.1674 39.1614 82.4999 37.4958C78.6973 36.5454 75.9787 33.7856 72.9689 30.732C68.067 25.7576 62.3924 20.0005 50.0002 20.0005ZM24.9996 49.9917C11.6671 49.9917 3.33274 56.6567 0.000244141 69.9866C4.99962 63.3217 10.8331 60.822 17.5006 62.4888C21.3032 63.4405 24.0218 66.199 27.0316 69.2514C31.9335 74.2257 37.6081 79.9841 50.0002 79.9841C63.334 79.9841 71.6671 73.3191 75.0009 59.9892C70.0002 66.6542 64.1668 69.1538 57.5006 67.487C53.6966 66.5379 50.9781 63.7768 47.9682 60.7244C43.0664 55.7501 37.393 49.9917 24.9996 49.9917Z"
                      fill="#06B6D4"
                    />
                  </g>
                </g>
              </svg>
            }
          />
          <TechCard
            techName={"Python"}
            image={
              <svg
                width="30"
                height="30"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="python">
                  <g id="python_2">
                    <path
                      id="Vector"
                      d="M49.6397 0.000488281C24.2535 0.000488281 25.8385 11.0095 25.8385 11.0095L25.8667 22.4151H50.0924V25.8394H16.2447C16.2447 25.8394 0 23.9971 0 49.6116C0 75.2269 14.1788 74.3185 14.1788 74.3185H22.6406V62.432C22.6406 62.432 22.1844 48.2532 36.593 48.2532H60.6205C60.6205 48.2532 74.1199 48.4713 74.1199 35.2065V13.2739C74.1199 13.2739 76.1702 0.000488281 49.6397 0.000488281ZM36.2817 7.67056C36.8542 7.67004 37.4211 7.78242 37.9501 8.00125C38.4791 8.22009 38.9598 8.54109 39.3646 8.94589C39.7693 9.35068 40.0903 9.83133 40.3092 10.3603C40.528 10.8893 40.6404 11.4563 40.6399 12.0287C40.6404 12.6012 40.528 13.1681 40.3092 13.6971C40.0903 14.2261 39.7693 14.7068 39.3646 15.1116C38.9598 15.5164 38.4791 15.8374 37.9501 16.0562C37.4211 16.275 36.8542 16.3874 36.2817 16.3869C35.7092 16.3874 35.1423 16.275 34.6133 16.0562C34.0843 15.8374 33.6037 15.5164 33.1989 15.1116C32.7941 14.7068 32.4731 14.2261 32.2542 13.6971C32.0354 13.1681 31.923 12.6012 31.9235 12.0287C31.923 11.4563 32.0354 10.8893 32.2542 10.3603C32.4731 9.83133 32.7941 9.35068 33.1989 8.94589C33.6037 8.54109 34.0843 8.22009 34.6133 8.00125C35.1423 7.78242 35.7092 7.67004 36.2817 7.67056Z"
                      fill="url(#paint0_linear_790_3246)"
                    />
                    <path
                      id="Vector_2"
                      d="M50.3607 99.4806C75.747 99.4806 74.1619 88.4715 74.1619 88.4715L74.1337 77.0663H49.9076V73.642H83.7553C83.7553 73.642 100 75.4843 100 49.869C100 24.254 85.8213 25.1624 85.8213 25.1624H77.3594V37.0486C77.3594 37.0486 77.8156 51.2273 63.407 51.2273H39.3795C39.3795 51.2273 25.8801 51.0092 25.8801 64.2745V86.2075C25.8801 86.2075 23.8302 99.4806 50.3603 99.4806H50.3607ZM63.7187 91.8112C63.1462 91.8118 62.5793 91.6994 62.0503 91.4806C61.5213 91.2617 61.0407 90.9407 60.6359 90.5359C60.2311 90.1311 59.9101 89.6505 59.6912 89.1215C59.4724 88.5925 59.36 88.0255 59.3605 87.4531C59.36 86.8806 59.4723 86.3136 59.6911 85.7845C59.9099 85.2555 60.2309 84.7748 60.6357 84.37C61.0405 83.9651 61.5212 83.6441 62.0502 83.4252C62.5792 83.2064 63.1462 83.094 63.7187 83.0945C64.2912 83.094 64.8581 83.2064 65.3871 83.4252C65.9161 83.644 66.3968 83.965 66.8015 84.3698C67.2063 84.7746 67.5273 85.2553 67.7462 85.7843C67.965 86.3133 68.0774 86.8802 68.0769 87.4527C68.0774 88.0251 67.965 88.5921 67.7462 89.1211C67.5273 89.6501 67.2063 90.1307 66.8015 90.5355C66.3968 90.9403 65.9161 91.2613 65.3871 91.4802C64.8581 91.699 64.2912 91.8114 63.7187 91.8109V91.8112Z"
                      fill="url(#paint1_linear_790_3246)"
                    />
                  </g>
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_790_3246"
                    x1="9.60996"
                    y1="8.94811"
                    x2="59.1669"
                    y2="58.0107"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#387EB8" />
                    <stop offset="1" stopColor="#366994" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_790_3246"
                    x1="40.0281"
                    y1="40.4532"
                    x2="93.2466"
                    y2="90.7623"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FFE052" />
                    <stop offset="1" stopColor="#FFC331" />
                  </linearGradient>
                </defs>
              </svg>
            }
          />
          <TechCard
            techName={"C++"}
            image={
              <svg
                width="40"
                height="50"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="c++">
                  <g id="c++_2">
                    <path
                      id="Vector"
                      d="M94.7304 29.3213C94.7297 27.6444 94.371 26.1626 93.6458 24.8908C92.9333 23.6402 91.8664 22.5921 90.4353 21.7633C78.6222 14.9519 66.7977 8.16125 54.9885 1.34284C51.8048 -0.495164 48.7179 -0.428157 45.5578 1.43624C40.8559 4.20922 17.3148 17.6964 10.2999 21.7595C7.41097 23.4319 6.00521 25.9914 6.00451 29.3181C6 43.0164 6.00451 56.7143 6 70.4129C6.00069 72.0531 6.34406 73.506 7.0374 74.7587C7.75017 76.0471 8.83201 77.1241 10.2961 77.9715C17.3114 82.0347 40.8555 95.5208 45.5565 98.2945C48.7179 100.16 51.8048 100.227 54.9895 98.3879C66.7991 91.5691 78.6243 84.7789 90.4391 77.9674C91.9032 77.1202 92.985 76.0426 93.6978 74.7552C94.3901 73.5026 94.7342 72.0496 94.7349 70.4091C94.7349 70.4091 94.7349 43.0199 94.7304 29.3213Z"
                      fill="#5C8DBC"
                    />
                    <path
                      id="Vector_2"
                      d="M50.5032 49.7322L7.03735 74.7588C7.75013 76.0473 8.83197 77.1242 10.2961 77.9717C17.3113 82.0349 40.8555 95.521 45.5565 98.2947C48.7179 100.16 51.8048 100.227 54.9895 98.3881C66.7991 91.5693 78.6244 84.779 90.4392 77.9676C91.9033 77.1204 92.9851 76.0427 93.6979 74.7554L50.5032 49.7322Z"
                      fill="#1A4674"
                    />
                    <path
                      id="Vector_3"
                      d="M37.629 57.1453C40.1583 61.5608 44.913 64.5389 50.3673 64.5389C55.8553 64.5389 60.6371 61.5229 63.1536 57.0602L50.5031 49.7322L37.629 57.1453Z"
                      fill="#1A4674"
                    />
                    <path
                      id="Vector_4"
                      d="M94.7303 29.3216C94.7296 27.6447 94.371 26.1629 93.6457 24.8911L50.5032 49.7324L93.6978 74.7556C94.3901 73.503 94.7342 72.05 94.7349 70.4095C94.7349 70.4095 94.7349 43.0202 94.7303 29.3216Z"
                      fill="#1B598E"
                    />
                    <path
                      id="Vector_5"
                      d="M92.3551 51.5208H88.9798V54.8969H85.6037V51.5208H82.2287V48.1459H85.6037V44.7705H88.9798V48.1459H92.3551V51.5208ZM80.0387 51.5208H76.6637V54.8969H73.2883V51.5208H69.913V48.1459H73.2883V44.7705H76.6637V48.1459H80.0387V51.5208Z"
                      fill="white"
                    />
                    <path
                      id="Vector_6"
                      d="M63.1537 57.0604C60.6373 61.5231 55.8554 64.5392 50.3675 64.5392C44.9131 64.5392 40.1584 61.561 37.6291 57.1455C36.3586 54.9298 35.6913 52.4197 35.6939 49.8656C35.6939 41.7619 42.2637 35.1924 50.3675 35.1924C55.7867 35.1924 60.5164 38.1335 63.0582 42.5039L75.8837 35.1185C70.7859 26.3187 61.2685 20.3984 50.3675 20.3984C34.0927 20.3984 20.8999 33.5916 20.8999 49.8656C20.8999 55.2047 22.3202 60.2115 24.8026 64.5301C29.8875 73.3765 39.4321 79.3332 50.3675 79.3332C61.323 79.3332 70.8824 73.3525 75.96 64.4801L63.1537 57.0604Z"
                      fill="white"
                    />
                  </g>
                </g>
              </svg>
            }
          />
          <TechCard
            techName={"GoLang"}
            image={
              <svg
                width="50"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="go">
                  <g id="go_2">
                    <path
                      id="Vector"
                      d="M7.54671 42.3129C7.35195 42.3129 7.30326 42.2155 7.40064 42.0695L8.4231 40.7549C8.52048 40.6088 8.76392 40.5114 8.95867 40.5114H26.3404C26.5352 40.5114 26.5839 40.6575 26.4865 40.8036L25.6588 42.0695C25.5614 42.2155 25.318 42.3616 25.1719 42.3616L7.54671 42.3129ZM0.194754 46.7923C0 46.7923 -0.0486884 46.6949 0.0486884 46.5488L1.07115 45.2342C1.16852 45.0882 1.41196 44.9908 1.60672 44.9908H23.8086C24.0034 44.9908 24.1008 45.1368 24.0521 45.2829L23.6626 46.4514C23.6139 46.6462 23.4191 46.7436 23.2244 46.7436L0.194754 46.7923ZM11.9774 51.2716C11.7826 51.2716 11.7339 51.1255 11.8313 50.9795L12.5129 49.7622C12.6103 49.6162 12.8051 49.4701 12.9998 49.4701H22.7375C22.9323 49.4701 23.0296 49.6162 23.0296 49.8109L22.9323 50.9795C22.9323 51.1742 22.7375 51.3203 22.5914 51.3203L11.9774 51.2716ZM62.5159 41.4365C59.4486 42.2155 57.355 42.7998 54.3363 43.5788C53.606 43.7736 53.5573 43.8223 52.9243 43.0919C52.194 42.2642 51.6584 41.7287 50.636 41.2418C47.5686 39.7324 44.5986 40.1706 41.8234 41.9721C38.5126 44.1144 36.8085 47.2791 36.8571 51.2229C36.9058 55.118 39.5837 58.3314 43.4301 58.867C46.7409 59.3052 49.5161 58.1367 51.7071 55.6535C52.1453 55.118 52.5348 54.5337 53.0217 53.8521H43.6248C42.6024 53.8521 42.3589 53.2191 42.6998 52.3914C43.3327 50.8821 44.5012 48.3503 45.1829 47.0844C45.3289 46.7923 45.6698 46.3054 46.4001 46.3054H64.1227C64.0253 47.62 64.0253 48.9345 63.8305 50.2491C63.295 53.7547 61.9804 56.9681 59.8381 59.7921C56.3325 64.4175 51.7558 67.2901 45.9619 68.0691C41.1904 68.702 36.7598 67.777 32.8647 64.8557C29.2617 62.1291 27.2168 58.5262 26.6813 54.0468C26.0483 48.7398 27.6063 43.9683 30.8198 39.7811C34.2767 35.2531 38.8534 32.3805 44.4525 31.358C49.0293 30.5303 53.4112 31.0659 57.355 33.7438C59.9355 35.4478 61.7856 37.7849 63.0028 40.6088C63.295 41.047 63.1002 41.2905 62.5159 41.4365Z"
                      fill="#00ACD7"
                    />
                    <path
                      id="Vector_2"
                      d="M78.6318 68.3613C74.2012 68.2639 70.16 66.998 66.7518 64.0767C63.8792 61.5936 62.0778 58.4289 61.4935 54.6799C60.6171 49.1781 62.1264 44.3092 65.4372 39.976C68.9915 35.3019 73.2761 32.8674 79.07 31.845C84.0362 30.9686 88.7103 31.4555 92.9462 34.3281C96.7926 36.9573 99.1783 40.5115 99.8112 45.1856C100.639 51.7585 98.7401 57.1143 94.2121 61.691C90.9986 64.9531 87.0549 66.998 82.5269 67.9231C81.2123 68.1665 79.8977 68.2152 78.6318 68.3613ZM90.2196 48.6912C90.1709 48.0582 90.1709 47.5713 90.0736 47.0845C89.1972 42.2643 84.7665 39.5378 80.1411 40.6089C75.6131 41.6314 72.6918 44.504 71.6207 49.0807C70.7443 52.8784 72.5944 56.7248 76.1 58.2828C78.7779 59.4513 81.4557 59.3053 84.0362 57.9907C87.8826 55.9944 89.9762 52.8784 90.2196 48.6912Z"
                      fill="#00ACD7"
                    />
                  </g>
                </g>
              </svg>
            }
          />
        </div>
      </section>
    </>
  );
};

export default TechStackSection;
