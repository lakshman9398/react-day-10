import { useState } from 'react'
import './App.css'

function App() {
  const [plan, setPlan] = useState('Basic')
  const [price, setPrice] = useState(199)
  const [status, setStatus] = useState('Active')

  const handleUpgrade = () => {
    if (plan === 'Basic') {
      setPlan('Standard')
      setPrice(499)
    } else if (plan === 'Standard') {
      setPlan('Premium')
      setPrice(699)
    }
  }

  const handleDowngrade = () => {
    if (plan === 'Premium') {
      setPlan('Standard')
      setPrice(499)
    } else if (plan === 'Standard') {
      setPlan('Basic')
      setPrice(199)
    }
  }

  const handlePause = () => setStatus('Paused')
  const handleResume = () => setStatus('Active')

  return (
    <div className='dashboard-wrapper'>
      <div className='dashboard'>
        <h1>Netflix Subscription Dashboard</h1>
        <h2>Current plan: {plan}</h2>
        <h2>Price: ₹{price}/month</h2>
        <h2>Status: {status}</h2>
      </div>

      <div className='messages'>
        {status === 'Active' && <h3>✅ Enjoy your shows!</h3>}
        {status === 'Paused' && <h3>❌ Subscription Paused</h3>}
        {plan === 'Premium' && <h3>⭐ Ultra HD Enabled</h3>}
      </div>

      <div className='buttons'>
        <button onClick={handleUpgrade} disabled={plan === 'Premium'}>
          Upgrade
        </button>
        <button onClick={handleDowngrade} disabled={plan === 'Basic'}>
          Downgrade
        </button>
        <button onClick={handlePause} disabled={status === 'Paused'}>
          Pause subscription
        </button>
        <button onClick={handleResume} disabled={status === 'Active'}>
          Resume subscription
        </button>
      </div>
    </div>
  )
}

export default App