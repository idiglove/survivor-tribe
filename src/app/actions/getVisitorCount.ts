'use server';

export async function getVisitorCount() {
  try {
    const response = await fetch(`https://us.posthog.com/api/projects/${process.env.POSTHOG_PROJECT_ID}/events/`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.POSTHOG_PERSONAL_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    const recentPageviews = data.results.filter((event: any) => {
      const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000).toISOString();
      return event.event === '$pageview' && event.timestamp > fiveMinutesAgo;
    });

    // Count unique visitors based on distinct_id
    const uniqueVisitors = new Set(recentPageviews.map((event: any) => event.distinct_id)).size;

    return uniqueVisitors;
  } catch (error) {
    console.error('Error fetching events:', error);
    return 0;
  }
}
