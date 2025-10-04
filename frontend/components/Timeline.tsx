'use client';

import { useEffect, useState } from 'react';
import { useEscrowContext } from '../context/EscrowContext';
import { fetchTimelineEvents, TimelineEvent } from '../lib/massa';

const Timeline: React.FC<{ escrowId: string }> = ({ escrowId }) => {
  const { client } = useEscrowContext();
  const [events, setEvents] = useState<TimelineEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      if (!client) return;
      try {
        setLoading(true);
        const timelineEvents = await fetchTimelineEvents(client, escrowId);
        setEvents(timelineEvents);
      } catch (error) {
        console.error('Failed to fetch timeline:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, [client, escrowId]);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Escrow Timeline</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="space-y-4">
          {events.length === 0 && <p>No events found.</p>}
          {events.map((event) => (
            <div key={event.id} className="flex items-start">
              <div className="timeline-dot"></div>
              <div className="ml-4">
                <p className="font-semibold">{event.type}</p>
                <p className="text-sm text-gray-600">{new Date(event.timestamp * 1000).toLocaleString()}</p>
                <p>{event.details}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Timeline;