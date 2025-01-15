'use client';

import { useEffect, useState } from 'react';
import { getVisitorCount } from '../../../app/actions/getVisitorCount';

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState<number>(0);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      const count = await getVisitorCount();
      setVisitorCount(count);
    };

    fetchVisitorCount();
    const interval = setInterval(fetchVisitorCount, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full text-center bg-green-400 py-2 text-lg font-bold z-50 shadow-md">
      👀 {visitorCount} visitors are currently online!
    </div>
  );
};

export default VisitorCounter;
