'use server';

export async function getVisitorCount() {
  try {
    const startOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString();

    const response = await fetch(`https://us.posthog.com/api/projects/${process.env.POSTHOG_PROJECT_ID}/insights/trend/`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.POSTHOG_PERSONAL_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        events: [{ id: '$pageview', type: 'events' }],
        date_from: startOfMonth,
        interval: 'month',
      }),
    });

    if (!response.ok) {
      throw new Error(`PostHog API Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    const totalVisitors = data?.result?.[0]?.count ?? 0;

    return totalVisitors;
  } catch (error) {
    console.error('Error fetching monthly visitors:', error);
    throw error;
  }
}
