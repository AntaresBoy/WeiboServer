/**
 * @description 单元测试demo
 * @author AntaresLpq
 */


function twoSum(a,b){
  return a+b;
}

//单元测试
test("10+20 should be equal 30",()=>{
  const res=twoSum(10,20)
  expect(res).toBe(30)
  expect(res).not.toBe(40)//不等于
})