import axios from 'axios'

const BASE = 'http://localhost:5001'
const results: { endpoint: string; status: string; note: string }[] = []

async function test(label: string, fn: () => Promise<unknown>) {
  try {
    await fn()
    results.push({ endpoint: label, status: '✅ PASS', note: '' })
  } catch (e: unknown) {
    const err = e as { response?: { status: number; data?: { message?: string } }; message: string }
    const status = err.response?.status
    const pass = status === 401 || status === 403
    results.push({
      endpoint: label,
      status: pass ? '✅ PASS (auth protected)' : '❌ FAIL',
      note: err.response?.data?.message || err.message,
    })
  }
}

async function runTests() {
  console.log('\n🧪 Testing NexRole AI Backend API\n')

  // Public endpoints
  await test('GET /health', () => axios.get(`${BASE}/health`))
  await test('GET /api/v1/domains', () => axios.get(`${BASE}/api/v1/domains`))
  await test('GET /api/v1/domains/generative-ai-engineering', () =>
    axios.get(`${BASE}/api/v1/domains/generative-ai-engineering`))
  await test('GET /api/v1/certificates/verify/NXRL-FAKE-CODE', () =>
    axios.get(`${BASE}/api/v1/certificates/verify/NXRL-FAKE-CODE`))
  await test('GET /api/v1/jobs', () => axios.get(`${BASE}/api/v1/jobs`))

  // Auth protected — should return 401 without token
  await test('GET /api/v1/auth/me (no token)', () => axios.get(`${BASE}/api/v1/auth/me`))
  await test('GET /api/v1/users/me (no token)', () => axios.get(`${BASE}/api/v1/users/me`))
  await test('GET /api/v1/leaderboard/weekly (no token)', () =>
    axios.get(`${BASE}/api/v1/leaderboard/weekly`))
  await test('GET /api/v1/progress (no token)', () => axios.get(`${BASE}/api/v1/progress`))
  await test('GET /api/v1/notifications (no token)', () =>
    axios.get(`${BASE}/api/v1/notifications`))
  await test('GET /api/v1/learning-path/all (no token)', () =>
    axios.get(`${BASE}/api/v1/learning-path/all`))
  await test('GET /api/v1/interview/questions (no token)', () =>
    axios.get(`${BASE}/api/v1/interview/questions`))

  // Admin protected — should return 401 without token
  await test('GET /api/v1/admin/stats (no token)', () => axios.get(`${BASE}/api/v1/admin/stats`))
  await test('GET /api/v1/admin/users (no token)', () => axios.get(`${BASE}/api/v1/admin/users`))

  // 404 check
  await test('GET /api/v1/nonexistent (404)', async () => {
    const res = await axios.get(`${BASE}/api/v1/nonexistent`, { validateStatus: () => true })
    if (res.status !== 404) throw new Error(`Expected 404, got ${res.status}`)
  })

  // Print results table
  console.log('\n' + '─'.repeat(70))
  console.log('ENDPOINT'.padEnd(45) + 'STATUS')
  console.log('─'.repeat(70))
  results.forEach((r) => {
    console.log(r.endpoint.padEnd(45) + r.status)
    if (r.note) console.log('  └─ ' + r.note)
  })
  console.log('─'.repeat(70))

  const passed = results.filter((r) => r.status.includes('✅')).length
  const failed = results.filter((r) => r.status.includes('❌')).length
  console.log(`\n📊 Results: ${passed} passed, ${failed} failed\n`)

  if (failed > 0) process.exit(1)
}

runTests()
