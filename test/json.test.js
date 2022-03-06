/**
 * @description 测试json接口
 * @author AntaresLpq
 */

const server = require('./server')

//get 请求
test('should (json 接口数据返回格式正确)', async () => {
  const res = await server.get('/json')
  expect(res.body).toEqual({
    title: 'koa2 json'
  })
  expect(res.body.title).toBe('koa2 json')
})

//post 请求
// test('should (json 接口数据返回格式正确)', async () => {
//   const res = await (await server.post('/login')).send({
//     username:"admin",
//     password:"123456"
//   })
//   expect(res.body).toEqual({
//     title: 'koa2 json'
//   })
//   expect(res.body.title).toBe('koa2 json')
// })