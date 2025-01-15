'use client';

import { useEffect, useState } from 'react';
import { getVisitorCount } from '../../../app/actions/getVisitorCount';

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const count = await getVisitorCount();
        setVisitorCount(count);
      } catch (err) {
        console.error('Error fetching visitor count:', err);
      }
    };

    fetchVisitorCount();

    const interval = setInterval(fetchVisitorCount, 30000);

    return () => clearInterval(interval);
  }, []);

  if (visitorCount === null) {
    return (
      <div className="fixed top-0 left-0 w-full text-center bg-gray-400 py-2 text-lg font-bold text-white z-50 shadow-md">
        ⏳ Loading visitor count...
      </div>
    );
  }

  return (
    <div className="fixed top-0 left-0 w-full text-center bg-blue-500 py-2 text-lg font-bold text-white z-50 shadow-md">
      🌎 {visitorCount} people have visited this site this month!
    </div>
  );
};

export default VisitorCounter;
