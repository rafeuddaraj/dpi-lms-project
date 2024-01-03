import Form from "./Form";
import logo from "../../../assets/image/learningportal.svg";

export default function Login() {
    return (
        <>
            <div>
                {/* <img
                style={{width:'50%'}}
                    className="mx-auto"
                    src={'https://i.ibb.co/Ht1L5SF/lima.png'}
                /> */}
                {/* <h1>Altrazen Schools</h1> */}

                <svg
                className="mx-auto"
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="300"
                    height="100"
                    viewBox="0 0 416.000000 226.000000"
                    preserveAspectRatio="xMidYMid meet">
                    <g
                        transform="translate(0.000000,226.000000) scale(0.100000,-0.100000)"
                        fill="#fe06af"
                        stroke="none">
                        {" "}
                        <path d="M1569 2255 c-4 -3 -38 -10 -75 -16 -103 -14 -218 -74 -310 -162 l-75 -70 -62 60 c-83 81 -140 117 -230 148 -64 21 -94 25 -195 25 -179 0 -283 -39 -405 -150 -74 -68 -123 -143 -159 -248 -29 -83 -30 -91 -25 -217 5 -151 21 -206 90 -312 63 -99 128 -157 232 -208 66 -33 112 -48 170 -57 66 -10 75 -13 50 -19 -16 -4 -61 -7 -98 -8 -62 -1 -72 -4 -98 -30 l-29 -29 0 -459 c0 -399 2 -461 16 -481 l15 -22 1744 0 1744 0 15 22 c14 20 16 83 16 491 l0 468 -24 24 c-17 17 -40 25 -82 30 -87 10 -95 15 -54 32 126 56 168 81 227 136 76 71 117 131 162 236 29 70 31 79 31 206 0 125 -2 137 -32 211 -42 107 -83 168 -157 237 -105 96 -278 167 -408 167 -68 0 -179 -27 -254 -62 -66 -30 -168 -107 -208 -155 l-29 -35 -33 37 c-121 134 -321 222 -476 212 -158 -10 -299 -72 -405 -178 l-69 -69 -52 53 c-116 118 -224 167 -427 194 -19 3 -38 2 -41 -2z m-738 -74 c89 -34 205 -125 250 -198 l20 -31 82 82 c65 66 99 92 168 126 191 94 423 72 594 -55 62 -46 148 -143 139 -157 -3 -4 -1 -8 4 -8 5 0 16 14 23 32 7 18 40 58 72 90 132 131 345 188 535 143 123 -29 256 -118 321 -216 36 -54 40 -57 47 -37 5 13 8 26 9 29 0 4 9 15 20 25 12 11 15 15 8 10 -23 -15 -14 -2 19 29 18 17 29 23 24 15 -4 -8 9 3 30 25 20 22 34 33 30 25 -4 -8 2 -4 13 10 11 14 21 21 21 16 0 -5 8 -2 18 6 19 17 53 32 65 30 4 -1 7 3 7 9 0 5 4 8 9 4 5 -3 12 -1 16 5 4 6 10 8 15 5 5 -3 11 -1 15 5 4 6 11 8 16 4 5 -3 15 -2 22 3 14 11 195 10 252 -2 22 -4 52 -14 67 -22 15 -7 29 -12 30 -11 6 4 98 -46 98 -54 0 -4 5 -8 12 -8 6 0 28 -17 49 -39 21 -21 41 -36 45 -32 4 3 4 1 0 -6 -3 -6 4 -19 16 -27 12 -9 18 -16 13 -16 -6 0 -2 -7 7 -14 14 -10 56 -88 63 -116 1 -3 7 -18 13 -33 27 -65 32 -245 9 -327 -48 -172 -180 -318 -347 -383 -100 -40 -249 -47 -357 -17 -129 36 -250 120 -314 219 l-28 44 -11 -28 c-17 -44 -148 -167 -211 -197 -113 -55 -142 -60 -289 -56 l-137 3 -87 43 c-95 48 -201 140 -227 200 -14 31 -37 47 -25 17 9 -24 -133 -166 -201 -202 -104 -54 -158 -68 -278 -68 -180 0 -288 46 -422 181 l-83 83 -14 -27 c-24 -46 -124 -138 -186 -171 -135 -72 -209 -86 -349 -66 -124 18 -235 67 -312 138 -55 51 -129 162 -154 232 -23 65 -32 275 -16 342 45 177 176 327 343 394 103 41 311 41 419 0z m334 -952 c64 -66 148 -121 238 -155 l72 -28 -30 -12 c-22 -10 -115 -13 -365 -13 -184 0 -343 4 -353 8 -14 5 -4 11 40 25 104 32 204 91 273 161 35 36 67 65 70 65 3 0 28 -23 55 -51z m1003 -19 c52 -50 96 -81 155 -110 46 -22 91 -40 100 -40 9 0 18 -4 21 -9 10 -16 -140 -25 -409 -26 -167 0 -269 4 -284 11 -24 10 -23 11 25 29 104 37 161 72 234 142 41 40 77 73 80 73 3 0 38 -31 78 -70z m967 19 c63 -65 146 -119 225 -149 46 -17 58 -25 46 -32 -48 -27 -449 -32 -631 -8 -50 6 -56 9 -35 16 83 26 199 97 260 158 35 37 69 66 75 66 5 0 33 -23 60 -51z m540 -210 c102 -7 168 -16 183 -25 l22 -14 0 -474 c0 -413 -2 -475 -15 -480 -8 -3 -792 -6 -1741 -7 -1330 0 -1728 2 -1740 11 -12 11 -14 83 -14 471 0 446 1 460 20 479 22 22 -188 20 2015 26 556 1 981 7 1010 12 70 13 80 13 260 1z" />{" "}
                        <path d="M462 1947 c-20 -21 -41 -94 -25 -84 5 3 6 -89 3 -204 -5 -200 -4 -210 15 -226 17 -15 47 -19 182 -23 88 -3 159 -2 157 2 -3 4 4 11 14 17 28 15 29 94 2 121 -17 17 -33 20 -104 20 -67 0 -85 3 -90 16 -3 9 -6 90 -6 180 0 151 -2 166 -20 184 -29 29 -99 28 -128 -3z m120 -208 l3 -202 108 2 107 2 0 -50 0 -51 -165 0 -165 0 0 250 0 250 55 0 55 0 2 -201z" />{" "}
                        <path d="M3517 1950 c-15 -12 -32 -18 -39 -14 -8 5 -9 2 -5 -10 4 -11 -1 -28 -13 -43 -11 -14 -17 -29 -14 -34 6 -11 -26 -80 -35 -75 -3 2 -6 -8 -7 -23 -1 -15 -13 -53 -27 -84 -15 -30 -25 -62 -24 -69 2 -7 2 -10 0 -5 -12 20 -22 1 -32 -56 -20 -116 -7 -116 34 1 34 98 100 262 136 339 l29 63 54 0 54 0 42 -102 c24 -57 53 -128 66 -158 34 -84 74 -194 74 -207 0 -6 6 -13 13 -16 25 -9 -4 -20 -60 -21 l-58 -1 -20 55 -20 55 -97 3 -96 3 -13 -55 -12 -56 -71 -1 c-39 0 -64 -3 -56 -6 8 -3 22 -12 32 -20 12 -11 18 -11 23 -3 6 9 10 9 16 -1 7 -11 9 -11 9 -1 0 9 7 11 20 7 11 -4 20 -2 20 4 0 6 7 11 15 11 8 0 15 6 15 13 0 8 7 28 16 46 l16 32 74 -2 c71 -2 74 -3 68 -23 -4 -12 -3 -17 2 -13 4 4 18 -9 31 -30 15 -25 30 -38 45 -39 13 0 41 -3 63 -7 24 -4 32 -3 20 2 -18 7 -17 8 7 14 33 9 48 55 22 74 -9 7 -18 23 -19 37 -4 36 -28 96 -36 90 -4 -2 -5 6 -1 18 3 13 1 19 -5 15 -6 -4 -8 3 -5 18 2 14 0 25 -6 25 -6 0 -20 29 -32 65 -12 36 -26 67 -31 71 -5 3 -7 15 -4 27 2 12 2 16 -1 8 -4 -9 -13 0 -26 28 -28 62 -104 88 -151 51z" />{" "}
                        <path d="M1522 1947 c-14 -17 -21 -485 -7 -491 6 -3 1 -5 -10 -5 -16 -1 -14 -4 10 -17 32 -17 140 -29 131 -15 -3 5 3 11 13 14 18 4 19 17 19 243 0 285 0 284 -88 284 -34 0 -62 -5 -68 -13z m128 -257 l0 -250 -57 0 -58 0 2 243 c1 133 2 245 3 250 0 4 25 7 55 7 l55 0 0 -250z" />{" "}
                        <path d="M2330 1940 c-11 -11 -20 -33 -20 -51 0 -17 -4 -28 -10 -24 -5 3 -10 -1 -10 -10 0 -9 5 -13 10 -10 13 8 12 -5 -4 -150 -8 -66 -15 -149 -15 -184 -2 -85 12 -100 82 -94 29 3 58 10 64 17 8 7 14 46 15 102 2 70 6 90 16 86 7 -2 11 -10 8 -17 -3 -8 2 -16 10 -19 8 -3 14 -15 14 -26 0 -11 9 -29 20 -40 11 -11 18 -20 15 -20 -3 0 -1 -6 6 -12 20 -22 97 -10 115 18 9 13 13 28 9 34 -4 6 -1 9 6 8 6 -2 18 15 26 38 23 70 38 51 38 -49 0 -80 2 -91 23 -107 16 -13 39 -19 74 -18 30 0 46 3 38 8 -10 6 -8 9 5 12 17 3 18 12 14 113 -2 61 -4 138 -4 172 0 33 -2 60 -5 58 -3 -2 -6 18 -6 43 -2 60 -13 102 -32 125 -22 25 -109 23 -142 -3 -14 -11 -19 -20 -12 -20 10 0 10 -4 -2 -16 -9 -8 -16 -24 -16 -35 0 -11 -5 -17 -10 -14 -6 4 -13 -7 -16 -24 -4 -17 -10 -31 -15 -31 -5 0 -9 -10 -9 -22 -1 -25 -23 -61 -33 -52 -3 3 -3 13 0 22 4 10 2 13 -5 8 -16 -10 -15 6 1 23 6 8 7 11 2 8 -6 -3 -15 -3 -20 1 -13 9 -45 79 -45 97 0 8 -4 15 -10 15 -5 0 -10 6 -10 14 0 45 -122 64 -160 26z m169 -102 c26 -57 56 -124 66 -151 10 -26 19 -46 20 -45 2 2 22 48 45 103 23 55 53 122 67 148 l24 48 51 -3 c42 -2 52 -6 54 -23 6 -38 34 -407 34 -441 l0 -34 -53 0 -54 0 -6 107 c-4 58 -7 131 -7 161 0 31 -3 52 -7 49 -8 -8 -79 -176 -95 -224 -10 -30 -15 -33 -53 -33 -39 0 -43 3 -58 38 -9 20 -29 69 -46 107 -16 39 -33 84 -37 100 -8 29 -8 29 -15 -15 -4 -25 -8 -100 -8 -167 l-1 -123 -60 0 -59 0 4 48 c3 26 10 112 15 192 6 80 13 171 16 203 l7 57 54 0 54 0 48 -102z" />{" "}
                        <path d="M2090 1903 c0 -7 4 -14 9 -17 4 -3 14 -26 21 -51 7 -24 19 -50 26 -56 8 -6 3 15 -11 52 -25 62 -45 95 -45 72z" />{" "}
                        <path d="M3081 1899 c-1 -8 6 -24 15 -35 15 -19 15 -19 6 1 -5 11 -12 27 -15 35 -5 13 -6 13 -6 -1z" />{" "}
                        <path d="M3110 1811 c4 -16 13 -38 19 -48 9 -16 10 -16 11 -1 0 9 -4 20 -10 23 -5 3 -10 15 -10 25 0 10 -4 21 -9 25 -6 3 -6 -6 -1 -24z" />{" "}
                        <path d="M3548 1763 c-9 -27 -23 -65 -32 -85 l-16 -38 70 0 70 0 -16 38 c-9 20 -23 58 -31 85 -9 26 -19 47 -23 47 -3 0 -13 -21 -22 -47z" />{" "}
                        <path d="M2149 1748 c-2 -7 -1 -58 2 -113 l5 -100 2 113 c2 104 -1 130 -9 100z" />{" "}
                        <path d="M3129 1600 c-4 -30 -5 -57 -3 -59 10 -11 15 12 12 60 l-3 54 -6 -55z" />{" "}
                        <path d="M3110 1505 c0 -14 -7 -41 -14 -60 -21 -50 -9 -43 14 8 22 46 25 77 10 77 -5 0 -10 -11 -10 -25z" />{" "}
                        <path d="M2121 1470 c-7 -27 -17 -50 -22 -50 -5 0 -9 -4 -9 -10 0 -25 20 -6 33 33 8 23 18 50 22 60 4 9 3 17 -2 17 -5 0 -15 -22 -22 -50z" />{" "}
                        <path d="M408 969 c-19 -11 -25 -49 -8 -49 6 0 10 9 10 20 0 20 7 20 348 21 774 3 3075 -1 3079 -5 3 -2 5 -210 5 -462 0 -287 3 -453 9 -447 10 10 14 907 4 924 -9 13 -3424 12 -3447 -2z" />{" "}
                        <path d="M1078 945 c-2 -2 -146 -5 -321 -6 -178 -1 -320 -5 -323 -11 -8 -12 -6 -837 2 -850 5 -7 185 -8 558 -4 585 7 682 7 1980 0 456 -3 833 -1 838 4 4 4 8 197 9 427 0 383 -1 420 -17 432 -13 9 -310 12 -1369 12 -744 0 -1355 -2 -1357 -4z m2711 -34 c15 -28 16 -774 1 -802 -10 -19 -30 -19 -773 -18 -419 0 -782 4 -807 7 l-45 7 -7 270 c-4 149 -8 286 -8 305 -1 19 2 70 6 113 5 62 3 82 -10 102 -9 13 -16 26 -16 27 0 2 371 5 824 7 l824 3 11 -21z m-1659 -21 c8 -13 12 -737 5 -761 -6 -18 -34 -19 -830 -19 -648 0 -826 3 -832 12 -11 17 -4 771 7 778 16 10 1644 0 1650 -10z" />{" "}
                        <path d="M2606 664 c-25 -26 -26 -30 -26 -154 0 -122 1 -127 25 -150 26 -24 32 -25 237 -21 72 2 78 4 102 31 32 39 64 38 98 0 30 -34 74 -40 111 -15 21 13 27 13 63 -6 29 -15 52 -19 87 -16 58 5 95 30 120 80 17 34 17 41 4 80 -10 30 -11 48 -4 64 7 16 5 31 -10 60 -34 67 -124 92 -200 56 -28 -13 -39 -14 -54 -5 -10 7 -35 12 -55 12 -30 0 -43 -7 -75 -42 l-38 -42 -36 42 c-31 36 -42 42 -75 42 -57 0 -80 -34 -80 -116 0 -68 -8 -81 -40 -64 -17 9 -20 21 -20 74 0 59 -2 66 -31 90 -39 33 -69 33 -103 0z m55 -24 c6 0 8 4 5 9 -4 5 3 7 14 4 18 -5 20 -14 20 -105 l0 -99 53 2 52 3 0 -38 0 -38 -93 -1 -92 -2 0 137 c0 100 3 137 13 141 6 2 14 0 15 -4 2 -5 8 -9 13 -9z m657 6 c7 -4 17 -4 22 -1 6 3 10 1 10 -5 0 -6 5 -8 12 -4 6 4 8 3 4 -4 -3 -6 0 -15 9 -19 8 -5 16 -20 17 -33 3 -23 0 -25 -32 -22 -19 2 -40 10 -47 19 -14 18 -47 14 -51 -8 -2 -11 14 -20 53 -33 63 -19 102 -64 85 -96 -5 -10 -7 -20 -4 -22 2 -3 -15 -15 -39 -28 -35 -19 -52 -22 -89 -16 -58 9 -78 24 -81 61 -2 28 1 30 36 33 27 2 37 -1 37 -11 0 -18 24 -29 45 -21 30 12 15 34 -31 46 -84 23 -112 69 -78 127 23 39 87 59 122 37z m-370 -62 l43 -66 27 38 c15 22 35 51 44 65 13 21 24 26 49 25 l31 -1 2 -133 1 -132 -43 0 -43 0 6 66 c7 70 -2 79 -25 24 -10 -25 -18 -30 -45 -30 -26 0 -35 6 -51 35 -10 19 -21 35 -24 35 -3 0 -4 -30 -2 -67 l3 -68 -38 1 -38 1 -3 137 -3 136 34 0 c30 0 37 -6 75 -66z" />{" "}
                        <path d="M840 660 c0 -5 -6 -10 -14 -10 -22 0 -26 -23 -26 -141 0 -106 11 -156 31 -144 5 4 9 1 9 -5 0 -7 7 -9 16 -6 8 3 12 2 9 -3 -9 -15 125 -3 140 13 8 7 11 16 8 20 -4 3 -1 6 5 6 6 0 14 -5 17 -10 4 -6 11 -8 16 -5 5 4 9 2 9 -4 0 -15 38 -23 57 -12 10 6 14 11 10 11 -5 0 -1 7 7 16 9 8 14 19 11 24 -2 4 -5 58 -6 119 0 64 -5 111 -10 111 -6 0 -8 4 -5 9 6 8 -15 21 -35 21 -5 0 -18 -9 -29 -20 -18 -18 -20 -33 -20 -130 l0 -110 -24 15 c-14 9 -41 18 -62 21 -21 3 -39 6 -40 7 -1 1 -3 34 -5 72 -1 39 -7 76 -13 84 -8 11 -8 13 2 7 6 -4 12 -3 12 3 0 5 -8 15 -17 20 -10 6 -13 11 -8 11 14 0 -17 20 -32 20 -7 0 -13 -4 -13 -10z m95 -250 c51 0 65 -3 65 -15 0 -12 -16 -15 -82 -15 l-83 0 0 127 c0 104 3 129 15 134 13 5 15 -12 18 -112 l3 -119 64 0z m175 100 c0 -117 -2 -130 -17 -130 -16 0 -18 13 -18 130 0 117 2 130 18 130 15 0 17 -13 17 -130z" />{" "}
                        <path d="M1197 649 c-15 -17 -18 -40 -18 -141 0 -108 2 -122 20 -139 11 -10 25 -19 31 -19 14 0 50 37 42 44 -3 3 -1 6 5 6 6 0 8 12 5 28 -5 24 -3 25 11 14 9 -8 22 -10 28 -6 8 4 9 3 5 -5 -10 -16 43 -7 85 15 4 2 6 -11 4 -28 -2 -24 4 -37 20 -50 23 -18 55 -15 55 4 0 5 5 6 10 3 6 -3 10 2 10 11 0 14 3 13 20 -6 25 -29 67 -34 80 -10 8 15 58 40 80 40 4 0 23 -13 41 -30 39 -34 47 -36 76 -15 19 13 20 19 12 53 -15 58 -31 92 -41 92 -5 0 -8 6 -6 12 3 7 -1 19 -8 26 -7 7 -11 19 -8 27 4 8 1 15 -5 15 -6 0 -11 8 -11 18 0 24 -41 62 -67 62 -11 0 -27 -8 -36 -17 -20 -23 -57 -109 -57 -134 0 -10 -5 -19 -11 -19 -5 0 -7 -4 -4 -10 3 -5 1 -10 -5 -10 -6 0 -9 -4 -6 -8 3 -5 -5 -21 -18 -36 l-22 -28 0 111 c1 61 -3 111 -8 111 -5 0 -6 3 -3 7 9 8 -24 32 -46 33 -21 0 -64 -43 -81 -80 -6 -14 -19 -26 -28 -26 -10 -1 -15 2 -12 7 3 5 1 9 -5 9 -5 0 -12 8 -16 19 -10 32 -53 71 -77 71 -13 0 -32 -9 -41 -21z m283 -134 c0 -122 -2 -135 -17 -135 -16 0 -18 10 -15 102 l3 103 -46 -67 c-25 -38 -52 -68 -59 -68 -8 0 -33 29 -56 65 -23 36 -43 65 -45 65 -1 0 0 -45 3 -100 5 -97 4 -100 -17 -100 -20 0 -21 4 -21 130 0 120 1 130 19 130 12 0 35 -26 66 -75 27 -41 51 -72 55 -70 4 2 27 36 51 74 24 39 51 72 59 75 8 2 16 4 18 5 1 0 2 -60 2 -134z m249 37 c19 -48 44 -106 57 -129 l23 -43 -24 0 c-17 0 -26 8 -34 30 -10 29 -12 30 -75 30 -62 0 -64 -1 -75 -30 -6 -20 -17 -30 -30 -30 -19 0 -19 2 6 58 14 31 31 73 38 92 52 141 67 144 114 22z" />{" "}
                        <path d="M1652 537 c-12 -29 -22 -56 -22 -60 0 -4 22 -7 49 -7 l50 0 -21 53 c-12 28 -24 55 -28 60 -3 4 -16 -17 -28 -46z" />{" "}
                        <path d="M493 330 c0 -36 2 -50 4 -32 2 17 2 47 0 65 -2 17 -4 3 -4 -33z" />{" "}
                        <path d="M2087 156 c-17 -13 -16 -14 3 -19 15 -4 20 0 20 14 0 22 0 22 -23 5z" />{" "}
                        <path d="M500 150 c8 -5 26 -10 39 -10 32 0 24 6 -19 14 -25 4 -31 3 -20 -4z" />{" "}
                        <path d="M648 133 c28 -2 76 -2 105 0 28 2 5 3 -53 3 -58 0 -81 -1 -52 -3z" />{" "}
                        <path d="M1038 133 c23 -2 59 -2 80 0 20 2 1 4 -43 4 -44 0 -61 -2 -37 -4z" />{" "}
                        <path d="M1278 133 c61 -2 163 -2 225 0 61 1 11 3 -113 3 -124 0 -174 -2 -112 -3z" />{" "}
                        <path d="M1908 133 c23 -2 61 -2 85 0 23 2 4 4 -43 4 -47 0 -66 -2 -42 -4z" />{" "}
                        <path d="M390 482 c1 -230 5 -424 10 -431 7 -12 277 -14 1696 -12 928 1 1690 4 1693 6 2 3 -757 5 -1687 5 l-1692 0 0 425 c0 284 -3 425 -10 425 -7 0 -10 -138 -10 -418z" />{" "}
                    </g>{" "}
                </svg>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-100">
                    Sign in to Admin Account
                </h2>
            </div>
            <Form />
        </>
    );
}
