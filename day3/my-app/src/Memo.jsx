import React, { useMemo, useState } from 'react';

function Memo() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const sum = useMemo(() => {
    console.log('Calculating sum...');
    return num1 + num2;
  }, [num1, num2]);

  return (
    <div>
      <input type="number" value={num1} onChange={(e) => setNum1(Number(e.target.value))} />
      <input type="number" value={num2} onChange={(e) => setNum2(Number(e.target.value))} />
      <p>Sum: {sum}</p>
    </div>
  );
}

export default Memo;