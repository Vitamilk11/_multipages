import React, { useState, useEffect } from 'react';
import './Calculator.css'; // นำเข้า CSS

const Calculator = () => {
  const [currentInput, setCurrentInput] = useState(''); // เก็บข้อมูลที่ผู้ใช้ป้อน
  const [operatorType, setOperatorType] = useState(''); // เก็บ operator ที่ใช้
  const [previousInput, setPreviousInput] = useState(''); // เก็บตัวเลขก่อนหน้า
  const [result, setResult] = useState(0); // เก็บผลลัพธ์จากการคำนวณ
  const [isEqualPressed, setIsEqualPressed] = useState(false); // เช็คว่าได้กด = แล้วหรือยัง
  const [lastNumber, setLastNumber] = useState(''); // เก็บตัวเลขสุดท้าย

  // ฟังก์ชันสำหรับแสดงตัวเลขที่กดบนหน้าจอ
  const handleNumber = (num) => {
    if (isEqualPressed) {
      setCurrentInput('');  
      setIsEqualPressed(false);
    }
    setCurrentInput((prev) => prev + num);
    console.log(previousInput, currentInput, result);
  };

  // ฟังก์ชันสำหรับการเคลียร์จอ
  const clearDisplay = () => {
    setCurrentInput('');
    setPreviousInput('');
    setOperatorType('');
    setResult(0);
    setIsEqualPressed(false);
  };

  // ฟังก์ชันสำหรับการเลือก operator
  const handleOperator = (op) => {
    if (currentInput !== '') {
      setPreviousInput(currentInput);
      setOperatorType(op);
      setCurrentInput('');
      // ลบคลาส active จากปุ่มทั้งหมด
      const operatorButtons = document.querySelectorAll('.btn-operator');
      operatorButtons.forEach(button => button.classList.remove('active'));
      
      // เพิ่มคลาส active ให้กับปุ่มที่กด
      document.querySelector(`.btn-${op}`)?.classList.add('active');
    }
  };

  // ฟังก์ชันสำหรับการคำนวณ
  const calculate = () => {
    if (currentInput === '' && lastNumber === '') return;

    let newResult;
    if (!isEqualPressed) {
      switch (operatorType) {
        case '+':
          newResult = parseFloat(previousInput) + parseFloat(currentInput);
          break;
        case '-':
          newResult = parseFloat(previousInput) - parseFloat(currentInput);
          break;
        case '*':
          newResult = parseFloat(previousInput) * parseFloat(currentInput);
          break;
        case '/':
          newResult = parseFloat(previousInput) / parseFloat(currentInput);
          break;
        case '%':
          newResult = parseFloat(previousInput) % parseFloat(currentInput);
          break;
        default:
          return;
      }
      setLastNumber(currentInput);
      setIsEqualPressed(true);
    } else {
      newResult = calculateRepeated(currentInput);
    }

    if (!isNaN(newResult)) {
      setCurrentInput(newResult.toString());
    } else {
      setCurrentInput('');
    }
    
    console.log('Previous:', previousInput);
    console.log('Current:', currentInput);
    console.log('Result:', newResult);
  };

  const calculateRepeated = (curr) => {
    switch (operatorType) {
      case '+':
        return parseFloat(result) + parseFloat(curr);
      case '-':
        return parseFloat(result) - parseFloat(curr);
      case '*':
        return parseFloat(result) * parseFloat(curr);
      case '/':
        return parseFloat(result) / parseFloat(curr);
      case '%':
        return parseFloat(result) % parseFloat(curr);
      default:
        return 0;
    }
  };

  // ฟังก์ชันสำหรับตรวจสอบการกดคีย์
  const checkKey = (e) => {
    if (e.key === 'Escape') {
      clearDisplay(); // ฟังก์ชันสำหรับการเคลียร์จอ
    } else if (['+', '-', '*', '/'].includes(e.key)) {
      handleOperator(e.key);
    } else if (e.key >= '0' && e.key <= '9') {
      handleNumber(e.key); // ส่งตัวเลขที่กดไปยังฟังก์ชัน number
    } else if (e.key === 'Enter') {
      calculate(); // ฟังก์ชันสำหรับคำนวณ
    }
  };

  // ฟังก์ชันเริ่มต้นเมื่อเอกสารโหลดเสร็จ
  useEffect(() => {
    document.addEventListener('keydown', checkKey);
    return () => {
      document.removeEventListener('keydown', checkKey);
    };
  }, [currentInput, previousInput, operatorType]);

  return (
    <div className="box">
      <div id="shownumber" className="number">{currentInput || '0'}</div>
      <div className="row">
        <button onClick={clearDisplay} className=" btn btn-clear btn1">AC</button>
        <button onClick={() => handleOperator('%')} className="btn btn-operator btn-modulus btn1">%</button>
        <button className="btn btn1">+/-</button>
        <button onClick={() => handleOperator('/')} className="btn btn-operator btn-divide btn1">/</button>
      </div>
      <div className="row">
        <button onClick={() => handleNumber(7)} className="btn btn-number btn1">7</button>
        <button onClick={() => handleNumber(8)} className="btn btn-number btn1">8</button>
        <button onClick={() => handleNumber(9)} className="btn btn-number btn1">9</button>
        <button onClick={() => handleOperator('*')} className="btn btn-operator btn-multiply btn1">x</button>
      </div>
      <div className="row">
        <button onClick={() => handleNumber(4)} className="btn btn-number btn1">4</button>
        <button onClick={() => handleNumber(5)} className="btn btn-number btn1">5</button>
        <button onClick={() => handleNumber(6)} className="btn btn-number btn1">6</button>
        <button onClick={() => handleOperator('-')} className="btn btn-operator btn-minus btn1">-</button>
      </div>
      <div className="row">
        <button onClick={() => handleNumber(1)} className="btn btn-number btn1">1</button>
        <button onClick={() => handleNumber(2)} className="btn btn-number btn1">2</button>
        <button onClick={() => handleNumber(3)} className="btn btn-number btn1">3</button>
        <button onClick={() => handleOperator('+')} className="btn btn-operator btn-plus btn1">+</button>
      </div>
      <div className="row">
        <button onClick={() => handleNumber(0)} className="btn btn-number btn-zero btn1">0</button>
        <button onClick={() => handleNumber('.')} className="btn btn-number btn1">.</button>
        <button onClick={calculate} className="btn btn-operator btn1">=</button>
      </div>
    </div>
  );
};

export default Calculator;




