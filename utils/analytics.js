const { BetaAnalyticsDataClient } = require('@google-analytics/data');

const decoded = Buffer.from(
  process.env.GOOGLE_SERVICE_KEY_BASE64,
  'base64',
).toString('utf-8');

let credentials;
try {
  credentials = JSON.parse(decoded);
  console.log('✅ Successfully parsed service account credentials.');
  console.log('Using service account email:', credentials.client_email);
} catch (error) {
  console.error('❌ Failed to parse credentials:', error);
  throw error;
}

const GA4_PROPERTY_ID = '497722859';
console.log('Targeting GA4 Property:', GA4_PROPERTY_ID);

const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials,
  scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
});

async function getActiveUsersSummary() {
  const requestPayload = {
    property: `properties/${GA4_PROPERTY_ID}`,
    metrics: [{ name: 'activeUsers' }],
    dimensions: [{ name: 'customUser:user_type' }],
  };

  console.log('📤 Sending Realtime request for active user summary...');

  try {
    const [response] =
      await analyticsDataClient.runRealtimeReport(requestPayload);

    if (!response.rows) {
      return { total: 0, breakdown: [] };
    }

    const breakdown = response.rows.map((row) => ({
      userType: row.dimensionValues?.[0]?.value || 'unknown',
      activeUsers: parseInt(row.metricValues?.[0]?.value || '0'),
    }));

    const total = breakdown.reduce((sum, row) => sum + row.activeUsers, 0);

    console.log('✅ Active Users Summary:', { total, breakdown });

    return { total, breakdown };
  } catch (error) {
    console.error(
      '❌ Error in getActiveUsersSummary:',
      JSON.stringify(error, null, 2),
    );
    throw error;
  }
}

module.exports = { getActiveUsersSummary };

// module.exports = { getActiveUsersByUserType };
