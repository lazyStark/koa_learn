async function test1() {

  try {
    await test3()
  } catch (error) {
    console.log(error)
  }
}

async function test3() {
  await setTimeout(() => {
    throw new Error('error')
  })
}
test1()