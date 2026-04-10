import { WAITLIST_ENDPOINT } from '../config'

export interface WaitlistResponse {
  success: boolean
  message?: string
  error?: string
}

export async function submitWaitlist(
  email: string,
  source: string,
): Promise<WaitlistResponse> {
  const res = await fetch(WAITLIST_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, source }),
  })

  const data = (await res.json()) as WaitlistResponse

  if (res.status === 409) {
    return { success: false, error: 'Already on waitlist' }
  }
  if (!res.ok) {
    return { success: false, error: data.error ?? 'Something went wrong' }
  }
  return data
}
