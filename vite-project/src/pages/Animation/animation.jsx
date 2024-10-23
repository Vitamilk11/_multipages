import React, { useState, useEffect } from 'react';
import './Animation.css'; // CSS เดิมของคุณ


    function Animation () {

    const fieldWidth = 600;
    const fieldHeight = 400;
    const ballDiameter = 100;
    const vx = 5;
    const vy = 5;

    const [running, setRunning] = useState(false);
    const [position, setPosition] = useState({ left: 0, top: 0 });
    const [goRight, setGoRight] = useState(true);
    const [goDown, setGoDown] = useState(true);
    const [angle, setAngle] = useState(0);
    const [rotateClockwise, setRotateClockwise] = useState(true);
    const [ballImage, setBallImage] = useState(''); // เก็บ URL รูปลูกบอล

    const maxLeft = fieldWidth - ballDiameter - 6;
    const maxTop = fieldHeight - ballDiameter - 6;

    const toggleRunning = () => setRunning(!running);

    const updatePosition = () => {
        setPosition((prev) => {
            let { left, top } = prev;
            let newGoRight = goRight;
            let newGoDown = goDown;

            // ตรวจสอบการชนขอบขวาและซ้าย
            if (newGoRight) {
                left += vx;
                if (left >= maxLeft) {
                    newGoRight = false;
                    setRotateClockwise(!rotateClockwise);
                }
            } else {
                left -= vx;
                if (left < 0) {
                    newGoRight = true;
                    setRotateClockwise(!rotateClockwise);
                }
            }

            // ตรวจสอบการชนขอบบนและล่าง
            if (newGoDown) {
                top += vy;
                if (top >= maxTop) newGoDown = false;
            } else {
                top -= vy;
                if (top < 0) newGoDown = true;
            }

            setGoRight(newGoRight);
            setGoDown(newGoDown);
            return { left, top };
        });

        // อัปเดตมุมการหมุน
        setAngle((prev) => (rotateClockwise ? prev + 5 : prev - 5) % 360);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (running) updatePosition();
        }, 25);
        return () => clearInterval(interval);
    }, [running, goRight, goDown, rotateClockwise]);

    const changeBallImage = (type) => {
        let imageUrl = '';
        switch (type) {
            case 'basketball':
                imageUrl =
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOGMTvQCVj7fv0rKbQ1Eg8aZ_YdkETpWvZvQ&s';
                break;
            case 'football':
                imageUrl =
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKz5iHIYTjsOfpyzjRehhyM9eOb_UkudsiJw&s';
                break;
            case 'volleyball':
                imageUrl =
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrYM-Ye3da0ynmoK8m-rPm788naI32M7d1s95a9W88xf2Lr6ng555cnXim-h7Nvypk9yU&usqp=CAU';
                break;
            case 'Human':
                imageUrl = 'https://scontent.fbkk13-2.fna.fbcdn.net/v/t39.30808-1/366987399_122096977550009626_7185978985991398915_n.jpg?stp=dst-jpg_s200x200&_nc_cat=111&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=8nuzW8G_BsoQ7kNvgGmQz4t&_nc_zt=24&_nc_ht=scontent.fbkk13-2.fna&_nc_gid=A8JN87J3RnHbIn_RALUxEzc&oh=00_AYD-eieCT6bj8sIYCRWP0Vc5mSyyrFY_6Y9ki2w7g8nuog&oe=671E9CF8';
                break;
            case 'Logo':
                imageUrl = 'https://scontent.fbkk12-5.fna.fbcdn.net/v/t39.30808-6/464265941_122249085944009626_6774170408368167735_n.jpg?stp=dst-jpg_p552x414&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=gmNyVSmgNWUQ7kNvgHw6BIB&_nc_zt=23&_nc_ht=scontent.fbkk12-5.fna&_nc_gid=AC1Xl2t7iz3Vjk1BLCSxV8a&oh=00_AYDDTJpz2mDXJsI-OAuILTC_xs0JRxTrAh3E8ShMCM6S5Q&oe=671E8F60';
                break;
                case 'Cartoon':
                    imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQV3i7ThBRyp-2VT_57C_1Dfx2WgWkpfrk7g&s';
                    break;
            default:
                imageUrl = '';
        }
        setBallImage(imageUrl);
    };

    return (
        <div id="conthiner">
            <div id="field" style={{ width: fieldWidth, height: fieldHeight }}>
                <div
                    id="ball"
                    style={{
                        width: ballDiameter,
                        height: ballDiameter,
                        top: position.top,
                        left: position.left,
                        transform: `rotate(${angle}deg)`,
                        backgroundImage: `url(${ballImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                ></div>
            </div>
            <div id="control">
                <button
                    id="run"
                    className={`btn ${running ? 'btn-danger' : 'btn-success'}`}
                    onClick={toggleRunning}
                >
                    <span className={`bi ${running ? 'bi-pause' : 'bi-play'}`}>
                        &nbsp;{running ? 'PAUSE' : 'RUN'}
                    </span>
                </button>
                <button className="btn btn-primary" onClick={() => changeBallImage('none')}>
                    None
                </button>
                <button className="btn btn-primary" onClick={() => changeBallImage('basketball')}>
                    BASKETBALL
                </button>
                <button className="btn btn-primary" onClick={() => changeBallImage('football')}>
                    FOOTBALL
                </button>
                <button className="btn btn-primary" onClick={() => changeBallImage('volleyball')}>
                    VOLLEYBALL
                </button>
                <button className="btn btn-primary" onClick={() => changeBallImage('Human')}>
                    HUMAN
                </button>
                <button className="btn btn-primary" onClick={() => changeBallImage('Logo')}>
                    Logo
                </button>
                <button className="btn btn-primary" onClick={() => changeBallImage('Cartoon')}>
                    CARTOON
                </button>
            </div>
        </div>
    );
};

export default Animation;


