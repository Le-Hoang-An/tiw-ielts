// src/components/Timetable.jsx
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import viLocale from '@fullcalendar/core/locales/vi';


export default function Timetable() {
  // Sinh các ngày Thứ 2, 4, 6 từ 08/07/2025 đến 31/08/2025
  function generateEvents() {
    const startDate = new Date('2025-07-08');
    const endDate = new Date('2025-08-31');
    const daysOfWeek = [1, 3, 5]; // Thứ 2, 4, 6 (0=CN, 1=T2,...)
    const events = [];
    let current = new Date(startDate);
    while (current <= endDate) {
      if (daysOfWeek.includes(current.getDay())) {
        const dateStr = current.toISOString().slice(0, 10);
        events.push({
          title: 'Lớp: ABC123\nGV: Trần Văn B\nPhòng: 202',
          start: `${dateStr}T20:15:00`,
          end: `${dateStr}T22:15:00`,
          className: 'event-orange', // chưa học
          learned: false,
        });
      }
      current.setDate(current.getDate() + 1);
    }
    return events;
  }
  const events = generateEvents();

  // Custom event content
  function renderEventContent(eventInfo) {
    const start = eventInfo.event.start;
    const end = eventInfo.event.end;
    const learned = eventInfo.event.extendedProps.learned;
    const colorClass = learned ? 'event-green' : 'event-orange';
    return (
      <div className={`custom-event ${colorClass}`}>
        <div className="event-times">
          <span className="event-time-btn">{start && start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          <span className="event-time-btn">{end && end.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white shadow rounded-lg p-4 max-w-7xl mx-auto">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          start: 'prev,today,next',
          center: 'title',
          end: 'dayGridMonth,timeGridWeek',
        }}
        events={events}
        eventContent={renderEventContent}
        eventDisplay="block"
        height="auto"
        locale={viLocale}
      />
    </div>
  );
}
