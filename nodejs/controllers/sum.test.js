const {sum,multiply} = require('./functions');
// test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3);
//   });


  
  // test('multiplie 1 * 2 to equal to 2',()=>{
  //   expect(multiply(1,2)).toBe(2);
  // })


  // test('test',()=>{
  //   for (let i=0;i<5;i++){
  //     for (let j=1;j<5;j++){
  //       expect(i+j).not.toBe(0);
  //     }
  //   }
  // })

  let shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
  ];
  test('test',()=>{
    expect(shoppingList).toContain('milk');
  })